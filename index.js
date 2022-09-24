import common from './lib'

let install = (app, option) => {
    const version = Number((app.version || '0').split('.')[0])
    if (version >= 3) {
        app.config.globalProperties.$gyCom = common;
    } else {
        app.prototype.$gyCom = common;
    }
}
export { install };
export { common }
export default {
    install,
    common,
}; 