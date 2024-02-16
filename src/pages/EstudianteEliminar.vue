<template>
 <div class="contenedor">
    <h1>Estudiante Eliminar</h1>

    <div class="consulta">
      <h3 for="">ID de Estudiante</h3>
      <input v-model="id" type="text" />
      <button @click="eliminar">Eliminar</button>
    </div>
 </div>

</template>

<script>
import {
  eliminarFachada,
} from "../helpers/clienteEstudiante.js";
export default {
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
<style>
</style>