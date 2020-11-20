<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{ft}} -->
  </div>
</template>

<script>

  // import {fb} from '../firebaseConfig'

  export default {
    name: 'About',

    data: () => ({
      
       
    }),
    methods : {
       
    },

    computed :{
        


    },
    created: function() {

    // fb.firestore().collection('Teams').doc('1').collection('info').get()
    // .then((querySnapshot)=>{
    //   querySnapshot.forEach((doc)=>{
    //     console.log(doc.data());
    //   })
    // })


    }
  }
</script>
