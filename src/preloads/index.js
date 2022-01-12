import { contextBridge } from 'electron'
import loader from './loader'


contextBridge.exposeInMainWorld('tester', loader(['fn1', 'fn2']));
console.info('preload success!');