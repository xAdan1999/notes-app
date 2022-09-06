<!-- diseño -->
<template>

  <!-- formulario -->
  <form @submit.prevent="saveNote" class="form">

    <!-- titulo -->
    <div class="form-welcome">
      <WelcomeApp />
    </div>

    <!-- input title -->
    <input
      ref="title"
      v-model="note.title"
      type="text"
      class="form-control"
      placeholder="Title"
    />

    <!-- input description -->
    <input
      v-model="note.description"
      type="text"
      class="form-control"
      placeholder="Description"
    />
    
    <!-- boton save -->
    <button type="submit" class="btn-save">Save</button>

  </form>
</template>

<!-- logica -->
<script>

//para importar un componente que contiene un mensaje de bienvenida
import WelcomeApp from "./WelcomeApp.vue";

export default {

  //para decirle a vue que haga uso de los componentes importados
  components: {
    WelcomeApp,
  },

  //para hacer los atributos reactivos
  data() {

    //return para exponerlos al componente
    return {
      note: {
        title: "",
        description: "",
      },
    };
  },
  
  //metodos que ejecuta este componente
  //es buena practica especificar los actions de la store en los methods
  methods: {
    saveNote() {
      //llamar al action de la store, y pasarle la nota
      this.$store.dispatch('saveNote', this.note);
      this.note.title = "";
      this.note.description = "";
      this.$refs.title.focus();
    },
  },
};
</script>

<!-- estilos -->
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  padding: 50px;
  margin: 15px;
  box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.form-welcome {
  margin-bottom: 30px;
}

.form-control {
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  outline: none;
  margin-bottom: 10px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
}

.form-control:focus {
  border: 1px solid #53bd9b;
}

.btn-save {
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #53bd9b;
  border: none;
  color: #ffffff;
  transition: 0.5s;
  margin-top: 50px;
  margin-bottom: 40px;
  border-radius: 4px;
}

.btn-save:hover {
  background-color: #499e83;
}
</style>
