<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row>
        <v-col cols="5" class="" >
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
                  {{SelectedTeam}}
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
      SelectedTeam:null
    }),
    methods:{
       
    },
    computed:{
      Teams(){ return this.$store.getters.Teams }
    }
  }
</script>