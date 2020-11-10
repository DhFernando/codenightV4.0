const state = {
    data : "Code Night v4.0",
    Teams : [  ], 
    AdminCredentiols : {
      password : "codenight@123",
      userName : "CIS_Admin"
    },
    dialog: false,
    login : false
  };

  const getters = {
    data:(state) => { return state.data },
    Teams:(state) => { return state.Teams },
    AdminCredentiols:(state) => { return state.AdminCredentiols },
    dialog:(state) => { return state.dialog },
    login:(state) => { return state.login },
  };
  
  const actions = {
    submitTeam:(contex , fmDt) =>{
        contex.commit('setTeam' , fmDt )
    },
    OpenDialog:(contex ) =>{
      contex.commit('SetOpenDialog'   )
    },
    closeDialog:(contex )=>{
      contex.commit('SetDialogClose' )
    },
    userLogin:(contex)=>{
      localStorage.setItem("codeNigntLogin", true)
      contex.commit('SetLoginTrue' )
    },
    userLogout:(contex)=>{
      localStorage.removeItem("codeNigntLogin")
      contex.commit('SetLoginFalse' )
    }
    
    
  };
  
  const mutations = { 

    setTeam: (state, fmDt )=>{
        state.Teams.push(fmDt)
      },
      SetOpenDialog: (state  )=>{
        state.dialog = true
      },
      SetDialogClose: (state  )=>{
        state.dialog = false
      },
      SetLoginTrue: (state  )=>{
        state.login = true
      },
      SetLoginFalse: (state  )=>{
        state.login = false
      },
      

  };

  export default{
    state,
    getters,
    actions,
    mutations
}