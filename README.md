# DanniieGil-MasGlobal-frontend


[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="https://challenge-masglobal.web.app/static/media/video.05e2910c.svg" alt="Logo" width="350" height="120">
  </a>

  <h3 align="center">Mowies App</h3>

  <p align="center">
  Challenge Front-End for MasGlobal by Daniel Gil. July 2021.
    <br />
    <a href="https://challenge-masglobal.web.app/">Ver Live Demo</a>
    <br />
 
  </p>
</p>

![Alt Text](https://im2.ezgif.com/tmp/ezgif-2-e641abed1bdd.gif)



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

Proyecto realizado como Challenge para Front-End en MasGlobal

Caracteristicas del proyecto:
* Ver Lista de Pelicula
* añadir y Borrar Nuevas Peliculas
* Ver Detalle de Peliculas


### Built With

* [React](https://es.reactjs.org/)
* [Contex-Api](https://es.redux.js.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [Sass](https://www.npmjs.com/package/sass)
* [sweetalert2](https://www.npmjs.com/package/sass)


### Prerequisitos
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalacion

1. Lista Inicial de Movies API en [Mocky.io](http://www.mocky.io/v2/5dc3c053300000540034757b)
2. Clonar repositorio.
   ```sh
   git clone https://github.com/DanniieGil/masglobal-challenge-front
   ```
3. Install NPM paquetes y dependencias.
   ```sh
   npm install
   ```
4. Ejecutar React.
   ```sh
   npm start
   ```

  
## Decisiones Técnicas
Como  patrón de diseño se implementó el Modelo de Fábrica fundamentalmente en la elaboración del estado global con Contex-Api
Adicionalmente a traves de la implementación de React [useStatese, ContexApi, etc], se fundamentó la mayor parte del proyecto en el Modelo Observador, dada las caracteristicas del Framework estableciendo una relación de dependencia entre los componentes. 

Para optimizar la escalabilidad del proyecto, no se implementó ninguna libreria se diseño prefabricado, se desarrolló ncon Vanilla JS y SCSS. Se desarrolló el permant state en el Local Storage traves del Modelo de Estrategía encapsulando independientemente cada condicional para la toma de decisiones en los algoritmos, la meta de los condicionales estaba limitada hasta máximo 5 condicionales.
 
El manejo de la información entre los componentes y funciones de la aplicación se estipuló Context-Api, esto con el objetivo de garantizar el manejo de la información para futuras secciones del proyecto.

## Contacto
Daniel Gil - [@DanniieGil](https://twitter.com/DanniieGil) - danniegilr@gmail.com

Project Link: https://github.com/DanniieGil/masglobal-challenge-front](https://github.com/DanniieGil/masglobal-challenge-front)


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/DanniieGil
