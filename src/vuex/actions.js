
const COMMIT_DATE = 'COMMIT_DATE';
const COMMIT_RESET = 'COMMIT_RESET';



const actions = {
commitDate ({ commit }) {
    commit(COMMIT_DATE)
},

commitReset ({ commit }) {
    commit(COMMIT_RESET)
},
  
}

export default actions