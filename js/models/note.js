App.Note = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
});

App.Note.FIXTURES = [
  {
    id: 0,
    title: "uno",
    body: "El contenido de la **primera** nota con un link [click here](http://www.google.com)"
  },
  {
    id: 1,
    title: "Titulo dos",
    body: "El contenido de la segunda nota"
  },
  {
    id: 2,
    title: "Titulo tres",
    body: "El contenido de la tercera nota es más largo que la nota convencional antes mostrada.\nEsto se debe a cambios en la estructura de las notas para conformar con las especificaciones de las notas más comunes. Si está desconforme por favor, comuníquese con nosotros y será atendido. Gracias."
  },
  {
    id: 3,
    title: "Titulo cuatro",
    body: "El contenido de la cuarta nota"
  },
  {
    id: 4,
    title: "Titulo cinco",
    body: "El contenido de la quinta nota"
  }
];
