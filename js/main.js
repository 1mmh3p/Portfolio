/* ============================================================
   Mustafa El Huseyyen — Personal Website
   Language switcher + small interactions
   ============================================================ */

const translations = {
  en: {
    brand: "MuMaCodes",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_brand: "MuMaCodes",
    nav_contact: "Contact",
    cta_contact: "Contact",
    hero_badge: "Available for opportunities",
    hero_title: "Software Programmer · Web Developer",
    hero_desc: "I build practical web applications, AI solutions, and computer-vision projects. Focused on clean code, clear interfaces, and real-world results.",
    hero_cta1: "Get in touch",
    hero_cta2: "View projects",
    hero_cta3: "Download CV",
    about_title: "About Me",
    about_p1: "I am a software programming graduate interested in web development, application development, artificial intelligence, and computer vision. I build practical software solutions and work on projects involving web technologies, machine learning, image processing, and database-driven applications.",
    about_p2: "I focus on writing organized code, designing clear interfaces, and delivering good user experience.",
    fact_edu: "Education",
    fact_loc: "Location",
    fact_focus: "Focus",
    skills_title: "Technical Skills",
    skills_sub: "Technologies I work with",
    sk_lang: "Programming Languages",
    sk_front: "Frontend",
    sk_back: "Backend & Databases",
    sk_ai: "AI & Computer Vision",
    sk_tools: "Tools",
    proj_title: "Featured Projects",
    p1_cat: "AI · Medical Imaging · Web",
    p1_desc: "AI-based pneumonia detection and chest X-ray analysis platform. Processes chest X-ray images and classifies them into NORMAL and PNEUMONIA using deep learning models. Includes image preprocessing, model selection, prediction history, dashboard visualizations, and dataset analytics.",
    p1_disc: "⚠️ Academic project — predictions are for educational and research purposes only and do not replace professional medical evaluation.",
    p2_cat: "E-commerce · Web",
    p2_desc: "Arabic-language online marketplace for displaying and managing products and facilitating customer orders. Database-backed architecture with product pages, categories, checkout-related pages, and administration functionality.",
    p3_cat: "AI · Machine Learning",
    p3_title: "AI & Computer Vision Projects",
    p3_desc: "A collection of projects involving image classification, computer vision, and machine learning, including a plant disease classification application and AI-based image analysis.",
    brand_desc: "A programming-focused initiative and community that supports learning, programming projects, and technical collaboration.",
    brand_web: "Website",
    brand_com: "Community",
    contact_title: "Let's Connect",
    contact_sub: "Open to jobs, freelance, and collaborations",
    share_btn: "Share this profile",
    copy_btn: "Copy link",
    footer_role: "Software Programmer · Web Developer",
    copied: "Link copied!",
    langBtn: "ع"
  },
  ar: {
    brand: "MuMaCodes",
    nav_about: "نبذة",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_brand: "MuMaCodes",
    nav_contact: "تواصل",
    cta_contact: "تواصل",
    hero_badge: "متاح للفرص",
    hero_title: "مبرمج برمجيات · مطور ويب",
    hero_desc: "أطوّر تطبيقات ويب عملية وحلول ذكاء اصطناعي ومشاريع رؤية حاسوبية، مع التركيز على كود منظم وواجهات واضحة وتجربة مستخدم جيدة.",
    hero_cta1: "تواصل معي",
    hero_cta2: "عرض المشاريع",
    hero_cta3: "تحميل السيرة الذاتية",
    about_title: "نبذة عني",
    about_p1: "أنا خريج برمجة حاسوب مهتم بتطوير الويب والتطبيقات والذكاء الاصطناعي والرؤية الحاسوبية. أبني حلولاً برمجية عملية وأعمل على مشاريع تشمل تقنيات الويب والتعلّم الآلي ومعالجة الصور وتطبيقات قواعد البيانات.",
    about_p2: "أركز على كتابة كود منظم وتصميم واجهات واضحة وتقديم تجربة استخدام جيدة.",
    fact_edu: "التعليم",
    fact_loc: "الموقع",
    fact_focus: "التركيز",
    skills_title: "المهارات التقنية",
    skills_sub: "التقنيات التي أعمل بها",
    sk_lang: "لغات البرمجة",
    sk_front: "الواجهة الأمامية",
    sk_back: "الخادم وقواعد البيانات",
    sk_ai: "الذكاء الاصطناعي والرؤية الحاسوبية",
    sk_tools: "الأدوات",
    proj_title: "أبرز المشاريع",
    p1_cat: "ذكاء اصطناعي · تصوير طبي · ويب",
    p1_desc: "منصة للكشف عن الالتهاب الرئوي وتحليل صور الأشعة الصدرية، تصنّف الصور إلى NORMAL وPNEUMONIA باستخدام نماذج تعلّم عميق. تشمل معالجة الصور واختيار النموذج وسجل التنبؤات ولوحة إحصائيات وتحليلات.",
    p1_disc: "⚠️ مشروع أكاديمي — التنبؤات لأغراض تعليمية وبحثية فقط ولا تُغني عن التقييم الطبي المتخصص.",
    p2_cat: "تجارة إلكترونية · ويب",
    p2_desc: "متجر إلكتروني عربي لعرض وإدارة المنتجات وتسهيل طلبات العملاء، ببنية تعتمد على قاعدة بيانات مع صفحات منتجات وتصنيفات وصفحات إتمام الطلب ولوحة إدارة.",
    p3_cat: "ذكاء اصطناعي · تعلّم آلي",
    p3_title: "مشاريع الذكاء الاصطناعي والرؤية الحاسوبية",
    p3_desc: "مجموعة مشاريع في تصنيف الصور والرؤية الحاسوبية والتعلّم الآلي، تشمل تطبيق تصنيف أمراض النباتات وتحليل الصور بالذكاء الاصطناعي.",
    brand_desc: "مبادرة ومجتمع يركز على البرمجة ويدعم التعلّم والمشاريع البرمجية والتعاون التقني.",
    brand_web: "الموقع",
    brand_com: "المجتمع",
    contact_title: "لنتواصل",
    contact_sub: "متاح للوظائف والعمل الحر والتعاون",
    share_btn: "شارك الملف الشخصي",
    copy_btn: "نسخ الرابط",
    footer_role: "مبرمج برمجيات · مطور ويب",
    copied: "تم نسخ الرابط!",
    langBtn: "EN"
  }
};

/* ---------- STATE ---------- */
let currentLang = localStorage.getItem("mh-lang") || "en";

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
    if (t[key]) el.textContent = t[key];
  });

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = t.langBtn;
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  // سنة الفوتر
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // زر تبديل اللغة
  document.getElementById("langSwitch")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ar" : "en");
  });

  // قائمة الموبايل
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
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

  // زر المشاركة
  document.getElementById("shareBtn")?.addEventListener("click", async () => {
    const data = {
      title: "Mustafa El Huseyyen — Software Programmer",
      text: "Check out Mustafa El Huseyyen's portfolio",
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch(e){}
    } else {
      copyToClipboard(window.location.href);
    }
  });

  // زر النسخ
  document.getElementById("copyBtn")?.addEventListener("click", () => {
    copyToClipboard(window.location.href);
  });
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
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy");
    ta.remove();
  });
}