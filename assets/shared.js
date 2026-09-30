const JHOW_KEY = 'jhowEtapa1State';
const THEME_KEY = 'jhowTheme';

const DEFAULT_STATE = {
  student: {
    name: 'Ana Martins',
    plan: '2x por semana',
    fixedSchedule: ['Segunda • 07:00', 'Quarta • 07:00'],
    nextWorkout: 'Segunda • 07:00',
    progress30: 12,
    replacementCredits: 0,
    creditExpires: null,
    absenceNotified: false,
    replacementBooked: null
  },
  slots: [
    {id:'seg-0600', day:'Segunda', time:'06:00', free:false, source:'fixo'},
    {id:'seg-0700', day:'Segunda', time:'07:00', free:false, source:'Ana Martins'},
    {id:'seg-0800', day:'Segunda', time:'08:00', free:true, source:'vaga'},
    {id:'ter-1700', day:'Terça', time:'17:00', free:true, source:'vaga'},
    {id:'qua-0700', day:'Quarta', time:'07:00', free:false, source:'Ana Martins'},
    {id:'qui-1800', day:'Quinta', time:'18:00', free:true, source:'vaga'},
    {id:'sex-1900', day:'Sexta', time:'19:00', free:true, source:'vaga'}
  ],
  admin: {
    activeStudents: 124,
    workoutsToday: 28,
    absencesToday: 5,
    attendanceRate: 92
  },
  attendance: [
    {name:'Bruno Lima', time:'06:00', status:'presente'},
    {name:'Ana Martins', time:'07:00', status:'agendado'},
    {name:'Camila Rocha', time:'08:00', status:'agendado'},
    {name:'Marcos Silva', time:'17:00', status:'agendado'},
    {name:'Paula Nunes', time:'18:00', status:'agendado'}
  ],
  events: []
};

function clone(x){ return JSON.parse(JSON.stringify(x)); }
function getState(){
  const raw = localStorage.getItem(JHOW_KEY);
  if(!raw){ localStorage.setItem(JHOW_KEY, JSON.stringify(DEFAULT_STATE)); return clone(DEFAULT_STATE); }
  try { return JSON.parse(raw); } catch { return clone(DEFAULT_STATE); }
}
function saveState(state){ localStorage.setItem(JHOW_KEY, JSON.stringify(state)); }
function resetDemo(){ localStorage.setItem(JHOW_KEY, JSON.stringify(DEFAULT_STATE)); location.reload(); }
function addEvent(state, type, text){
  state.events.unshift({type, text, at:new Date().toISOString()});
  state.events = state.events.slice(0,20);
}
function toggleTheme(){
  const current=document.documentElement.dataset.theme || 'dark';
  const next=current==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next;
  localStorage.setItem(THEME_KEY,next);
}
function initTheme(){ document.documentElement.dataset.theme=localStorage.getItem(THEME_KEY)||'dark'; }
function toast(msg){
  let el=document.querySelector('#toast');
  if(!el){ el=document.createElement('div'); el.id='toast'; el.className='toast'; document.body.appendChild(el); }
  el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),3000);
}
function formatDateBR(iso){
  if(!iso) return '—';
  return new Date(iso).toLocaleDateString('pt-BR');
}
function logout(){ location.href='index.html'; }
initTheme();
