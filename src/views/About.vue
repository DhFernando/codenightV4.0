<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

  import {fb} from '../firebaseConfig'

  export default {
    name: 'About',

    data: () => ({
      
       
    }),
    methods : {
       
    },

    computed :{



    },
    created: function() {
      fb.firestore().collection('locations').get()
      .then((queary)=>{
        queary.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
      })
    }
  }
</script>
