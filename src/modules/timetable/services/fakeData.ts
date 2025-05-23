// Dados fake completos para todos os cenários do planejamento

// Professores
export const teachers = [
  { id: 1, name: 'Olavo de Carvalho', email: 'olavo.carvalho@school.edu', phone: '(11) 99999-1111', subjects: [1, 2], availability: ['Segunda-07:00-12:00', 'Terça-07:00-12:00', 'Quarta-13:00-17:00'], preferences: { avoidFirstPeriod: true, preferredDays: ['Terça', 'Quarta'] } },
  { id: 2, name: 'Luiz Felipe Pondé', email: 'lf.ponde@school.edu', phone: '(11) 99999-2222', subjects: [3, 4], availability: ['Segunda-13:00-18:00', 'Quinta-07:00-12:00'] },
  { id: 3, name: 'Rodrigo Constantino', email: 'rodrigo.constantino@school.edu', phone: '(11) 99999-3333', subjects: [2, 5], availability: ['Terça-07:00-12:00', 'Quarta-07:00-12:00', 'Sexta-13:00-18:00'], preferences: { preferredDays: ['Sexta'] } },
  { id: 4, name: 'Bruno Garschagen', email: 'bruno.garschagen@school.edu', phone: '(11) 99999-4444', subjects: [1, 3], availability: ['Segunda-07:00-12:00', 'Quinta-13:00-18:00'] },
  { id: 5, name: 'Flávio Morgenstern', email: 'flavio.morgenstern@school.edu', phone: '(11) 99999-5555', subjects: [6, 7], availability: ['Segunda-07:00-12:00', 'Quarta-07:00-12:00'], preferences: { preferredDays: ['Segunda', 'Quarta'] } },
  { id: 6, name: 'Paulo Kogos', email: 'paulo.kogos@school.edu', phone: '(11) 99999-6666', subjects: [8, 9], availability: ['Terça-13:00-18:00', 'Quinta-13:00-18:00'] },
  { id: 7, name: 'Kim Kataguiri', email: 'kim.kataguiri@school.edu', phone: '(11) 99999-7777', subjects: [10, 11], availability: ['Sexta-07:00-12:00', 'Sexta-13:00-18:00'] },
  { id: 8, name: 'Janaína Paschoal', email: 'janaina.paschoal@school.edu', phone: '(11) 99999-8888', subjects: [12, 13], availability: ['Quarta-07:00-12:00', 'Quinta-07:00-12:00'] },
  { id: 9, name: 'Allan dos Santos', email: 'allan.santos@school.edu', phone: '(11) 99999-9999', subjects: [14, 15], availability: ['Segunda-13:00-18:00', 'Terça-13:00-18:00'] },
  { id: 10, name: 'Nando Moura', email: 'nando.moura@school.edu', phone: '(11) 99999-1010', subjects: [16, 17], availability: ['Quarta-13:00-18:00', 'Sexta-13:00-18:00'] },
];

// Disciplinas
export const subjects = [
  { id: 1, name: 'Matemática', description: 'Estudo dos números, formas e padrões.', weeklyLoad: 5 },
  { id: 2, name: 'Inglês', description: 'Língua inglesa e literatura.', weeklyLoad: 2 },
  { id: 3, name: 'História', description: 'Estudo dos eventos históricos.', weeklyLoad: 3 },
  { id: 4, name: 'Ciências', description: 'Estudo das ciências naturais.', weeklyLoad: 3 },
  { id: 5, name: 'Geografia', description: 'Estudo do espaço geográfico.', weeklyLoad: 2 },
  { id: 6, name: 'Educação Infantil', description: 'Atividades lúdicas e pedagógicas para crianças pequenas.', weeklyLoad: 4 },
  { id: 7, name: 'Psicomotricidade', description: 'Desenvolvimento motor e cognitivo.', weeklyLoad: 2 },
  { id: 8, name: 'Artes', description: 'Expressão artística e criatividade.', weeklyLoad: 2 },
  { id: 9, name: 'Educação Física', description: 'Atividades físicas e esportivas.', weeklyLoad: 2 },
  { id: 10, name: 'Biologia', description: 'Estudo dos seres vivos.', weeklyLoad: 2 },
  { id: 11, name: 'Química', description: 'Estudo das substâncias e suas transformações.', weeklyLoad: 2 },
  { id: 12, name: 'Física', description: 'Estudo das leis da natureza.', weeklyLoad: 2 },
  { id: 13, name: 'Filosofia', description: 'Reflexão crítica e ética.', weeklyLoad: 1 },
  { id: 14, name: 'Sociologia', description: 'Estudo da sociedade.', weeklyLoad: 1 },
  { id: 15, name: 'Português', description: 'Língua portuguesa e literatura.', weeklyLoad: 5 },
  { id: 16, name: 'Redação', description: 'Produção de textos.', weeklyLoad: 2 },
  { id: 17, name: 'Espanhol', description: 'Língua espanhola.', weeklyLoad: 2 },
];

