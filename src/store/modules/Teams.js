const state = {
    data : "Code Night v4.0",
    Teams : [  ],
    AdminLogin : false,
    AdminCredentiols : {
      password : "codenight@123",
      userName : "CIS_Admin"
    },
    dialog: false
  };

  const getters = {
    data:(state) => { return state.data },
    Teams:(state) => { return state.Teams },
    AdminLogin:(state) => { return state.AdminLogin },
    AdminCredentiols:(state) => { return state.AdminCredentiols },
    dialog:(state) => { return state.dialog },
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
    Login:(contex)=>{
      contex.commit('SetLogin')
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
      SetLogin: (state)=>{
        state.AdminLogin = !false
      },

  };

  export default{
    state,
    getters,
    actions,
    mutations
}