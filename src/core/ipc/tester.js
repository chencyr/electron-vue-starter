import { ipcMain } from 'electron'

ipcMain.handle('fn1', (event, args) => {
    console.log("fn1 called", args);
    return 'send from fn1';
});


ipcMain.handle('fn2', (event, args) => {
    console.log("fn2 called", args);
    return 'send from fn2';
});
