<!-- diseño -->
<template>
  <div class="list-container">

    <!-- titulo de la lista -->
    <div class="username-container">
      <TitleList />
    </div>

    <!-- creacion de componente nota por cada elemento del array con v-for de vue -->
    <div class="list">
      <div v-for="note in $store.state.notes" :key="note.id">
        <NoteItem :note="note" @edit-note="editNote"/>
      </div>
    </div>

    <!-- mostrar conteo -->
    <div class="count-items">
      <p>{{ $store.state.count }} {{ checkItems }}</p>
    </div>

  </div>
</template>

<!-- logica -->
<script>

// importar componentes
import TitleList from "./TitleList.vue";
import NoteItem from "./NoteItem.vue";

export default {

  //para decirle a vue que haga uso de los componentes importados
  components: {
    TitleList,
    NoteItem,
  },

  //propiedad calculada
  computed: {
    checkItems() {
      //para mostrar de mejor manera el conteo de items
      return this.$store.state.count === 1 ? "item" : "items";
    },
  },
};
</script>

<!-- estilos -->
<style scoped>
.list-container {
  width: 700px;
  height: 740px;
  padding: 20px 50px;
  margin: 15px;
  box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.list {
  height: 570px;
  overflow: auto;
}

.count-items {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 5px;
  margin-top: 5px;
}

p {
  font-weight: 600;
  font-size: 18px;
}

.count-items p {
  color: gray;
}
</style>
