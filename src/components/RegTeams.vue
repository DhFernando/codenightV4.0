<template>
  <v-container>
     <v-row>
       <v-col cols="12">
         <h2><i>T</i>eam Lists</h2>
       </v-col>
     </v-row>
     <v-row>
       <v-col cols="12">
         <v-tabs>
            <v-tab @click="year = 1">First Year [ 1st Year ]</v-tab>
            <v-tab @click="year = 2">Second Year [ 2nd Year ]</v-tab>
            <v-tab @click="year = 3">Third Year [ 3rd Year ]</v-tab>
          </v-tabs>
       </v-col>
     </v-row>
     <v-row>
       <v-col cols="12">
          <v-card class="mx-auto" max-width="300" tile >
            <v-list dense>
            <v-subheader>
                <p v-if="year == 1" > First year registered List </p>
                <p v-if="year == 2" > Second year registered List </p>
                <p v-if="year == 3" > Third year registered List </p>
            </v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary"  >
                <v-list-item  v-for="(Team, i) in Teams" :key="i" >
                 
                    <v-list-item-icon>
                        <v-icon  ></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title  > {{Team}} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
       </v-col>
     </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      year : 1,
      Teams:[]
      
    }),
    methods : {
      register : function() {
        console.log(this.formData)
      }
    },
    created : function(){
        this.Teams = this.$store.getters.Teams
    },

    computed :{
        
    }
  }
</script>
