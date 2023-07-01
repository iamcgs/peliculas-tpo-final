console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      nombre: '',
      imagen: '',
      stock: 0,
      precio: 0,
      url: 'https://carlawds.pythonanywhere.com/peliculas/' + id,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = data.id;
          this.nombre = data.nombre;
          this.genero = data.genero;
          this.duracion = data.duracion;
          this.info = data.info;
          this.imagen = data.imagen;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let pelicula = {
        nombre: this.nombre,
        genero: this.genero,
        duracion: this.duracion,
        info: this.info,
        imagen: this.imagen,
      };
      var options = {
        body: JSON.stringify(pelicula),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          alert('Registro actualizado');
          window.location.href = './index.html';
        })
        .catch((err) => {
          console.error(err);
          alert('Error al Actualizar');
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
