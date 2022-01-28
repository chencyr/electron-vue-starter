import { ipcMain, MessageChannelMain } from "electron";

const ChannelManager = {
    channels: {},
    register: (renderer) => {
        ipcMain.on('register.channel', (event, name) => {
            console.log(`register.channel[${name}]`);

            const { port1, port2 } = new MessageChannelMain();
            const { rendererPort, mainPort } = { rendererPort: port1, mainPort: port2};
            mainPort.start();
            ChannelManager.channels[name] = mainPort;
            renderer.webContents.postMessage(`register.channel[${name}].success`, null, [rendererPort]);
        });
    },
    channel: (name) => ChannelManager.channels[name],
};

export default ChannelManager;