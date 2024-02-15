<template>
  <div class="container">
    <div class="consultar">
      <h2>Ingrese el id del estudiante</h2>
      <input type="text" v-model="id" id="id" />
      <button @click="consultarPorId">consultar</button>
      <div class="formularioConsultar">
        <form class="form">
          <h3>Estudiante:</h3>
          <p type="Nombre:"><input v-model="nombre" type="text" /></p>
          <p type="Apellido:"><input v-model="apellido" type="text" /></p>
          <p type="Genero:"><input v-model="genero" type="text" /></p>
          <p type="Fecha de nacimiento:">
            <input v-model="fechaNacimiento" type="text" />
          </p>
          <p type="Cedula:"><input v-model="cedula" type="text" /></p>
          <p type="Edad:"><input v-model="edad" type="text" /></p>
          <p type="Nacionalidad:">
            <input v-model="nacionalidad" type="text" />
          </p>
          <p type="Direccion:"><input v-model="direccion" type="text" /></p>
          <p type="Estado civil:">
            <input v-model="estadoCivil" type="text" />
          </p>
          <p type="Lugar de nacimiento:">
            <input v-model="lugarNacimiento" type="text" />
          </p>
        </form>
      </div>
    </div>

    <div class="formularioInsertar">
      <form class="form">
        <h2>Ingresar:</h2>
        <p type="Nombre:"><input v-model="nombre" type="text" /></p>
        <p type="Apellido:"><input v-model="apellido" type="text" /></p>
        <p type="Genero:"><input v-model="genero" type="text" /></p>
        <p type="Fecha de nacimiento:">
          <input v-model="fechaNacimiento" type="datetime-local" />
        </p>
        <p type="Cedula:"><input v-model="cedula" type="text" /></p>
        <p type="Edad:"><input v-model="edad" type="text" /></p>
        <p type="Nacionalidad:"><input v-model="nacionalidad" type="text" /></p>
        <p type="Direccion:"><input v-model="direccion" type="text" /></p>
        <p type="Estado civil:"><input v-model="estadoCivil" type="text" /></p>
        <p type="Lugar de nacimiento:">
          <input v-model="lugarNacimiento" type="text" />
        </p>
        <button @click="insertar">Insertar</button>
      </form>
    </div>
  </div>
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
      genero: null,
      fechaNacimiento: null,
      cedula: null,
      edad: null,
      nacionalidad: null,
      direccion: null,
      estadoCivil: null,
      lugarNacimiento: null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente ");
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.fechaNacimiento = data.fechaNacimiento;
      this.cedula = data.cedula;
      this.edad = data.edad;
      this.nacionalidad = data.nacionalidad;
      this.direccion = data.direccion;
      this.estadoCivil = data.estadoCivil;
      this.lugarNacimiento = data.lugarNacimiento;
      this.consultar = true;
    },
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        cedula: this.cedula,
        edad: this.edad,
        nacionalidad: this.nacionalidad,
        direccion: this.direccion,
        estadoCivil: this.estadoCivil,
        lugarNacimiento: this.lugarNacimiento,
      };
      await insertarFachada(estuBody);
      console.log("Insercion exitosa")
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(1, 450px);
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  background: none;
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

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
}

.form {
  margin-top: 20px;
  width: 380px;
  height: 700px;
  background: #e6e6e6;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 40px -10px #000;
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

#id{
  text-align: center;
}

</style>