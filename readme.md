Proyecto Pocket clone:

* EMBER FRONTEND *

	· Se ve como Pocket
	· Permite crear notas escritas o agregando una URL y un comentario (como posts de facebook)
	· Temas: cada nota pertenece solo a un tema, los temas son los distintos "notebooks"
	· Tags, cada nota puede tener varios tags para filtrar, buscar, ordenar, etc.
	· Permite buscar por contenido de texto
	· Markdown para las notas
	· Foundation

* TASKS *
	1- lista con items (ul li)
	2- cada item tiene un título y un contenido (h1 p)
	3- cargar de modelos
	4- Mostrar vista en modal
	5- Vista para editar y crear
	6- Eliminar
	7- Hacer el modal genérico para que sea más reutilizable
	8- Redirigir al padre al cerrarlo y no a ApplicationRoute
	9- Mostrar contenido reducido en la vista de grilla (Hecho con overflow hidden y fixed height)
	10- Poner formato markdown al contenido
	11- Arreglar para que el cerrar no sea un history.go(-1) ya que da problemas al mezclarlo con transition
	*Ver como hacerlo yendo a la ruta del padre o similar.
	12- Agregar ruta para notes.
	13- Abrir URL en otra pestaña
	14- Agregar buscador

	*- Hashtags
	  *- Parse and show as link (no funciona bien en la viste /notes, si funciona en /notes/:note_id)
	  *- 

	*- Completar modelos con tema

	*- Edits next to title/body (trello)

	*- Cancel edit

	*- Modelo de temas

* BACKENDS *
	1- Nodejs
	2- Ruby