// Turmas (Infantil, Fundamental, Médio)
export const classes = [
  // Educação Infantil
  { id: 1, name: 'Infantil I', year: 2024, shift: 'Manhã', studentsCount: 18 },
  { id: 2, name: 'Infantil II', year: 2024, shift: 'Tarde', studentsCount: 20 },
  // Ensino Fundamental Anos Iniciais
  { id: 3, name: '1º Ano A', year: 2024, shift: 'Manhã', studentsCount: 25 },
  { id: 4, name: '1º Ano B', year: 2024, shift: 'Tarde', studentsCount: 27 },
  { id: 5, name: '2º Ano', year: 2024, shift: 'Manhã', studentsCount: 26 },
  { id: 6, name: '3º Ano', year: 2024, shift: 'Tarde', studentsCount: 28 },
  // Ensino Fundamental Anos Finais
  { id: 7, name: '6º Ano', year: 2024, shift: 'Manhã', studentsCount: 30 },
  { id: 8, name: '7º Ano', year: 2024, shift: 'Tarde', studentsCount: 29 },
  { id: 9, name: '8º Ano', year: 2024, shift: 'Manhã', studentsCount: 31 },
  { id: 10, name: '9º Ano', year: 2024, shift: 'Tarde', studentsCount: 32 },
  // Ensino Médio
  { id: 11, name: '1ª Série EM', year: 2024, shift: 'Manhã', studentsCount: 33 },
  { id: 12, name: '2ª Série EM', year: 2024, shift: 'Tarde', studentsCount: 30 },
  { id: 13, name: '3ª Série EM', year: 2024, shift: 'Noite', studentsCount: 28 },
  // Nova turma noturna
  { id: 14, name: '1º Ano Noite', year: 2024, shift: 'Noite', studentsCount: 25 },
];

// Intervalos (Breaks)
export const breaks = [
  { id: 1, label: 'Intervalo da Manhã', start: '10:00', end: '10:30' },
  { id: 2, label: 'Intervalo da Tarde', start: '15:00', end: '15:30' },
  { id: 3, label: 'Intervalo da Noite', start: '20:00', end: '20:30' },
];

