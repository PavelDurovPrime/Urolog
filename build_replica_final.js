const fs = require('fs');

const head = (title) => `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Аксьонов П.В.</title>
    
    <!-- Fonts matching the friendly medical style -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Nunito', 'sans-serif'],
                    },
                    colors: {
                        med: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            800: '#075985',
                        },
                        accent: {
                            500: '#f59e0b',
                            600: '#d97706',
                        }
                    },
                    borderRadius: {
                        '4xl': '2rem',
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Nunito', sans-serif; color: #334155; }
        .hero-bg {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border-bottom-right-radius: 100px;
        }
        .card-shadow { box-shadow: 0 10px 40px -10px rgba(14, 165, 233, 0.15); transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .card-shadow:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.25); }
        .btn-primary { background-color: #0284c7; color: white; border-radius: 9999px; font-weight: 700; transition: all 0.3s; }
        .btn-primary:hover { background-color: #0369a1; box-shadow: 0 8px 20px rgba(2, 132, 199, 0.3); transform: translateY(-2px); }
        html { scroll-behavior: smooth; }
        
        /* Client presentation animations */
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen bg-white">
`;

const header = (active) => `
    <!-- Top bar -->
    <div class="bg-med-800 text-white py-2 text-sm hidden md:block">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center animate-fade-in-up">
            <div class="flex items-center gap-4">
                <span><i class="fa-solid fa-location-dot mr-2 text-med-500"></i> м. Київ, Клініка преміум-класу</span>
                <span><i class="fa-solid fa-clock mr-2 text-med-500"></i> Пн-Пт: 09:00 - 19:00</span>
            </div>
            <div class="flex items-center gap-6">
                <a href="#" class="hover:text-med-500 transition"><i class="fa-brands fa-viber"></i> Viber</a>
                <a href="#" class="hover:text-med-500 transition"><i class="fa-brands fa-telegram"></i> Telegram</a>
                <a href="tel:+380670000000" class="font-bold"><i class="fa-solid fa-phone mr-2 text-med-500"></i> +38 (067) 000-00-00</a>
            </div>
        </div>
    </div>
    
    <!-- Navbar -->
    <header class="bg-white sticky top-0 z-50 shadow-sm py-4">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center animate-fade-in-up">
            <a href="index.html" class="flex items-center gap-3 group">
                <div class="w-12 h-12 bg-med-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md group-hover:bg-med-600 transition">
                    <i class="fa-solid fa-user-doctor"></i>
                </div>
                <div>
                    <div class="text-xl font-extrabold text-med-800 leading-tight">Аксьонов П.В.</div>
                    <div class="text-xs font-semibold text-med-500 uppercase tracking-wider">Уролог &bull; Андролог</div>
                </div>
            </a>
            
            <nav class="hidden lg:flex space-x-8 font-bold text-slate-600">
                <a href="index.html" class="${active === 'home' ? 'text-med-600' : 'hover:text-med-600'} transition">Головна</a>
                <a href="about.html" class="${active === 'about' ? 'text-med-600' : 'hover:text-med-600'} transition">Про лікаря</a>
                <a href="operations.html" class="${active === 'ops' ? 'text-med-600' : 'hover:text-med-600'} transition">Послуги та ціни</a>
                <a href="contacts.html" class="${active === 'contact' ? 'text-med-600' : 'hover:text-med-600'} transition">Контакти</a>
            </nav>
            
            <a href="index.html#appointment" class="hidden md:inline-block btn-primary px-8 py-3 shadow-md">
                Записатися на прийом
            </a>
        </div>
    </header>
`;

