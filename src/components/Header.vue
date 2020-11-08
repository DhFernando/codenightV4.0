<template>
  <div class="Header">
    <v-app-bar
            height="100"
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-4"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              ></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title><h2> <i>C</i>ode <i>N</i>ight v4.0</h2></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-menu bottom left >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="yellow" v-bind="attrs" v-on="on" >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                
              </v-list>
            </v-menu>

            <template v-slot:extension>
              <v-tabs align-with-title>
                <v-tab to="/">Home</v-tab>
                <v-tab to="/about" > About</v-tab>
                <v-tab to="/registration">Registration</v-tab>
                <v-tab v-if="AdminLogin" to="/regTeams"> Registered Teams</v-tab>
                <v-tab  @click="OpenDialog"> Admins</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
  </div>
</template>

<script>  
export default {
  name: 'App',

  components: { 
  },

  data: () => ({
    //
  }),
  methods:{
      OpenDialog(){
          this.$store.dispatch("OpenDialog")
      }
  },
  computed:{
      AdminLogin(){ return this.$store.getters.AdminLogin }
  }
};
</script>
