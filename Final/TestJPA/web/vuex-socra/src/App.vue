<template>
  <div id="app">
    <div id="output">
      <h1>HOLsA!!</h1>
    </div>
    <div id="outputs"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profesor">Profesor</router-link>|
      <router-link to="/estudiante">Estudiante</router-link>
    </div>
    <button class="btn btn-primary" onclick="testWebSocket()">Crear nuevo curso</button>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
