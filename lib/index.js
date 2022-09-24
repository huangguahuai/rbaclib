const rbac = requrie('./rbac.node')

module.exports = class RBACLIB {
    /**
     * 初始化  将当前的权限数据存储到内存
     * @param {String} permissions  JSON字符串 Array
     * @returns 
     */
    static init(permissions) {
        return rbac.init(permissions)
    }

    /**
     * 导出当前内存中的所有数据
     * @param {*} instance rbac 初始化对象
     * @returns 
     */
    static export(instance) {
        return rbac.export(instance)
    }

    /**
     * 添加权限
     * @param {*} instance  rbac 初始化对象 
     * @param {Object} permission  权限对象
     * @returns 
     */
    static add(instance, permission) {
        return rbac.add(instance, permission)
    }

    /**
     * 删除权限
     * @param {*} instance rbac 初始化对象 
     * @param {Object} permission 权限对象
     * @returns 
     */
    static remove(instance, permission) {
        return rbac.del(instance, permission)
    }

    /**
     * 验证角色的权限是否正确
     * @param {*} instance 
     * @param {Object} permission 
     * @returns Boolean
     */
    static isMatch(instance, permission) {
        return rbac.is_match(instance, permission)
    }
}