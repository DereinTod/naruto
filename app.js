new Vue({
    el: '#app',
    data: {
      nombre: '',
      preguntas: [
        {
          texto: '¿Cuál es el verdadero nombre de Tobi?',
          respuestas: ['Obito Uchiha', 'Tobi', 'Uchiha Madara', 'Zetsu'],
          correcta: 0
        },
        {
          texto: '¿Qué técnica utiliza Madara para invocar al Jinchuriki de los Diez Colas?',
          respuestas: ['Mugen Tsukuyomi', 'Rebirth of the Sage', 'Rinne Tensei', 'Gedo Rinne Tensei'],
          correcta: 3
        },
        {
          texto: '¿Qué razón tiene Itachi para eliminar a su clan?',
          respuestas: ['Poder personal', 'Proteger a su hermano', 'Destruir Konoha', 'Buscar la paz'],
          correcta: 1
        },
        {
          texto: '¿Quién es el líder de Akatsuki que busca capturar a los Jinchuriki?',
          respuestas: ['Itachi Uchiha', 'Pain', 'Obito Uchiha', 'Madara Uchiha'],
          correcta: 1
        },
        {
          texto: '¿Qué jutsu le permite a Sasuke utilizar el Susanoo?',
          respuestas: ['Sharingan', 'Rinnegan', 'Byakugan', 'Mangekyo Sharingan'],
          correcta: 3
        }
      ],
      preguntaActual: 0,
      respuestaSeleccionada: null,
      puntos: 0
    },
    methods: {
      guardarNombre() {
        if (this.nombre.trim() !== '') {
          this.preguntaActual = 0;
          this.puntos = 0;
          this.respuestaSeleccionada = null;
        } else {
          alert('Por favor, ingresa tu nombre.');
        }
      },
      siguientePregunta() {
        if (this.respuestaSeleccionada !== null) {
  
          if (this.respuestaSeleccionada === this.preguntas[this.preguntaActual].correcta) {
            this.puntos++;
          }
          this.preguntaActual++;
          this.respuestaSeleccionada = null;
  
  
          if (this.preguntaActual >= this.preguntas.length) {
            alert(`Test finalizado. ${this.nombre}, obtuviste ${this.puntos} puntos.`);
            this.reiniciarTest();
          }
        } else {
          alert('Por favor, selecciona una respuesta antes de continuar.');
        }
      },
      reiniciarTest() {
        this.nombre = '';
        this.preguntaActual = 0;
        this.respuestaSeleccionada = null;
        this.puntos = 0;
      }
    }
  });
  