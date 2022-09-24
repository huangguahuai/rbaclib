import common from './lib'

const init = common.init
const exports = common.export
const add = common.add
const remove = common.remove
const isMatch = common.isMatch
export { init };
export { exports }
export { add }
export { remove }
export { isMatch }
export default {
    exports,
    init,
    add,
    remove,
    isMatch
}; 