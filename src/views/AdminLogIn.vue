<template>
  <v-row justify="center">
    <v-dialog  v-model="dialog" persistent max-width="600px" >
      
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                
              <v-col cols="12">
                <v-text-field label="UserName*" required v-model="AdminCredentiols.userName" ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" v-model="AdminCredentiols.password" required  ></v-text-field>
              </v-col>
               
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="login" > Login </v-btn>
          <v-btn color="blue darken-1" text @click="closeDialog"  >  Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        AdminCredentiols : {
          password : null,
          userName : null
        },
      }
    },
    methods :{
      closeDialog(){
        this.$store.dispatch("closeDialog")
      },
      login(){
        if(this.AdminCredentiols.password == this.$store.getters.AdminCredentiols.password &&
        this.AdminCredentiols.userName == this.$store.getters.AdminCredentiols.userName){ 
              this.$store.dispatch("userLogin")
             this.closeDialog()
        }
      }
    },
    computed :{
      dialog(){ return this.$store.getters.dialog }
    }
  }
</script>