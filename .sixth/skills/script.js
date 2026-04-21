/* ─── i18n DATA (Adapté pour Omar Ghraibia) ─────────────── */
const i18n = {
  fr: {
    nav_about:'À_propos', nav_formation:'Formation', nav_skills:'Compétences',
    nav_projects:'Projets', nav_contact:'Contact', nav_home:'Accueil',
    hero_status:'DISPONIBLE POUR STAGES & ALTERNANCE',
    hero_role:'Étudiant Informatique — Développement · Systèmes · Sécurité',
    badge_iut:'BUT Informatique — IUT2 Grenoble', badge_year:'1ère Année',
    badge_ctf:'Full-Stack Dev', badge_open:'Open to Remote',
    hero_desc:'Passionné par le <strong>développement web (React/JS)</strong> et l\'architecture bas niveau (Systèmes, Réseaux, Sécurité). Je transforme ma curiosité technique en projets concrets, de la création d\'interfaces fluides à l\'analyse réseau.',
    cta_projects:'Voir mes projets →', cta_cv:'Télécharger CV',
    about_title:'Qui suis-je ?',
    obj_label:'OBJECTIF PROFESSIONNEL',
    objective:'Décrocher une opportunité professionnelle (stage/alternance) pour appliquer mes compétences en développement logiciel et architecture système au sein d\'un environnement stimulant.',
    about_p1:'Actuellement en <strong>BUT Informatique (1ère année)</strong> à l\'IUT2 de Grenoble. Je cultive un profil polyvalent avec un fort attrait pour la création d\'applications robustes et la compréhension des couches basses de l\'informatique.',
    about_p2:'Qu\'il s\'agisse de concevoir une architecture web avec <strong>React</strong>, de développer des algorithmes en <strong>Java</strong>, ou de réaliser des audits réseau sur <strong>Kali Linux</strong>, mon approche est toujours orientée vers la pratique et l\'optimisation.',
    stat1_label:'An de formation', stat2_label:'Projets concrets', stat2_sub:'Web, Java, Systèmes',
    formation_title:'Parcours Académique',
    edu1_title:'BUT Informatique (1ère Année)',
    edu1_desc:'Formation intensive en développement logiciel, architecture des systèmes et réseaux. Apprentissage de l\'algorithmique avancée, de la programmation orientée objet et de la gestion de projets informatiques.',
    present:'Présent',
    skills_title:'Arsenal Technique',
    projects_title:'Réalisations Concrètes',
    proj1_tag:'Développement · Java', proj2_tag:'Front-End · React',
    proj3_tag:'Cybersécurité · Systèmes',
    proj1_desc:'Développement complet d\'un agent conversationnel intelligent. Traitement des entrées utilisateurs, implémentation d\'algorithmes de parsing et architecture basée sur la Programmation Orientée Objet (POO).',
    proj2_desc:'Création d\'un site web professionnel pour un cabinet médical de kinésithérapie. Interface responsive, présentation des expertises cliniques et optimisation UI/UX pour faciliter la prise de rendez-vous.',
    proj3_desc:'Cartographie de réseaux et analyse de vulnérabilités via des environnements simulés. Utilisation approfondie des outils de monitoring et sécurisation des protocoles de communication.',
    solo:'Projet Freelance',
    contact_title:'Travaillons ensemble',
    contact_desc:'Disponible pour échanger sur des opportunités de stage, alternance ou de nouveaux projets.',
    location:'Grenoble, France (Campus IUT2)',
    form_name:'VOTRE NOM', form_msg:'MESSAGE', form_send:'ENVOYER LE MESSAGE →',
    footer_bio:'Étudiant BUT Informatique à l\'IUT2 de Grenoble. Développeur curieux, passionné par la création de solutions web et la compréhension de l\'architecture des systèmes.',
    footer_nav:'Navigation', footer_resources:'Ressources', footer_cv:'› Mon CV (PDF)',
    footer_email_btn:'Envoyer un email',
    rights:'Tous droits réservés',
    tw_phrases:['Étudiant en Informatique','Développement Web & React','Architecture & Systèmes (68k)','Passionné par l\'IT'],
  },
  en: {
    nav_about:'About', nav_formation:'Education', nav_skills:'Skills',
    nav_projects:'Projects', nav_contact:'Contact', nav_home:'Home',
    hero_status:'AVAILABLE FOR INTERNSHIP & APPRENTICESHIP',
    hero_role:'Computer Science Student — Development · Systems · Security',
    badge_iut:'Bachelor CS — IUT2 Grenoble', badge_year:'1st Year',
    badge_ctf:'Full-Stack Dev', badge_open:'Open to Remote',
    hero_desc:'Passionate about <strong>web development (React/JS)</strong> and low-level architecture (Systems, Networks, Security). I turn technical curiosity into concrete projects, from fluid interfaces to network analysis.',
    cta_projects:'View my projects →', cta_cv:'Download CV',
    about_title:'Who am I?',
    obj_label:'PROFESSIONAL OBJECTIVE',
    objective:'Secure a professional opportunity (internship/apprenticeship) to apply my skills in software development and system architecture in a stimulating environment.',
    about_p1:'Currently in my <strong>1st year of Bachelor in Computer Science</strong> at IUT2 Grenoble. I cultivate a versatile profile with a strong appeal for building robust apps and understanding low-level computing.',
    about_p2:'Whether it\'s designing a web architecture with <strong>React</strong>, developing algorithms in <strong>Java</strong>, or conducting network audits on <strong>Kali Linux</strong>, my approach is always practical and optimized.',
    stat1_label:'Year of training', stat2_label:'Concrete projects', stat2_sub:'Web, Java, Systems',
    formation_title:'Academic Background',
    edu1_title:'Bachelor CS (1st Year)',
    edu1_desc:'Intensive training in software development, system architecture, and networks. Learning advanced algorithms, object-oriented programming, and IT project management.',
    present:'Present',
    skills_title:'Technical Arsenal',
    projects_title:'Concrete Achievements',
    proj1_tag:'Development · Java', proj2_tag:'Front-End · React',
    proj3_tag:'Cybersecurity · Systems',
    proj1_desc:'Full development of an intelligent conversational agent. Processing user inputs, implementing parsing algorithms, and relying on Object-Oriented Programming (OOP) architecture.',
    proj2_desc:'Creation of a professional website for a physiotherapy medical practice. Responsive interface, presentation of clinical expertise, and UI/UX optimization for appointment booking.',
    proj3_desc:'Network mapping and vulnerability analysis via simulated environments. In-depth use of monitoring tools and securing communication protocols.',
    solo:'Freelance Project',
    contact_title:'Let\'s work together',
    contact_desc:'Available to discuss internship, apprenticeship opportunities, or new projects.',
    location:'Grenoble, France (IUT2 Campus)',
    form_name:'YOUR NAME', form_msg:'MESSAGE', form_send:'SEND MESSAGE →',
    footer_bio:'CS Bachelor student at IUT2 Grenoble. Curious developer, passionate about building web solutions and understanding system architecture.',
    footer_nav:'Navigation', footer_resources:'Resources', footer_cv:'› My CV (PDF)',
    footer_email_btn:'Send an email',
    rights:'All rights reserved',
    tw_phrases:['Computer Science Student','Web Development & React','Systems Architecture (68k)','Passionate about IT'],
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('langFR').classList.toggle('active', lang==='fr');
  document.getElementById('langEN').classList.toggle('active', lang==='en');
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Restart typewriter
  pi=0; ci=0; deleting=false;
}

/* ─── Theme Toggle ──────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const themeLabel  = document.getElementById('themeLabel');
let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.textContent  = isDark ? '🌙' : '☀️';
  themeLabel.textContent = isDark ? 'DARK' : 'LIGHT';
  themeIcon.style.transform = isDark ? 'rotate(0deg)' : 'rotate(180deg)';
});

/* ─── Custom Cursor ──────────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  dot.style.transform = `translate(${mx-4}px,${my-4}px)`;
});
(function animateRing(){
  rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
  ring.style.transform = `translate(${rx-18}px,${ry-18}px)`;
  requestAnimationFrame(animateRing);
})();
document.querySelectorAll('a,button,.skill-card,.proj-card,.cert-card,.stat-box,.contact-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width='52px'; ring.style.height='52px';
    ring.style.opacity='0.9'; ring.style.borderColor='var(--accent3)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width='36px'; ring.style.height='36px';
    ring.style.opacity='0.5'; ring.style.borderColor='var(--accent)';
  });
});

/* ─── Hamburger ─────────────────────────────────────────── */
const hbg = document.getElementById('hamburger');
const mm  = document.getElementById('mobileMenu');
hbg.addEventListener('click', () => {
  hbg.classList.toggle('open');
  mm.classList.toggle('open');
});
function closeMobile(){ hbg.classList.remove('open'); mm.classList.remove('open'); }

/* ─── Typewriter ─────────────────────────────────────────── */
let pi=0,ci=0,deleting=false;
const tw = document.getElementById('typewriter');
function type(){
  const phrases = i18n[currentLang].tw_phrases;
  const phrase  = phrases[pi];
  if(!deleting){
    tw.innerHTML = phrase.slice(0,++ci)+'<span class="cursor-blink"></span>';
    if(ci===phrase.length){ deleting=true; setTimeout(type,1800); return; }
  } else {
    tw.innerHTML = phrase.slice(0,--ci)+'<span class="cursor-blink"></span>';
    if(ci===0){ deleting=false; pi=(pi+1)%phrases.length; }
  }
  setTimeout(type, deleting?45:80);
}
type();

/* ─── Scroll Reveal ─────────────────────────────────────── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold:0.1});
document.querySelectorAll('.reveal,.skill-card').forEach(el => obs.observe(el));

/* ─── Skill bars width fix ──────────────────────────────── */
document.querySelectorAll('.skill-bar').forEach(bar => {
  const w = bar.style.width || '85%';
  bar.style.removeProperty('width');
  bar.dataset.width = w;
});
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const bar = e.target.querySelector('.skill-bar');
      if(bar) bar.style.width = bar.dataset.width || '85%';
      e.target.classList.add('visible');
    }
  });
},{threshold:0.2});
document.querySelectorAll('.skill-card').forEach(c => barObs.observe(c));

/* ─── 3D Tilt ────────────────────────────────────────────── */
document.querySelectorAll('.skill-card').forEach(card => {
  const inner = card.querySelector('.skill-card-inner');
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width - 0.5;
    const y = (e.clientY-r.top)/r.height  - 0.5;
    inner.style.transform = `rotateY(${x*18}deg) rotateX(${-y*18}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', () => {
    inner.style.transform = '';
  });
});

/* ─── Hero Orb Parallax ─────────────────────────────────── */
document.addEventListener('mousemove', e => {
  const cx = e.clientX/window.innerWidth - 0.5;
  const cy = e.clientY/window.innerHeight - 0.5;
  document.querySelectorAll('.hero-orb').forEach((o,i) => {
    const f = (i+1)*14;
    o.style.transform = `translate(${cx*f}px,${cy*f}px)`;
  });
});

/* ─── Navbar scroll shadow ──────────────────────────────── */
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY>40
      ? '0 8px 40px rgba(0,0,0,0.35), 0 1px 0 var(--nav-border)'
      : '0 4px 30px rgba(0,0,0,0.2)';
});