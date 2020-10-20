const fs = require('fs');
const { ipcRenderer } = require('electron');

let curProject = getCurWork();

function getEle(id) {
    return document.getElementById(id);
}

// 渲染项目选择选项
function renderWrokspace() {
    let projectsStr = localStorage.getItem('projects') || '{}';
    let projects = JSON.parse(projectsStr);
    let curProjectStr = localStorage.getItem('curProject') || '{}';
    let curProject = JSON.parse(curProjectStr);

    let str = '';

    for (let proName in projects) {
        let p = projects[proName];

        if (p.name === curProject.name) {
            str +=
                `
                 <option selected value="${p.name}">${p.name}</option>
            `
        } else {
            str +=
                `
                 <option value="${p.name}">${p.name}</option>
            `
        }
    }
    getEle('cur-project').innerHTML = str;

}

// 渲染ftp选择器
function renderFtpList() {
    let projectsStr = localStorage.getItem('ftps') || '{}';
    let projects = JSON.parse(projectsStr);
    let curProjectStr = localStorage.getItem('curFtp') || '{}';
    let curProject = JSON.parse(curProjectStr);

    let str = '';

    for (let proName in projects) {
        let p = projects[proName];

        if (p.ip === curProject.ip) {
            str +=
                `
                 <option selected value="${p.ip}:${p.port}">${p.ip}</option>
            `
        } else {
            str +=
                `
                 <option value="${p.ip}:${p.port}">${p.ip}</option>
            `
        }
    }
    getEle('cur-ftp').innerHTML = str;
}

// 切换工作目录
function changeWorkspace() {
    getEle('cur-project').onchange = function (e) {
        let projectsStr = localStorage.getItem('projects') || '';
        let projects = JSON.parse(projectsStr);
        localStorage.setItem('curProject', JSON.stringify(projects[e.target.value]));
        getCurWork();
        renderFileList();
    }
}

// 切换ftp
function changeFtp() {
    getEle('cur-ftp').onchange = function (e) {
        changeFtpStatus('正在连接');
        let ftplistStr = localStorage.getItem('ftps') || '';
        let ftplist = JSON.parse(ftplistStr);
        localStorage.setItem('curFtp', JSON.stringify(ftplist[e.target.value]));
        connectFtp();
    }
}

