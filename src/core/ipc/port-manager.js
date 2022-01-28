import { ipcMain, MessageChannelMain } from "electron";

const PortManager = {
    ports: {},
    connect: (renderer) => {
        ipcMain.on('connect.port', (event, name) => {
            console.info(`main connecting port[${name}] ...`);

            const { port1, port2 } = new MessageChannelMain();
            const { rendererPort, mainPort } = { rendererPort: port1, mainPort: port2};
            mainPort.start();
            PortManager.ports[name] = mainPort;
            renderer.webContents.postMessage(`connect.port[${name}].success`, null, [rendererPort]);
        });
    },
    port: (name) => PortManager.ports[name],
};

export default PortManager;