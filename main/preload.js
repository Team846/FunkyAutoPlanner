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
            let validChannels = ["writeToFile", "readFromFile", "allFilesInDir"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, file, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = ["fileData", "allFilesInDirData"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);