// Salas
export const rooms = [
  { id: 1, name: 'Sala 101', type: 'Sala', capacity: 30, availability: [
    { day: 'Segunda', time: '07:00-12:00' },
    { day: 'Terça', time: '07:00-12:00' },
    { day: 'Quarta', time: '07:00-12:00' },
  ], breakIds: [1] },
  { id: 2, name: 'Laboratório de Ciências', type: 'Laboratório', capacity: 20, availability: [
    { day: 'Segunda', time: '13:00-18:00' },
    { day: 'Quinta', time: '07:00-12:00' },
  ], breakIds: [2] },
  { id: 3, name: 'Quadra', type: 'Quadra', capacity: 50, availability: [
    { day: 'Sexta', time: '07:00-12:00' },
  ], breakIds: [1] },
  { id: 4, name: 'Sala 201', type: 'Sala', capacity: 30, availability: [
    { day: 'Segunda', time: '13:00-18:00' },
    { day: 'Terça', time: '13:00-18:00' },
  ], breakIds: [2] },
  { id: 5, name: 'Auditório', type: 'Auditório', capacity: 100, availability: [
    { day: 'Quarta', time: '13:00-18:00' },
    { day: 'Sexta', time: '13:00-18:00' },
  ], breakIds: [1, 2] },
  // Nova sala noturna
  { id: 6, name: 'Sala 301', type: 'Sala', capacity: 30, availability: [
    { day: 'Segunda', time: '18:30-22:30' },
    { day: 'Quarta', time: '18:30-22:30' },
    { day: 'Sexta', time: '18:30-22:30' },
  ], breakIds: [3] },
];

// Horários (exemplo para algumas turmas)
export const timetables = [
  {
    id: 1,
    classId: 3, // 1º Ano A
    day: 'Segunda-feira',
    lessons: [
      { id: 'l1', start: '07:00', end: '07:50', subjectId: 15, teacherId: 9, roomId: 1, status: 'ia' }, // Português
      { id: 'l2', start: '07:50', end: '08:40', subjectId: 1, teacherId: 1, roomId: 1, status: 'ia' }, // Matemática
      { id: 'l3', start: '08:50', end: '09:40', subjectId: 6, teacherId: 5, roomId: 1, status: 'manual' }, // Educação Infantil
    ],
  },
  {
    id: 5,
    classId: 3, // 1º Ano A
    day: 'Terça-feira',
    lessons: [
      { id: 'l4', start: '07:00', end: '07:50', subjectId: 2, teacherId: 3, roomId: 1, status: 'ia' }, // Inglês
      { id: 'l5', start: '07:50', end: '08:40', subjectId: 3, teacherId: 2, roomId: 1, status: 'manual' }, // História
    ],
  },
  {
    id: 6,
    classId: 3, // 1º Ano A
    day: 'Quarta-feira',
    lessons: [
      { id: 'l6', start: '07:00', end: '07:50', subjectId: 4, teacherId: 2, roomId: 2, status: 'manual' }, // Ciências
      { id: 'l7', start: '07:50', end: '08:40', subjectId: 5, teacherId: 3, roomId: 1, status: 'ia' }, // Geografia
    ],
  },
  {
    id: 7,
    classId: 3, // 1º Ano A
    day: 'Quinta-feira',
    lessons: [
      { id: 'l8', start: '07:00', end: '07:50', subjectId: 1, teacherId: 1, roomId: 1, status: 'ia' }, // Matemática
      { id: 'l9', start: '07:50', end: '08:40', subjectId: 15, teacherId: 9, roomId: 1, status: 'manual' }, // Português
    ],
  },
  {
    id: 8,
    classId: 3, // 1º Ano A
    day: 'Sexta-feira',
    lessons: [
      { id: 'l10', start: '07:00', end: '07:50', subjectId: 9, teacherId: 6, roomId: 3, status: 'ia' }, // Educação Física
      { id: 'l11', start: '07:50', end: '08:40', subjectId: 8, teacherId: 6, roomId: 3, status: 'manual' }, // Artes
    ],
  },
  {
    id: 9,
    classId: 3, // 1º Ano A
    day: 'Sábado',
    lessons: [
      { id: 'l12', start: '08:00', end: '08:50', subjectId: 13, teacherId: 8, roomId: 5, status: 'manual' }, // Filosofia
    ],
  },
  {
    id: 10,
    classId: 3, // 1º Ano A
    day: 'Domingo',
    lessons: [
      { id: 'l13', start: '09:00', end: '09:50', subjectId: 14, teacherId: 9, roomId: 5, status: 'manual' }, // Sociologia
    ],
  },
  {
    id: 2,
    classId: 7, // 6º Ano
    day: 'Terça-feira',
    lessons: [
      { id: 'l14', start: '07:00', end: '07:50', subjectId: 4, teacherId: 2, roomId: 2, status: 'manual', conflict: 'Professor indisponível neste horário' }, // Ciências
    ],
  },
  {
    id: 3,
    classId: 11, // 1ª Série EM
    day: 'Quarta-feira',
    lessons: [
      { id: 'l15', start: '07:00', end: '07:50', subjectId: 10, teacherId: 7, roomId: 4, status: 'ia' }, // Biologia
      { id: 'l16', start: '07:50', end: '08:40', subjectId: 11, teacherId: 7, roomId: 4, status: 'ia' }, // Química
      { id: 'l17', start: '08:50', end: '09:40', subjectId: 12, teacherId: 8, roomId: 4, status: 'manual' }, // Física
    ],
  },
  {
    id: 4,
    classId: 1, // Infantil I
    day: 'Sexta-feira',
    lessons: [
      { id: 'l18', start: '07:00', end: '07:50', subjectId: 6, teacherId: 5, roomId: 5, status: 'ia' }, // Educação Infantil
      { id: 'l19', start: '07:50', end: '08:40', subjectId: 7, teacherId: 5, roomId: 5, status: 'manual' }, // Psicomotricidade
    ],
  },
];

