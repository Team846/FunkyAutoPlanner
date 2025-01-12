const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const {Client} = require ('node-scp')

const fs = require('fs')
let win;

function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
    });
    win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: false, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            preload: path.join(app.getAppPath(), "preload.js") // use a preload script
        }
    });
    win.loadURL(startUrl);
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
    console.log("hi");
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});

ipcMain.on("writeToFile", (event, file, data) => {
    try {
    fs.writeFileSync(path.join(app.getAppPath(), file), data)
    } catch (err) {
    console.error('Error writing to file:', err);
    }
  });

ipcMain.on("readFromFile", (event, file, data) => {
    try {
        const data = fs.readFileSync(path.join(app.getAppPath(), file), 'utf8');
        win.webContents.send("fileData", data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
  });


ipcMain.on("allFilesInDir", (event, folder, data) => {
    try {
        const files=[]
        fs.readdirSync(path.join(app.getAppPath(), folder)).forEach(file => {
            files.push(file)
        });
        win.webContents.send("allFilesInDirData", files);
    } catch (err) {
        console.error('Error getting files:', err);
    }
})


ipcMain.on("allFilesInDir2", (event, folder, data) => {
    try {
        const files=[]
        fs.readdirSync(path.join(app.getAppPath(), folder)).forEach(file => {
            files.push(file)
        });
        win.webContents.send("allFilesInDirData2", files);
    } catch (err) {
        console.error('Error getting files:', err);
    }
})

ipcMain.on("scpFile", (event, file1, file2Loc) => {
    console.log('Attempting to access:', file2Loc);

    const targetPath = file2Loc.replace(/^\/+/, '');
    
    Client({
      host: '10.8.46.2',
      port: 22,
      username: 'admin',
      password: '', 
    }).then(client => {
      client.uploadFile(
        path.join(app.getAppPath(), file1),
        '/home/lvuser/' + targetPath
      )
      .then(response => {
        client.close() // Close connection after transfer
        console.log('File transferred successfully');
      })
      .catch(error => {
        console.error('Upload error:', error);
        client.close();
      })
    }).catch(error => {
      console.error('Connection error:', error);
    });
  });
