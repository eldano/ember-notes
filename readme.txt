Proyecto Pocket clone:

* EMBER FRONTEND *

	· Se ve como Pocket
	· Permite crear notas escritas o agregando una URL y un comentario (como posts de facebook)
	· Temas: cada nota pertenece solo a un tema, los temas son los distintos "notebooks"
	· Tags, cada nota puede tener varios tags para filtrar, buscar, ordenar, etc.
	· Permite buscar por contenido de texto
	· Markdown para las notas
	· Foundation

#

	1- lista con items (ul li)
	2- cada item tiene un título y un contenido (h1 p)
	3- cargar de modelos
	4- Mostrar vista en modal
	5- Vista para editar y crear
	6- Eliminar
	7- Hacer el modal genérico para que sea más reutilizable
	8- Redirigir al padre al cerrarlo y no a ApplicationRoute (se redirige a history -1)

	
	*- Mostrar contenido reducido en la vista de grilla

	*- Abrir URL en otra pestaña

	*- Poner formato markdown al contenido

	*- Modelo de tags y temas

	*- Completar modelos con tema y tags

	*- Agregar buscador
	
	*- Arreglar para que el cerrar no sea un history.go(-1) ya que da problemas al mezclarlo con transition

* BACKEND *
	1- Nodejs