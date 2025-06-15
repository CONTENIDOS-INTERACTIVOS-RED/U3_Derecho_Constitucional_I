<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Ramas del poder público'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El principio de separación de poderes, establecido en la Constitución Política de 1991, se concreta en la existencia de tres ramas del poder público: Legislativa, Ejecutiva y Judicial. Esta división refleja una concepción del poder como una función distribuida, limitada y controlada, cuyo propósito es evitar la concentración de funciones y promover un sistema de equilibrio institucional.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/1.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="16%" y="79.5%" numero="+")
                h5 Legislativa
                p La Rama Legislativa, a través del Congreso de la República (Senado y Cámara de Representantes), ejerce la función normativa, controla al Gobierno y establece el marco legal del Estado. Es un espacio de deliberación en el que se integran diversas voces de la sociedad.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="79.5%" numero="+")
                h5 Ejecutiva
                p La Rama Ejecutiva, encabezada por el presidente de la República, aplica las leyes, dirige políticas públicas, representa al Estado internacionalmente y garantiza el orden interno. Su estructura incluye instituciones en niveles nacional, departamental, distrital y municipal, encargadas de ejecutar los mandatos legales mediante programas, obras y servicios públicos.
    
              .bg-color-white.box-shadow.p-3(x="84%" y="79.5%" numero="+")
                h5 OJudicial
                p La Rama Judicial administra justicia, controla la legalidad de las actuaciones estatales y protege los derechos ante los tribunales. Su independencia asegura decisiones imparciales, sin presiones externas, y la convierte en garante del cumplimiento de la Constitución (Chavarro Cadena, 2018).
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Cada rama cumple una función específica y necesaria para el funcionamiento democrático del Estado. La distribución del poder asegura una organización eficaz y legítima, y permite que toda actuación estatal pueda ser controlada si se aparta del marco constitucional.

    .titulo-figura.mb-4
      h5 Figura 1.
      span Estructura del estado 
    .bg-full-width.bg-color-20.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            figure
              img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
 
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Rama Legislativa
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La Rama Legislativa del poder público colombiano ,cumple una función esencial dentro del diseño institucional establecido por la Constitución de 1991. Su papel no se limita a la expedición de leyes; también incluye el control político, la representación ciudadana y la orientación del debate público sobre los asuntos más relevantes para el país. Esta Rama materializa el principio de soberanía popular, pues sus integrantes son elegidos de manera directa, lo que legitima sus decisiones y garantiza la pluralidad de voces en el proceso legislativo.
    
    p.mb-4 La Rama Legislativa está representada por el Congreso de la República, una corporación bicameral compuesta por el Senado y la Cámara de Representantes. Ambas cámaras comparten funciones como la elaboración de leyes, la reforma constitucional, el control al gobierno y la evaluación de la administración pública, aunque cada una tiene competencias específicas.

    .bg-full-width.bg-h85-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Senado de la República
                p.mb-0 Elegido por circunscripción nacional. Entre sus funciones exclusivas están: autorizar el tránsito de tropas extranjeras por el territorio nacional, aprobar tratados internacionales, juzgar al presidente en caso de delitos y elegir a los magistrados de la Corte Constitucional y al procurador general.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Cámara de Representantes
                p.mb-0 Elegida por circunscripción territorial (departamentos, distritos y circunscripciones especiales). Sus funciones exclusivas incluyen: recibir denuncias contra funcionarios públicos, acusar ante el Senado en juicios políticos y fiscalizar el gasto público.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 El proceso legislativo inicia con la presentación de un proyecto de Ley, que puede ser propuesto por el Gobierno, congresistas, altas cortes, el Fiscal General, entidades territoriales o la ciudadanía mediante iniciativa popular. El proyecto debe pasar por debates en comisiones y plenarias de ambas cámaras, y, tras su aprobación, pasa a sanción presidencial. Si el presidente presenta objeciones, el Congreso puede insistir o modificar el texto, según lo establecido por la Constitución y el reglamento interno.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El control político es una de las funciones más importantes del Congreso. Se ejerce a través de citaciones a ministros, debates de control, mociones de censura y proposiciones, que permiten examinar la gestión del Ejecutivo, exigir explicaciones y vigilar el cumplimiento de las políticas públicas. Este mecanismo de vigilancia busca evitar abusos, prevenir la corrupción y alinear la acción del gobierno con el interés general (Chavarro Cadena, 2018).
    
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Otra de sus competencias claves es la aprobación del Presupuesto General de la Nación, lo cual requiere análisis técnico, discusión política y visión estratégica. De esta función depende, tanto la ejecución de programas sociales como el funcionamiento institucional. El Congreso también debe vigilar el uso eficiente, transparente y responsable de los recursos públicos mediante el control fiscal y político.

    .bg-full-width.bg-h85-2
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Además, el Congreso tiene la facultad de reformar la Constitución por medio de actos legislativos, un procedimiento más riguroso que el de las leyes ordinarias, puesto que exige aprobación en dos periodos consecutivos. A través de esta atribución, puede adaptar el marco constitucional a cambios sociales, políticos o económicos, siempre dentro del respeto a los principios del Estado Social de Derecho.
        
            .bg-color-5.p-5(data-aos="fade-left")
              p.mb-0 En el contexto del Estado colombiano, la Rama Legislativa representa a la ciudadanía, crea el marco normativo, controla al poder ejecutivo, aprueba el presupuesto y puede reformar la Constitución. Su papel es fundamental para la democracia, ya que asegura que las decisiones públicas se tomen mediante deliberación, pluralismo y participación, impactando directamente en la garantía de derechos, el diseño de políticas públicas y el fortalecimiento institucional.

    .titulo-figura.mb-4
      h5 Figura 2.
      span Rama legislativa  
    .bg-full-width.bg-color-20.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            figure
              img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Rama Ejecutiva

    .bg-full-width.bg-h85-1.mb-3
      .px-4.px-md-5.py-4
        .row
          p La Rama Ejecutiva del poder público en Colombia, cumple un papel fundamental en la conducción del Estado, al encargarse de implementar las leyes, administrar los recursos públicos, ejecutar políticas de gobierno y garantizar el funcionamiento eficiente de la administración pública. A través de esta rama se concretan las disposiciones legales en acciones y programas que impactan directamente en la vida cotidiana de la población. Su estructura, competencias y proyección territorial permiten al Estado actuar de manera organizada y orientada al cumplimiento de los fines esenciales establecidos por la Constitución.
          p.mb-4 El presidente de la República encabeza esta rama y cumple tres funciones simultáneas:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Jefe de Estado
              p.mb-0.text-center Representa la unidad nacional y la soberanía de la República, a nivel interno e internacional.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Jefe de Gobierno
              p.mb-0.text-center Dirige la política nacional y coordina la acción del Ejecutivo.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center Suprema autoridad administrativa
              p.mb-0.text-center Ejecuta las leyes, supervisa a los funcionarios y garantiza la prestación de los servicios públicos.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-0.text-white La Rama Ejecutiva es el componente operativo del Estado colombiano. A través de una estructura que abarca desde el nivel nacional hasta el territorial, se encarga de implementar las decisiones gubernamentales y materializar las políticas públicas que buscan responder a las necesidades de la población.

    .bg-full-width.bg-h85-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para el estudio de esta temática, lo invitamos a escuchar el siguiente pódcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Rama Judicial
    
    p.mb-4 La Rama Judicial del poder público colombiano, constituye una de las columnas vertebrales del Estado Social de Derecho, porque su función esencial es la administración de justicia. Esta implica resolver conflictos entre particulares, entre particulares y el Estado, o entre entidades públicas, conforme a la Constitución y la Ley, mediante procedimientos imparciales, razonables y oportunos. Su actuación preserva la legalidad, protege los derechos fundamentales y fortalece la confianza ciudadana en la institucionalidad democrática.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La administración de justicia también abarca el control de legalidad de los actos administrativos, el juzgamiento de delitos, la garantía del debido proceso, la protección de derechos fundamentales (como la acción de tutela), y el desarrollo de la jurisprudencia como fuente de interpretación jurídica. Así, la Rama Judicial se convierte en un actor clave para la materialización de los principios constitucionales y el cumplimiento de los fines del Estado.
        p(data-aos="fade-left") La organización de esta Rama incluye altas cortes, tribunales, juzgados y otros órganos jurisdiccionales. Las altas cortes tienen competencias diferenciadas por materia, lo que permite una especialización funcional.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7
              h5 Corte Suprema de Justicia
              p Jurisdicción ordinaria. Juzga a altos funcionarios, resuelve conflictos entre tribunales y unifica jurisprudencia en materias civil, laboral y penal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7
              h5 Consejo de Estado
              p Jurisdicción contencioso-administrativa. Anula actos administrativos, resuelve controversias con la administración, emite conceptos jurídicos y asesora al Gobierno Nacional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7
              h5 Consejo Superior de la Judicatura
              p Función administrativa y disciplinaria. Organiza la Rama Judicial, vigila la conducta de jueces y resuelve conflictos de competencia entre jurisdicciones.
    
    .bg-full-width.bg-h85-3.mb-3
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/21.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p(data-aos="fade-left") Aunque no forma parte orgánica de la Rama Judicial, la Corte Constitucional es un órgano autónomo con funciones jurisdiccionales. Se encarga del control de constitucionalidad de leyes, actos legislativos, tratados internacionales y otras normas, así como de revisar sentencias de tutela seleccionadas. Su labor ha sido determinante en la definición del alcance de los derechos fundamentales y en el desarrollo del nuevo constitucionalismo colombiano.
        
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 La estructura judicial también incluye tribunales superiores y administrativos, juzgados del circuito y municipales, así como jurisdicciones especiales, entre ellas la jurisdicción indígena, reconocida constitucionalmente por su carácter propio y ancestral. Estas instancias aseguran la cobertura territorial del servicio de justicia en todo el país.
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Otras jurisdicciones especiales, como la penal militar y la jurisdicción de paz, están reguladas por disposiciones específicas. En particular, la Jurisdicción Especial para la Paz (JEP), surgida del Acuerdo Final con las FARC-EP, refleja la capacidad del sistema judicial para adaptarse a contextos complejos desde un enfoque de verdad, justicia, reparación y no repetición.
        
            .bg-color-3.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Un principio fundamental de la Rama Judicial es su independencia, lo que significa que sus decisiones no pueden estar influenciadas por presiones políticas, económicas o sociales. Esta independencia se protege mediante inamovilidad, carrera judicial, autonomía presupuestal y mecanismos disciplinarios internos que promueven la transparencia y responsabilidad judicial (Páez Murcia, 2005).

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white Factores como el acceso a la justicia, la celeridad procesal, la calidad de las decisiones y la imparcialidad judicial, determinan la legitimidad del sistema. Para fortalecer estos aspectos, se han implementado herramientas como la justicia oral, digital, jueces itinerantes y casas de justicia, que buscan acercar la administración de justicia a comunidades vulnerables y superar barreras históricas de acceso.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
            
    .titulo-figura.mb-4
      h5 Figura 3.
      span Rama judicial  
    .bg-full-width.bg-color-20
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            figure
              img(src="@/assets/curso/tema2/25.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Órganos de control y su papel en la vigilancia del poder público
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Órganos de control y su papel en la vigilancia del poder público, donde se aborda el rol crucial de los órganos de control en el sistema político colombiano. Este material ofrece explicaciones detalladas, reflexiones institucionales y ejemplos normativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Órganos de control y su papel en la vigilancia del poder público.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/26.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
          
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr004.html" target="_blank" rel="noopener noreferrer") Constitución Política de Colombia, 7 de julio de 1991 (Colombia). Art. 132- 187.  

 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr003.html#108 " target="_blank" rel="noopener noreferrer") Constitución Política de Colombia, 7 de julio de 1991 (Colombia). Art. 188- 227. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr003.html#108" target="_blank" rel="noopener noreferrer") Constitución Política de Colombia, 7 de julio de 1991 (Colombia). Art. 228- 257. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/733/73348834005.pdf" target="_blank" rel="noopener noreferrer") Puentes González, G. (2017). Fricciones entre las ramas del poder público a propósito de la función pública en Colombia. Revista Estudios Socio-Jurídicos, 19(1), 79-123.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/1002/100220256004.pdf" target="_blank" rel="noopener noreferrer") Puyana Valdivieso, J. R., (2008). El control legislativo de la burocracia: un estado del arte. Civilizar. Ciencias Sociales y Humanas, 8(14), 63-83.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Id_CH_juMiA" target="_blank" rel="noopener noreferrer") yordani cifuentes. (2017). rama ejecutiva [video]. YouTube.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=eSJAJ2-j3mc" target="_blank" rel="noopener noreferrer") Rescate Ciudadano. (2018). Ramas del poder público y organismos de control [video]. YouTube.   


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WeXIHaf7cgg " target="_blank" rel="noopener noreferrer") Programas Telemedellín. (2020). Rama legislativa [La cosa pública] - Telemedellín [video]. YouTube.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OLIU5kmDBZ8 " target="_blank" rel="noopener noreferrer") Edu. Vitual y a Distancia de la U. de Cundinamarca. (2015). La estructura del Estado colombiano [video]. YouTube. 

 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué organismo representa la Rama Judicial en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La Presidencia.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La Fiscalía General.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El Congreso de la República.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La Corte Suprema de Justicia',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'La Corte Suprema de Justicia es parte de la rama judicial y actúa como tribunal de casación.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes funciones le corresponde al Congreso de la República?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ejecutar el presupuesto nacional.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Hacer cumplir sentencias.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Crear, reformar y derogar leyes.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Dirigir los ministerios.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El Congreso legisla y controla políticamente al gobierno, conforme a sus funciones constitucionales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué entidad vigila, investiga y sanciona disciplinariamente la conducta de los funcionarios públicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Corte Constitucional.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fiscalía General de la Nación.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Procuraduría General de la Nación.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Contraloría Distrital.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La Procuraduría se encarga de ejercer control disciplinario sobre los servidores públicos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué entidad fiscaliza el uso adecuado de los recursos públicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fiscalía General de la Nación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Registraduría Nacional.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Contraloría General de la República.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ministerio de Hacienda.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La Contraloría vigila la ejecución presupuestal y el manejo de los recursos del Estado.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué principio sustenta el modelo de separación de poderes en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Concentración del poder.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Intervención extranjera',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Equilibrio y autonomía entre ramas del poder público.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Supremacía del poder legislativo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La separación de poderes garantiza que cada rama cumpla sus funciones de forma independiente y equilibrada.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
