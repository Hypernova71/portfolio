const translations = {
  EN: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contacts: "Contacts",
    title: "Eldar - aspiring Front-End Developer with a great potential",
    text: "I am a frontend developer. I create responsive and intuitive websites using modern front-end technologies.",
    img_text: "Currently working on Portfolio",
    quote: '"What you do today can improve all your tomorrows"',
    author: "- Ralph Marston",
    skills_title: "My Skills",
    skill_lang: "Languages & Core",
    skill_lang_txt: "HTML5, CSS3, JavaScript, jQuery, SCSS, DOM Manipulation, LocalStorage",
    skill_fr: "Front-End Development",
    skill_fr_txt: "React, Vue, Fetch API / Axios, Responsive Design, Flexbox / Grid",
    skill_tools: "Tools & Workflow",
    skill_tools_txt: "Git, NPM, Vite, VS Code, Working with designs (Figma)",
    skill_addit: "Additional Skills",
    skill_addit_txt: "UI Layout, Optimization, Component Handling, Reading Others' Code",

  },
  RU: {
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contacts: "Контакты",
    title: "Эльдар - начинающий Front-End Разработчик с большим потенциалом",
    text: "Я фронтенд-разработчик. Создаю адаптивные и интуитивно понятные веб-сайты, используя современные фронтенд технологии.",
    img_text: "Работаю над Портфолио",
    quote: '"То, что вы делаете сегодня, может улучшить все ваши завтрашние дни."',
    author: "- Ralph Marston",
    skills_title: "Мои Навыки",
    skill_lang: "Языки и основы",
    skill_lang_txt: "HTML5, CSS3, JavaScript, jQuery, SCSS, Работа с DOM, LocalStorage",
    skill_fr: "Front-End Разработка",
    skill_fr_txt: "React, Vue, Fetch API / Axios, Адаптивная верстка, Flexbox / Grid",
    skill_tools: "Инструменты и рабочий процесс",
    skill_tools_txt: "Git, NPM, Vite, VS Code, Работа с макетами (Figma)",
    skill_addit: "Дополнительные навыки",
    skill_addit_txt: "UI Layout, Оптимизация, Работа с компонентами, Разбор чужого кода",
  },
  KZ: {
    about: "Мен туралы",
    skills: "Дағдылар",
    projects: "Жобалар",
    contacts: "Байланыс",
    title: "Эльдар - үлкен әлеуеті бар Front-End әзірлеушісі",
    text: "Мен фронтенд әзірлеушісімін. Мен заманауи алдыңғы қатарлы технологияларды қолдана отырып, жауап беретін және интуитивті веб-сайттарды жасаймын.",
    img_text: "Портфолио үстінде жұмыс істеп жатырмын",
    quote: '"Бүгін істеген ісіңіздің барлығы ертеңгі күніңізді жақсарта алады."',
    author: "- Ralph Marston",
    skills_title: "Менің дағдыларым",
    skill_lang: "Тілдер және негізгі",
    skill_lang_txt: "HTML5, CSS3, JavaScript, jQuery, SCSS, DOM-пен жұмыс, LocalStorage",
    skill_fr: "Front-End әзірлеу",
    skill_fr_txt: "React, Vue, Fetch API / Axios, Адаптивті дизайн, Flexbox / Grid",
    skill_tools: "Құралдар және жұмыс процесі",
    skill_tools_txt: "Git, NPM, Vite, VS Code, Дизайндармен жұмыс (Figma)",
    skill_addit: "Қосымша дағдылар",
    skill_addit_txt: "UI Layout, Оптимизация, Компоненттермен жұмыс, Басқалардың кодын оқу",
  }
};


const btn = document.querySelector('.language-btn');
const list = document.querySelector('.language-list');
const navItems = document.querySelectorAll('[data-key]');

btn.addEventListener('click', () => {
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
});

list.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === "LI") {
    const selectedLang = e.target.dataset.lang;
    btn.textContent = selectedLang + '▼';
    list.style.display = 'none';

    navItems.forEach(item => {
      const key = item.dataset.key;
      item.textContent = translations[selectedLang][key];
    });
  }

});

const mobileBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.header--boxMobile');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});