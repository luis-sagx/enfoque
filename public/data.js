/* ============================================================
   Centro de Mando · datos
   Editá acá el contenido; app.js se encarga de renderizarlo.
   ============================================================ */

/* --- HORARIO ---------------------------------------------------
   Cada día: { tag:{label, cls}, rows:[{t, type, title, note}] }
   type controla el color del bloque (ver styles.css .b-*):
   en | cls | gym | food | work | skill | mob | rest
---------------------------------------------------------------- */
const SCHEDULE = [
  { day:'Lunes', tag:{label:'ENTRENO · TORSO A', cls:'gym'}, rows:[
    {t:'05:15', type:'rest',  title:'Alistarte para la U',        note:'ducha rápida, ropa, mochila U + mochila de entreno'},
    {t:'05:40', type:'food',  title:'Desayuno 1'},
    {t:'06:00', type:'en',    title:'Transporte → U · Inglés',    note:'podcast (escucha pasiva, sin forzar)'},
    {t:'07:00', type:'cls',   title:'Clases U',                   note:'7–11 · snack 1 en el receso'},
    {t:'11:00', type:'en',    title:'Transporte → casa',          note:'audiolibro / podcast'},
    {t:'12:00', type:'food',  title:'Almuerzo'},
    {t:'13:00', type:'work',  title:'Trabajo remoto',             note:'bloque foco 4 h · pausa de postura cada hora'},
    {t:'17:00', type:'food',  title:'Snack pre-entreno + tareas U', note:'yogur griego + granola'},
    {t:'18:00', type:'gym',   title:'Entreno · Torso A',          note:'~60 min · anotá series y reps'},
    {t:'19:00', type:'rest',  title:'Ducha',                      note:'apenas terminás de entrenar'},
    {t:'19:30', type:'food',  title:'Merienda (post-entreno)',    note:'proteína + carbohidrato'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min · cadena posterior, pecho, cadera'},
    {t:'20:15', type:'skill', title:'Nueva habilidad',            note:'curso/proyecto 30–45 min (en inglés)'},
    {t:'21:00', type:'en',    title:'Inglés · Anki + output',     note:'Anki 15 min + hablar 10 min + escribir 5 frases'},
    {t:'21:45', type:'rest',  title:'Alistar mañana'},
    {t:'22:30', type:'rest',  title:'Dormir',                     note:'≈ 7 h'}
  ]},
  { day:'Martes', tag:{label:'ENTRENO · PIERNA A', cls:'gym'}, rows:[
    {t:'05:15', type:'rest',  title:'Alistarte para la U',        note:'ropa, mochila U + mochila de entreno'},
    {t:'05:40', type:'food',  title:'Desayuno 1'},
    {t:'06:00', type:'en',    title:'Transporte → U · Inglés',    note:'podcast'},
    {t:'07:00', type:'cls',   title:'Clases U',                   note:'7–11 · snack 1 en el receso'},
    {t:'11:00', type:'en',    title:'Transporte → casa',          note:'audiolibro'},
    {t:'12:00', type:'food',  title:'Almuerzo'},
    {t:'13:00', type:'work',  title:'Trabajo remoto',             note:'bloque foco 4 h · pausa de postura cada hora'},
    {t:'17:00', type:'food',  title:'Snack pre-entreno + tareas U', note:'yogur griego + granola'},
    {t:'18:00', type:'gym',   title:'Entreno · Pierna A',         note:'~60 min · anotá series y reps'},
    {t:'19:00', type:'rest',  title:'Ducha',                      note:'apenas terminás de entrenar'},
    {t:'19:30', type:'food',  title:'Merienda (post-entreno)',    note:'proteína + carbohidrato'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min · enfocá piernas y cadera'},
    {t:'20:15', type:'skill', title:'Nueva habilidad',            note:'30–45 min'},
    {t:'21:00', type:'en',    title:'Inglés · Anki + output',     note:'Anki 15 min + hablar + escribir'},
    {t:'21:45', type:'rest',  title:'Alistar mañana'},
    {t:'22:30', type:'rest',  title:'Dormir'}
  ]},
  { day:'Miércoles', tag:{label:'DESCANSO', cls:'rest'}, rows:[
    {t:'05:15', type:'rest',  title:'Alistarte para la U',        note:'ropa + almuerzo para llevar a la pasantía'},
    {t:'05:40', type:'food',  title:'Desayuno 1'},
    {t:'06:00', type:'en',    title:'Transporte → U · Inglés',    note:'podcast'},
    {t:'07:00', type:'cls',   title:'Clases U',                   note:'7–11 · snack 1 en el receso'},
    {t:'11:00', type:'en',    title:'Transporte → pasantía',      note:'audiolibro · llevá almuerzo ligero'},
    {t:'12:00', type:'work',  title:'Pasantía presencial',        note:'12–14'},
    {t:'14:00', type:'en',    title:'Transporte → casa',          note:'audiolibro'},
    {t:'15:00', type:'food',  title:'Comida fuerte (tardía)'},
    {t:'15:30', type:'work',  title:'Remoto · completar horas',   note:'~2 h · pausa de postura cada hora'},
    {t:'17:30', type:'skill', title:'Tareas U → nueva habilidad'},
    {t:'19:30', type:'food',  title:'Merienda'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min'},
    {t:'20:15', type:'en',    title:'Inglés · Anki + output',     note:'Anki 15 min + hablar + escribir'},
    {t:'22:30', type:'rest',  title:'Dormir'}
  ]},
  { day:'Jueves', tag:{label:'ENTRENO · TORSO B', cls:'gym'}, rows:[
    {t:'05:15', type:'rest',  title:'Alistarte para la U',        note:'ropa, mochila U + mochila de entreno'},
    {t:'05:40', type:'food',  title:'Desayuno 1'},
    {t:'06:00', type:'en',    title:'Transporte → U · Inglés',    note:'podcast + shadowing'},
    {t:'07:00', type:'cls',   title:'Clases U (7–13)',            note:'snack 1 ~10:00 · bloque largo'},
    {t:'13:00', type:'en',    title:'Transporte → casa',          note:'audiolibro'},
    {t:'14:00', type:'food',  title:'Almuerzo'},
    {t:'14:30', type:'work',  title:'Trabajo remoto',             note:'~3 h · pausa de postura cada hora'},
    {t:'17:00', type:'food',  title:'Snack pre-entreno'},
    {t:'18:00', type:'gym',   title:'Entreno · Torso B',          note:'~60 min · anotá series y reps'},
    {t:'19:00', type:'rest',  title:'Ducha',                      note:'apenas terminás de entrenar'},
    {t:'19:30', type:'food',  title:'Merienda (post-entreno)',    note:'proteína + carbohidrato'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min · cadena posterior, pecho, hombros'},
    {t:'20:15', type:'skill', title:'Nueva habilidad',            note:'30–45 min'},
    {t:'21:00', type:'en',    title:'Inglés · Anki + output',     note:'Anki 15 min + hablar + escribir'},
    {t:'22:30', type:'rest',  title:'Dormir'}
  ]},
  { day:'Viernes', tag:{label:'DESCANSO', cls:'rest'}, rows:[
    {t:'05:30', type:'rest',  title:'Alistarte para la pasantía', note:'ropa + desayuno'},
    {t:'06:00', type:'food',  title:'Desayuno 1'},
    {t:'06:30', type:'en',    title:'Transporte · Inglés',        note:'podcast'},
    {t:'08:00', type:'work',  title:'Pasantía presencial',        note:'8–13 · snack en el receso'},
    {t:'13:00', type:'en',    title:'Transporte → casa',          note:'audiolibro'},
    {t:'14:00', type:'food',  title:'Almuerzo'},
    {t:'14:30', type:'skill', title:'Proyecto personal / curso',  note:'bloque tech largo'},
    {t:'17:00', type:'rest',  title:'Ocio / social',              note:'cierre de la semana laboral'},
    {t:'19:30', type:'food',  title:'Merienda'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min'},
    {t:'20:15', type:'en',    title:'Inglés ligero',              note:'serie con subtítulos en inglés'},
    {t:'23:00', type:'rest',  title:'Dormir',                     note:'puede correrse'}
  ]},
  { day:'Sábado', tag:{label:'ENTRENO · PIERNA B', cls:'gym'}, rows:[
    {t:'07:30', type:'rest',  title:'Despertar (sin alarma estricta)'},
    {t:'08:00', type:'en',    title:'Anki + Desayuno',            note:'repaso del mazo'},
    {t:'09:00', type:'gym',   title:'Entreno · Pierna B',         note:'~60 min'},
    {t:'10:00', type:'rest',  title:'Ducha'},
    {t:'10:30', type:'skill', title:'Proyecto / curso',           note:'bloque largo de tech, ~2.5 h'},
    {t:'13:00', type:'food',  title:'Almuerzo'},
    {t:'14:00', type:'cls',   title:'Tareas U / proyecto'},
    {t:'16:00', type:'rest',  title:'Libre + caminata',           note:'suma pasos (8–10k)'},
    {t:'18:00', type:'en',    title:'Inglés · input largo',       note:'película/serie con subs en inglés'},
    {t:'19:30', type:'food',  title:'Merienda + social'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min'},
    {t:'23:00', type:'rest',  title:'Dormir'}
  ]},
  { day:'Domingo', tag:{label:'DESCANSO TOTAL', cls:'rest'}, rows:[
    {t:'08:00', type:'rest',  title:'Despertar libre + desayuno'},
    {t:'10:00', type:'en',    title:'Repaso semanal de inglés',   note:'errores de la semana + 1 unidad de gramática (Murphy)'},
    {t:'11:00', type:'food',  title:'Meal prep + plan de la semana', note:'cocina base: arroz, menestra, pollo'},
    {t:'13:00', type:'food',  title:'Almuerzo'},
    {t:'14:00', type:'rest',  title:'Descanso / familia / ocio'},
    {t:'18:00', type:'rest',  title:'Alistar el lunes',           note:'ropa, maleta, mochila de entreno'},
    {t:'19:30', type:'food',  title:'Merienda'},
    {t:'20:00', type:'mob',   title:'Estiramiento + postura',     note:'15 min'},
    {t:'20:15', type:'en',    title:'Inglés ligero',              note:'podcast relajado'},
    {t:'22:30', type:'rest',  title:'Dormir',                     note:'vuelve al horario base'}
  ]}
];

/* --- ENTRENO ---------------------------------------------------
   Cada bloque: { tag, title, rows:[{ex, sub, sets, key}] }
---------------------------------------------------------------- */
const WORKOUTS = [
  { tag:'LUN', title:'Torso A · Tracción + postura', rows:[
    {ex:'Dominadas',           sub:'Espalda (ancho)',         sets:'4 × máx',  key:'Si no salen, negativas: baja en 5 s.'},
    {ex:'Fondos (dips)',       sub:'Pecho · tríceps',         sets:'4 × 8–12', key:'Inclínate un poco al frente para pecho.'},
    {ex:'Remo con mochila',    sub:'Espalda media · postura', sets:'4 × 12',   key:'Torso inclinado, lleva al ombligo, aprieta escápulas.'},
    {ex:'Flexiones',           sub:'Pecho',                   sets:'3 × 12–15',key:'Cuerpo recto; mochila si es fácil.'},
    {ex:'Chin-ups',            sub:'Bíceps',                  sets:'3 × máx',  key:'Palmas hacia ti, jala con los brazos.'},
    {ex:'Face-pull con toalla',sub:'Hombro post. · postura',  sets:'3 × 15',   key:'Toalla en la barra; jala hacia la frente.'}
  ]},
  { tag:'MAR', title:'Pierna A + Core', rows:[
    {ex:'Sentadilla profunda',   sub:'Cuádriceps · glúteo', sets:'4 × 15–20', key:'Mochila pesada; talón pegado al suelo.'},
    {ex:'Zancadas',              sub:'Equilibrio · glúteo', sets:'3 × 12 c/p', key:'Paso largo, torso erguido.'},
    {ex:'Puente a una pierna',   sub:'Glúteo · lumbar',     sets:'3 × 12 c/p', key:'Aprieta el glúteo 1 s arriba.'},
    {ex:'Pantorrilla en escalón',sub:'Gemelos',             sets:'4 × 20',     key:'Estira abajo, sube lento.'},
    {ex:'Elevación de rodillas', sub:'Abdomen',             sets:'3 × 12',     key:'Colgado, sin balanceo.'},
    {ex:'Plancha',               sub:'Core',                sets:'3 × 40 s',   key:'Glúteo y abdomen apretados.'}
  ]},
  { tag:'JUE', title:'Torso B · Empuje', rows:[
    {ex:'Fondos (dips)',      sub:'Pecho · tríceps', sets:'4 × máx',  key:'Hoy es el protagonista; bajada controlada.'},
    {ex:'Pike push-ups',      sub:'Hombros',         sets:'4 × 8–12', key:'Cadera alta (V), cabeza al suelo.'},
    {ex:'Dominadas',          sub:'Espalda',         sets:'3 × máx',  key:'Rango completo.'},
    {ex:'Flexiones diamante', sub:'Tríceps',         sets:'3 × 12',   key:'Manos juntas bajo el pecho.'},
    {ex:'Remo con mochila',   sub:'Espalda',         sets:'3 × 12',   key:'Muy lento, 2 s arriba.'},
    {ex:'Wall angels',        sub:'Postura',         sets:'3 × 12',   key:'Espalda en la pared, brazos suben/bajan.'}
  ]},
  { tag:'SÁB', title:'Pierna B + Core', rows:[
    {ex:'Sentadilla búlgara',     sub:'Cuádriceps · glúteo', sets:'3 × 12 c/p', key:'Pie de atrás en una silla.'},
    {ex:'Sentadilla con mochila', sub:'Piernas',             sets:'4 × 15',     key:'Bajada controlada 3 s.'},
    {ex:'Curl femoral con toalla',sub:'Isquios',             sets:'3 × 12',     key:'Desliza talones en piso liso.'},
    {ex:'Pantorrilla',            sub:'Gemelos',             sets:'4 × 20',     key:'En escalón, rango completo.'},
    {ex:'Hollow hold',            sub:'Core',                sets:'3 × 25 s',   key:'Lumbar pegada al piso.'},
    {ex:'Plancha lateral',        sub:'Oblicuos',            sets:'3 × 20 s c/l', key:'Cadera arriba, línea recta.'}
  ]}
];

/* --- NUTRICIÓN -------------------------------------------------
   Cada día: { day, tag:{label, cls}, meals:[{h, p}], total }
---------------------------------------------------------------- */
const MEALS = [
  { day:'Lunes', tag:{label:'post-entreno', cls:'gym'}, meals:[
    {h:'Desayuno',           p:'Batido: 300 ml leche entera + 60 g avena + 1 guineo + 1 cda (16 g) mantequilla de maní. Aparte: 2 huevos revueltos.'},
    {h:'Snack 1 (receso)',   p:'30 g maní + 1 manzana.'},
    {h:'Almuerzo',           p:'1½ taza arroz (225 g cocido) + 1 taza menestra de lenteja + 120 g pechuga de pollo + ½ aguacate.'},
    {h:'Snack 2 (pre-entreno)', p:'200 g yogur griego + 40 g granola.'},
    {h:'Merienda',           p:'150 g tilapia + 200 g yuca cocida + ensalada con 1 cda aceite de oliva.'}
  ], total:'≈ 2.640 kcal · 139 g proteína'},
  { day:'Martes', tag:{label:'post-entreno', cls:'gym'}, meals:[
    {h:'Desayuno', p:'3 huevos revueltos + 2 panes integrales + 250 ml chocolate con leche entera.'},
    {h:'Snack 1',  p:'Sánduche de pollo (80 g pollo, 2 panes) + 1 yogur bebible.'},
    {h:'Almuerzo', p:'150 g pasta (cruda) + 120 g carne molida + salsa + ½ aguacate.'},
    {h:'Snack 2',  p:'30 g almendras + 1 guineo.'},
    {h:'Merienda', p:'Sopa de avena (40 g avena + leche) + 2 huevos + 1 pan.'}
  ], total:'≈ 2.650 kcal · 133 g proteína'},
  { day:'Miércoles', tag:{label:'descanso', cls:'rest'}, meals:[
    {h:'Desayuno',          p:'Tigrillo de 1 verde grande con 2 huevos y 40 g queso + café con leche.'},
    {h:'Snack 1',           p:'1 taza fruta picada + 40 g granola + 1 cda miel.'},
    {h:'Almuerzo (llévalo)',p:'1 taza arroz + 120 g pollo + ensalada + ½ aguacate.'},
    {h:'Snack 2',           p:'40 g queso + 20 g nueces.'},
    {h:'Merienda (fuerte)', p:'Seco de pollo (150 g) con 1 taza arroz y ½ maduro.'}
  ], total:'≈ 2.580 kcal · 124 g proteína'},
  { day:'Jueves', tag:{label:'post-entreno', cls:'gym'}, meals:[
    {h:'Desayuno',             p:'Batido: 300 ml leche + 60 g avena + ½ taza papaya/frutos rojos + 1 cda maní. Aparte: 2 huevos.'},
    {h:'Snack 1 (receso largo)', p:'Sánduche de queso o atún + 1 fruta.'},
    {h:'Almuerzo',             p:'1½ taza arroz + 1 taza menestra de fréjol + 130 g carne + ½ aguacate.'},
    {h:'Snack 2 (pre-entreno)',p:'200 g yogur griego + 1 guineo + 20 g granola.'},
    {h:'Merienda',             p:'150 g pollo a la plancha + 200 g papa + ensalada con aceite de oliva.'}
  ], total:'≈ 2.760 kcal · 153 g proteína'},
  { day:'Viernes', tag:{label:'descanso', cls:'rest'}, meals:[
    {h:'Desayuno', p:'Bolón de verde con queso (o chicharrón) + 2 huevos + café.'},
    {h:'Snack 1',  p:'30 g frutos secos + 1 yogur.'},
    {h:'Almuerzo', p:'1 taza arroz + 150 g pescado (corvina/atún) + ½ porción patacones + ensalada.'},
    {h:'Snack 2',  p:'40 g chocolate amargo 70% + 20 g maní.'},
    {h:'Merienda', p:'Arroz con 1 lata de atún + 1 huevo, o encebollado con 1 pan.'}
  ], total:'≈ 2.600 kcal · 120 g proteína'},
  { day:'Sábado', tag:{label:'post-entreno', cls:'gym'}, meals:[
    {h:'Desayuno', p:'3 huevos + 2 panes + 200 g yogur griego + 1 guineo.'},
    {h:'Snack 1',  p:'1 taza fruta + 40 g granola + miel.'},
    {h:'Almuerzo', p:'Seco de carne (150 g) con 1½ taza arroz, ½ maduro y ½ aguacate.'},
    {h:'Snack 2',  p:'30 g almendras + 40 g queso.'},
    {h:'Merienda', p:'150 g pollo + 1 taza quinua o arroz + ensalada con aceite de oliva.'}
  ], total:'≈ 2.690 kcal · 135 g proteína'},
  { day:'Domingo', tag:{label:'libre', cls:'rest'}, meals:[
    {h:'Desayuno',       p:'2 humitas (o bolón) + 2 huevos + café con leche.'},
    {h:'Snack 1',        p:'30 g nueces + 1 fruta.'},
    {h:'Almuerzo libre', p:'Ceviche de camarón con chifles + 1 taza arroz (o encebollado).'},
    {h:'Snack 2',        p:'Batido: 300 ml leche + 40 g avena + 1 fruta.'},
    {h:'Merienda',       p:'Sánduche potente: 90 g pollo/atún + 2 panes + queso + aguacate, con leche.'}
  ], total:'≈ 2.540 kcal · 116 g proteína'}
];

/* --- INGLÉS · Caja de herramientas por función -----------------
   Cada herramienta: { name, free:{label, cls}, fn, when, how }
   free.cls: g = gratis · p = pago/freemium/libro
---------------------------------------------------------------- */
const TOOLS = [
  { name:'Anki', free:{label:'GRATIS', cls:'g'},
    fn:'Vocabulario (repetición espaciada)',
    when:'21:00, en el bloque de la noche · 15 min',
    how:'Repasás el mazo pendiente y agregás 10 tarjetas nuevas con palabras que viste hoy. Gratis en PC/Android (en iPhone es de pago).' },
  { name:'English Grammar in Use', free:{label:'LIBRO', cls:'p'},
    fn:'Gramática',
    when:'Domingo, repaso semanal · ~45 min',
    how:'1 unidad + revisás los errores que anotaste en la semana. El de Raymond Murphy, edición intermedia (tapa azul). Hay versión app.' },
  { name:'BBC Learning English', free:{label:'GRATIS', cls:'g'},
    fn:'Input estructurado por nivel',
    when:'Transporte de la mañana',
    how:'Empezá por el podcast 6 Minute English y las series por nivel. App y web.' },
  { name:'LingQ', free:{label:'FREEMIUM', cls:'p'},
    fn:'Leer escuchando',
    when:'Inmersión tech del mediodía o ratos libres',
    how:'Importás un artículo o video: leés mientras escuchás y tocás las palabras que no sabés para traducirlas y guardarlas.' },
  { name:'YouTube · canales', free:{label:'GRATIS', cls:'g'},
    fn:'Input por nivel (con imagen)',
    when:'Ocio de viernes / sábado, en vez de scroll',
    how:'A2–B1: Easy English, English with Lucy, BBC Learning English. Luego tech: Fireship, freeCodeCamp, Web Dev Simplified.' },
  { name:'Podcasts', free:{label:'GRATIS', cls:'g'},
    fn:'Input para los oídos',
    when:'Transporte (los ~60 min en bus)',
    how:'A2–B1: 6 Minute English, Espresso English, All Ears English. B1+: Syntax, CodeNewbie (tech).' },
  { name:'HelloTalk / Tandem', free:{label:'FREEMIUM', cls:'p'},
    fn:'Output con nativos (texto/voz)',
    when:'Bloque de output 21:00, cuando no tengas con quién hablar',
    how:'Ofrecés corregir su español a cambio de que te corrijan el inglés.' },
  { name:'italki', free:{label:'PAGO', cls:'p'},
    fn:'Tutor 1:1',
    when:'1–2 sesiones/semana, cuando llegues a B1',
    how:'Los community tutors son económicos. Reservá sesiones de conversación.' },
  { name:'IA conversacional', free:{label:'GRATIS', cls:'g'},
    fn:'Output sin pena (hablar)',
    when:'21:00, tu bloque de output diario · 10–15 min',
    how:'Usá el modo voz de Claude/ChatGPT: "háblame en inglés nivel B1 y corrige mis errores". Tu compañero de práctica 24/7.' },
  { name:'ELSA Speak', free:{label:'FREEMIUM', cls:'p'},
    fn:'Pronunciación',
    when:'10 min sueltos (transporte o noche)',
    how:'Coach de acento con IA: te marca exactamente qué sonidos corregir.' },
  { name:'Reverso Context', free:{label:'GRATIS', cls:'g'},
    fn:'Palabras en contexto (consulta rápida)',
    when:'Al instante, cuando dudes cómo se usa una palabra',
    how:'La ves en frases reales con traducción; guardá la que te sirva para una tarjeta de Anki.' },
  { name:'EF SET', free:{label:'GRATIS', cls:'g'},
    fn:'Medir tu nivel (CEFR)',
    when:'Ahora y cada 2–3 meses',
    how:'Test de ~50 min que te da tu puntaje A2/B1/B2. Anotá el resultado para ver el avance.' }
];

/* --- HÁBITOS ---------------------------------------------------
   Filas de categoría: { cat }
   Filas de hábito: { name, sub?, rest:[L,M,X,J,V,S,D] } (1 = descanso planificado)
---------------------------------------------------------------- */
const HABITS = [
  {cat:'NUTRICIÓN'},
  {name:'Desayuno 1', sub:'mañana', rest:[0,0,0,0,0,0,0]},
  {name:'Almuerzo + grasa buena', sub:'aceite / aguacate', rest:[0,0,0,0,0,0,0]},
  {name:'Merienda proteica', rest:[0,0,0,0,0,0,0]},
  {name:'Agua 3 L', rest:[0,0,0,0,0,0,0]},
  {name:'Proteína ≥120 g', rest:[0,0,0,0,0,0,0]},
  {cat:'CUERPO Y POSTURA'},
  {name:'Entreno', sub:'Lun·Mar·Jue·Sáb', rest:[0,0,1,0,1,0,1]},
  {name:'Estiramiento + postura', sub:'15 min tras la merienda', rest:[0,0,0,0,0,0,0]},
  {name:'Pausas de postura', sub:'wall angels al trabajar', rest:[0,0,0,0,0,0,0]},
  {name:'8–10k pasos', rest:[0,0,0,0,0,0,0]},
  {cat:'INGLÉS (PRIORIDAD)'},
  {name:'Anki vocabulario', rest:[0,0,0,0,0,0,0]},
  {name:'Input + shadowing', sub:'transporte / escucha', rest:[0,0,0,0,0,0,0]},
  {name:'Output', sub:'hablar / escribir', rest:[0,0,0,0,0,0,0]},
  {cat:'TECH Y ENFOQUE'},
  {name:'Trabajo / pasantía (~4 h)', rest:[0,0,0,0,0,1,1]},
  {name:'1 Skill / proyecto', sub:'30–60 min', rest:[0,0,0,0,0,0,1]},
  {cat:'CIERRE'},
  {name:'Dormir ~7 h', sub:'cierre 22:30', rest:[0,0,0,0,0,0,0]},
  {name:'Alistar la noche anterior', rest:[0,0,0,0,0,0,0]}
];