const footer = `
    <footer class="bg-slate-800 text-slate-300 py-12 mt-auto rounded-tr-[100px]">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            <div>
                <h3 class="text-white text-xl font-bold mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-user-doctor text-med-500"></i> Аксьонов Павло Валерійович
                </h3>
                <p class="mb-4 font-medium leading-relaxed">
                    Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою та лікуванням захворювань органів сечостатевої системи.
                </p>
                <div class="flex gap-4 mt-6">
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-med-500 hover:text-white transition shadow-md"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-med-500 hover:text-white transition shadow-md"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div>
                <h3 class="text-white text-xl font-bold mb-4">Навігація</h3>
                <ul class="space-y-3 font-semibold">
                    <li><a href="index.html" class="hover:text-white transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Головна</a></li>
                    <li><a href="about.html" class="hover:text-white transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Про лікаря</a></li>
                    <li><a href="operations.html" class="hover:text-white transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Всі послуги</a></li>
                    <li><a href="contacts.html" class="hover:text-white transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Контакти</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white text-xl font-bold mb-4">Контакти</h3>
                <ul class="space-y-3 font-semibold">
                    <li class="flex items-start gap-3"><i class="fa-solid fa-location-dot text-med-500 mt-1"></i> <span>м. Київ, вул. Центральна, 1</span></li>
                    <li class="flex items-start gap-3"><i class="fa-solid fa-phone text-med-500 mt-1"></i> <a href="tel:+380670000000" class="hover:text-white transition">+38 (067) 000-00-00</a></li>
                    <li class="flex items-start gap-3"><i class="fa-solid fa-envelope text-med-500 mt-1"></i> <a href="mailto:doctor@urologist.kiev.ua" class="hover:text-white transition">doctor@urologist.kiev.ua</a></li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-sm font-semibold text-slate-500">
            &copy; 2026 Аксьонов П.В. Усі права захищено.
        </div>
    </footer>
</body>
</html>
`;

