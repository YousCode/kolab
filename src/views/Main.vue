<template>
  <div id="app">
    <Header />
    <NextReleases />
  
    <h4>Kolab</h4>
  </div>
</template>

<script>
import LandingPage from "../components/Landingpage";
import NextReleases from "../components/NextReleases";

export default {
  name: "App",
  components: {
    LandingPage,
    NextReleases
  }
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
#app h4 {
  color: #e9e9e9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media only screen and (max-width: 599px) {
  #app h4 {
    font-size: 14px;
  }
}
</style>
