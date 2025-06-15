<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") La Constitución Política de 1991, es el fundamento normativo de la organización del Estado colombiano. Desde su artículo primero, define a Colombia como un Estado social de derecho, unitario, descentralizado, con autonomía de sus entidades territoriales y con una separación funcional del poder público, en ramas independientes. 
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta formulación no es meramente simbólica: estructura el modelo político-jurídico mediante el cual se ejerce la autoridad y se garantiza la vigencia de los derechos fundamentales (Villar Borda, 2007).
    
    h2(data-aos="fade-left") Estado Social de Derecho

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white Al caracterizarse como un Estado Social de Derecho, se asume una vocación garantista y democrática. Esto implica que el poder debe ejercerse respetando la dignidad humana, promoviendo la justicia material y corrigiendo las desigualdades. No basta con administrar legalidad; el Estado debe actuar activamente para ampliar la participación y asegurar el acceso equitativo al desarrollo. Las instituciones deben regirse por principios como la equidad, la solidaridad y el respeto por los derechos humanos.
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Forma republicana, unidad y descentralización

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La forma republicana del Estado, se manifiesta en la soberanía popular, la periodicidad de los cargos, el sufragio y la limitación temporal del poder. Esta dinámica garantiza que ningún poder sea perpetuo y que toda autoridad esté sujeta al control ciudadano. Simultáneamente, la unidad del Estado implica que, aunque existan diferentes niveles territoriales, solo hay un poder político soberano que actúa conforme a un marco jurídico común, lo cual lo diferencia de los modelos federales (Uribe Arzate, 2010).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La descentralización administrativa y política, permite acercar las decisiones a las comunidades, mejorar la gestión pública y reconocer la diversidad territorial. Se concreta en la existencia de departamentos, distritos, municipios y territorios indígenas, con autonomía para formular políticas, administrar recursos y ejecutar funciones. Esta autonomía, sin embargo, no implica independencia absoluta, dado que todas las entidades deben actuar coordinadamente dentro del Estado unitario.
    
    h2(data-aos="fade-left") Separación de poderes y órganos autónomos
    p.mb-5 Uno de los principios centrales del diseño institucional colombiano es la separación de poderes, que distribuye las funciones entre las ramas Legislativa, Ejecutiva y judicial, con el objetivo de evitar la concentración del poder y establecer un sistema de frenos y contrapesos. Esto garantiza la legalidad, protege la democracia y previene abusos por parte de cualquier autoridad.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-1.px-5.py-4.h-100(data-aos="fade-left")
          p.mb-0 A esta división clásica se suman los órganos de control y organismos autónomos, que, aunque no pertenecen a ninguna rama del poder público, cumplen funciones esenciales de forma independiente, asegurando la imparcialidad, la eficiencia y la especialización en áreas estratégicas como la justicia, la economía, el medio ambiente y los medios de comunicación.
    
    h2(data-aos="fade-left") Principios rectores del Estado
    p.mb-5 La organización del Estado colombiano, está guiada por los siguientes principios:

    .row.justify-content-center.align-content-center.mb-3
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-16.p-4(data-aos="fade-left").h-100
          h5.mb-0.text-center.text-white Legalidad.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-15.p-4(data-aos="fade-left").h-100
          h5.mb-0.text-center.text-white Moralidad.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-16.p-4(data-aos="fade-left").h-100
          h5.mb-0.text-center.text-white Transparencia.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-15.p-4(data-aos="fade-left").h-100
          h5.mb-0.text-center.text-white Responsabilidad.
      .col-lg-2.mb-3.mb-lg-0
        .bg-color-16.p-4(data-aos="fade-left").h-100
          h5.mb-0.text-center.text-white Participación ciudadana.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Estos principios no solo orientan la actuación de las autoridades, sino que sirven de criterios de evaluación para la legitimidad de sus decisiones. La rendición de cuentas, el acceso a la información y la incidencia ciudadana en los asuntos públicos son fundamentales para que el Estado cumpla sus fines constitucionales (Uribe Arzate, 2010).

    h2(data-aos="fade-left") Perspectiva integral del Estado
    p.mb-5 Comprender la organización estatal implica ir más allá de su estructura formal: se debe analizar cómo se distribuye y ejerce el poder, cómo se garantizan los derechos y cómo se gestiona la administración pública en función del interés general. Esta visión integral permite entender tanto el diseño del Estado como los desafíos que enfrenta en un contexto de desigualdad, conflicto, pluralismo y demandas ciudadanas crecientes. En definitiva, la estructura estatal es un medio para realizar los fines superiores del orden constitucional y democrático instaurado en 1991.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principios constitucionales que rigen la estructura estatal
    
    .bg-full-width.bg-h85-2
      .p-4.p-md-5 
        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") La estructura del Estado colombiano, tal como fue concebida en la Constitución Política de 1991, no responde únicamente a un esquema organizativo formal, sino que está sustentada sobre una base de principios constitucionales fundamentales que orientan y delimitan la actuación de todas las autoridades públicas. 
        
            .bg-color-5.p-4.mb-3(data-aos="fade-left")
              .row.align-items-end
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Estos principios operan como directrices superiores que guían la organización del poder, regulan la relación entre los distintos órganos del Estado y protegen los derechos de los ciudadanos. Conocerlos resulta esencial para interpretar correctamente el sentido del ordenamiento constitucional y comprender la manera en que se articula la autoridad pública en el país.
            p A continuación, se presenta una descripción de los principales principios constitucionales:
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema1/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Equilibrio de poderes") También conocido como principio de separación funcional o sistema de frenos y contrapesos. Garantiza que las funciones del Estado no se concentren en una sola institución y que cada rama del poder (Legislativa, Ejecutiva y Judicial) actúe dentro de sus competencias. Permite el control mutuo, la cooperación armónica y previene abusos.
          p(numero="2" titulo="Legalidad") Todas las actuaciones del Estado deben estar fundamentadas en normas jurídicas previamente establecidas. Ninguna autoridad puede ejercer poderes no conferidos expresamente por la Constitución o la Ley. Garantiza previsibilidad, seguridad jurídica y protección frente a la arbitrariedad.
          p(numero="3" titulo="Participación ciudadana") Reconoce la soberanía popular y el derecho a la participación política, incluyendo mecanismos de democracia directa. Permite que la ciudadanía incida activamente en la formulación de políticas, el control social, la planeación del desarrollo, la rendición de cuentas y la defensa de derechos colectivos.
    
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="4" titulo="Descentralización") Implica que las entidades territoriales (departamentos, distritos, municipios y territorios indígenas) tengan autonomía para gestionar sus propios asuntos dentro del marco constitucional y legal. Favorece la eficiencia, la equidad territorial y el acceso a los servicios públicos. (Villar Borda, 2007).
          p(numero="5" titulo="Autonomía territorial") Ligado a la descentralización. Garantiza que las entidades territoriales cuenten con competencias propias, recursos financieros y órganos de gobierno elegidos democráticamente. No supone independencia, pero sí un margen de decisión en temas como ordenamiento territorial, inversión social y asuntos locales.
          p(numero="6" titulo="Primacía de la Constitución") Todas las autoridades, normas y actos deben ajustarse a la Constitución. Se expresa en su supremacía como norma de normas, en el control de constitucionalidad de las leyes y en la invalidez de actos contrarios a la Carta. Asegura la vigencia de los principios, valores y derechos fundamentales.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 En conjunto, estos principios conforman el andamiaje jurídico que sostiene la estructura del Estado colombiano. No se trata de simples enunciados teóricos, sino de fundamentos operativos que deben aplicarse en todas las decisiones públicas, en la creación de normas, en la ejecución de políticas, en la resolución de conflictos y en la organización institucional. Su observancia es condición indispensable para el respeto del Estado Social de Derecho y para la vigencia efectiva de la democracia, la legalidad y los derechos humanos en el país.
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Fines esenciales del Estado colombiano
    
    p.mb-4 La Constitución Política de 1991 establece en su Artículo 2, los fines esenciales del Estado colombiano, los cuales constituyen la razón de ser de las instituciones públicas y orientan la actuación de todos los órganos del poder. Estos fines no deben entenderse como objetivos retóricos, sino como mandatos concretos que definen el propósito superior de la organización estatal en una sociedad democrática, pluralista y comprometida con el respeto por la dignidad humana. Comprenderlos permite analizar el rol del Estado como garante del bienestar general, promotor de la justicia social y facilitador del desarrollo humano en condiciones de equidad.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5 Servir a la comunidad
              p El poder público debe responder a las necesidades colectivas. Las autoridades tienen el deber de orientar su gestión hacia la satisfacción de los derechos y expectativas de la ciudadanía.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 Garantizar la efectividad de los derechos
              p El Estado debe adoptar medidas para que los derechos constitucionales se hagan realidad en la vida cotidiana. Esto implica políticas, recursos, normas claras y atención diferencial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 Promover la prosperidad general
              p Implica un proceso incluyente y sostenible que mejore las condiciones de vida, reduzca brechas, combata la pobreza y fomente la productividad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Mantener la integridad territorial
              p Preservar la unidad geográfica, política y jurídica del país, proteger la soberanía y garantizar presencia estatal en todo el territorio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Asegurar la convivencia pacífica
              p Base de la vida social. Incluye prevención y resolución pacífica de conflictos, promoción del respeto, el diálogo y el acceso a la justicia.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Estos fines configuran un mandato constitucional vinculante que orienta las decisiones del legislador, del ejecutivo, de la administración pública y del poder judicial. No se trata de metas separadas, sino de elementos interdependientes que deben ser considerados de manera integral. Servir a la comunidad, garantizar los derechos, promover la prosperidad, mantener la integridad territorial y asegurar la convivencia son responsabilidades compartidas por todo el aparato estatal, que deben guiar la formulación de políticas, la asignación de recursos, la evaluación del desempeño institucional y el diseño de mecanismos de rendición de cuentas (Villar Borda, 2007).
    
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, los fines esenciales del Estado colombiano constituyen el núcleo teleológico del orden constitucional y representan el compromiso colectivo con una forma de organización política al servicio de la ciudadanía. Su realización efectiva es la medida más precisa para evaluar la legitimidad del Estado, la eficacia de las instituciones y la calidad de la democracia. Por ello, conocer, analizar y exigir su cumplimiento fortalece la cultura constitucional y contribuye a la transformación del país en una sociedad más justa, equitativa y respetuosa de la dignidad de todas las personas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61263?page=92" target="_blank" rel="noopener noreferrer") Greppi, A. (2012). La democracia y su contrario: representación, separación de poderes y opinión pública. Editorial Trotta, S.A.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/68946?page=63 " target="_blank" rel="noopener noreferrer") Chavarro Cadena, J. E. (2018). Constitución política de Colombia. (3a ed.). Grupo Editorial Nueva Legislación SAS. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.br/j/rinc/a/GvvBBnPRvncMJn6J3GbB5bz/?lang=es " target="_blank" rel="noopener noreferrer") Silva Arroyave, S. O. (2024). El equilibrio de poderes en Colombia: entre la incorrecta comprensión teórica y la inadecuada formulación constitucional. Revista de Investigações Constitucionais, 11(2). 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=655872551009 " target="_blank" rel="noopener noreferrer") Rodelo García, M., Mejía Turizo, J., Vásquez Torres, H. J. & Salazar Mata, H. (2023). Análisis crítico sobre cumplimiento de las multas estatales y garantías públicas del control disciplinario. Revista Política, Globalidad y Ciudadanía, 9(17), 60-88. 

 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=itBd1JQ6Uy8 " target="_blank" rel="noopener noreferrer") Pensando Bolivia. (2010). Carlos Moreno - Proceso de descentralización en Colombia [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=nWahVjbooZU " target="_blank" rel="noopener noreferrer") Facultad de Derecho. (2020). Semana 4 Derecho Administrativo General Grupos D,E,F,G [video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