// INDEX
const index = head('Головна') + header('home') + `
    <!-- HERO -->
    <section class="hero-bg pb-20 pt-10 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2 animate-fade-in-up">
                <div class="bg-white/80 inline-block px-4 py-1.5 rounded-full text-med-600 font-bold text-sm mb-6 shadow-sm border border-white backdrop-blur-sm">
                    <i class="fa-solid fa-stethoscope mr-1"></i> Хірургічна Урологія
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-med-800 leading-tight mb-6">
                    Діагностика та лікування урологічних захворювань
                </h1>
                
                <ul class="space-y-4 mb-10 text-lg font-bold text-slate-700">
                    <li class="flex items-center gap-4">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600 shadow-inner"><i class="fa-solid fa-check text-sm"></i></div>
                        Мікрохірургічні операції
                    </li>
                    <li class="flex items-center gap-4">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600 shadow-inner"><i class="fa-solid fa-check text-sm"></i></div>
                        Лікування без болю та ускладнень
                    </li>
                    <li class="flex items-center gap-4">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600 shadow-inner"><i class="fa-solid fa-check text-sm"></i></div>
                        Швидка реабілітація (1 день у клініці)
                    </li>
                </ul>
                
                <div class="flex flex-wrap gap-4">
                    <a href="#appointment" class="btn-primary px-8 py-4 text-lg shadow-lg">Записатися на прийом</a>
                    <a href="operations.html" class="bg-white text-med-600 px-8 py-4 text-lg font-bold rounded-full shadow-md hover:shadow-xl transition flex items-center gap-2">Всі послуги <i class="fa-solid fa-arrow-right text-sm"></i></a>
                </div>
            </div>
            
            <div class="md:w-1/2 relative animate-fade-in-up delay-200 mt-10 md:mt-0">
                <div class="absolute inset-0 bg-med-500 rounded-full blur-[80px] opacity-20 transform translate-x-10 translate-y-10"></div>
                <div class="absolute inset-0 bg-accent-500 rounded-full blur-[80px] opacity-10 transform -translate-x-10 -translate-y-10"></div>
                
                <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Лікар Уролог" class="relative z-10 w-full max-w-md mx-auto rounded-[3rem] shadow-2xl border-[10px] border-white object-cover aspect-[4/5]">
                
                <div class="absolute bottom-10 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-fade-in-up delay-300">
                    <div class="w-14 h-14 bg-med-100 rounded-full flex items-center justify-center text-med-600 text-2xl shadow-inner">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div>
                        <div class="font-extrabold text-slate-800 text-xl">15+ років</div>
                        <div class="text-sm font-bold text-slate-500 uppercase tracking-wide">Досвід роботи</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SNIPPET -->
    <section class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
            <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Компетенція</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-med-800 mb-8">Про спеціаліста</h2>
            <p class="text-lg text-slate-600 font-semibold leading-relaxed mb-6">
                Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
            </p>
            <p class="text-lg text-slate-600 font-semibold leading-relaxed mb-10">
                Етіологія (причина), клініка (прояв), профілактика та лікування захворювань цих систем становлять предмет урології як клінічної спеціальності.
            </p>
            <a href="about.html" class="inline-flex items-center gap-2 text-med-600 font-bold hover:text-med-800 transition text-lg group">
                Читати повну біографію <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </section>

    <!-- SERVICES (Fixed Icons) -->
    <section class="py-24 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16 animate-fade-in-up">
                <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Спеціалізація</span>
                <h2 class="text-3xl md:text-4xl font-extrabold text-med-800 mb-4">Основні напрямки лікування</h2>
                <p class="text-lg text-slate-500 font-bold max-w-2xl mx-auto">Консервативне та оперативне лікування за сучасними європейськими протоколами.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-10 rounded-4xl card-shadow border border-slate-100 text-center animate-fade-in-up delay-100">
                    <div class="w-24 h-24 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-4xl mb-8 shadow-sm">
                        <i class="fa-solid fa-mars"></i>
                    </div>
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-4">Андрологія</h3>
                    <p class="text-slate-600 font-semibold mb-8 leading-relaxed">Варикоцеле (операція Мармара), водянка яєчка, фімоз, коротка вуздечка, протезування.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm">Детальніше</a>
                </div>
                <!-- Card 2 (FIXED ICON: fa-droplet instead of fa-kidneys) -->
                <div class="bg-white p-10 rounded-4xl card-shadow border border-slate-100 text-center animate-fade-in-up delay-200">
                    <div class="w-24 h-24 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-4xl mb-8 shadow-sm">
                        <i class="fa-solid fa-droplet"></i>
                    </div>
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-4">Урологія</h3>
                    <p class="text-slate-600 font-semibold mb-8 leading-relaxed">Сечокам'яна хвороба (МКБ), аденома простати, кісти нирок, пієлонефрит, цистит.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm">Детальніше</a>
                </div>
                <!-- Card 3 -->
                <div class="bg-white p-10 rounded-4xl card-shadow border border-slate-100 text-center animate-fade-in-up delay-300">
                    <div class="w-24 h-24 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-4xl mb-8 shadow-sm">
                        <i class="fa-solid fa-virus"></i>
                    </div>
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-4">Лікування Інфекцій</h3>
                    <p class="text-slate-600 font-semibold mb-8 leading-relaxed">Діагностика та терапія ЗПСШ, видалення кондилом (папіломавірус), лікування простатиту.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm">Детальніше</a>
                </div>
            </div>
            
            <div class="text-center mt-16 animate-fade-in-up delay-300">
                <a href="operations.html" class="btn-primary px-10 py-5 text-lg inline-flex items-center gap-3 shadow-xl">
                    Всі 26 видів послуг <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- FORM SECTION -->
    <section class="py-24 bg-med-800 relative overflow-hidden" id="appointment">
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-med-600 rounded-full blur-3xl opacity-50"></div>
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center relative z-10">
            <div class="md:w-1/2 text-white animate-fade-in-up">
                <span class="text-med-300 font-bold tracking-widest uppercase text-sm mb-2 block">Запис на прийом</span>
                <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Потрібна консультація фахівця?</h2>
                <p class="text-lg text-med-100 font-medium mb-10 leading-relaxed">Заповніть форму, і адміністратор клініки передзвонить вам для узгодження зручного часу візиту. Гарантуємо повну конфіденційність.</p>
                
                <div class="flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <div class="w-14 h-14 bg-white text-med-600 rounded-full flex items-center justify-center text-2xl shadow-lg shrink-0"><i class="fa-solid fa-phone"></i></div>
                    <div>
                        <div class="text-med-200 font-semibold text-sm mb-1">Або телефонуйте прямо зараз:</div>
                        <div class="text-2xl font-extrabold tracking-wide">+38 (067) 000-00-00</div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 w-full animate-fade-in-up delay-200">
                <form class="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-med-100">
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-8 text-center">Швидкий запис</h3>
                    <div class="space-y-5">
                        <div>
                            <label class="block text-sm font-bold text-slate-600 mb-2 ml-1">Ваше ім'я</label>
                            <input type="text" placeholder="Олександр" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-semibold text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-600 mb-2 ml-1">Контактний телефон</label>
                            <input type="tel" placeholder="+38 (000) 000-00-00" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-semibold text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <button type="button" class="w-full btn-primary py-5 text-lg mt-4 shadow-xl">Відправити заявку</button>
                        <p class="text-center text-xs font-semibold text-slate-400 mt-4">Натискаючи кнопку, ви погоджуєтесь на обробку даних.</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
` + footer;

