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
       <v-col cols="12" >
          <v-form ref="form" lazy-validation >  
            <v-text-field v-model="formData.TeamName" :counter="10"  label="TeamName" required ></v-text-field>

            <v-text-field v-model="formData.LeaderEmail"  label="Leader's E-mail" required ></v-text-field> 

            <v-checkbox  label="Do you agree with rulz and onditions ?" required ></v-checkbox>

            <v-btn  color="success" class="mr-4" dark  @click="register"   >
              Register Now
            </v-btn>
          </v-form>
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
        LeaderEmail:null
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
