<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row>
        <v-col cols="5" class="" >
          <v-row>
            
            <v-col cols="4">
              <v-row>
                <h3 class="mt-4 pl-5">Filter By : </h3>
              </v-row>
            </v-col>
            <v-col cols="8">
              <v-select v-model="SelectedYear"  :items="Year" 
                label="Year"
                required
              ></v-select> 
            </v-col>
            
          </v-row>
          <v-row class="">
            <v-col cols="12">
              <v-card class="mx-auto" max-width="500" >
                  <v-list v-if="Teams.lenght != 0">
                    <v-list-item-group  >
                      <v-list-item v-for="(Team, i) in Teams" :key="i" @click="SelectedTeam = Team" >
                        <v-list-item-icon  >
                          <v-icon  >mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="Team.TeamName"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
            </v-col>  
          </v-row>
        </v-col>
        <v-col cols="7" >
          <v-row class="">
             <v-container class=" ">
               <v-card class="pa-5">
                  <v-row v-if="SelectedTeam != null">
                    <v-col cols="12">
                      <v-row>
                        {{SelectedTeam}}
                        {{SelectedTeam.TeamName}}
                      </v-row>
                      <v-row>
                        {{SelectedTeam.TeamName}}
                      </v-row>
                    </v-col>
                  </v-row>
               </v-card>
              </v-container>
          </v-row>
        </v-col>
      </v-row>
     
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      SelectedTeam:null,
      SelectedYear: null,
      Year: [ 'All Years','First (1st) Year', 'Second ( 2nd ) Year', 'Third ( 3rd ) Year' ],
    }),
    methods:{
       
    },
    beforeCreate(){
      if(localStorage.getItem("codeNigntLogin") === null){ this.$router.push("/") }
    },
    created(){
     this.$store.dispatch('fetchTeamsFB')
    },
    computed:{
      Teams(){ 
        if( this.SelectedYear === null || this.SelectedYear === "All Years"  ){
            return this.$store.getters.teamsArray
        }else if(this.SelectedYear === "First (1st) Year"){
            return this.$store.getters.teamsArray.filter( el => el.year === 1 )
        }else if(this.SelectedYear === "Second ( 2nd ) Year"){
            return this.$store.getters.teamsArray.filter( el => el.year === 2 )
        }else if(this.SelectedYear === "Third ( 3rd ) Year"){
            return this.$store.getters.teamsArray.filter( el => el.year === 3 )
        }else{
          return this.$store.getters.Teams
        }
        
       }
    }
  }
</script>