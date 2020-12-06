import { fb } from '../../firebaseConfig' 

const state = {
    data : "Code Night v4.0",

    teamsArray : [],
    AdminCredentiols : {
      password : "codenight@123",
      userName : "CIS_Admin"
    },
    dialog: false,
    login : false
  };

  const getters = {
    data:(state) => { return state.data },
    AdminCredentiols:(state) => { return state.AdminCredentiols },
    dialog:(state) => { return state.dialog },
    login:(state) => { return state.login },
    teamsArray:(state) => { return state.teamsArray },
  };
  
  const actions = {

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
    userLogout:()=>{
      localStorage.removeItem("codeNigntLogin")
        
    },

    fetchTeamsFB:(contex )=>{
      state.teamsArray = []
      
      for (let index = 1; index <= 3; index++) {
        fb.firestore().collection('Teams').doc(index.toString()).collection('info').onSnapshot( async(snapshot) =>
          {
            await contex.commit('SetFetchedTeams' , snapshot )
          });
      }
      
    }
    
    
  };
  
  const mutations = { 

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
      SetFetchedTeams: (state ,  snapshot )=>{
        snapshot.docChanges().forEach(function(change){
          if(change.type ==="added"){
            state.teamsArray.push({
              id : change.doc.id,
              data : change.doc.data()
            });
          }if(change.type ==="modified"){
  
            state.teamsArray.forEach(element => {
              if(element.id == change.doc.id){
                element.data = change.doc.data()
              }
            });

          }if(change.type ==="removed"){
            // state.teamsArray.push({
            //   id : change.doc.id,
            //   data : change.doc.data()
            // });

            state.teamsArray.forEach((element , index ) => {
              if(element.id == change.doc.id){ 
                 state.teamsArray.splice(index, 1);
              }
            });

          }}); 
      },
      

  };

  export default{
    state,
    getters,
    actions,
    mutations
}