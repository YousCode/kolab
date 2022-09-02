<template>
    <div id="Homepage">
      <img class="logoHeader" :src="image" v-on:click="NavigateMain" />
      <nav role="navigation">
        
          <li id="selections">
            <a id="Tittle">
              Kolab
              </a>
              <ul class="dropdown">
                <li v-on:click="NavigateMain">
                <a>Se Connecter</a>
              </li>
             
                <li v-on:click="NavigateMain">
                <a>Obtenir une démo</a>
              </li>
              <li class="items" v-on:click="NavigateMain">Se Connecter</li>
        <li class="items">Obtenir une démo</li>
       </ul>
          </li>
          
      </nav>
      <div id="textForm">
        <h1>
        Douter de tout,sauf de vous.
        </h1>
        <h2>Créer maintenant.</h2>
        <h3>On s'assure du reste.</h3>
    
      </div>
      
    </div>
  </template>
  
  <script>

  export default {
    name: "HomePage"
  };
  </script>
  <style>
    #Tittle{
      width: 49px;
      height:137.52px ;
      background: linen;
      display: flex;
      align-items: center;
      }
  </style>
  

  