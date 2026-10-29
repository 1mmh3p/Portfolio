/* ============================================================
   Mustafa El Huseyyen — Portfolio
   Theme · Language · Reveal · Navigation
   ============================================================ */

const translations = {
  en: {
    cta_contact: "Contact",
    nav_about: "About", nav_services: "Services", nav_skills: "Skills",
    nav_projects: "Projects", nav_brand: "MuMaCodes", nav_contact: "Contact",
    hero_badge: "Available for opportunities",
    hero_syrian: "Syrian Developer",
    hero_greeting: "Hi, I'm",
    hero_title: "Computer Programmer",
    hero_title2: "Software Developer",
    hero_desc: "Computer Programming graduate from Afyon Kocatepe University. I build practical web applications, AI solutions, and computer-vision projects with clean code and clear interfaces.",
    hero_cta1: "Get in touch", hero_cta2: "View projects",
    about_title: "About Me",
    about_p1: "I'm a <strong>Computer Programming</strong> graduate from Afyon Kocatepe University (Bilgisayar Programcılığı), originally from <strong>Syria</strong> and based in Türkiye.",
    about_p2: "I build practical software solutions — web applications, AI-powered tools, and computer-vision projects. I focus on clean code, clear interfaces, and delivering great user experience.",
    about_p3: "Founder of <strong>MuMaCodes</strong> — a programming community supporting learning, collaboration, and hands-on technical projects.",
    fact_edu: "Education", fact_from: "From", fact_from_sub: "Based in Türkiye", fact_focus: "Focus",

    services_title: "Services",
    services_sub: "What I can build for you",
    svc1_title: "Web Development",
    svc1_desc: "Modern, fast, and responsive websites — from landing pages to full web applications with clean, semantic code.",
    svc2_title: "E-Commerce",
    svc2_desc: "Online stores with product management, cart, checkout flow, and admin dashboard — built with PHP & MySQL.",
    svc3_title: "AI & Computer Vision",
    svc3_desc: "Image classification, object detection, and custom deep learning models using PyTorch, Keras, and OpenCV.",
    svc4_title: "Custom Software",
    svc4_desc: "Desktop tools, automation scripts, and Python applications tailored to your specific needs and workflow.",
    svc5_title: "Responsive Design",
    svc5_desc: "Mobile-first interfaces that look great on every device — phone, tablet, and desktop.",
    svc6_title: "SEO & Performance",
    svc6_desc: "Semantic HTML, structured data, optimized loading, and clean code to help your site rank better.",

    skills_title: "Technical Skills", skills_sub: "Technologies I work with",
    sk_lang: "Programming Languages", sk_front: "Frontend",
    sk_back: "Backend & Databases", sk_ai: "AI & Computer Vision", sk_tools: "Tools",

    proj_title: "Featured Projects",
    proj_sub: "Selected work in AI, web, and computer vision",
    p1_cat: "AI · Medical Imaging · Web",
    p1_desc: "AI-based pneumonia detection and chest X-ray analysis platform. Classifies chest X-ray images into NORMAL and PNEUMONIA using deep learning models (DenseNet121, MobileNetV3). Includes image preprocessing, prediction history, dashboard visualizations, and dataset analytics.",
    p1_disc: "Academic project — predictions are for educational and research purposes only and do not replace professional medical evaluation.",
    p2_cat: "E-commerce · Web",
    p2_desc: "Arabic-language online marketplace for displaying and managing products and facilitating customer orders. Database-backed architecture with product pages, categories, checkout flow, and administration panel.",
    p3_cat: "AI · Machine Learning",
    p3_title: "AI & Computer Vision Projects",
    p3_desc: "A collection of projects involving image classification, computer vision, and machine learning — including a plant disease classification application and AI-based image analysis using MobileNetV2.",
    live_demo: "Live Demo",

    brand_title: "MuMaCodes",
    brand_sub: "A programming community for students & developers",
    brand_desc: "MuMaCodes is a programming-focused initiative and community that supports learning, programming projects, and technical collaboration. We help students and developers grow through shared knowledge, real projects, and open discussions.",
    brand_f1: "Community for students & developers",
    brand_f2: "Real coding projects & collaboration",
    brand_f3: "Active WhatsApp group for discussions",
    brand_join: "Join on WhatsApp",
    brand_web: "Website", brand_com: "Community",

    contact_title: "Let's Connect", contact_sub: "Open to jobs, freelance, and collaborations",
    share_btn: "Share this profile", copy_btn: "Copy link",
    footer_role: "Computer Programmer · Software Developer",
    footer_syria: "Proudly Syrian",
    copied: "Link copied!", langBtn: "ع"
  },
  ar: {
    cta_contact: "تواصل",
    nav_about: "نبذة", nav_services: "الخدمات", nav_skills: "المهارات",
    nav_projects: "المشاريع", nav_brand: "MuMaCodes", nav_contact: "تواصل",
    hero_badge: "متاح للفرص",
    hero_syrian: "مطوّر سوري",
    hero_greeting: "أهلاً، أنا",
    hero_title: "مبرمج حاسوب",
    hero_title2: "مطوّر برمجيات",
    hero_desc: "خريج برمجة حاسوب من جامعة أفيون قوجه تبه. أبني تطبيقات ويب عملية وحلول ذكاء اصطناعي ومشاريع رؤية حاسوبية بكود منظم وواجهات واضحة.",
    hero_cta1: "تواصل معي", hero_cta2: "عرض المشاريع",
    about_title: "نبذة عني",
    about_p1: "أنا خريج <strong>برمجة حاسوب</strong> من جامعة أفيون قوجه تبه (Bilgisayar Programcılığı)، من <strong>سوريا</strong> ومقيم في تركيا.",
    about_p2: "أبني حلولاً برمجية عملية — تطبيقات ويب، أدوات مدعومة بالذكاء الاصطناعي، ومشاريع رؤية حاسوبية. أركز على الكود المنظم والواجهات الواضحة وتجربة مستخدم ممتازة.",
    about_p3: "مؤسس <strong>MuMaCodes</strong> — مجتمع برمجي يدعم التعلّم والتعاون والمشاريع التقنية العملية.",
    fact_edu: "التعليم", fact_from: "من", fact_from_sub: "مقيم في تركيا", fact_focus: "التركيز",

    services_title: "الخدمات",
    services_sub: "ما يمكنني بناؤه لك",
    svc1_title: "تطوير الويب",
    svc1_desc: "مواقع حديثة سريعة ومتجاوبة — من صفحات الهبوط إلى تطبيقات ويب كاملة بكود نظيف ودلالي.",
    svc2_title: "التجارة الإلكترونية",
    svc2_desc: "متاجر إلكترونية مع إدارة منتجات وسلة وتسلسل دفع ولوحة إدارة — مبنية بـ PHP وMySQL.",
    svc3_title: "الذكاء الاصطناعي والرؤية الحاسوبية",
    svc3_desc: "تصنيف صور، كشف كائنات، ونماذج تعلّم عميق مخصصة باستخدام PyTorch وKeras وOpenCV.",
    svc4_title: "برمجيات مخصصة",
    svc4_desc: "أدوات سطح مكتب وسكربتات أتمتة وتطبيقات Python مصممة خصيصاً لاحتياجاتك.",
    svc5_title: "تصميم متجاوب",
    svc5_desc: "واجهات Mobile-first تبدو رائعة على كل جهاز — هاتف، تابلت، وحاسوب.",
    svc6_title: "SEO والأداء",
    svc6_desc: "HTML دلالي، بيانات منظمة، تحميل محسّن، وكود نظيف لمساعدتك على التصنيف الأفضل.",

    skills_title: "المهارات التقنية", skills_sub: "التقنيات التي أعمل بها",
    sk_lang: "لغات البرمجة", sk_front: "الواجهة الأمامية",
    sk_back: "الخادم وقواعد البيانات", sk_ai: "الذكاء الاصطناعي والرؤية الحاسوبية", sk_tools: "الأدوات",

    proj_title: "أبرز المشاريع",
    proj_sub: "أعمال مختارة في الذكاء الاصطناعي والويب والرؤية الحاسوبية",
    p1_cat: "ذكاء اصطناعي · تصوير طبي · ويب",
    p1_desc: "منصة للكشف عن الالتهاب الرئوي وتحليل صور الأشعة الصدرية. تصنّف الصور إلى NORMAL وPNEUMONIA باستخدام نماذج تعلّم عميق (DenseNet121, MobileNetV3). تشمل معالجة الصور، سجل التنبؤات، لوحة إحصائيات، وتحليلات.",
    p1_disc: "مشروع أكاديمي — التنبؤات لأغراض تعليمية وبحثية فقط ولا تُغني عن التقييم الطبي المتخصص.",
    p2_cat: "تجارة إلكترونية · ويب",
    p2_desc: "متجر إلكتروني عربي لعرض وإدارة المنتجات وتسهيل طلبات العملاء، ببنية تعتمد على قاعدة بيانات مع صفحات منتجات وتصنيفات وسلة ولوحة إدارة.",
    p3_cat: "ذكاء اصطناعي · تعلّم آلي",
    p3_title: "مشاريع الذكاء الاصطناعي والرؤية الحاسوبية",
    p3_desc: "مجموعة مشاريع في تصنيف الصور والرؤية الحاسوبية والتعلّم الآلي — تشمل تطبيق تصنيف أمراض النباتات وتحليل الصور بالذكاء الاصطناعي باستخدام MobileNetV2.",
    live_demo: "عرض حي",

    brand_title: "MuMaCodes",
    brand_sub: "مجتمع برمجي للطلاب والمبرمجين",
    brand_desc: "MuMaCodes مبادرة ومجتمع برمجي يدعم التعلّم والمشاريع البرمجية والتعاون التقني. نساعد الطلاب والمبرمجين على النمو من خلال المعرفة المشتركة والمشاريع الحقيقية والنقاشات المفتوحة.",
    brand_f1: "مجتمع للطلاب والمبرمجين",
    brand_f2: "مشاريع برمجية حقيقية وتعاون",
    brand_f3: "مجموعة واتساب نشطة للنقاشات",
    brand_join: "انضم عبر واتساب",
    brand_web: "الموقع", brand_com: "المجتمع",

    contact_title: "لنتواصل", contact_sub: "متاح للوظائف والعمل الحر والتعاون",
    share_btn: "شارك الملف", copy_btn: "نسخ الرابط",
    footer_role: "مبرمج حاسوب · مطور برمجيات",
    footer_syria: "سوري بكل فخر",
    copied: "تم نسخ الرابط!", langBtn: "EN"
  }
};

