<!-- este es el componente principal, 
  contiene otros componentes hijos -->

<!-- diseño -->
<template>
  <div class="app-container">

    <!-- componente que contiene el formulario -->
    <FormApp/> 
    
    <!-- componente que contiene la lista de notas -->
    <ListApp/>
    
  </div>
</template>

<!-- logica -->
<script>

// importar componentes
import FormApp from "./components/FormApp.vue";
import ListApp from "./components/ListApp.vue";

export default {

  //para decirle a vue que haga uso de los componentes importados
  components: {
    FormApp,
    ListApp,
  },
};
</script>

<!-- estilos -->
<style>
html,
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.app-container {
  margin-top: 35px;
  display: flex;
  height: auto;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

@media (max-width: 820px) {
  .app-container {
    display: flex;
    flex-direction: column;
  }
}

</style>
