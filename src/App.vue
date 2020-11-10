<template>
  <v-app>
    <Header />
    <v-main>
      <AdminLogIn />
     <v-container class="mt-5"><router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

// import {fb} from './firebase' <-- just a demo for import firebase


<script> 
import Header from '@/components/Header'
import AdminLogIn from '@/views/AdminLogIn'
export default {
  name: 'App',

  components: {
      Header , AdminLogIn
  },

  data: () => ({
    //
  }),
};
</script>
