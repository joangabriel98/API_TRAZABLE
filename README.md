# Exercise

> Comienza a las 10:00 y acaba a las 18:00.

**Leer todo el documento antes de empezar**

El objetivo es crear una api con express que lea de un mongo en local con la siguiente funcionalidad, un grupo de usuarios que pueda escribir mensajes:

1. CRUD (Create, Read, Update, Delete) de usuarios, los cuales tendran las siguientes propiedades:

- Todos los usuarios deben tener un "username" único.
- Todos los usuarios deben tener un email único y una contraseña.
- Todos los usuarios deben tener la fecha de creación y última actualización. (MONGODB Update)
- Todos los usuarios deben o pueden tener un listado de mensajes enviados.

2. CRUD de mensajes.

- Todos los mensajes deben tener un usuario propietario.
- Todos los mensajes deben tener un tipo, ya sea "bug" o "feedback", un sujeto con un máximo de 50 caracteres y un cuerpo. (2 variables distintas)
- Todos los mensajes deben tener un campo para saber si se ha leido.
- Todos los mensajes deben tener la fecha de creación y última actualización.

3. Una vez realizado los pasos anteriores se necesitan estadísticas para poder comprobar estos mensajes que dejan los usuarios

- Se requiere poder comprobar cuantos mensajes hay de cada tipo.
- Se requiere un listado de todos los mensajes con el email del usuario que lo ha enviado.
- Se requiere un listado de todos los mensajes que aun no han sido marcados como leidos.
- Se requiere un listado con los tres usuarios que más han enviado mensages y de que tipo eran.

- Se requiere un listado de mensajes que contengan la palabra "pepino" en su sujeto o cuerpo.

5 usuarios minimo con 2-5 mensajes
Necesitareis controlar los posibles errores de las llamadas a la api.
Sera necesario el uso de git y seguir las reglas de Eslint.
Aviso: Hay un packete que se llama husky que controlara que no hagais un commit con errores.
