const state = {
    data : "Code Night v4.0"
  };

  const getters = {
    data:(state) => { return state.data },
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