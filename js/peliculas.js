const { createApp } = Vue;
createApp({
  data() {
    return {
      peliculas: [],
      //   url: 'http://localhost:5000/productos',
      // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
      url: 'https://carlawds.pythonanywhere.com/peliculas', // si ya lo subieron a pythonanywhere
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      nombre: '',
      genero: '',
      duracion: 0,
      info: '',
      imagen: '',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.peliculas = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(pelicula) {
      const url = this.url + '/' + pelicula;
      var options = {
        method: 'DELETE',
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          location.reload();
        });
    },
    grabar() {
      let pelicula = {
        nombre: this.nombre,
        genero: this.genero,
        duracion: this.duracion,
        info: this.info,
        imagen: this.imagen,
      };
      var options = {
        body: JSON.stringify(pelicula),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          alert('Película Agregada');
          window.location.href = './index.html';
        })
        .catch((err) => {
          console.error(err);
          alert('Error al Agregar');
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