// OPERATIONS
const operationsList = [
    { title: "Аденома простати (Гіперплазія)", icon: "fa-person" },
    { title: "Сечокам'яна хвороба (МКБ)", icon: "fa-gem" },
    { title: "Пієлонефрит", icon: "fa-temperature-high" },
    { title: "Кіста нирки", icon: "fa-circle-dot" },
    { title: "Полікістоз нирок", icon: "fa-cubes" },
    { title: "Гідронефроз", icon: "fa-water" },
    { title: "Простатит", icon: "fa-shield-virus" },
    { title: "Уретрит", icon: "fa-bacterium" },
    { title: "Цистит", icon: "fa-bed-pulse" },
    { title: "Орхіт", icon: "fa-virus" },
    { title: "Везикуліт", icon: "fa-briefcase-medical" },
    { title: "Епідидиміт", icon: "fa-hospital-user" },
    { title: "Баланіт та Баланопостит", icon: "fa-crutch" },
    { title: "Варикоцеле (Операція Мармара)", icon: "fa-scissors", highlight: true },
    { title: "Гідроцеле (Водянка яєчка)", icon: "fa-droplet" },
    { title: "Кіста придатка яєчка", icon: "fa-circle-notch" },
    { title: "Фімоз (Обрізання, Циркумцизіо)", icon: "fa-user-nurse", highlight: true },
    { title: "Коротка вуздечка (Френулопластика)", icon: "fa-syringe" },
    { title: "Атероми мошонки", icon: "fa-disease" },
    { title: "Гіперактивний сечовий міхур", icon: "fa-bolt" },
    { title: "Нетримання сечі у чоловіків", icon: "fa-mars" },
    { title: "Нетримання сечі у жінок", icon: "fa-venus" },
    { title: "Стриктура уретри", icon: "fa-wave-square" },
    { title: "Гранули Фордайса", icon: "fa-microscope" },
    { title: "ЗПСШ (Хламідіоз тощо)", icon: "fa-vial-virus" }
];

let opsHtmlCards = '';
operationsList.forEach((op, index) => {
    let delay = (index % 3) * 100; // staggering animation
    let highlightClasses = op.highlight ? "border-med-500 shadow-md bg-med-50" : "border-slate-100 bg-white";
    opsHtmlCards += `
        <a href="single-operation.html" class="${highlightClasses} p-6 rounded-3xl card-shadow border flex items-center gap-5 group animate-fade-in-up" style="animation-delay: ${delay}ms;">
            <div class="w-14 h-14 bg-med-100 text-med-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-med-500 group-hover:text-white transition shadow-inner">
                <i class="fa-solid ${op.icon}"></i>
            </div>
            <div class="font-extrabold text-slate-700 group-hover:text-med-600 transition text-lg leading-tight">${op.title}</div>
        </a>
    `;
});

