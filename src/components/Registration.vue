<template>
  <v-container>
     <v-row>
       <v-col cols="12">
         <h2><i>R</i>egistration</h2>
     
       </v-col>
     </v-row>
     <v-row>
       <v-col cols="12">
         <v-tabs>
            <v-tab @click="formData.year = 1">First Year [ 1st Year ]</v-tab>
            <v-tab @click="formData.year = 2">Second Year [ 2nd Year ]</v-tab>
            <v-tab @click="formData.year = 3">Third Year [ 3rd Year ]</v-tab>
          </v-tabs>
       </v-col>
     </v-row>
     <v-row>
       <v-col cols="6" class="px-9" >
          <v-form ref="form" lazy-validation >  
            <v-text-field v-model="formData.TeamName" :counter="10"  label="TeamName" required ></v-text-field>

            <v-text-field v-model="formData.LeaderEmail"  label="Leader's E-mail" required ></v-text-field>   

            <v-text-field v-model="formData.LeaderName"  label="Leader's Name" required ></v-text-field> 

            <v-row>
              <v-col cols="6">
                <v-text-field v-model="formData.member1"  label="Member 1" required ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.member2"  label="Member 2" required ></v-text-field>
              </v-col> 
            </v-row> 
            <v-row> 
              <v-col cols="6">
                <v-text-field v-model="formData.member3"  label="Member 3" required ></v-text-field> 
              </v-col>
              <v-col cols="6"> 
                <v-text-field v-model="formData.member4"  label="Member 4" required ></v-text-field>
              </v-col>
            </v-row> 

            <v-checkbox  label="Do you agree with rulz and onditions ?" required ></v-checkbox>

            <v-btn  color="success" class="mr-4" dark  @click="register"   >
              Register Now
            </v-btn>
          </v-form>
       </v-col>
       <v-col class="pa-9" cols="6">
          <v-row>
            <v-col cols="12">
               Preview 
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" >
              <h2 v-if="formData.TeamName !=null && formData.TeamName.length != 0 "
               
              >
              {{ formData.TeamName }}</h2>
              <h2 v-else class="grey--text lighten-2"> <i>Team Name</i> </h2>

            </v-col>
            <v-col cols="4">
             <h3 v-if="formData.year == 1">1 st Yaer</h3>
             <h3 v-if="formData.year == 2">2 nd Yaer</h3>
             <h3 v-if="formData.year == 3">3 rd Yaer</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="px-9">
              <v-row > <v-col cols="12" class="white--text grey darken-3"> <b>Leader informations</b> </v-col> </v-row>
              <v-row>
                <v-col cols="6">
                  E-Mail : {{ formData.LeaderName }} 
                </v-col>

                <v-col cols="6"> 
                  Name : {{ formData.LeaderEmail }}
                </v-col>
              </v-row>
              
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="px-9">
              <v-row> <v-col cols="12"  class="white--text grey darken-3" > <b>Members</b> </v-col> </v-row>
              <v-row>
                <v-col cols="6"> {{ formData.member1 }} </v-col>
                <v-col cols="6"> {{ formData.member2 }} </v-col>
                <v-col cols="6"> {{ formData.member3 }} </v-col>
                <v-col cols="6"> {{ formData.member4 }} </v-col>
              </v-row>
            </v-col>
          </v-row>
       </v-col>
     </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
      formData:{
        year : 1,
        TeamName : null,
        LeaderEmail:null,
        LeaderName:null,
        member1:null,
        member2:null,
        member3:null,
        member4:null,
        
      }
    }),
    methods : {
      register : function() {
        alert("Registration Completed .... !! Happy Coding")
        console.log(this.formData)
        this.$store.dispatch("submitTeam" , this.formData)
      }
    },

    computed :{
     
    }
  }
</script>
