const state = {
    data : "Code Night v4.0",
    Teams : [ "Sample Data I" , " Sample data II " ]
  };

  const getters = {
    data:(state) => { return state.data },
    Teams:(state) => { return state.Teams },
  };
  
  const actions = {
    submitTeam:(contex , fmDt) =>{
        contex.commit('setTeam' , fmDt )
    }
  };
  
  const mutations = { 

    setTeam: (state, fmDt )=>{
        state.Teams.push(fmDt)
      },

  };

  export default{
    state,
    getters,
    actions,
    mutations
}