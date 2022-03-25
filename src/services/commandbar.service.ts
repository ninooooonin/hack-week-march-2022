// CommandBar
import { init } from 'commandbar';

const CB_ORG_ID = '91aaa579';
const CB_ORG_USER_ID = '34aa5745-51c7';

const CommandBarService = {
    init: () => {
        init(CB_ORG_ID);
    },
    boot: (meta: any = {}, options: any= {}) => {
        window.CommandBar.boot(CB_ORG_USER_ID, meta, options);
    },
    shutdown: () => {
        window.CommandBar.shutdown();
    },
    open: (value: any = '') => {
        window.CommandBar.open(value);
    },
    isOpen: () => {
        return window.CommandBar.isOpen();
    },
    execute: (params: any) => {
        window.CommandBar.execute(params);
    },

    // https://www.commandbar.com/sdk#addcontext
    addContext: (key: string, data: Array<any>, options: any = {}) => {
        window.CommandBar.addContext(key, data, options);
    },
    setContext: (options: any = {}) => {
        window.CommandBar.setContext(options);
    },
    removeContext: (key: string) => {
        window.CommandBar.removeContext(key);
    },
    shareContext: () => {
        return window.CommandBar.shareContext();
    },

    // https://www.commandbar.com/sdk#addcallback
    addCallback: (key: string, callback: Function) => {
        window.CommandBar.addCallback(key, (args: any, context: any) => callback(args, context));
    },
    removeCallback: (key: string) => {
        window.CommandBar.removeCallback(key);
    },
    shareCallbacks: () => {
        return window.CommandBar.shareCallbacks();
    },

    // https://www.commandbar.com/sdk#addcommand
    addCommand: (title: string, key: string, options: any = {}) => {
        window.CommandBar.addCommand({ 
            text: title, 
            name: key, 
            template: options 
        });
    },
    removeCommand: (key: string) => {
        window.CommandBar.removeCommand(key);
    },

    // Router: https://www.commandbar.com/sdk#addrouter
    addRouter: (router: any) => {
        window.CommandBar.addRouter(router);
    },
    addEventHandler: (callback: Function) => {
        window.CommandBar.addEventHandler((name: string, data: any) => callback(name, data));
    },


    // https://www.commandbar.com/sdk#settheme
    setTheme: (params: any) => {
        window.CommandBar.setTheme(params);
    },

    // https://www.commandbar.com/sdk#setcustomcomponent
    setCustomComponent: (key: any, component: any) => {
        window.CommandBar.setCustomComponent(key, component);
    }
}

export default CommandBarService;