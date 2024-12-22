var http = require('http');
var url = require('url');
var socket = require('socket.io');
var filepath = __dirname+"/1.xls";
var fs = require('fs');
var xlsx = require('node-xlsx');

var app = http.createServer(function(req,res){
	var pathname = decodeURIComponent(url.parse(req.url).pathname);
	if(pathname == '/favicon.ico'){
		return ;
	}
	switch(pathname){
		case '/':
			index(res);
			break;
		case '/index':
			index(res);
			break;
		default:
			return;
			break;
	}

}).listen(1234,'127.0.0.1');

var isOptRows = [];		//存储有哪些行正在被编辑
var io = socket(app);	//创建一个socket
io.on('connection',function(socket){	//监听connection事件这个事件会在客户端建立链接时被发送到服务器
	var colNum = 0;				//存储数据列数
	var bb = xlsx.parse(fs.readFileSync(filepath)); //用node-xlsx解析读到的excel文件
	colNum = bb[0].data[1].length;
	var workSheetsFromBuffer = changeStatus(bb,isOptRows,colNum);
	socket.emit('serverChange',{data:workSheetsFromBuffer}); //发送一个事件到客户端，带上表格数据
	
	socket.on('datachange',function(res){	//客户端点击完成会出发这个事件
		var buf = xlsx.parse(fs.readFileSync(filepath));		
		var id = res['id'];					//拿到客户端是修改的哪一行
		isOptRows = deleteOne(isOptRows,id);//一个修改完成，可以再次修改
		socket.broadcast.emit('broadcast',{'data':res.id}); //广播一个事件，告诉客户端这一行现在没人编辑，可以编辑了
		buf[0].data[id] = res.data;   //更新表里边的数据
		var buffer = xlsx.build(buf); 
		writeFile(buffer,function(){	//将更新后的数据写会到文件
			socket.broadcast.emit('serverChange',{data:changeStatus(buf,isOptRows,colNum)});
		})
	});

	socket.on('enter',function(res){	//当有用户点编辑某行时触发这个事件
		isOptRows.push(res.dataRows);	
		socket.broadcast.emit('broadcast',{'data':res.dataRows}); //广播一个事件，告诉客户端某行正在被编辑，你们都不要编辑了
	});
});

function index(res){
	var page = fs.readFileSync(__dirname+'/'+url.parse('index.html').pathname,'utf8');
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(page);

}

function writeFile(data,callback){
	fs.writeFile(filepath, data, 'utf8', callback);
}

//为每一行增加一个数据，标识他是否正在被编辑
function changeStatus(buf,isOptRows,colNum){
	for(var i = 0;i<buf[0].data.length;i++){
		buf[0].data[i][colNum] = 0;
	}
	for(var i = 0;i<isOptRows.length;i++){
		buf[0].data[isOptRows[i]][colNum] = 1;
	}
	return buf;
}

//某行编辑完成
function deleteOne(isOptRows,id){
	var res = [];
	for(var i =0;i<isOptRows.length;i++){
		if(isOptRows[i]!=id){
			res.push(isOptRows[i]);
		}
	}
	return res;
}