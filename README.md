Se crearon 3 componentes: home, person, film
se creo el servicio.ts que es donde almacenaremos las urls a la que haremos los llamados del api y desde el component.ts de cada pagina importamos el servicio.
Entonces en home.component.ts guardamos en una variable (this.route.snapshot.params.page;) y esa variable la usamos para traer los personajes y guardando la url de esas paginas para luego en el html con un ngFor mostrar los personajes en lista usando un split donde obtenemos el id de cada personaje y asi poder acceder al perfil del personaje.

En person.component.ts tambien guardamos en una variable (this.route.snapshot.params.id;) que nos trajo la url y la usamos para traer el id y asi decirle al api cual personaje queriamos y tambien hicimos llamado al api usando solo la url que la persona nos da para  especie, vehiculos y naves estelares y con un for hicimos la solicitud al api y este traia elemento por elemto y lo guardamos en un array global y en el html hicimos el llamado de cada uno de estos arrays pidiendole el nombre de cada elemento que necesitabamos.

En film.component.ts se realizo el mismo proceso que en person hicimos el llamado al api para que trajera la pelicula tambien pasandole un id que trajimos mediante (this.route.snapshot.params.id;) y de a cuerdo a ese resultado usamos las url que nos daban para planeta, naves estelares y vehiculos; con estos hicimos los respectivos llamados al api que ibamos guardando en un array global que desde el html solo tuvimos que llamarlos.

En el archivo de las rutas se tuvo que importar cada componente.

- El home es la misma pagina de la lista de personajes el cual su ruta es http://localhost:4200/people-list/1, la cual al correr el proyecto esa seria la url para iniciar.
- En el proyecto solo se cuenta con redireccion de person, film y home.
- Person y film dan la informacion solo del objeto seleccionado.
- Home muestra la lista entera de los personajes existentes.
