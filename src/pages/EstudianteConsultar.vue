<template>
  <h1>Página consultar</h1>
  <div class="container">
    <div class="consultar">
      <h2>Ingrese el id del estudiante</h2>
      <input type="text" v-model="id" id="id" placeholder="Ingrese ID" />
      <button @click="consultarPorId">Consultar</button>
      <div class="formularioConsultar">
        <form class="form">
          <h3>Estudiante:</h3>
          <p type="Nombre:">
            <input v-model="nombre" type="text" placeholder="Nombre" />
          </p>
          <p type="Apellido:">
            <input v-model="apellido" type="text" placeholder="Apellido" />
          </p>
          <p type="Genero:">
            <input v-model="genero" type="text" placeholder="Genero" />
          </p>
          <p type="Fecha de nacimiento:">
            <input
              v-model="fechaNacimiento"
              type="text"
              placeholder="Fecha de nacimiento"
            />
          </p>
          <p type="Cedula:">
            <input v-model="cedula" type="text" placeholder="Cedula" />
          </p>
          <p type="Edad:">
            <input v-model="edad" type="text" placeholder="Edad" />
          </p>
          <p type="Nacionalidad:">
            <input
              v-model="nacionalidad"
              type="text"
              placeholder="Nacionalidad"
            />
          </p>
          <p type="Direccion:">
            <input v-model="direccion" type="text" placeholder="Direccion" />
          </p>
          <p type="Estado civil:">
            <input
              v-model="estadoCivil"
              type="text"
              placeholder="Estado civil"
            />
          </p>
          <p type="Lugar de nacimiento:">
            <input
              v-model="lugarNacimiento"
              type="text"
              placeholder="Lugar de nacimiento"
            />
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";
export default {
  created(){
    
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(this.$route.query)
    console.log(this.$route.query.anio)
    console.log(this.$route.query.edad)
  },
  components: {
    consultarEstudianteFachada,
  },
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

#id {
  text-align: center;
}
</style>