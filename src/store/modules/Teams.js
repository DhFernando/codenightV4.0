const state = {
    data : "Code Night v4.0",
    Teams : [ "Sample Data I" , " Sample data II " ]
  };

  const getters = {
    data:(state) => { return state.data },
    Teams:(state) => { return state.Teams },
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