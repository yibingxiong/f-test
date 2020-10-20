const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron');
const Ftp = require('ftp');
const debug = /--debug/.test(process.argv[2]);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let ftpClient;
/**
 * 跳转页面
 * @param {String} path 模板路径
 */
function jump(path) {
    console.log(path)
    mainWindow.loadFile(path)
}
let taskList = new Map();   // 等待执行的任务

function createMenu() {
    const template = [
        {
            label: '编辑',
            role: 'editMenu',
            submenu: [
                {
                    role: 'cut',
                    label: '剪切'
                },
                {
                    role: 'copy',
                    label: '复制',

                },
                {
                    role: 'paste',
                    label: '粘贴'
                }
            ]
        },
        {
            label: '管理',
            submenu: [
                {
                  label: '项目管理',
                  click: () => {
                      console.log('项目设置')
                      jump(`${__dirname}/admin/project.html`)
                  }
                },
                {
                    label: 'ftp管理',
                    click: () => {
                        console.log('ftp管理')
                        jump(`${__dirname}/admin/ftp.html`)

                    }
                }
              ]
        },
        {
          role: 'help',
          label: '帮助',
          submenu: [
            {
              label: '帮助文档',
              click: () => {
                  jump(`${__dirname}/index/help.html`);
              }
            }
          ]
        }
      ]
      
      if (process.platform === 'darwin') {
        template.unshift({
          label: app.getName(),
          submenu: [
            {role: 'about', label:'关于'},
            {
                label: '工作台',
                click: () => {
                    jump(`${__dirname}/index/index.html`);
                }
            },
            {role: 'quit', label: '退出'}
          ]
        })
      }
      
      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)
}

// 创建主window
function createWindow() {
    // 创建浏览器窗口.
    mainWindow = new BrowserWindow({ width: 800, height: 600 })
    if (debug) {
        mainWindow.webContents.openDevTools()   // 开启调试模式
        mainWindow.maximize()
    }
    // 加载index.html
    mainWindow.loadFile(`${__dirname}/index/index.html`)

    // mainWindow.setProgressBar(0.5)

    // 当 window 被关闭，这个事件会被触发。
    mainWindow.on('closed', function () {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null
    })
}

function uploadAll(srcs, dests) {
      for(let i = 0, l = srcs.length; i < l; i++) {
        let src = srcs[i];
        let dest = dests[i];
        ftpClient.put(src, dest, function(err) {
          if (err) {
            console.log(err);
            showInfoDialog('操作失败', `${src}->${dest}这个错了`);
            // mainWindow.webContents.send('uploadError', `${src}->${dest}`, err); 
         }
         taskList.delete(src);
         if(taskList.size === 0) {
            mainWindow.webContents.send('uploadSuccess');
            // showInfoDialog('操作完成', '您要传的文件都妥妥的传上去了');
         }
        });
      }
}

// 提示信息
function showInfoDialog(title, message) {
    dialog.showMessageBox({
        type: 'info',
        title,
        message
      })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用
app.on('ready', () => {
    createWindow();
    createMenu();
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (mainWindow === null) {
        createWindow()
    }
})

// 要退出应用了,断开ftp连接
app.on('will-quit', function() {
    if(ftpClient) {
        ftpClient.end();
    }
})
// 监听渲染进程发来的跳转请求
ipcMain.on('jump', function (event, path) {
    jump(path);
})


// 连接ftp
ipcMain.on('connectFtp', function (event, conf) {
    if(ftpClient) {
        ftpClient.end();
    }
    ftpClient = new Ftp();
    ftpClient.on('ready', () => {
        console.log('ready');
        mainWindow.webContents.send('connectReady');
    })
    ftpClient.connect(conf);
    ftpClient.on('error', (e) => {
        console.log(e);
        mainWindow.webContents.send('ftpError', e);
    })
})


// 传多个文件
ipcMain.on('upladAll', function(event, srcs, dests) {
    for(let i = 0; i < srcs.length; i++) {
        taskList.set(srcs[i], 1);
    }
    uploadAll(srcs, dests);
});

// 传单个文件
ipcMain.on('upload', function(event, src, dest) {
    taskList.set(src, 1);
    uploadAll([src], [dest]);
})
// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
