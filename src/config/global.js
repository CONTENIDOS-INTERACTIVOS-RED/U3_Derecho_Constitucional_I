export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'La estructura orgánica del Estado colombiano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organización general del Estado colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Principios constitucionales que rigen la estructura estatal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fines esenciales del Estado colombiano',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ramas del poder público',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Rama Legislativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Rama Ejecutiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Rama Judicial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Uribe Arzate, E. (2010). El principio de supremacía constitucional: exégesis y prolegómenos. Editorial Miguel Ángel Porrúa.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/38315',
    },
    {
      referencia:
        'Villar Borda, L. (2007). Estado de derecho y Estado social de derecho. Revista Derecho del Estado, (20), 73-96.  ',
      link: 'https://www.redalyc.org/pdf/3376/337630229006.pdf',
    },
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). Constitución política de Colombia (3a ed.). Grupo Editorial Nueva Legislación SAS.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/68946?page=63',
    },
    {
      referencia:
        'Páez Murcia, Á. M. (2005). Aplicabilidad de la teoría de la división de poderes en la actualidad: estudio comparado del sistema de controles que se ejercen sobre la rama ejecutiva del poder público en algunos estados de Latinoamérica recibido octubre. Dikaion, (14). D - Universidad de La Sabana.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/5635?page=7',
    },
    {
      referencia:
        'Bisagra, L. (2020). Reseña crítica de "Control estatal y administración: una reseña de su desarrollo", de D’Alessandro, Martín. La Bisagra.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/128783',
    },
    {
      referencia:
        'Franco Vargas, M. H., Ramírez Brouchoud, M. F. & Chinkousky Giraldo, M. A. (2019). Los controles a la administración pública en Colombia. Una aproximación al control social al presupuesto participativo en Medellín. Reflexión Política, 21(41), 50-63. ',
      link: ' https://doi.org/10.29375/01240781.3320',
    },
    {
      referencia:
        'Valencia Grajales, J. F. & Marín Galeano, M. S. (2022). Reforma constitucional en Colombia Entre la guerra y la defensa. El Ágora USB, 22(2), 818-841.  ',
      link: 'https://doi.org/10.21500/16578031.6276',
    },
    {
      referencia:
        'Avella, M. (2023). El Tempo Banco da República. Revista de Economía Institucional, 25(49), 3-26. ',
      link: 'https://doi.org/10.18601/01245996.v25n49.02 ',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía territorial',
      significado:
        'Capacidad de las entidades territoriales para gestionar sus propios asuntos, dentro del marco constitucional.',
    },
    {
      termino: 'Banco de la República',
      significado:
        'Órgano autónomo encargado de regular la política monetaria y preservar la estabilidad de la moneda.',
    },
    {
      termino: 'Carrera administrativa',
      significado:
        'Sistema que regula el ingreso, permanencia y ascenso de los servidores públicos, con base en el mérito.',
    },
    {
      termino: 'Comisión Nacional del Servicio Civil',
      significado:
        'Órgano autónomo que administra y vigila el mérito en el acceso al empleo público.',
    },
    {
      termino: 'Contraloría General de la República',
      significado:
        'Organismo de control fiscal encargado de vigilar la correcta gestión de los recursos públicos.',
    },
    {
      termino: 'Control fiscal',
      significado:
        'Supervisión del uso de los recursos públicos para garantizar su legalidad, eficiencia y transparencia.',
    },
    {
      termino: 'Corte Constitucional',
      significado:
        'Órgano encargado del control de constitucionalidad de las leyes y la protección de los derechos fundamentales.',
    },
    {
      termino: 'Corte Suprema de Justicia',
      significado:
        'Máxima autoridad de la jurisdicción ordinaria, resuelve litigios penales, laborales y civiles.',
    },
    {
      termino: 'Defensoría del Pueblo',
      significado:
        'Entidad del Ministerio Público que protege los derechos humanos, especialmente de poblaciones vulnerables.',
    },
    {
      termino: 'Descentralización',
      significado:
        'Transferencia de competencias administrativas y políticas del nivel central a entidades territoriales.',
    },
    {
      termino: 'Equilibrio de poderes',
      significado:
        'Principio que distribuye las funciones estatales entre ramas autónomas para evitar abusos.',
    },
    {
      termino: 'Jurisdicción contencioso-administrativa',
      significado:
        'Encargada de resolver conflictos entre ciudadanos y la administración pública.',
    },
    {
      termino: 'Ministerio Público',
      significado:
        'Órgano de control que vigila la conducta oficial y protege los derechos humanos.',
    },
    {
      termino: 'Personería municipal',
      significado:
        'Instancia local del Ministerio Público que protege derechos ciudadanos y vigila la gestión pública.',
    },
    {
      termino: 'Plan Nacional de Desarrollo',
      significado:
        'Instrumento que orienta las acciones del Gobierno para cumplir sus objetivos estratégicos.',
    },
    {
      termino: 'Presidencia de la República',
      significado:
        'Institución que lidera la Rama Ejecutiva, encargada de ejecutar leyes y dirigir el gobierno.',
    },
    {
      termino: 'Principio de Legalidad',
      significado:
        'Norma que establece que toda actuación estatal debe basarse en la Ley.',
    },
    {
      termino: 'Procuraduría General de la Nación',
      significado:
        'Entidad que investiga y sanciona disciplinariamente a servidores públicos.',
    },
    {
      termino: 'Rama Ejecutiva',
      significado:
        'Rama del poder público encargada de ejecutar leyes y administrar recursos.',
    },
    {
      termino: 'Rama Judicial',
      significado:
        'Rama del poder público encargada de impartir justicia de forma independiente.',
    },
    {
      termino: 'Rama Legislativa',
      significado:
        'Rama del poder público que crea leyes, ejerce control político y representa al pueblo.',
    },
  ],
}
