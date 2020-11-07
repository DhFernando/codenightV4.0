const state = {
    user : {
      userName : "codenight4",
      password : "CIScodenight4"
    },
    login : false
  };

  const getters = {
    user:(state) => { return state.user }, 
    login:(state) => { return state.login }, 
  };
  
  const actions = {
    // submitData:(contex , fmDt) =>{
    //     contex.commit('submitData' , fmDt )
    // }
  };
  
  const mutations = { 

    // submitData: (state, retrevedData )=>{
    //     state.data = retrevedData
    //   },
  };

  export default{
    state,
    getters,
    actions,
    mutations
}