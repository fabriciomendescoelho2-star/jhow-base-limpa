const JHOW_SYSTEM_KEY='jhowSystemV5';

const JHOW_DEFAULT_SYSTEM={
  currentStudentId:'s1',
  currentPersonalId:'p1',
  personals:[
    {id:'p1',name:'Caio',initials:'CA',specialty:'Treinamento personalizado',phone:'(17) 99111-1101',active:true},
    {id:'p2',name:'Fernanda Lima',initials:'FL',specialty:'Força e condicionamento',phone:'(17) 99111-1102',active:true},
    {id:'p3',name:'Gustavo Alves',initials:'GA',specialty:'Performance e mobilidade',phone:'(17) 99111-1103',active:true}
  ],
  planCatalog:[
    {id:'pl1',name:'Mensal · 1x/semana',frequency:1,durationMonths:1},
    {id:'pl2',name:'Mensal · 2x/semana',frequency:2,durationMonths:1},
    {id:'pl3',name:'Mensal · 3x/semana',frequency:3,durationMonths:1},
    {id:'pl4',name:'Trimestral · 2x/semana',frequency:2,durationMonths:3},
    {id:'pl5',name:'Trimestral · 3x/semana',frequency:3,durationMonths:3}
  ],
  workouts:[
    {id:'wA',ownerPersonalId:'p1',code:'A',name:'Peito + Tríceps',groups:['Peitoral','Tríceps'],estimatedMinutes:30,exercises:[
      {id:'e1',name:'Supino reto',muscle:'Peitoral',sets:3,reps:'8–10',rest:60,note:'Controle a descida e mantenha a amplitude confortável.'},
      {id:'e2',name:'Supino inclinado',muscle:'Peitoral superior',sets:3,reps:'10',rest:60,note:'Escápulas estáveis durante o movimento.'},
      {id:'e3',name:'Crucifixo máquina',muscle:'Peitoral',sets:3,reps:'10–12',rest:45,note:'Movimento contínuo e sem impulso.'},
      {id:'e4',name:'Tríceps pulley',muscle:'Tríceps',sets:3,reps:'10–12',rest:45,note:'Cotovelos próximos ao corpo.'},
      {id:'e5',name:'Tríceps francês',muscle:'Tríceps',sets:3,reps:'10',rest:45,note:'Evite abrir os cotovelos.'},
      {id:'e6',name:'Crossover',muscle:'Peitoral',sets:3,reps:'12',rest:45,note:'Finalização controlada.'}
    ]},
    {id:'wB',ownerPersonalId:'p1',code:'B',name:'Pernas',groups:['Quadríceps','Posterior','Glúteos'],estimatedMinutes:30,exercises:[
      {id:'e7',name:'Agachamento Smith',muscle:'Pernas',sets:3,reps:'8–10',rest:60,note:'Amplitude confortável e tronco estável.'},
      {id:'e8',name:'Leg press',muscle:'Quadríceps',sets:3,reps:'10',rest:60,note:'Não retirar o quadril do banco.'},
      {id:'e9',name:'Cadeira extensora',muscle:'Quadríceps',sets:3,reps:'12',rest:45,note:'Segure 1s na contração.'},
      {id:'e10',name:'Mesa flexora',muscle:'Posterior',sets:3,reps:'10–12',rest:45,note:'Controle a volta.'}
    ]},
    {id:'wC',ownerPersonalId:'p1',code:'C',name:'Costas + Bíceps',groups:['Costas','Bíceps'],estimatedMinutes:30,exercises:[
      {id:'e11',name:'Pulldown',muscle:'Costas',sets:3,reps:'10–12',rest:45,note:'Ative as escápulas antes de puxar.'},
      {id:'e12',name:'Puxada supinada',muscle:'Costas',sets:3,reps:'8–10',rest:60,note:'Evite balanço do tronco.'},
      {id:'e13',name:'Remada baixa',muscle:'Costas',sets:3,reps:'10',rest:60,note:'Cotovelos para trás.'},
      {id:'e14',name:'Rosca direta',muscle:'Bíceps',sets:3,reps:'10',rest:45,note:'Sem roubar com o tronco.'}
    ]},
    {id:'wD',ownerPersonalId:'p1',code:'D',name:'Ombro + Core',groups:['Ombros','Core'],estimatedMinutes:30,exercises:[
      {id:'e15',name:'Desenvolvimento máquina',muscle:'Ombros',sets:3,reps:'8–10',rest:60,note:'Não force a lombar.'},
      {id:'e16',name:'Elevação lateral',muscle:'Ombros',sets:3,reps:'12',rest:45,note:'Subida controlada.'},
      {id:'e17',name:'Prancha',muscle:'Core',sets:3,reps:'40s',rest:45,note:'Mantenha o quadril alinhado.'}
    ]},
    {id:'wE',ownerPersonalId:'p2',code:'A',name:'Full Body Base',groups:['Corpo inteiro'],estimatedMinutes:30,exercises:[
      {id:'e18',name:'Leg press',muscle:'Pernas',sets:3,reps:'10',rest:60,note:''},
      {id:'e19',name:'Remada máquina',muscle:'Costas',sets:3,reps:'10',rest:60,note:''},
      {id:'e20',name:'Chest press',muscle:'Peitoral',sets:3,reps:'10',rest:60,note:''}
    ]}
  ],
  students:[
    {id:'s1',name:'Ana Martins',initials:'AM',phone:'(17) 99999-0101',active:true,personalId:'p1',frequency:2,premium:true,fixedSchedule:[{day:'Segunda',time:'06:50'},{day:'Quarta',time:'06:50'}],
      plan:{catalogId:'pl4',name:'Trimestral · 2x/semana',start:'2026-07-01',end:'2026-09-30',status:'Ativo',renewals:[]},
      routine:{workoutIds:['wA','wB','wC','wD'],currentIndex:0,updatedAt:'2026-09-18'},replacementCredits:2,replacementExpires:'2026-10-22',
      assessments:[
        {date:'2026-09-10',weight:67.8,bodyFat:22.1,waist:72,hip:98,arm:29,thigh:56,note:'Boa evolução de força e consistência.'},
        {date:'2026-07-10',weight:69.2,bodyFat:24.0,waist:75,hip:100,arm:28,thigh:55,note:'Avaliação inicial do ciclo.'}
      ],
      workoutHistory:[
        {id:'h1',date:'2026-09-18',workoutId:'wD',duration:29,sets:9,status:'Concluído',exerciseLoads:{e15:22,e16:8,e17:0}},
        {id:'h2',date:'2026-09-16',workoutId:'wC',duration:31,sets:12,status:'Concluído',exerciseLoads:{e11:30,e12:34,e13:32,e14:14}},
        {id:'h3',date:'2026-09-14',workoutId:'wB',duration:33,sets:12,status:'Concluído',exerciseLoads:{e7:36,e8:90,e9:40,e10:32}},
        {id:'h4',date:'2026-09-11',workoutId:'wA',duration:30,sets:18,status:'Concluído',exerciseLoads:{e1:30,e2:24,e3:42,e4:28,e5:16,e6:18}},
        {id:'h5',date:'2026-09-04',workoutId:'wA',duration:30,sets:18,status:'Concluído',exerciseLoads:{e1:28,e2:22,e3:40,e4:26,e5:14,e6:16}},
        {id:'h6',date:'2026-08-28',workoutId:'wA',duration:32,sets:18,status:'Concluído',exerciseLoads:{e1:26,e2:20,e3:36,e4:24,e5:12,e6:16}}
      ],
      attendance:[
        {date:'2026-09-18',status:'Presente'},{date:'2026-09-16',status:'Presente'},{date:'2026-09-14',status:'Presente'},{date:'2026-09-11',status:'Presente'},{date:'2026-09-09',status:'Falta avisada'},{date:'2026-09-07',status:'Presente'}
      ]
    },
    {id:'s2',name:'Bruno Lima',initials:'BL',phone:'(17) 99999-0102',active:true,personalId:'p1',frequency:3,premium:false,fixedSchedule:[{day:'Segunda',time:'06:00'},{day:'Quarta',time:'06:00'},{day:'Sexta',time:'06:00'}],plan:{catalogId:'pl5',name:'Trimestral · 3x/semana',start:'2026-08-01',end:'2026-10-31',status:'Ativo',renewals:[]},routine:{workoutIds:['wA','wB','wC'],currentIndex:1,updatedAt:'2026-09-20'},replacementCredits:0,replacementExpires:null,assessments:[{date:'2026-09-02',weight:82.3,bodyFat:18.2,waist:86,hip:99,arm:36,thigh:60,note:'Boa adaptação.'}],workoutHistory:[],attendance:[]},
    {id:'s3',name:'Camila Rocha',initials:'CR',phone:'(17) 99999-0103',active:true,personalId:'p2',frequency:2,premium:false,fixedSchedule:[{day:'Terça',time:'08:00'},{day:'Quinta',time:'08:00'}],plan:{catalogId:'pl2',name:'Mensal · 2x/semana',start:'2026-09-01',end:'2026-09-30',status:'Ativo',renewals:[]},routine:{workoutIds:['wE'],currentIndex:0,updatedAt:'2026-09-01'},replacementCredits:0,replacementExpires:null,assessments:[{date:'2026-09-01',weight:61.4,bodyFat:25.0,waist:70,hip:96,arm:27,thigh:54,note:'Avaliação inicial.'}],workoutHistory:[],attendance:[]},
    {id:'s4',name:'Marcos Silva',initials:'MS',phone:'(17) 99999-0104',active:true,personalId:'p3',frequency:2,premium:false,fixedSchedule:[{day:'Terça',time:'17:00'},{day:'Quinta',time:'17:00'}],plan:{catalogId:'pl4',name:'Trimestral · 2x/semana',start:'2026-07-15',end:'2026-10-14',status:'Ativo',renewals:[]},routine:{workoutIds:[],currentIndex:0,updatedAt:null},replacementCredits:0,replacementExpires:null,assessments:[],workoutHistory:[],attendance:[]}
  ],
  slots:[
    {id:'sl1',personalId:'p1',day:'Segunda',time:'08:00',free:true},{id:'sl2',personalId:'p1',day:'Terça',time:'17:00',free:true},{id:'sl3',personalId:'p1',day:'Quinta',time:'18:00',free:true},{id:'sl4',personalId:'p2',day:'Sexta',time:'08:00',free:true}
  ],
  replacementPolicy:{studentSelfBooking:false,creditValidityDays:30,maxCreditsPerMonth:2},
  replacementRequests:[
    {id:'rep1',studentId:'s1',studentName:'Ana Martins',personalId:'p1',sourceDay:'Segunda',sourceTime:'06:50',sourceDate:'2026-09-22',createdAt:'2026-09-22T08:10:00',expires:'2026-10-22',status:'waiting',assigned:null},
    {id:'rep2',studentId:'s1',studentName:'Ana Martins',personalId:'p1',sourceDay:'Quarta',sourceTime:'06:50',sourceDate:'2026-09-17',createdAt:'2026-09-17T09:20:00',expires:'2026-10-17',status:'assigned',assigned:{day:'Segunda',time:'16:50',scheduleId:'ana-rep-seg-1650',date:'2026-09-28'}},
    {id:'rep3',studentId:'s2',studentName:'Bruno Lima',personalId:'p1',sourceDay:'Sexta',sourceTime:'06:00',sourceDate:'2026-09-19',createdAt:'2026-09-19T10:00:00',expires:'2026-10-19',status:'waiting',assigned:null}
  ],
  operationalSchedule:[{"id":"caio-segunda-0450-0","personalId":"p1","day":"Segunda","time":"04:50","name":"Leticia Melo","kind":"student","status":"confirmed"},{"id":"caio-terça-0450-0","personalId":"p1","day":"Terça","time":"04:50","name":"Leticia Melo","kind":"student","status":"confirmed"},{"id":"caio-quarta-0450-0","personalId":"p1","day":"Quarta","time":"04:50","name":"Juliana Costa","kind":"student","status":"confirmed"},{"id":"caio-quinta-0450-0","personalId":"p1","day":"Quinta","time":"04:50","name":"Leitcia Melo","kind":"student","status":"confirmed"},{"id":"caio-sexta-0450-0","personalId":"p1","day":"Sexta","time":"04:50","name":"Juliana Costa","kind":"student","status":"confirmed"},{"id":"caio-segunda-0520-0","personalId":"p1","day":"Segunda","time":"05:20","name":"Evelin","kind":"student","status":"absence","note":"Avisou que não vai conseguir ir","slotReleased":true},{"id":"caio-terça-0520-0","personalId":"p1","day":"Terça","time":"05:20","name":"Candida","kind":"student","status":"confirmed"},{"id":"caio-quarta-0520-0","personalId":"p1","day":"Quarta","time":"05:20","name":"Evelin","kind":"student","status":"confirmed"},{"id":"caio-quinta-0520-0","personalId":"p1","day":"Quinta","time":"05:20","name":"Candida","kind":"student","status":"confirmed"},{"id":"caio-sexta-0520-0","personalId":"p1","day":"Sexta","time":"05:20","name":"Evelin","kind":"student","status":"confirmed"},{"id":"caio-segunda-0550-0","personalId":"p1","day":"Segunda","time":"05:50","name":"Fernando","kind":"student","status":"confirmed"},{"id":"caio-segunda-0550-1","personalId":"p1","day":"Segunda","time":"05:50","name":"Cristina","kind":"student","status":"confirmed"},{"id":"caio-terça-0550-0","personalId":"p1","day":"Terça","time":"05:50","name":"Rafaela Marqui","kind":"student","status":"confirmed"},{"id":"caio-quarta-0550-0","personalId":"p1","day":"Quarta","time":"05:50","name":"Fernando","kind":"student","status":"confirmed"},{"id":"caio-quarta-0550-1","personalId":"p1","day":"Quarta","time":"05:50","name":"Cristina","kind":"student","status":"confirmed"},{"id":"caio-quinta-0550-0","personalId":"p1","day":"Quinta","time":"05:50","name":"Rafaela Marqui","kind":"student","status":"confirmed"},{"id":"caio-sexta-0550-0","personalId":"p1","day":"Sexta","time":"05:50","name":"Rafaela Marqui","kind":"student","status":"confirmed"},{"id":"caio-segunda-0620-0","personalId":"p1","day":"Segunda","time":"06:20","name":"Marcos","kind":"student","status":"confirmed"},{"id":"caio-terça-0620-0","personalId":"p1","day":"Terça","time":"06:20","name":"Barbara Katayama","kind":"student","status":"confirmed"},{"id":"caio-quarta-0620-0","personalId":"p1","day":"Quarta","time":"06:20","name":"Marcos","kind":"student","status":"confirmed"},{"id":"caio-quinta-0620-0","personalId":"p1","day":"Quinta","time":"06:20","name":"Barbara Katayama","kind":"student","status":"confirmed"},{"id":"caio-sexta-0620-0","personalId":"p1","day":"Sexta","time":"06:20","name":"Marcos","kind":"student","status":"confirmed"},{"id":"caio-segunda-0650-0","personalId":"p1","day":"Segunda","time":"06:50","name":"Rodrigo","kind":"student","status":"confirmed"},{"id":"caio-terça-0650-0","personalId":"p1","day":"Terça","time":"06:50","name":"Juliana Martineli","kind":"student","status":"confirmed"},{"id":"caio-quarta-0650-0","personalId":"p1","day":"Quarta","time":"06:50","name":"Rodrigo","kind":"student","status":"confirmed"},{"id":"caio-quinta-0650-0","personalId":"p1","day":"Quinta","time":"06:50","name":"Luciana Akemi","kind":"student","status":"confirmed"},{"id":"caio-sexta-0650-0","personalId":"p1","day":"Sexta","time":"06:50","name":"Juliana Martineli","kind":"student","status":"confirmed"},{"id":"caio-segunda-0720-0","personalId":"p1","day":"Segunda","time":"07:20","name":"Gisele","kind":"student","status":"confirmed"},{"id":"caio-segunda-0720-1","personalId":"p1","day":"Segunda","time":"07:20","name":"Pernambuco","kind":"student","status":"confirmed"},{"id":"caio-terça-0720-0","personalId":"p1","day":"Terça","time":"07:20","name":"Gisele","kind":"student","status":"confirmed"},{"id":"caio-terça-0720-1","personalId":"p1","day":"Terça","time":"07:20","name":"Pernambuco","kind":"student","status":"confirmed"},{"id":"caio-quarta-0720-0","personalId":"p1","day":"Quarta","time":"07:20","name":"Tuany","kind":"student","status":"confirmed"},{"id":"caio-quinta-0720-0","personalId":"p1","day":"Quinta","time":"07:20","name":"Gisele","kind":"student","status":"confirmed"},{"id":"caio-quinta-0720-1","personalId":"p1","day":"Quinta","time":"07:20","name":"Pernambuco","kind":"student","status":"confirmed"},{"id":"caio-sexta-0720-0","personalId":"p1","day":"Sexta","time":"07:20","name":"Gisele","kind":"student","status":"confirmed"},{"id":"caio-sexta-0720-1","personalId":"p1","day":"Sexta","time":"07:20","name":"Pernambuco","kind":"student","status":"confirmed"},{"id":"caio-segunda-0750-0","personalId":"p1","day":"Segunda","time":"07:50","name":"Tuany","kind":"student","status":"confirmed"},{"id":"caio-terça-0750-0","personalId":"p1","day":"Terça","time":"07:50","name":"Luciana Akemi","kind":"student","status":"confirmed"},{"id":"caio-quarta-0750-0","personalId":"p1","day":"Quarta","time":"07:50","name":"Neuza","kind":"student","status":"confirmed"},{"id":"caio-quinta-0750-0","personalId":"p1","day":"Quinta","time":"07:50","name":"Thatiana","kind":"student","status":"confirmed"},{"id":"caio-sexta-0750-0","personalId":"p1","day":"Sexta","time":"07:50","name":"Neuza","kind":"student","status":"confirmed"},{"id":"caio-segunda-0820-0","personalId":"p1","day":"Segunda","time":"08:20","name":"Margareth","kind":"student","status":"confirmed"},{"id":"caio-terça-0820-0","personalId":"p1","day":"Terça","time":"08:20","name":"Ana Maria","kind":"student","status":"confirmed"},{"id":"caio-quarta-0820-0","personalId":"p1","day":"Quarta","time":"08:20","name":"Margareth","kind":"student","status":"confirmed"},{"id":"caio-quinta-0820-0","personalId":"p1","day":"Quinta","time":"08:20","name":"Ana Maria","kind":"student","status":"confirmed"},{"id":"caio-segunda-0850-0","personalId":"p1","day":"Segunda","time":"08:50","name":"Josilene Donato","kind":"student","status":"confirmed"},{"id":"caio-terça-0850-0","personalId":"p1","day":"Terça","time":"08:50","name":"Josilene Donato","kind":"student","status":"confirmed"},{"id":"caio-quarta-0850-0","personalId":"p1","day":"Quarta","time":"08:50","name":"Marcia Faria","kind":"student","status":"confirmed"},{"id":"caio-quinta-0850-0","personalId":"p1","day":"Quinta","time":"08:50","name":"Josilene Donato","kind":"student","status":"confirmed"},{"id":"caio-sexta-0850-0","personalId":"p1","day":"Sexta","time":"08:50","name":"Marcia Faria","kind":"student","status":"confirmed"},{"id":"caio-terça-0920-0","personalId":"p1","day":"Terça","time":"09:20","name":"Melissa","kind":"student","status":"confirmed"},{"id":"caio-terça-0920-1","personalId":"p1","day":"Terça","time":"09:20","name":"Laura","kind":"student","status":"confirmed"},{"id":"caio-quarta-0920-0","personalId":"p1","day":"Quarta","time":"09:20","name":"Luisa Ramos","kind":"student","status":"confirmed"},{"id":"caio-quinta-0920-0","personalId":"p1","day":"Quinta","time":"09:20","name":"Melissa","kind":"student","status":"confirmed"},{"id":"caio-quinta-0920-1","personalId":"p1","day":"Quinta","time":"09:20","name":"Laura","kind":"student","status":"confirmed"},{"id":"caio-segunda-0950-0","personalId":"p1","day":"Segunda","time":"09:50","name":"Thatiana","kind":"student","status":"confirmed"},{"id":"caio-terça-0950-treino","personalId":"p1","day":"Terça","time":"09:50","name":"Treino pessoal","kind":"personal","status":"personal"},{"id":"caio-quinta-0950-treino","personalId":"p1","day":"Quinta","time":"09:50","name":"Treino pessoal","kind":"personal","status":"personal"},{"id":"caio-sexta-0950-0","personalId":"p1","day":"Sexta","time":"09:50","name":"Thatiana","kind":"student","status":"confirmed"},{"id":"caio-segunda-1020-0","personalId":"p1","day":"Segunda","time":"10:20","name":"Alinne Zanini","kind":"student","status":"confirmed"},{"id":"caio-quarta-1020-0","personalId":"p1","day":"Quarta","time":"10:20","name":"Alinne Zanini","kind":"student","status":"confirmed"},{"id":"caio-sexta-1020-0","personalId":"p1","day":"Sexta","time":"10:20","name":"Alinne Zanini","kind":"student","status":"confirmed"},{"id":"caio-segunda-1050-treino","personalId":"p1","day":"Segunda","time":"10:50","name":"Treino pessoal","kind":"personal","status":"personal"},{"id":"caio-terça-1050-0","personalId":"p1","day":"Terça","time":"10:50","name":"Sergio","kind":"student","status":"confirmed"},{"id":"caio-quarta-1050-treino","personalId":"p1","day":"Quarta","time":"10:50","name":"Treino pessoal","kind":"personal","status":"personal"},{"id":"caio-quinta-1050-0","personalId":"p1","day":"Quinta","time":"10:50","name":"Sergio","kind":"student","status":"confirmed"},{"id":"caio-sexta-1050-treino","personalId":"p1","day":"Sexta","time":"10:50","name":"Treino pessoal","kind":"personal","status":"personal"},{"id":"caio-terça-1120-0","personalId":"p1","day":"Terça","time":"11:20","name":"Maira","kind":"student","status":"confirmed"},{"id":"caio-quinta-1120-0","personalId":"p1","day":"Quinta","time":"11:20","name":"Maira","kind":"student","status":"confirmed"},{"id":"caio-terça-1550-0","personalId":"p1","day":"Terça","time":"15:50","name":"Laura Gama","kind":"student","status":"confirmed"},{"id":"caio-quinta-1550-0","personalId":"p1","day":"Quinta","time":"15:50","name":"Laura Gama","kind":"student","status":"confirmed"},{"id":"caio-segunda-1620-0","personalId":"p1","day":"Segunda","time":"16:20","name":"Denise","kind":"student","status":"confirmed"},{"id":"caio-terça-1620-0","personalId":"p1","day":"Terça","time":"16:20","name":"Julia Neves","kind":"student","status":"confirmed"},{"id":"caio-quarta-1620-0","personalId":"p1","day":"Quarta","time":"16:20","name":"Denise","kind":"student","status":"confirmed"},{"id":"caio-quinta-1620-0","personalId":"p1","day":"Quinta","time":"16:20","name":"Julia Neves","kind":"student","status":"confirmed"},{"id":"caio-segunda-1650-0","personalId":"p1","day":"Segunda","time":"16:50","name":"Rafaela Carrato","kind":"student","status":"confirmed"},{"id":"caio-terça-1650-0","personalId":"p1","day":"Terça","time":"16:50","name":"Juliana Costa","kind":"student","status":"confirmed"},{"id":"caio-quarta-1650-0","personalId":"p1","day":"Quarta","time":"16:50","name":"Maite Ramos","kind":"student","status":"confirmed"},{"id":"caio-quinta-1650-0","personalId":"p1","day":"Quinta","time":"16:50","name":"Maite Ramos","kind":"student","status":"confirmed"},{"id":"caio-segunda-1720-0","personalId":"p1","day":"Segunda","time":"17:20","name":"Melquiedes","kind":"student","status":"confirmed"},{"id":"caio-terça-1720-0","personalId":"p1","day":"Terça","time":"17:20","name":"Melquiedes","kind":"student","status":"absence","note":"Falta avisada","slotReleased":true},{"id":"caio-quarta-1720-0","personalId":"p1","day":"Quarta","time":"17:20","name":"Rafaela Carrato","kind":"student","status":"confirmed"},{"id":"caio-quinta-1720-0","personalId":"p1","day":"Quinta","time":"17:20","name":"Melquiedes","kind":"student","status":"confirmed"},{"id":"caio-segunda-1750-0","personalId":"p1","day":"Segunda","time":"17:50","name":"Ida","kind":"student","status":"confirmed"},{"id":"caio-terça-1750-0","personalId":"p1","day":"Terça","time":"17:50","name":"Luisa Ramos","kind":"student","status":"confirmed"},{"id":"caio-quarta-1750-0","personalId":"p1","day":"Quarta","time":"17:50","name":"Ida","kind":"student","status":"confirmed"},{"id":"caio-quinta-1750-0","personalId":"p1","day":"Quinta","time":"17:50","name":"Luisa Ramos","kind":"student","status":"confirmed"},{"id":"caio-segunda-1820-0","personalId":"p1","day":"Segunda","time":"18:20","name":"Edvaldo Marques","kind":"student","status":"confirmed"},{"id":"caio-terça-1820-0","personalId":"p1","day":"Terça","time":"18:20","name":"Edvaldo Marques","kind":"student","status":"confirmed"},{"id":"caio-quarta-1820-0","personalId":"p1","day":"Quarta","time":"18:20","name":"Edvaldo Marques","kind":"student","status":"confirmed"},{"id":"caio-quinta-1820-0","personalId":"p1","day":"Quinta","time":"18:20","name":"Edvaldo Marques","kind":"student","status":"confirmed"},{"id":"caio-segunda-1850-0","personalId":"p1","day":"Segunda","time":"18:50","name":"Alessandro","kind":"student","status":"confirmed"},{"id":"caio-terça-1850-0","personalId":"p1","day":"Terça","time":"18:50","name":"Maite Ramos","kind":"student","status":"confirmed"},{"id":"caio-quarta-1850-0","personalId":"p1","day":"Quarta","time":"18:50","name":"Alessandro","kind":"student","status":"confirmed"},{"id":"caio-quinta-1850-0","personalId":"p1","day":"Quinta","time":"18:50","name":"Wesley Arruda","kind":"student","status":"confirmed"},{"id":"caio-segunda-1920-0","personalId":"p1","day":"Segunda","time":"19:20","name":"Fernando","kind":"student","status":"confirmed"},{"id":"caio-segunda-1920-1","personalId":"p1","day":"Segunda","time":"19:20","name":"Rosana","kind":"student","status":"confirmed"},{"id":"caio-terça-1920-0","personalId":"p1","day":"Terça","time":"19:20","name":"Malu","kind":"student","status":"confirmed"},{"id":"caio-quarta-1920-0","personalId":"p1","day":"Quarta","time":"19:20","name":"Fernando","kind":"student","status":"confirmed"},{"id":"caio-quarta-1920-1","personalId":"p1","day":"Quarta","time":"19:20","name":"Rosana","kind":"student","status":"confirmed"},{"id":"caio-quinta-1920-0","personalId":"p1","day":"Quinta","time":"19:20","name":"Malu","kind":"student","status":"confirmed"},{"id":"caio-segunda-1950-0","personalId":"p1","day":"Segunda","time":"19:50","name":"Wesley Arruda","kind":"student","status":"confirmed"},{"id":"caio-segunda-1950-1","personalId":"p1","day":"Segunda","time":"19:50","name":"Malu","kind":"student","status":"confirmed"},{"id":"caio-terça-1950-0","personalId":"p1","day":"Terça","time":"19:50","name":"Wesley Arruda","kind":"student","status":"confirmed"},{"id":"caio-quarta-1950-0","personalId":"p1","day":"Quarta","time":"19:50","name":"Wesley Arruda","kind":"student","status":"confirmed"},{"id":"caio-quinta-1950-0","personalId":"p1","day":"Quinta","time":"19:50","name":"Alessandro","kind":"student","status":"confirmed"},{"id":"ana-seg-0650","personalId":"p1","day":"Segunda","time":"06:50","name":"Ana Martins","kind":"student","status":"absence","note":"Avisou que não vai conseguir ir","slotReleased":true},{"id":"ana-qua-0650","personalId":"p1","day":"Quarta","time":"06:50","name":"Ana Martins","kind":"student","status":"confirmed","note":"Horário fixo"},{"id":"ana-rep-seg-1650","personalId":"p1","day":"Segunda","time":"16:50","name":"Ana Martins","kind":"student","status":"replacement","note":"Reposição confirmada · origem Quarta 17/09"},{"id":"exp-seg-1150","personalId":"p1","day":"Segunda","time":"11:50","name":"Experimental · Paula","kind":"trial","status":"trial","note":"Primeira experiência"}],
  communications:[
    {id:'c1',date:'2026-09-20',title:'Cardio livre',text:'A área de cardio segue disponível de domingo a domingo conforme as regras do plano.',audience:'Todos'}
  ],
  events:[{date:'2026-09-20T09:00:00',text:'Rotina de Ana Martins revisada por Rafael Moura.'}]
};


