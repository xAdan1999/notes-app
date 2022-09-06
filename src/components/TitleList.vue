<!-- diseño -->
<template> 
  <div>
    <h1>Hello <span>{{ $store.state.username }}</span></h1>
    <p>check all your notes here 👇</p>
  </div>
</template>

<!-- logica -->
<script>
</script>

<!-- estilos -->
<style scoped>
span {
  color: #53bd9b;
  font-weight: bold;
}

p {
  margin-top: -15px;
  font-weight: 600;
  font-size: 16px;
}
</style>
