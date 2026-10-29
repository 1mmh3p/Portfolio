/* ============================================================
   Mustafa Al Hussayan — Portfolio
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
    hero_title2: "Full Stack Developer",
    hero_desc: "Computer Programming graduate from Afyon Kocatepe University. I build practical web applications, AI solutions, and computer-vision projects with clean code and clear interfaces.",
    hero_cta1: "Get in touch", hero_cta2: "View CV",
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

  skills_title: "Technical Skills",
skills_sub: "Full Stack technologies I work with",
sk_lang: "Programming Languages",
sk_front: "Frontend",
sk_back: "Backend",
sk_db: "Databases",
sk_ai: "AI & Computer Vision",
sk_devops: "DevOps & Deployment",
sk_design: "Design & Tools",

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
 p4_cat: "Mobile App · Quiz · TypeScript",
    p4_title: "Quizz App",
    p4_desc: "A multilingual quiz application designed for users of all ages — with a wide range of topics and difficulty levels. Features Welcome & Login screens, Home, Quiz modes, Calendar, Records, Profile, Help Center, Privacy Policy, and a powerful Search system with dashboards. Built with TypeScript and React Native for cross-platform performance.",
    view_github: "View on GitHub",
        p5_cat: "AI · NLP · Full Stack",
    p5_title: "AI File Summarizer Assistant",
    p5_desc: "An AI-powered business assistant that summarizes documents and files automatically. Built with a Python backend (Flask) for AI processing and a Node.js/JavaScript frontend with an interactive chatbot interface. Supports multi-format file upload, automatic summarization, and a clean chat-based UI for interacting with the AI.",
        p6_cat: "AI · Deep Learning · Deepfake Detection",
    p6_title: "FakeFace — Deepfake Detector",
    p6_desc: "A deep learning project for detecting AI-generated and deepfake face images. Trains a convolutional neural network (CNN) on real vs. fake face datasets to classify whether a face image is authentic or manipulated. Built entirely in Python with PyTorch/TensorFlow for training and evaluation.",
    p6_disc: "Research project — model accuracy depends on dataset quality and may not detect all manipulation types.",
    p7_cat: "Cultural Website · Multi-Page · Turkish",
    p7_title: "Keşfet Suriye — Discover Syria",
    p7_desc: "A multilingual cultural tourism website dedicated to discovering Syria — its 14 governorates, traditional cuisine, 5,000+ years of history, and rich cultural heritage. Features a multi-page architecture (Home, Governorates, Cuisine, History, Culture), responsive design with mobile navigation, statistics dashboard, interactive cards, historical timeline, and a modern newsletter subscription form.",
        p8_cat: "Full Stack · Construction Tech · SaaS",
    p8_title: "Buildly Syria — Construction Cost Estimator",
    p8_desc: "A complete construction cost estimation system for the Syrian market. Calculates material quantities and total costs based on building area, type, floors, and material quality. Features a smart calculator, live material prices, decoration ideas, PDF report generation, and a full admin dashboard. Built with a modern responsive UI and Arabic-first design.",
    p9_cat: "Mobile · Healthcare · AI Chat",
    p9_title: "Herbal Treatment App",
    p9_desc: "A cross-platform mobile app for herbal medicine and natural treatments. Features full authentication (Login/Register), a searchable herbal database with detailed plant information, an AI-powered chat assistant for health guidance, and a user profile system. Built with React Native and Expo, backed by a SQL database.",
        p10_cat: "AI · Image Processing · TypeScript",
    p10_title: "Creative Image Transformer",
    p10_desc: "A modern web tool for creative image transformation. Built with React, TypeScript, and Vite for fast performance. Supports AI-powered image editing and creative transformations, with a clean UI and fully modular architecture. Written entirely from scratch — no automated AI code generation.",
    p10_disc: "In development — tools folder available upon request. Contact for full access.",



        proj_sub: "Top 5 selected projects — and more",
    more_projects_title: "More Projects",
    view_all_projects: "View All Projects",
    more_on_github: "There are many more projects — browse the GitHub repository",
    browse_github: "Browse GitHub",
    modal_title: "All Projects",
    filter_all: "All",
    filter_ai: "AI / ML",
    filter_web: "Web",
    filter_mobile: "Mobile",
    filter_saas: "SaaS",
    p4_desc_short: "Multilingual quiz app with Auth, Quiz modes, Calendar, Records, Profile, Help Center, and Search.",
    p10_desc_short: "Modern web tool for creative image transformation built with React, TypeScript, and Vite.",
    p7_desc_short: "Multilingual cultural tourism website about Syria — 14 governorates, cuisine, history, culture.",
    p2_desc_short: "Arabic online marketplace with product pages, categories, checkout flow, and admin panel.",
    p1_desc_short: "AI platform for pneumonia detection and chest X-ray analysis using deep learning (DenseNet121, MobileNetV3).",
    p8_desc_short: "Construction cost estimation system for the Syrian market — calculator, PDF reports, admin dashboard.",
    p9_desc_short: "Cross-platform mobile app for herbal medicine with auth, search, AI chat assistant, and profile system.",
    p6_desc_short: "Deep learning project for detecting AI-generated and deepfake face images using CNN models.",
    p5_desc_short: "AI assistant for automatic document summarization — Flask backend + Node.js chatbot UI.",
    p3_desc_short: "Collection of image classification and computer vision projects (plant disease, image analysis).",



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
    footer_role: "Computer Programmer · Full Stack Developer",
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
    hero_cta1: "تواصل معي", hero_cta2: "عرض السيرة الذاتية",
    about_title: "نبذة عني",
    about_p1: "أنا خريج <strong>برمجة حاسوب</strong> من جامعة أفيون قوجه تبه (Computer Programmer)، من <strong>سوريا</strong> ومقيم في تركيا.",
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

  skills_title: "المهارات التقنية",
skills_sub: "تقنيات الفل ستاك التي أعمل بها",
sk_lang: "لغات البرمجة",
sk_front: "الواجهة الأمامية",
sk_back: "الخادم (Backend)",
sk_db: "قواعد البيانات",
sk_ai: "الذكاء الاصطناعي والرؤية الحاسوبية",
sk_devops: "DevOps والنشر",
sk_design: "التصميم والأدوات",

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
       p4_cat: "تطبيق موبايل · اختبارات · TypeScript",
    p4_title: "تطبيق Quizz",
    p4_desc: "تطبيق اختبارات متعدد اللغات مصمم للمستخدمين من جميع الأعمار — مع مجموعة واسعة من المواضيع ومستويات الصعوبة. يشمل شاشات الترحيب وتسجيل الدخول، الرئيسية، أوضاع الاختبار، التقويم، السجلات، الملف الشخصي، مركز المساعدة، سياسة الخصوصية، ونظام بحث قوي مع لوحات تحكم. مبني بـ TypeScript وReact Native لأداء متعدد المنصات.",
    view_github: "عرض على GitHub",
    p5_cat: "ذكاء اصطناعي · معالجة لغات · فل ستاك",
    p5_title: "مساعد تلخيص الملفات بالذكاء الاصطناعي",
    p5_desc: "مساعد أعمال مدعوم بالذكاء الاصطناعي يلخّص المستندات والملفات تلقائياً. مبني بواجهة خلفية Python (Flask) لمعالجة الذكاء الاصطناعي، وواجهة أمامية Node.js/JavaScript مع واجهة دردشة تفاعلية. يدعم رفع ملفات متعددة الصيغ، التلخيص التلقائي، وواجهة محادثة نظيفة للتفاعل مع الذكاء الاصطناعي.",
        p6_cat: "ذكاء اصطناعي · تعلّم عميق · كشف التزييف العميق",
    p6_title: "FakeFace — كاشف الوجوه المزيفة",
    p6_desc: "مشروع تعلّم عميق للكشف عن الصور المولّدة بالذكاء الاصطناعي ووجوه الـ Deepfake. يدرّب شبكة عصبية التفافية (CNN) على مجموعات بيانات وجوه حقيقية ومزيفة لتصنيف ما إذا كانت صورة الوجه أصلية أم معدّلة. مبني بالكامل بـ Python مع PyTorch/TensorFlow للتدريب والتقييم.",
    p6_disc: "مشروع بحثي — دقة النموذج تعتمد على جودة البيانات وقد لا يكتشف كل أنواع التلاعب.", 
        p7_cat: "موقع ثقافي · متعدد الصفحات · تركي",
    p7_title: "اكتشف سوريا — Keşfet Suriye",
    p7_desc: "موقع سياحي ثقافي متعدد اللغات مخصص لاكتشاف سوريا — 14 محافظة، مطبخ تقليدي، أكثر من 5000 سنة من التاريخ، وتراث ثقافي غني. يشمل بنية متعددة الصفحات (الرئيسية، المحافظات، المطبخ، التاريخ، الثقافة)، تصميم متجاوب مع قائمة موبايل، لوحة إحصائيات، بطاقات تفاعلية، خط زمني تاريخي، ونموذج اشتراك في النشرة البريدية.", 
    p8_cat: "فل ستاك · تقنيات البناء · SaaS",
    p8_title: "Buildly Syria — حاسبة تكاليف البناء",
    p8_desc: "نظام متكامل لتقدير تكاليف البناء للسوق السوري. يحسب كميات المواد والتكاليف الإجمالية بناءً على مساحة البناء ونوعه وعدد الطوابق وجودة المواد. يشمل حاسبة ذكية، أسعار مواد محدّثة، أفكار ديكور، إنشاء تقارير PDF، ولوحة تحكم كاملة. مبني بواجهة عصرية متجاوبة وتصميم عربي أولاً (RTL).",
    p9_cat: "موبايل · صحة · دردشة ذكية",
    p9_title: "تطبيق العلاج بالأعشاب",
    p9_desc: "تطبيق موبايل متعدد المنصات للطب بالأعشاب والعلاجات الطبيعية. يشمل نظام مصادقة كامل (تسجيل دخول/تسجيل)، قاعدة بيانات أعشاب قابلة للبحث مع معلومات مفصلة عن النباتات، مساعد دردشة مدعوم بالذكاء الاصطناعي للإرشاد الصحي، ونظام ملف شخصي. مبني بـ React Native وExpo مع قاعدة بيانات SQL.",
    p10_cat: "ذكاء اصطناعي · معالجة صور · TypeScript",
    p10_title: "محوّل الصور الإبداعي",
    p10_desc: "أداة ويب حديثة لتحويل الصور بشكل إبداعي. مبنية بـ React وTypeScript وVite لأداء سريع. تدعم تعديل الصور بالذكاء الاصطناعي والتحويلات الإبداعية، مع واجهة نظيفة وبنية معيارية بالكامل. مكتوبة يدوياً من الصفر — بدون أي توليد آلي بالذكاء الاصطناعي.",
    p10_disc: "قيد التطوير — مجلد الأدوات متاح عند الطلب. تواصل للوصول الكامل.",

    
    proj_sub: "أفضل 5 مشاريع مختارة — والمزيد",
    more_projects_title: "مشاريع إضافية",
    view_all_projects: "عرض جميع المشاريع",
    more_on_github: "يوجد مشاريع كثيرة — يمكنكم تصفح مستودع GitHub",
    browse_github: "تصفح GitHub",
    modal_title: "جميع المشاريع",
    filter_all: "الكل",
    filter_ai: "ذكاء اصطناعي",
    filter_web: "ويب",
    filter_mobile: "موبايل",
    filter_saas: "SaaS",
    p4_desc_short: "تطبيق اختبارات متعدد اللغات مع مصادقة وأوضاع اختبار وتقويم وسجلات وملف شخصي ومركز مساعدة وبحث.",
    p10_desc_short: "أداة ويب حديثة لتحويل الصور الإبداعي مبنية بـ React وTypeScript وVite.",
    p7_desc_short: "موقع سياحي ثقافي متعدد اللغات عن سوريا — 14 محافظة، مطبخ، تاريخ، ثقافة.",
    p2_desc_short: "متجر إلكتروني عربي مع صفحات منتجات وتصنيفات وسلة ولوحة إدارة.",
    p1_desc_short: "منصة ذكاء اصطناعي للكشف عن الالتهاب الرئوي وتحليل الأشعة الصدرية (DenseNet121, MobileNetV3).",
    p8_desc_short: "نظام تقدير تكاليف البناء للسوق السوري — حاسبة، تقارير PDF، لوحة إدارة.",
    p9_desc_short: "تطبيق موبايل متعدد المنصات للطب بالأعشاب مع مصادقة وبحث ومساعد دردشة ذكي وملف شخصي.",
    p6_desc_short: "مشروع تعلّم عميق للكشف عن صور الوجوه المولّدة والمزيفة باستخدام CNN.",
    p5_desc_short: "مساعد ذكاء اصطناعي لتلخيص المستندات تلقائياً — خلفية Flask + واجهة دردشة Node.js.",
    p3_desc_short: "مجموعة مشاريع في تصنيف الصور والرؤية الحاسوبية (أمراض النباتات، تحليل الصور).",

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
      title: "Mustafa Al Hussayan — full stack developer ",
      text: "Check out Mustafa Al Hussayan's portfolio",
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

/* ============================================================
   PROJECTS: Slide + Modal + Filters
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- SLIDE CONTROLS ---------- */
  const slideTrack = document.getElementById("slideTrack");
  const slidePrev = document.getElementById("slidePrev");
  const slideNext = document.getElementById("slideNext");

  if (slideTrack && slidePrev && slideNext) {
    const scrollAmount = 340; // card width + gap

    const updateSlideButtons = () => {
      const isRTL = document.documentElement.dir === "rtl";
      const maxScroll = slideTrack.scrollWidth - slideTrack.clientWidth;
      const current = Math.abs(slideTrack.scrollLeft);

      if (isRTL) {
        slidePrev.disabled = current <= 5;
        slideNext.disabled = current >= maxScroll - 5;
      } else {
        slidePrev.disabled = slideTrack.scrollLeft <= 5;
        slideNext.disabled = slideTrack.scrollLeft >= maxScroll - 5;
      }
    };

    const scrollDir = () => document.documentElement.dir === "rtl" ? -1 : 1;

    slidePrev.addEventListener("click", () => {
      slideTrack.scrollBy({ left: -scrollAmount * scrollDir(), behavior: "smooth" });
    });
    slideNext.addEventListener("click", () => {
      slideTrack.scrollBy({ left: scrollAmount * scrollDir(), behavior: "smooth" });
    });
    slideTrack.addEventListener("scroll", updateSlideButtons, { passive: true });
    updateSlideButtons();
  }

  /* ---------- MODAL ---------- */
  const modal = document.getElementById("projectsModal");
  const viewAllBtn = document.getElementById("viewAllProjects");
  const modalClose = document.getElementById("modalClose");
  const overlay = modal?.querySelector(".modal-overlay");

  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  viewAllBtn?.addEventListener("click", openModal);
  modalClose?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) closeModal();
  });

  /* ---------- MODAL FILTERS ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const modalProjects = document.querySelectorAll(".modal-project");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      modalProjects.forEach(project => {
        const cat = project.dataset.category || "";
        if (filter === "all" || cat.includes(filter)) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }
      });
    });
  });

});