const JHOW_EMPTY_SYSTEM=(()=>{
  const s=deepClone(JHOW_DEFAULT_SYSTEM);
  s.currentStudentId=null;
  s.currentPersonalId=null;
  s.personals=[];
  s.workouts=[];
  s.students=[];
  s.slots=[];
  s.replacementRequests=[];
  s.operationalSchedule=[];
  s.communications=[];
  s.events=[];
  return s;
})();

function deepClone(x){return JSON.parse(JSON.stringify(x))}
function getSystem(){
  const raw=localStorage.getItem(JHOW_SYSTEM_KEY);
  if(!raw){localStorage.setItem(JHOW_SYSTEM_KEY,JSON.stringify(JHOW_EMPTY_SYSTEM));return deepClone(JHOW_EMPTY_SYSTEM)}
  try{return JSON.parse(raw)}catch{localStorage.setItem(JHOW_SYSTEM_KEY,JSON.stringify(JHOW_EMPTY_SYSTEM));return deepClone(JHOW_EMPTY_SYSTEM)}
}
function saveSystem(s){localStorage.setItem(JHOW_SYSTEM_KEY,JSON.stringify(s))}
function syncStudentSchedule(s,student){
  s.operationalSchedule=(s.operationalSchedule||[]).filter(x=>x.studentId!==student.id || x.status==='replacement');
  (student.fixedSchedule||[]).forEach((slot,idx)=>{
    if(!slot.day||slot.day==='A definir'||!slot.time)return;
    s.operationalSchedule.push({id:makeId('sch'),studentId:student.id,personalId:student.personalId,day:slot.day,time:slot.time,name:student.name,kind:'student',status:'confirmed',note:'Horário fixo',slotReleased:false});
  });
}
function removeStudentData(s,studentId){
  s.students=s.students.filter(x=>x.id!==studentId);
  s.operationalSchedule=(s.operationalSchedule||[]).filter(x=>x.studentId!==studentId);
  s.replacementRequests=(s.replacementRequests||[]).filter(x=>x.studentId!==studentId);
  if(s.currentStudentId===studentId)s.currentStudentId=s.students[0]?.id||null;
}

