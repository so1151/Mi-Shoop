/**
 * 商城Vuex-mutations
 */
export default{
    //保存用户名的mutation
    saveUsername(state,username) {
        state.username = username;
    },
    //保存购物车数量的mutation
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}