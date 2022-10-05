import {createStore} from 'vuex';
import user from './user/user'
import ult from './ult/ult'

export default createStore({
    modules:{
        ult:ult,
        user: user,
    }
})