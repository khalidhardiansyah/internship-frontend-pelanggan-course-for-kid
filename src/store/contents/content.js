import axios from "../../api/axios"

export default {
    state:{
        contents:null,
        content:[],
    },
    getters:{
        getContents:(state)=>state.contents,
        getContent:(state)=>state.content
    },
    mutations:{
        setContents(state, contents){
            state.contents = contents
        },
        setContent(state, content){
            state.content = content
        }
    },
    actions:{
        async GET_CONTENTS({commit}, payload){
            await axios.get(`/materi/${payload}`)
                .then(res=>{
                    commit("setContents", res.data)
                })
                .catch(err=>{
                    console.log(err.response.data);
                })
        },

        async GET_CONTENTS_BYID({commit}, payload){
            await axios.get(`/contentid/${payload}`)
                .then(res=>{
                    commit("setContent", res.data)
                })
                .catch(err=>{
                    console.log(err.response.data);
                })
        },


    },

}