// Solicitações de troca de aula
export const teacherRequests = [
  {
    id: 1,
    teacherId: 1,
    lessonId: 2,
    type: 'open',
    status: 'pending',
    date: '2024-05-01T10:00:00Z',
    history: [
      { status: 'pending', date: '2024-05-01T10:00:00Z', by: 'teacher' },
    ],
  },
  {
    id: 2,
    teacherId: 2,
    lessonId: 3,
    type: 'direct',
    status: 'accepted',
    date: '2024-05-02T11:00:00Z',
    history: [
      { status: 'pending', date: '2024-05-02T11:00:00Z', by: 'teacher' },
      { status: 'accepted', date: '2024-05-03T09:00:00Z', by: 'admin' },
    ],
  },
];

// Conflitos
export const conflicts = [
  {
    id: 1,
    type: 'teacher',
    description: 'Professor com duas aulas no mesmo horário',
    relatedIds: [1, 3],
    suggestions: ['Mover aula de Matemática para terça-feira', 'Trocar professor da aula de História'],
  },
  {
    id: 2,
    type: 'room',
    description: 'Sala ocupada por duas turmas',
    relatedIds: [2, 4],
    suggestions: ['Alocar aula de Ciências no Laboratório', 'Trocar horário da Turma C'],
  },
  {
    id: 3,
    type: 'availability',
    description: 'Professor indisponível no horário alocado',
    relatedIds: [2],
    suggestions: ['Trocar aula de Ciências para outro horário', 'Solicitar substituto para o horário'],
  },
];

// Currículo obrigatório por etapa e ano/série
export const curriculumByStageAndYear = {
  'educacaoBasica': {
    // Educação Infantil (exemplo, pode ser ajustado conforme legislação local)
    1: [6, 7], // Educação Infantil: Educação Infantil, Psicomotricidade
    2: [6, 7],
  },
  'fundamentalAnosIniciais': {
    1: [15, 1, 4, 3, 5, 8, 9], // Português, Matemática, Ciências, História, Geografia, Artes, Educação Física
    2: [15, 1, 4, 3, 5, 8, 9],
    3: [15, 1, 4, 3, 5, 8, 9],
    4: [15, 1, 4, 3, 5, 8, 9],
    5: [15, 1, 4, 3, 5, 8, 9],
  },
  'fundamentalAnosFinais': {
    6: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14], // Inclui Inglês, Biologia, Química, Física, Filosofia, Sociologia
    7: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14],
    8: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14],
    9: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14],
  },
  'medio': {
    1: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14, 16, 17], // Inclui Redação, Espanhol
    2: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14, 16, 17],
    3: [15, 1, 4, 3, 5, 8, 9, 2, 10, 11, 12, 13, 14, 16, 17],
  },
};
