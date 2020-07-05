/**
 * 商城Vuex-actions
 */
export default{
    //保存用户名的action
    saveUsername({commit}, username) {
        commit('saveUsername', username);
    },
    //保存购物车数量
    saveCartCount({commit}, count) {
        commit('saveCartCount', count);
    }
}