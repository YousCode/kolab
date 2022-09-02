<template>
  <v-app>
<div id="app">
  <LandingpageVue/>
  <v-main>
    <router-view>
      
    </router-view>
  </v-main>
  </div>
  </v-app>
</template>
<script>
import LandingpageVue from './components/Landingpage.vue';
export default {
  name: "App",
  components:{LandingpageVue},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background-color: #141414;
  height: 100vh;
}
</style>
