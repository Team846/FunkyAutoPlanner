const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, file, data) => {
            // whitelist channels
            let validChannels = ["writeToFile", "readFromFile", "allFilesInDir2", "allFilesInDir", "scpFile"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, file, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = ["fileData", "allFilesInDirData", "allFilesInDirData2"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.once(channel, (event, ...args) => func(...args));
            }
        }
    }
);