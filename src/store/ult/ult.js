export default {
    state:{
        webtitle:"Bisa Coding",
        showmobilenav: false
    },
    mutations:{
        setToggleNav(state){
            state.showmobilenav = !state.showmobilenav
        }
    },
    actions:{
        toggleNav({commit, state}){
            commit('setToggleNav')
        }
    },
    getters:{
        getWebTitle: state=>state.webtitle,
        getShowMobileNav: state=>state.showmobilenav
    },

}