function resetSystem(){localStorage.setItem(JHOW_SYSTEM_KEY,JSON.stringify(JHOW_EMPTY_SYSTEM));location.reload()}
function loadDemoSystem(){localStorage.setItem(JHOW_SYSTEM_KEY,JSON.stringify(JHOW_DEFAULT_SYSTEM));location.reload()}
function studentById(s,id){return s.students.find(x=>x.id===id)}
function personalById(s,id){return s.personals.find(x=>x.id===id)}
function workoutById(s,id){return s.workouts.find(x=>x.id===id)}
function planById(s,id){return s.planCatalog.find(x=>x.id===id)}
function activeStudent(s){return studentById(s,s.currentStudentId)||s.students[0]||{id:null,name:'Nenhum aluno cadastrado',initials:'—',phone:'',active:false,personalId:null,frequency:0,premium:false,fixedSchedule:[],plan:{catalogId:null,name:'Sem plano',start:null,end:null,status:'—',renewals:[]},routine:{workoutIds:[],currentIndex:0,updatedAt:null},replacementCredits:0,replacementExpires:null,assessments:[],workoutHistory:[],attendance:[]}}
function activePersonal(s){return personalById(s,s.currentPersonalId)||s.personals[0]||{id:null,name:'Nenhum personal cadastrado',initials:'—',specialty:'',phone:'',active:false}}
function routineWorkouts(s,student){return (student.routine?.workoutIds||[]).map(id=>workoutById(s,id)).filter(Boolean)}
function nextWorkoutFor(s,student){const arr=routineWorkouts(s,student);if(!arr.length)return null;const idx=((student.routine?.currentIndex||0)%arr.length+arr.length)%arr.length;return arr[idx]}
function previousWorkoutFor(s,student){if(!student.workoutHistory?.length)return null;return workoutById(s,student.workoutHistory[0].workoutId)}
function formatDate(iso){if(!iso)return '—';const [y,m,d]=iso.slice(0,10).split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString('pt-BR')}
function formatDateShort(iso){if(!iso)return '—';const [y,m,d]=iso.slice(0,10).split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}).replace('.','')}
function daysBetween(a,b){const A=new Date(a+'T12:00:00'),B=new Date(b+'T12:00:00');return Math.ceil((B-A)/86400000)}
function todayISO(){return new Date().toISOString().slice(0,10)}
function addSystemEvent(s,text){s.events.unshift({date:new Date().toISOString(),text});s.events=s.events.slice(0,50)}
function makeId(prefix){return prefix+Date.now().toString(36)+Math.random().toString(36).slice(2,5)}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function query(name){return new URLSearchParams(location.search).get(name)}
function setCurrentStudent(id){const s=getSystem();if(studentById(s,id)){s.currentStudentId=id;saveSystem(s)}}
function setCurrentPersonal(id){const s=getSystem();if(personalById(s,id)){s.currentPersonalId=id;saveSystem(s)}}
function planDaysLeft(student){return student.plan?.end?daysBetween(todayISO(),student.plan.end):null}
function attendanceRate(student){const a=student.attendance||[];if(!a.length)return 0;return Math.round(100*a.filter(x=>x.status==='Presente').length/a.length)}
function workoutDelta(s,student,workoutId){
  const sessions=(student.workoutHistory||[]).filter(h=>h.workoutId===workoutId).slice().reverse();
  if(sessions.length<2)return null;
  const first=sessions[0],last=sessions[sessions.length-1];
  const keys=Object.keys(last.exerciseLoads||{}).filter(k=>first.exerciseLoads&&first.exerciseLoads[k]!=null&&last.exerciseLoads[k]!=null&&first.exerciseLoads[k]>0);
  if(!keys.length)return null;
  const diffs=keys.map(k=>last.exerciseLoads[k]-first.exerciseLoads[k]);
  return Math.round((diffs.reduce((a,b)=>a+b,0)/diffs.length)*10)/10;
}
function completeWorkout(studentId,workoutId,loads,duration=30){
  const s=getSystem(),st=studentById(s,studentId),w=workoutById(s,workoutId);if(!st||!w)return;
  const sets=w.exercises.reduce((n,e)=>n+Number(e.sets||0),0);
  st.workoutHistory.unshift({id:makeId('h'),date:todayISO(),workoutId:w.id,duration,sets,status:'Concluído',exerciseLoads:loads||{}});
  const arr=st.routine.workoutIds||[];const pos=arr.indexOf(w.id);st.routine.currentIndex=arr.length?((pos>=0?pos:st.routine.currentIndex)+1)%arr.length:0;
  addSystemEvent(s,`${st.name} concluiu ${w.code} · ${w.name}.`);saveSystem(s)
}


