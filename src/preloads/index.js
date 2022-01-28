import { contextBridge, ipcRenderer } from 'electron'
import loader from './loader'


contextBridge.exposeInMainWorld('tester', loader(['fn1', 'fn2']));
contextBridge.exposeInMainWorld('ipc', {
    'renderer': () => ipcRenderer,
    'on': (name, handler) => {
        console.log('register channel:', name);

        ipcRenderer.on(`register.channel[${name}].success`, async (event) => {
            console.log(`create channel[${name}] success`, event);
            const [ port ] = event.ports;
            port.onmessage = (event) => {
                handler({
                    type: event.type,
                    data: event.data,
                });
            };
        });

        ipcRenderer.send('register.channel', name);
    },
});


console.info('preload success!');
