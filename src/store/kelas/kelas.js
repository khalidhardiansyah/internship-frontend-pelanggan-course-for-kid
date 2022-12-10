import axios from "../../api/axios"
export default {
  state: {
    kelas: [],
    // errMsg: null,
  },
  getters: {
    // getErrMesg: (state) => state.errMsg,
    getKelas:(state)=>state.kelas
  },
  mutations: {
    // setErrMsg(state, errMsg) {
    //   state.errMsg = errMsg;
    // },
    setKelas(state, kelas){
        state.kelas = kelas
    }
  },
  actions: {
    async GET_KELAS({commit}) {
        try {
           await axios.get('/kelas')
           .then(res=>{
            commit("setKelas", res.data)
           })
        } catch (error) {
          console.error(error);
        }
      },
      async GET_KELAS_BY_ID({commit}, payload) {
        try {
           await axios.get('/kelas/'+payload)
           .then(res=>{
            commit("setKelas", res.data)
           })
        } catch (error) {
          console.error(error);
        }
      }
  },
  
};
