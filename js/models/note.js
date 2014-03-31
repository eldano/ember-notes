App.Note = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
});

App.Note.FIXTURES = [
  {
    id: 0,
    title: "Titulo uno",
    body: "El contenido de la primera nota"
  },
  {
    id: 1,
    title: "Titulo dos",
    body: "El contenido de la segunda nota"
  },
  {
    id: 2,
    title: "Titulo tres",
    body: "El contenido de la tercera nota"
  }
];
