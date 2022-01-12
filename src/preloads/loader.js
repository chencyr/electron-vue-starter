import { ipcRenderer } from 'electron'

/**
 * Auto load api by api-map object
 * @param apiMap {Object}
 * @return {*}
 * @constructor
 */
export default function loader(apiMap) {
    return apiMap.reduce((apis, api) => {

        let fn, invoker;
        if(typeof api === 'string') {
            fn = api;
            invoker = api;
        }
        else {
            fn = api.fn;
            invoker = api.invoker;
        }

        apis[fn] = (args) => ipcRenderer.invoke(invoker, args);
        return apis;
    }, {});
}