// 渲染文件列表
function renderFileList() {
    let curOptType = localStorage.getItem('curOptType') || 'all';
    let curProjectStr = localStorage.getItem('curProject') || '{}';
    let curProject = JSON.parse(curProjectStr);
    if (!curProject.name) {
        alert('请先选择工作目录');
        return;
    }
    let fileStrList = [];
    try {
        switch (curOptType) {
            case 'all':
                let jsList = fs.readdirSync(curProject.localJsPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localJsPath}/${v}`
                        }
                    });
                let cssList = fs.readdirSync(curProject.localCssPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localCssPath}/${v}`
                        }
                    });
                let imgList = fs.readdirSync(curProject.localImgPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localImgPath}/${v}`
                        }
                    });
                fileStrList = jsList.concat(cssList, imgList);
                break;
            case 'js':
                fileStrList = fs.readdirSync(curProject.localJsPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localJsPath}/${v}`
                        }
                    });
                break;
            case 'css':
                fileStrList = fs.readdirSync(curProject.localCssPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localCssPath}/${v}`
                        }
                    });
                break;
            case 'img':
                fileStrList = fs.readdirSync(curProject.localImgPath)
                    .map((v) => {
                        return {
                            name: v,
                            path: `${curProject.localImgPath}/${v}`
                        }
                    });
                break;
            default:
                alert('出错了');
        }
    } catch (e) {
        console.log(e);
        alert('你的路径写的不对吧');
    }
    let renderStr = `
     <tr>
        <th width="60">全选</th>
        <th>文件名字</th>
        <th>操作</th>
    </tr>
   `

    for (let i = 0; i < fileStrList.length; i++) {
        let f = fileStrList[i];
        renderStr +=
            `
       <tr>
            <td width="60">
                <input class="selected-items" type="checkbox" name="selected-items" value="${f.path}">
            </td>
            <td>${f.name}</td>
            <td>
                <button path="${f.path}" class="upload-item-btn btn btn-primary">
                    上传
                </button>
                
                <button path="${f.path}" class="up-prod-item-btn btn btn-primary">
                    上线
                </button>
            </td>
        </tr>
       `
    }

    getEle('list').innerHTML = renderStr;
    uploadItem();
    upProdItem();
    // syncItem();
}

// 切换操作类型
function changeOptType() {
    getEle('opt-type').onchange = function (e) {
        localStorage.setItem('curOptType', e.target.value);
        renderFileList();

    }
}

function getSelectedList() {
    let checklist = document.querySelectorAll('.selected-items');
    let checkedArr = [];
    if (checklist) {
        for (let i = 0; i < checklist.length; i++) {
            let item = checklist[i];
            if (item.checked) {
                checkedArr.push(item.value);
            }
        }
    }
    console.log('选中的文件', checkedArr);
    return checkedArr;
}
// 上传选中的文件
function uploadSelected() {
    getEle('upload-selected').onclick = (e) => {
        e.preventDefault();
        if (!curProject) {
            alert('你还没有配置项目,或者没选择');
            return;
        }
        let list = getSelectedList();
        console.log('想上传的是:', list);
        let reg = /.+\/(.+).(js|css|gif|jpeg|png|jpg)$/i;
        let srcs = [];
        let dests = [];
        for (let i = 0; i < list.length; i++) {
            let path = list[i];
            let matches = path.match(reg);
            if (!matches || matches.length < 3) {
                alert('文件格式貌似不对');
                return;
            }
            let ext = matches[2];
            let fName = matches[1];

            let dest = '';
            let src = path;
            switch (ext) {
                case 'js':
                    dest = `${curProject.remoteJsPath}/${fName}.${ext}`;
                    break;
                case 'css':
                    dest = `${curProject.remoteCssPath}/${fName}.${ext}`;
                    break;
                default:
                    dest = `${curProject.remoteImgPath}/${fName}.${ext}`;
            }
            srcs.push(src);
            dests.push(dest);
        }

        ipcRenderer.send('upladAll', srcs, dests);
    }
}
// 上线选中的文件(cp->本地svn目录)
function upProdSelected() {
    getEle('up-prod-selected').onclick = (e) => {
        e.preventDefault();
        if (!curProject) {
            alert('你还没有配置项目,或者没选择');
            return;
        }
        let list = getSelectedList();
        console.log('想上传的是:', list);
        let reg = /.+\/(.+).(js|css|gif|jpeg|png|jpg)$/i;

        for (let i = 0; i < list.length; i++) {
            let path = list[i];
            let matches = path.match(reg);
            if (!matches || matches.length < 3) {
                alert('文件格式貌似不对');
                return;
            }
            let ext = matches[2];
            let fName = matches[1];

            let dest = '';
            let src = path;
            switch (ext) {
                case 'js':
                    dest = `${curProject.onlineJsPath}/${fName}.${ext}`;
                    break;
                case 'css':
                    dest = `${curProject.onlineCssPath}/${fName}.${ext}`;
                    break;
                default:
                    dest = `${curProject.onlineImgPath}/${fName}.${ext}`;
            }
            // 哈哈就是copy一份
            try {
                fs.copyFileSync(src, dest);
            } catch(e) {
                alert('出错了, 估计你没配那个线上路径');
            }
        }
    }
}
// 同步选中的文件
// function syncSelected() {
//     getEle('sync-selected').onclick = (e) => {
//         e.preventDefault();
//     }
// }
// 上传一项, 我没写事件代理
function uploadItem() {
    let uploadItemBtns = document.querySelectorAll('.upload-item-btn');
    if (uploadItemBtns) {
        for (let i = 0; i < uploadItemBtns.length; i++) {
            let t = uploadItemBtns[i];
            t.onclick = function (e) {
                e.preventDefault();
                let path = e.target.getAttribute('path');
                console.log('想上传的是:', path);

                let reg = /.+\/(.+).(js|css|gif|jpeg|png|jpg)$/i
                let matches = path.match(reg);
                if (!matches || matches.length < 3) {
                    alert('文件格式貌似不对');
                    return;
                }
                let ext = matches[2];
                let fName = matches[1];
                if (!curProject) {
                    alert('你还没有配置项目,或者没选择');
                    return;
                }
                let src = path;
                let dest = '';
                switch (ext) {
                    case 'js':
                        dest = `${curProject.remoteJsPath}/${fName}.${ext}`;
                        break;
                    case 'css':
                        dest = `${curProject.remoteCssPath}/${fName}.${ext}`;
                        break;
                    default:
                        dest = `${curProject.remoteImgPath}/${fName}.${ext}`;
                }
                ipcRenderer.send('upload', src, dest);
            }
        }
    }
}


// 上传一项, 我没写事件代理
function upProdItem() {
    let uploadItemBtns = document.querySelectorAll('.up-prod-item-btn');
    if (uploadItemBtns) {
        for (let i = 0; i < uploadItemBtns.length; i++) {
            let t = uploadItemBtns[i];
            t.onclick = function (e) {
                e.preventDefault();
                let path = e.target.getAttribute('path');
                console.log('想上传的是:', path);

                let reg = /.+\/(.+).(js|css|gif|jpeg|png|jpg)$/i
                let matches = path.match(reg);
                if (!matches || matches.length < 3) {
                    alert('文件格式貌似不对');
                    return;
                }
                let ext = matches[2];
                let fName = matches[1];
                if (!curProject) {
                    alert('你还没有配置项目,或者没选择');
                    return;
                }
                let src = path;
                let dest = '';
                switch (ext) {
                    case 'js':
                        dest = `${curProject.onlineJsPath}/${fName}.${ext}`;
                        break;
                    case 'css':
                        dest = `${curProject.onlineCssPath}/${fName}.${ext}`;
                        break;
                    default:
                        dest = `${curProject.onlineImgPath}/${fName}.${ext}`;
                }
                // 哈哈就是copy一份
                try {
                    fs.copyFileSync(src, dest);
                } catch(e) {
                    alert('出错了, 估计你没配那个线上路径');
                }
            }
        }
    }
}
// 获取当前项目的配置
function getCurWork() {
    let curProjectStr = localStorage.getItem('curProject') || '{}';
    let curProject = JSON.parse(curProjectStr);
    if (!curProject.name) {
        return null;
    }
    return curProject;
}
// 同步一项, 我没写事件代理
// function syncItem() {
//     let syncItemBtns = document.querySelectorAll('.sync-item-btn');
//     if (syncItemBtns) {
//         for (let i = 0; i < syncItemBtns.length; i++) {
//             let t = syncItemBtns[i];
//             t.onclick = function (e) {
//                 let path = e.target.getAttribute('path');
//                 console.log(path);
//             }
//         }
//     }
// }

// 连接ftp服务
function connectFtp() {
    let curFtpStr = localStorage.getItem('curFtp') || '{}';
    let curFtp = JSON.parse(curFtpStr);
    console.log(curFtp);
    if (!curFtp.ip) {
        alert('您还没有配置ftp,请配置一个吧, 也可能没选择');
        return;
    }
    let ftpconf = {
        host: curFtp.ip,
        port: curFtp.port,
        user: curFtp.username,
        password: curFtp.password
    }
    ipcRenderer.send('connectFtp', ftpconf);
    ipcRenderer.on('connectReady', () => {
        changeFtpStatus('已经连接');
    })
}

// 改变ftp连接状态
function changeFtpStatus(status) {
    getEle('ftp-status').innerHTML = status;
}
window.onload = function () {
    renderWrokspace();
    renderFtpList();
    changeWorkspace();
    changeFtp();
    renderFileList();
    changeOptType();
    uploadSelected();
    upProdSelected();
    uploadItem();
    upProdItem();
    // syncItem();
    // syncSelected();
    connectFtp();
    ipcRenderer.on('uploadSuccess', () => {
        new window.Notification('操作成功', { body:'你的文件已经妥妥上传' });
    })
    ipcRenderer.on('uploadError', (event, res) => {
        alert('这个失败了' + res);
    })
    ipcRenderer.on('ftpError', (event, res) => {
        alert('ftp连接出错了');
        console.log(res);
        changeFtpStatus('连接失败了');
    })
}