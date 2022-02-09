import { contextBridge, ipcRenderer } from 'electron'
import loader from './loader'


contextBridge.exposeInMainWorld('tester', loader(['fn1', 'fn2']));
contextBridge.exposeInMainWorld('portManager', {
    'on': (name, handler) => {
        console.log('request connect port:', name);

        ipcRenderer.on(`connect.port[${name}].success`, async (event) => {
            console.log(`request connect port[${name}] success`, event);
            const [ port ] = event.ports;
            port.onmessage = (event) => {
                handler({
                    type: event.type,
                    data: event.data,
                });
            };
        });

        ipcRenderer.send('connect.port', name);
    },
});


console.info('preload success!');
