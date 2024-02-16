<template>
  <div class="container">
    <h1>Estudiante Eliminar</h1>

    <div class="consulta">
      <h3 for="">ID de Estudiante</h3>
      <input v-model="id" type="text" />
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante.js";

export default {
  components: {
    eliminarFachada,
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>
<style >
.container{
  display: grid;
  justify-content: center;
  align-content: center;
}

input {
  width: 50%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  background: none;
  text-align: center;
}

input:focus {
  border-bottom: 3px solid #78788c;
}

h2 {
  margin: 10px 0px;
  padding-bottom: 10px;
  width: 310px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}

button {
  border-radius: 5px;
  width: 80px;
  margin-top: 10px;
  justify-content: center;
}

button:hover {
  background-color: #d2d3d3;
}

</style>