const operations = head('Послуги та ціни') + header('ops') + `
    <section class="hero-bg py-20 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4 text-center animate-fade-in-up">
            <span class="bg-white/80 inline-block px-4 py-1.5 rounded-full text-med-600 font-bold text-sm mb-4 shadow-sm border border-white">
                Каталог
            </span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-med-800 mb-6">Послуги та захворювання</h1>
            <p class="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Повний перелік напрямків діагностики та хірургічного лікування.</p>
        </div>
    </section>

    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${opsHtmlCards}
            </div>
        </div>
    </section>
` + footer;

// SINGLE OP
const singleOp = head('Варикоцеле (Операція Мармара)') + header('ops') + `
    <section class="bg-med-50 py-16 border-b border-med-100 hero-bg">
        <div class="max-w-7xl mx-auto px-4 animate-fade-in-up">
            <div class="flex items-center gap-3 text-sm font-extrabold text-med-500 mb-6 uppercase tracking-wider bg-white inline-flex px-4 py-2 rounded-full shadow-sm">
                <a href="operations.html" class="hover:text-med-700 transition">Послуги</a> <i class="fa-solid fa-chevron-right text-[10px]"></i> <span class="text-slate-800">Андрологія</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-med-800 leading-tight">Варикоцеле (Операція Мармара)</h1>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16">
            <div class="md:w-2/3 animate-fade-in-up">
                <!-- Placeholder image replacing empty bracket -->
                <div class="mb-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
                    <img src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Хірургічне лікування" class="w-full h-[400px] object-cover hover:scale-105 transition duration-700">
                </div>
                
                <div class="prose prose-lg text-slate-600 font-semibold leading-relaxed">
                    <p class="mb-6 text-xl">
                        <strong class="text-slate-800">Варикоцеле</strong> — це варикозне розширення вен лозоподібного сплетення сім'яного канатика. Найефективнішим методом лікування є мікрохірургічна субінгвінальна варикоцелектомія (операція Мармара).
                    </p>
                    
                    <div class="bg-med-50 p-8 rounded-3xl border border-med-100 my-10 shadow-inner">
                        <h3 class="text-2xl font-extrabold text-med-800 mb-6 flex items-center gap-3"><i class="fa-solid fa-microscope text-med-500"></i> Як проходить операція?</h3>
                        <p class="mb-6 text-med-900">
                            Втручання виконується під місцевою або внутрішньовенною анестезією. Хірург робить мініатюрний розріз (1.5-2 см) нижче пахового кільця. Використання мікроскопа дозволяє чітко візуалізувати вени, зберегти артерії та лімфатичні шляхи, що зводить ризик рецидиву або гідроцеле до нуля.
                        </p>
                        <ul class="list-none space-y-4 font-bold text-med-800">
                            <li class="flex items-center gap-3"><i class="fa-solid fa-clock text-med-500"></i> Тривалість операції: 30-40 хвилин.</li>
                            <li class="flex items-center gap-3"><i class="fa-solid fa-hospital text-med-500"></i> Перебування в стаціонарі: 3-4 години.</li>
                            <li class="flex items-center gap-3"><i class="fa-solid fa-person-walking text-med-500"></i> Реабілітація: відновлення через 1-2 дні.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="md:w-1/3 animate-fade-in-up delay-200">
                <div class="bg-white p-8 rounded-[2.5rem] border-2 border-med-100 card-shadow sticky top-32 z-10">
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-2 text-center">Запис на операцію</h3>
                    <p class="text-center text-sm font-bold text-slate-500 mb-8">Залиште контакти для узгодження дати</p>
                    <form class="space-y-5">
                        <div>
                            <input type="text" placeholder="Ваше ім'я" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-bold text-slate-700 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <div>
                            <input type="tel" placeholder="Телефон" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-bold text-slate-700 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <button type="button" class="w-full btn-primary py-4 text-lg mt-2 shadow-lg">Записатися</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
` + footer;

