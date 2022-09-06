import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      username: "Alina",
      notes: [],
      count: 0,
    };
  },
  //solo las mutaciones afectan al state
  mutations: {
    SAVE_NOTE(state, note) {
      //para simular un autoincrement en el id
      let id = state.notes.length + 1;

      //insertar la nota recibida
      state.notes.push({
        id: id,
        ...note,
      });

      //aumento el numero de items
      state.count++;
    },
    DELETE_NOTE(state, id) {
      //recuperar el indice del elemento a eliminar mediante el id
      let index = state.notes.map((note) => note.id).indexOf(id);

      //delete por splice
      state.notes.splice(index, 1);

      //reducir el numero de items
      state.count--;
    },
  },
  //llaman a las mutaciones, pueden ser async, seran llamadas a traves de un evento
  actions: {
    saveNote({ commit }, note) {
      commit("SAVE_NOTE", note);
    },
    deleteNote({ commit }, id) {
      commit("DELETE_NOTE", id);
    },
  },
  getters: {},
});
