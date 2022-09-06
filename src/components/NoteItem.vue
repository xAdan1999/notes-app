<!-- diseño -->
<template>
  <div class="note-container">

    <!-- title -->
    <h3>📌 {{ this.note.title }}</h3>

    <!-- description -->
    <p>{{ this.note.description }}</p>

    <!-- boton para eliminar -->
    <div class="btn-container">
      <button @click="deleteNote" class="btn-delete">Delete</button>
    </div>

  </div>
</template>

<!-- logica -->
<script>
export default {
  
  //este componente recibe los datos de una nota
  props: ['note'], 

  //metodos que ejecuta este componente
  methods: {
    deleteNote() {
      //es buena practica especificar los actions de la store en los methods
      this.$store.dispatch("deleteNote", this.id);
    },
  },
};
</script>

<!-- estilos -->
<style scoped>
@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

.note-container {
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  display: flex;
  flex-direction: column;
  border: 1px solid #bfbfbf;
  margin: 20px 0px 0px 0px;
  border-radius: 4px;
  padding: 0px 25px 0px 25px;
  width: auto;
  height: auto;
}

h3 {
  margin: 25px 0px -5px 0px;
}

p {
  font-size: 16px;
}

.btn-container {
  display: flex;
  flex-direction: row-reverse;
}

.btn-delete {
  padding: 10px;
  width: 100px;
  margin: 0px 0px 20px 10px;
  background: #ff6376;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.15s;
  border-radius: 3px;
  font-size: 15px;
}

.btn-edit {
  padding: 10px;
  width: 100px;
  margin: 0px 0px 20px 10px;
  background: dodgerblue;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.15s;
  border-radius: 3px;
  font-size: 15px;
}

.btn-delete:hover {
  background: #ff2b44;
}

.btn-edit:hover {
  background-color: deepskyblue;
}
</style>
