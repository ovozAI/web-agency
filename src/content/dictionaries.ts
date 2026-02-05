export type Locale = "uz" | "ru";

export const locales: Locale[] = ["uz", "ru"];

export type Dictionary = {
  nav: {
    home: string;
    demos: string;
    pricing: string;
    faq: string;
    contact: string;
    services: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  offer: {
    headline: string;
    includesTitle: string;
    includes: string[];
    excludesTitle: string;
    excludes: string[];
    note: string;
  };
  steps: {
    title: string;
    items: { title: string; body: string }[];
  };
  demos: {
    title: string;
    subtitle: string;
    viewDemo: string;
    viewAll: string;
    openFullscreen: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    domainIncluded: string;
    starter: {
      name: string;
      price: string;
      description: string;
      features: string[];
      popular: string;
    };
    business: {
      name: string;
      price: string;
      description: string;
      features: string[];
    };
    custom: {
      name: string;
      price: string;
      description: string;
      features: string[];
    };
    cta: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
    quick: string;
    phoneLabel: string;
    telegramLabel: string;
    starterSummary: string;
    businessSummary: string;
  };
  footer: {
    tagline: string;
    services: string;
    servicesList: string[];
    contact: string;
    rights: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      demos: "Portfolio",
      pricing: "Narxlar",
      faq: "Savollar",
      contact: "Bog'lanish",
      services: "Xizmatlar"
    },
    hero: {
      badge: "Cheklangan vaqtli taklif",
      title: "Biznesingiz uchun professional veb-sayt",
      subtitle:
        "Kichik va o'rta bizneslar uchun zamonaviy saytlar, telegram botlar va veb-ilovalar. Domen xaridi barcha tarifga kiritilgan.",
      ctaPrimary: "Boshlash",
      ctaSecondary: "Namunalari",
      trust: "7 kun ichida tayyor. Dastlabki maslahat bepul."
    },
    services: {
      title: "Biz nima qilamiz",
      subtitle: "Biznesingizni raqamlashtirish uchun to'liq yechimlar",
      items: [
        {
          title: "Landing sahifalar",
          description: "Biznesingiz uchun tezkor va samarali bir sahifali saytlar. Mobil optimizatsiya va CTA bilan.",
          icon: "landing"
        },
        {
          title: "Ko'p sahifali saytlar",
          description: "Kompaniyalar, restoranlar va xizmat ko'rsatuvchilar uchun to'liq veb-saytlar.",
          icon: "website"
        },
        {
          title: "Telegram botlar",
          description: "Buyurtmalar, bronlash, mijozlar bilan aloqa va avtomatlashtirish uchun botlar.",
          icon: "bot"
        },
        {
          title: "Veb-ilovalar",
          description: "CRM, admin panellar, e-commerce va maxsus biznes yechimlari.",
          icon: "app"
        }
      ]
    },
    offer: {
      headline: "Nima kiritilgan",
      includesTitle: "To'plamga kiradi",
      includes: [
        "Qisqa bozor/raqobatchi tadqiqoti",
        "Domen xaridi va sozlash (narxga kiritilgan)",
        "1 sahifali landing va mobil optimizatsiya",
        "Bepul hosting 1 yilga"
      ],
      excludesTitle: "Kirmaydi",
      excludes: [
        "Murakkab web-ilovalar",
        "Maxsus backend va admin panel",
        "Keng ko'lamli kataloglar"
      ],
      note: "Murakkab loyihalar uchun alohida narxlash mavjud."
    },
    steps: {
      title: "Qanday ishlaymiz",
      items: [
        { title: "1. Brifing", body: "Sizning biznesingiz va maqsadingizni aniqlaymiz." },
        { title: "2. Dizayn", body: "Landing sahifa maketi va matnlarni tayyorlaymiz." },
        { title: "3. Ishga tushirish", body: "Domen, hosting va analitika sozlanadi." }
      ]
    },
    demos: {
      title: "Bizning loyihalar",
      subtitle: "Turli sohalar uchun tayyor dizayn namunalari.",
      viewDemo: "Ko'rish",
      viewAll: "Barcha loyihalar",
      openFullscreen: "To'liq ochish"
    },
    pricing: {
      title: "Narxlar",
      subtitle: "Har qanday biznes uchun mos yechim. Barcha tariflarga domen xaridi kiritilgan.",
      domainIncluded: "Domen kiritilgan",
      starter: {
        name: "Starter",
        price: "$99",
        description: "Bir sahifali landing sahifa",
        features: [
          "Landing sahifa",
          "Mobil optimizatsiya",
          "CTA + aloqa formasi",
          "Domen xaridi kiritilgan",
          "2 ta tahrirlash",
          "1 yillik qo'llab-quvvatlash"
        ],
        popular: "Tavsiya etiladi"
      },
      business: {
        name: "Business",
        price: "$199",
        description: "Ko'p sahifali veb-sayt",
        features: [
          "Ko'p sahifali sayt",
          "Mobil optimizatsiya",
          "Aloqa formasi + integratsiya",
          "Domen xaridi kiritilgan",
          "5 ta tahrirlash",
          "1 yillik qo'llab-quvvatlash"
        ]
      },
      custom: {
        name: "Custom",
        price: "Kelishuv",
        description: "Murakkab loyihalar va veb-ilovalar",
        features: [
          "E-commerce do'konlar",
          "Telegram bot ishlab chiqish",
          "CRM va admin panellar",
          "API integratsiyalar",
          "UX/UI dizayn",
          "Texnik qo'llab-quvvatlash"
        ]
      },
      cta: "Boshlash"
    },
    faq: {
      title: "Tez-tez so'raladigan savollar",
      items: [
        {
          q: "$99 tarifga nimalar kiradi?",
          a: "Bir sahifali landing, bozor tadqiqoti, domen xaridi va sozlash, mobil optimizatsiya, CTA va aloqa formasi. Bundan tashqari 1 yillik texnik qo'llab-quvvatlash ham kiritilgan."
        },
        {
          q: "Starter va Business tariflari orasidagi farq nima?",
          a: "Starter tarifi bitta sahifali landing uchun - asosiy ma'lumotlar va aloqa formasi bilan. Business tarifi esa ko'p sahifali veb-sayt - alohida bo'limlar, kengaytirilgan funksionallik va ko'proq tahrirlashlar bilan."
        },
        {
          q: "Domen narxi qanday bo'ladi?",
          a: ".uz domeni narxga kiritilgan. .com, .net va boshqa xalqaro domenlar uchun qo'shimcha to'lov kerak bo'ladi. Domen sotib olish va sozlashni biz o'zimiz amalga oshiramiz."
        },
        {
          q: "Necha kunda tayyor bo'ladi?",
          a: "Starter tarifi 5-7 ish kunida, Business tarifi 10-14 ish kunida tayyor bo'ladi. Murakkab loyihalar uchun muddatlar alohida kelishiladi."
        },
        {
          q: "Qo'llab-quvvatlash nimalarni o'z ichiga oladi?",
          a: "1 yillik qo'llab-quvvatlash davomida texnik muammolarni hal qilish, kichik o'zgarishlar kiritish va maslahat olish mumkin. Katta o'zgarishlar uchun alohida narxlash bo'ladi."
        },
        {
          q: "Telegram bot qanday ishlaydi?",
          a: "Telegram botlar orqali buyurtmalarni qabul qilish, mijozlarga avtomatik javob berish, bronlash tizimi va boshqa biznes jarayonlarini avtomatlashtirish mumkin. Narx funksionallikga qarab belgilanadi."
        },
        {
          q: "To'lov qanday amalga oshiriladi?",
          a: "50% oldindan to'lov, qolgan 50% loyiha tayyor bo'lgandan so'ng. Naqd pul, karta yoki bank o'tkazmasi orqali to'lash mumkin."
        },
        {
          q: "Hosting ham kiritilganmi?",
          a: "Ha, oddiy saytlar uchun 1 yillik bepul hosting taqdim etamiz. Murakkab saytlar va Telegram botlar uchun deploy va hosting xizmati uchun qo'shimcha to'lov bo'ladi."
        }
      ]
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Qisqa ma'lumot qoldiring, 1 ish kuni ichida javob beramiz.",
      formTitle: "Loyiha haqida yozing",
      name: "Ism",
      phone: "Telefon",
      message: "Xabar",
      submit: "Yuborish",
      success: "Xabar yuborildi. Tez orada javob beramiz!",
      error: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
      quick: "Tezkor aloqa",
      phoneLabel: "Telefon raqam",
      telegramLabel: "Telegram",
      starterSummary: "Landing + domen + 1 yillik qo'llab-quvvatlash",
      businessSummary: "Ko'p sahifali + domen + 1 yillik qo'llab-quvvatlash"
    },
    footer: {
      tagline: "Biznesingizni onlayn olamga olib chiqamiz",
      services: "Xizmatlar",
      servicesList: [
        "Landing sahifalar",
        "Ko'p sahifali saytlar",
        "Telegram botlar",
        "E-commerce",
        "CRM tizimlari"
      ],
      contact: "Bog'lanish",
      rights: "Barcha huquqlar himoyalangan"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      demos: "Portfolio",
      pricing: "Цены",
      faq: "FAQ",
      contact: "Контакты",
      services: "Услуги"
    },
    hero: {
      badge: "Ограниченное предложение",
      title: "Профессиональный сайт для вашего бизнеса",
      subtitle:
        "Современные сайты, telegram боты и веб-приложения для малого и среднего бизнеса. Покупка домена включена во все тарифы.",
      ctaPrimary: "Начать",
      ctaSecondary: "Посмотреть демо",
      trust: "Готово за 7 дней. Первая консультация бесплатно."
    },
    services: {
      title: "Что мы делаем",
      subtitle: "Полные решения для цифровизации вашего бизнеса",
      items: [
        {
          title: "Лендинги",
          description: "Быстрые и эффективные одностраничные сайты для вашего бизнеса. С мобильной оптимизацией и CTA.",
          icon: "landing"
        },
        {
          title: "Многостраничные сайты",
          description: "Полноценные сайты для компаний, ресторанов и сервисных организаций.",
          icon: "website"
        },
        {
          title: "Telegram боты",
          description: "Боты для заказов, бронирования, связи с клиентами и автоматизации процессов.",
          icon: "bot"
        },
        {
          title: "Веб-приложения",
          description: "CRM, админ-панели, e-commerce и индивидуальные бизнес-решения.",
          icon: "app"
        }
      ]
    },
    offer: {
      headline: "Что входит",
      includesTitle: "Включено",
      includes: [
        "Короткое исследование рынка",
        "Покупка и настройка домена (включено в цену)",
        "Одностраничный лендинг + мобильная версия",
        "Бесплатный хостинг на 1 год"
      ],
      excludesTitle: "Не входит",
      excludes: [
        "Сложные веб-приложения",
        "Кастомный backend и админка",
        "Большие каталоги"
      ],
      note: "Для сложных проектов — отдельная оценка."
    },
    steps: {
      title: "Как мы работаем",
      items: [
        { title: "1. Бриф", body: "Уточняем цели и особенности бизнеса." },
        { title: "2. Дизайн", body: "Готовим макет и тексты." },
        { title: "3. Запуск", body: "Настраиваем домен, хостинг и аналитику." }
      ]
    },
    demos: {
      title: "Portfolio",
      subtitle: "Готовые дизайн-примеры для разных отраслей.",
      viewDemo: "Посмотреть",
      viewAll: "Все проекты",
      openFullscreen: "Открыть полностью"
    },
    pricing: {
      title: "Цены",
      subtitle: "Подходящее решение для любого бизнеса. Покупка домена включена во все тарифы.",
      domainIncluded: "Домен включен",
      starter: {
        name: "Starter",
        price: "$99",
        description: "Одностраничный лендинг",
        features: [
          "Лендинг",
          "Мобильная оптимизация",
          "CTA + форма связи",
          "Покупка домена включена",
          "2 правки",
          "1 год поддержки"
        ],
        popular: "Рекомендуем"
      },
      business: {
        name: "Business",
        price: "$199",
        description: "Многостраничный сайт",
        features: [
          "Многостраничный сайт",
          "Мобильная оптимизация",
          "Форма связи + интеграция",
          "Покупка домена включена",
          "5 правок",
          "1 год поддержки"
        ]
      },
      custom: {
        name: "Custom",
        price: "По договору",
        description: "Сложные проекты и веб-приложения",
        features: [
          "E-commerce магазины",
          "Разработка Telegram ботов",
          "CRM и админ-панели",
          "API интеграции",
          "UX/UI дизайн",
          "Техническая поддержка"
        ]
      },
      cta: "Начать"
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Что входит в тариф $99?",
          a: "Одностраничный лендинг, исследование рынка, покупка и настройка домена, мобильная оптимизация, CTA и форма связи. Также включена техническая поддержка на 1 год."
        },
        {
          q: "В чем разница между Starter и Business?",
          a: "Starter — это одностраничный лендинг с основной информацией и формой связи. Business — многостраничный сайт с отдельными разделами, расширенным функционалом и большим количеством правок."
        },
        {
          q: "Сколько стоит домен?",
          a: "Домен .uz включен в стоимость. Для международных доменов .com, .net и других потребуется доплата. Покупку и настройку домена мы берем на себя."
        },
        {
          q: "Какие сроки?",
          a: "Тариф Starter — 5-7 рабочих дней, Business — 10-14 рабочих дней. Для сложных проектов сроки обговариваются отдельно."
        },
        {
          q: "Что включает поддержка?",
          a: "В течение 1 года поддержки: решение технических проблем, мелкие изменения и консультации. Крупные изменения оцениваются отдельно."
        },
        {
          q: "Как работает Telegram бот?",
          a: "Через Telegram бота можно принимать заказы, автоматически отвечать клиентам, организовать систему бронирования и автоматизировать бизнес-процессы. Цена зависит от функционала."
        },
        {
          q: "Как происходит оплата?",
          a: "50% предоплата, остальные 50% после завершения проекта. Оплата наличными, картой или банковским переводом."
        },
        {
          q: "Хостинг тоже включен?",
          a: "Да, для простых сайтов предоставляем бесплатный хостинг на 1 год. Для сложных сайтов и Telegram ботов deploy и хостинг оплачиваются дополнительно."
        }
      ]
    },
    contact: {
      title: "Связаться",
      subtitle: "Оставьте заявку — ответим в течение 1 рабочего дня.",
      formTitle: "Расскажите о проекте",
      name: "Имя",
      phone: "Телефон",
      message: "Сообщение",
      submit: "Отправить",
      success: "Сообщение отправлено. Скоро свяжемся!",
      error: "Произошла ошибка. Попробуйте еще раз.",
      quick: "Быстрая связь",
      phoneLabel: "Телефон",
      telegramLabel: "Telegram",
      starterSummary: "Лендинг + домен + 1 год поддержки",
      businessSummary: "Многостраничный + домен + 1 год поддержки"
    },
    footer: {
      tagline: "Выведем ваш бизнес в онлайн",
      services: "Услуги",
      servicesList: [
        "Лендинги",
        "Многостраничные сайты",
        "Telegram боты",
        "E-commerce",
        "CRM системы"
      ],
      contact: "Контакты",
      rights: "Все права защищены"
    }
  }
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