/* ---------- STATE ---------- */
let currentLang = localStorage.getItem("mh-lang") || "en";
let currentTheme = localStorage.getItem("mh-theme") || "dark";

/* ---------- APPLY LANGUAGE ---------- */
function applyLanguage(lang){
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("mh-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined){
      if (/<[a-z][\s\S]*>/i.test(t[key])) el.innerHTML = t[key];
      else el.textContent = t[key];
    }
  });

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = t.langBtn;
}

/* ---------- APPLY THEME ---------- */
function applyTheme(theme){
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("mh-theme", theme);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  applyLanguage(currentLang);
  document.getElementById("langSwitch")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ar" : "en");
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  menuToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  document.querySelectorAll(".nav-list a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("shareBtn")?.addEventListener("click", async () => {
    const data = {
      title: "Mustafa El Huseyyen — Computer Programmer",
      text: "Check out Mustafa El Huseyyen's portfolio",
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch(e){}
    } else {
      copyToClipboard(window.location.href);
    }
  });

  document.getElementById("copyBtn")?.addEventListener("click", () => {
    copyToClipboard(window.location.href);
  });

  const progress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (backToTop) backToTop.classList.toggle("visible", scrolled > 400);
  }, { passive: true });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  const navLinks = document.querySelectorAll(".nav-list a");
  const sections = [...navLinks]
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length){
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          navLinks.forEach(a => a.classList.remove("active"));
          const link = document.querySelector(`.nav-list a[href="#${e.target.id}"]`);
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => navIO.observe(s));
  }
});

/* ---------- HELPERS ---------- */
function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = translations[currentLang].copied;
    setTimeout(() => { btn.textContent = original; }, 1800);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  });
}