// ABOUT
const about = head('Про лікаря') + header('about') + `
    <section class="hero-bg py-20 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4 text-center animate-fade-in-up">
            <span class="bg-white/80 inline-block px-4 py-1.5 rounded-full text-med-600 font-bold text-sm mb-4 shadow-sm border border-white">
                Біографія
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-med-800 mb-6">Аксьонов Павло Валерійович</h1>
            <p class="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Лікар-уролог, андролог, хірург вищої категорії</p>
        </div>
    </section>

    <section class="py-20 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start">
            <div class="md:w-1/3 relative animate-fade-in-up">
                <div class="absolute inset-0 bg-med-200 rounded-full blur-3xl opacity-50 transform -translate-x-10 translate-y-10"></div>
                <img src="Photo/aksenov-pavel-valerijevich.jpg" class="relative z-10 w-full rounded-[3rem] shadow-2xl border-8 border-white">
            </div>
            <div class="md:w-2/3 animate-fade-in-up delay-200">
                <div class="prose prose-lg text-slate-600 font-semibold leading-relaxed">
                    <p class="mb-6 text-xl">
                        Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, запалення простати, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
                    </p>
                    <p class="mb-6">
                        Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою, лікуванням та профілактикою захворювань органів сечової системи у жінок та органів сечостатевої системи у чоловіків.
                    </p>
                    <div class="bg-med-50 p-8 rounded-3xl border border-med-100 my-8 shadow-inner">
                        <p class="italic text-med-900">
                            "Етіологія (причина), клініка (прояв), профілактика (попередження) та лікування захворювань цих систем, їх ушкоджень та вад розвитку становлять предмет урології як клінічної спеціальності. Це здебільшого хірургічна спеціальність, на відміну від нефрології, яка займається терапією нирок."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
` + footer;

// CONTACTS
const contacts = head('Контакти') + header('contact') + `
    <section class="hero-bg py-20 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4 text-center animate-fade-in-up">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-med-800 mb-6">Контакти клініки</h1>
            <p class="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Зв'яжіться з нами будь-яким зручним способом.</p>
        </div>
    </section>

    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div class="bg-white p-12 rounded-[3rem] card-shadow border border-slate-100 animate-fade-in-up">
                <h3 class="text-3xl font-extrabold text-slate-800 mb-10">Наші координати</h3>
                <div class="space-y-8 text-xl font-bold text-slate-700">
                    <div class="flex items-center gap-6 p-4 rounded-2xl hover:bg-med-50 transition border border-transparent hover:border-med-100">
                        <div class="w-16 h-16 bg-med-100 text-med-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-2xl"><i class="fa-solid fa-location-dot"></i></div>
                        <div>
                            <div class="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Адреса</div>
                            м. Київ, вул. Центральна, 1
                        </div>
                    </div>
                    <div class="flex items-center gap-6 p-4 rounded-2xl hover:bg-med-50 transition border border-transparent hover:border-med-100">
                        <div class="w-16 h-16 bg-med-100 text-med-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-2xl"><i class="fa-solid fa-phone"></i></div>
                        <div>
                            <div class="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Телефон</div>
                            <a href="tel:+380670000000" class="hover:text-med-600 transition">+38 (067) 000-00-00</a>
                        </div>
                    </div>
                    <div class="flex items-center gap-6 p-4 rounded-2xl hover:bg-med-50 transition border border-transparent hover:border-med-100">
                        <div class="w-16 h-16 bg-med-100 text-med-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-2xl"><i class="fa-solid fa-clock"></i></div>
                        <div>
                            <div class="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Часи роботи</div>
                            Пн-Пт: 09:00 - 19:00
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 animate-fade-in-up delay-200 min-h-[500px] relative">
                <!-- Embedded Google Map -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162705.51478148386!2d30.38023773199859!3d50.40208152205562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1714488310000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; position:absolute; top:0; left:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
` + footer;

fs.writeFileSync('index.html', index);
fs.writeFileSync('operations.html', operations);
fs.writeFileSync('single-operation.html', singleOp);
fs.writeFileSync('about.html', about);
fs.writeFileSync('contacts.html', contacts);

console.log('Mockup finalized: icon fixed, placeholders resolved, animations added.');
