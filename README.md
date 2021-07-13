# DanniieGil-MasGlobal-frontend


[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="https://sites.placetopay.com/storage/images/VOZchApaIAIwyz2dydHoE4UEFuVhLOzh7fSPnskH.png" alt="Logo" width="350" height="120">
  </a>

  <h3 align="center">MasGlobal Front-End Challenge</h3>

  <p align="center">
  Challenge Front-End for MasGlobal by Daniel Gil. July 2021.
    <br />
    <a href="https://challenge-masglobal.web.app/">Ver Live Demo</a>
    <br />
 
  </p>
</p>

![Alt Text](https://media1.giphy.com/media/Zh4t61ghet3Q5A78rc/giphy.gif?cid=790b761189611e21ca1b2b98c63017cbd6b957e5db4676bd&rid=giphy.gif&ct=g)



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Build With</a></li>
      </ul>
    </li>
    <li>
       <ul>
        <li><a href="#Prerequisitos">Prerequisitos</a></li>
        <li><a href="#Instalacion">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#Test">Test</a></li>
     <li><a href="#Decisiones Técnicas">Decisiones Técnicas</a></li>
    <li><a href="#Contacto">Contacto</a></li>
  </ol>
</details>

### Acerca del Proyecto

Proyecto realizado como Challenge para Front-End en Aptuno.com

Caracteristicas del proyecto:
* Ver inmuebles y sus propiedades.
* Ver detalle e información de un inmueble.
* Filtrar lista de inmuebles por región y cantidad de habitaciones.
* Paginación

### Built With

* [React](https://es.reactjs.org/)
* [Redux](https://es.redux.js.org/)
* [JQuery](https://jquery.com)
* [Axios](https://www.npmjs.com/package/axios)
* [Sass](https://www.npmjs.com/package/sass)


### Prerequisitos
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalacion

1. Lista de inmuebles API en [properties.json](https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json)
2. Clonar repositorio.
   ```sh
   git clone https://github.com/DanniieGil/DanniieGil-aptuno-frontend/
   ```
4. Abrir carpeta client
      ```sh
   cd client
   ```
5. Install NPM paquetes y dependencias.
   ```sh
   npm install
   ```
5. Ejecutar React.
   ```sh
   npm start
   ```

## Test
1. Ejecutar Tests.
   ```sh
   npm run test
   ```
   
## Decisiones Técnicas
Como  patrón de diseño se implementó el Modelo de Fábrica fundamentalmente en la elaboración de las actions  y reducer para Redux.
Adicionalmente a traves de la implementación de React [useStatese, ContexApi, etc], se fundamentó la mayor parte del proyecto en el Modelo Observador, dada las caracteristicas del Framework estableciendo una relación de dependencia entre los componentes. 

Para optimizar la escalabilidad del proyecto, no se implementó ningun libreria se diseño prefabricado, tanto el carrusel de imagenes, paginación y filtros se desarrollaro ncon Vanilla JS y SCSS. Se desarrolló la paginación y los filtros a traves del Modelo de Estrategía encapsulando independientemente cada condicional para la toma de decisiones en los algoritmos, la meta de los condicionales estaba limitada hasta máximo 5 condicionales.
 
El manejo de la información entre los componentes y funciones de la aplicación se estipuló con Redux un 90% y Context-Api 10%, esto con el objetivo de garantizar el manejo de la información para futuras secciones del proyecto.

La segmentacion de los filtros es dinámica, es decir que funciona incluso para la añadidura de nuevas regiones o nuevas habitaciones asi como tambien la combinacion de ambos filtros.



## Contacto
Daniel Gil - [@DanniieGil](https://twitter.com/DanniieGil) - danniegilr@gmail.com

Project Link: [https://github.com/DanniieGil/DanniieGil-aptuno-frontend/](https://github.com/DanniieGil/DanniieGil-aptuno-frontend/)


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/DanniieGil