function replacementRequestsFor(s,studentId){
  return (s.replacementRequests||[]).filter(r=>r.studentId===studentId);
}
function replacementPendingCount(s,studentId){
  return replacementRequestsFor(s,studentId).filter(r=>r.status==='waiting').length;
}
function replacementAssignedFor(s,studentId){
  return replacementRequestsFor(s,studentId).filter(r=>r.status==='assigned');
}
function releasedSlots(s,personalId=null){
  const rows=(s.operationalSchedule||[]).filter(x=>x.status==='absence'&&x.slotReleased);
  if(!personalId)return rows;
  return rows.filter(x=>x.personalId===personalId);
}
function notifyAbsenceV4(studentId,day,time){
  const s=getSystem(),st=studentById(s,studentId); if(!st)return {ok:false,message:'Aluno não encontrado.'};
  const exists=(s.replacementRequests||[]).some(r=>r.studentId===studentId&&r.sourceDay===day&&r.sourceTime===time&&r.status!=='cancelled'&&r.status!=='completed');
  if(exists)return {ok:false,message:'Essa falta já está registrada para reposição.'};
  const d=new Date(); d.setDate(d.getDate()+(s.replacementPolicy?.creditValidityDays||30));
  const expires=d.toISOString().slice(0,10);
  const req={id:makeId('rep'),studentId,studentName:st.name,personalId:st.personalId,sourceDay:day,sourceTime:time,sourceDate:todayISO(),createdAt:new Date().toISOString(),expires,status:'waiting',assigned:null};
  s.replacementRequests=s.replacementRequests||[]; s.replacementRequests.unshift(req);
  st.replacementCredits=replacementPendingCount(s,studentId)+replacementAssignedFor(s,studentId).length;
  const match=(s.operationalSchedule||[]).find(x=>x.personalId===st.personalId&&x.day===day&&x.time===time&&x.name===st.name);
  if(match){match.status='absence';match.note='Avisou que não vai conseguir ir';match.slotReleased=true}
  else {(s.operationalSchedule||[]).push({id:makeId('sch'),personalId:st.personalId,day,time,name:st.name,kind:'student',status:'absence',note:'Avisou que não vai conseguir ir',slotReleased:true})}
  addSystemEvent(s,`${st.name} avisou falta em ${day} · ${time}. Reposição adicionada à fila do administrativo.`);
  saveSystem(s); return {ok:true,request:req};
}
function assignReplacementV4(requestId,slotId){
  const s=getSystem(),req=(s.replacementRequests||[]).find(r=>r.id===requestId),slot=(s.operationalSchedule||[]).find(x=>x.id===slotId);
  if(!req||req.status!=='waiting')return {ok:false,message:'Reposição não está pendente.'};
  if(!slot||slot.status!=='absence'||!slot.slotReleased)return {ok:false,message:'Horário não está mais disponível.'};
  const st=studentById(s,req.studentId);
  req.status='assigned'; req.assigned={day:slot.day,time:slot.time,scheduleId:slot.id,date:todayISO()};
  (s.operationalSchedule||[]).push({id:makeId('sch'),personalId:slot.personalId,day:slot.day,time:slot.time,name:req.studentName,kind:'student',status:'replacement',note:`Reposição · falta de ${req.sourceDay} ${req.sourceTime}`,replacementRequestId:req.id});
  slot.slotReleased=false;
  if(st)st.replacementCredits=replacementPendingCount(s,st.id)+replacementAssignedFor(s,st.id).length;
  addSystemEvent(s,`Reposição de ${req.studentName} encaixada em ${slot.day} · ${slot.time}.`);
  saveSystem(s); return {ok:true};
}
function scheduleForDay(s,personalId,day){
  return (s.operationalSchedule||[]).filter(x=>x.personalId===personalId&&x.day===day).sort((a,b)=>a.time.localeCompare(b.time));
}
function scheduleStatusLabel(status){
  return ({confirmed:'Agendado',absence:'Falta avisada',replacement:'Reposição',trial:'Experimental',personal:'Treino'})[status]||status;
}
