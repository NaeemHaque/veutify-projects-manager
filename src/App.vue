<template>
  <v-app class="grey">

    <Navbar/>

    <v-main class="mx-5 mb-4">
      <router-view/>
      <popup/>
    </v-main>

    
  </v-app>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
   Navbar,
  }

};
</script>








