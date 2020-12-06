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

            <v-app-bar-nav-icon v-show="Size == 'xs' "  @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title >

                <h2 v-show="Size != 'xs' "> <i>C</i>ode <i>N</i>ight v4.0 </h2>
                <h3 v-show="Size == 'xs' " > <i>C</i>ode <i>N</i>ight v4.0 </h3>

            </v-toolbar-title>

            <v-spacer></v-spacer>


            <v-menu bottom left >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="yellow" v-bind="attrs" v-on="on" v-show="Size == 'xs'  " >
                  <v-icon>mdi-dots-vertical</v-icon>
                
                </v-btn>
              </template>

              <v-list>
                
              </v-list>
            </v-menu>

            <template v-slot:extension>
              <v-tabs align-with-title v-show="Size != 'xs' " >
                <v-tab to="/">Home</v-tab>
                <v-tab to="/about" > About</v-tab>
                <v-tab to="/registration">Registration</v-tab>
                <v-tab v-if="AdminLogin" to="/regTeams"> Registered Teams</v-tab>
                <v-tab  v-if="AdminLogin == false"  @click="OpenDialog"> Admins Login</v-tab>
                <v-tab  v-if="AdminLogin == true"  @click="Logout"> Admins Logout</v-tab>
              </v-tabs>
            </template>

          </v-app-bar>

          
            <v-navigation-drawer  v-model="drawer" absolute left temporary >
              <v-list  nav dense class="mt-15"   >
                <v-list-item-group
                  
                  active-class="deep-purple--text text--accent-4"
                >
                  <v-list-item to="/">
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>

                  <v-list-item to="/about">
                    <v-list-item-title>About</v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item to="/registration">
                    <v-list-item-title>Registration</v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item v-if="AdminLogin" to="/regTeams">
                    <v-list-item-title>Registered Teams</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="AdminLogin == false"  @click="OpenDialog">
                    <v-list-item-title>Registered Teams</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="AdminLogin == true"  @click="Logout">
                    <v-list-item-title>Registered Teams</v-list-item-title>
                  </v-list-item>

                  
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
  </div>
</template>

<script>  
export default {
  name: 'App',

  components: { 
  },

  data: () => ({
    drawer : !true
  }),
  beforeCreate(){
    if(localStorage.getItem("codeNigntLogin") != null){ 
      this.$store.dispatch("userLogin")
    }
  },
  methods:{
      OpenDialog(){
          this.$store.dispatch("OpenDialog")
      },
      Logout(){
        this.$store.dispatch("userLogout")
        this.$router.push("/")
      }
  },
  computed:{
      AdminLogin(){ 
        return this.$store.getters.login
      },

      Size(){
        return this.$vuetify.breakpoint.name
      }
  }
};
</script>
