<template>
  <h1>Componente estudiante</h1>
  <input type="text" v-model="id" />
  <button @click="consultarPorId">consultar</button>
  <input v-model="nombre" type="text" />

  <input type="text" v-model="apellido" />
  <button @click="insertar">Insertar</button>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFachada,
} from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente ");
      console.log(data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        nombre: "Willan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "1998-06-01T00:00:00",
        cedula: "1725841538",
        edad: 25,
        nacionalidad: "Ecuatoriano",
        direccion: "Treboles del Sur",
        estadoCivil: "soltero",
        lugarNacimiento: "Orellana",
      };
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>