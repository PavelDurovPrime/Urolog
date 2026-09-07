const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Аксьонов П.В. | Преміальна Урологія</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS (for Premium Template styling) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            500: '#14b8a6', // Cold Turquoise / Teal
                            600: '#0d9488',
                            700: '#0f766e',
                            800: '#115e59',
                            900: '#134e4a',
                        },
                        navy: {
                            800: '#1e293b',
                            900: '#0f172a',
                        }
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    boxShadow: {
                        'premium': '0 20px 40px rgba(0, 0, 0, 0.08)',
                        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
                    }
                }
            }
        }
    </script>

    <style>
        /* Premium Template Overrides */
        body { font-family: 'Poppins', sans-serif; color: #475569; background-color: #f8fafc; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; color: #0f172a; }
        
        .bg-hero {
            /* High-end clinic background with cold teal/navy overlay */
            background-image: linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 118, 110, 0.7)), url('https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .bg-parallax {
            background-image: linear-gradient(rgba(15, 118, 110, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .card-hover {
            transition: all 0.4s ease;
        }
        .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15);
        }

        .btn-premium {
            background: linear-gradient(135deg, #0d9488, #0f766e);
            transition: all 0.3s ease;
        }
        .btn-premium:hover {
            background: linear-gradient(135deg, #0f766e, #115e59);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(13, 148, 136, 0.3);
        }

        .image-frame {
            position: relative;
        }
        .image-frame::after {
            content: '';
            position: absolute;
            top: 20px;
            right: -20px;
            width: 100%;
            height: 100%;
            border: 4px solid #14b8a6;
            z-index: -1;
            border-radius: 8px;
        }

        .icon-box {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #f0fdfa;
            color: #0d9488;
            font-size: 32px;
            margin-bottom: 24px;
            transition: all 0.3s ease;
        }
        .card-hover:hover .icon-box {
            background: #0d9488;
            color: #ffffff;
        }

        .section-title-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 60px;
        }
        .section-subtitle {
            color: #0d9488;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .section-subtitle::before, .section-subtitle::after {
            content: '';
            height: 2px;
            width: 40px;
            background-color: #0d9488;
        }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
    </style>
</head>
<body class="antialiased">

    <!-- Topbar -->
    <div class="bg-navy-900 text-slate-300 text-sm py-3 hidden md:block">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div class="flex space-x-6">
                <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-brand-500"></i> м. Київ, клініка преміум-класу</span>
                <span class="flex items-center gap-2"><i class="fa-regular fa-clock text-brand-500"></i> Пн-Пт: 09:00 - 19:00</span>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="hover:text-brand-500 transition"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="hover:text-brand-500 transition"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="hover:text-brand-500 transition"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </div>

    <!-- Header / Navbar -->
    <header class="bg-white sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl font-serif font-bold">
                        ПА
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-navy-900 leading-tight">Павло Аксьонов</h1>
                        <span class="text-xs text-brand-600 uppercase tracking-widest font-semibold">Уролог &bull; Хірург</span>
                    </div>
                </div>

                <!-- Nav -->
                <nav class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-brand-600 font-medium">Головна</a>
                    <a href="about.html" class="text-slate-600 hover:text-brand-600 font-medium transition">Про Лікаря</a>
                    <a href="operations.html" class="text-slate-600 hover:text-brand-600 font-medium transition">Послуги</a>
                    <a href="contacts.html" class="text-slate-600 hover:text-brand-600 font-medium transition">Контакти</a>
                </nav>

                <!-- CTA -->
                <div class="hidden md:flex items-center gap-6">
                    <div class="text-right">
                        <span class="block text-xs text-slate-500">Зателефонуйте нам</span>
                        <a href="tel:+380670000000" class="text-lg font-bold text-navy-900 hover:text-brand-600 transition">+38 (067) 000 00 00</a>
                    </div>
                    <a href="#appointment" class="btn-premium text-white px-8 py-3 rounded-md font-semibold tracking-wide uppercase text-sm">
                        Записатись
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="bg-hero min-h-[75vh] flex items-center relative z-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <div class="max-w-3xl">
                <span class="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-100 font-semibold text-sm tracking-wider uppercase mb-6 border border-brand-500/30">
                    Європейські стандарти хірургії
                </span>
                <h2 class="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                    Елітна Урологія <br>
                    <span class="text-brand-500 italic font-normal">& Андрологія</span>
                </h2>
                <p class="text-xl text-slate-300 mb-10 font-light max-w-2xl leading-relaxed">
                    Преміальний підхід до вашого здоров'я. Мікрохірургічні органозберігаючі втручання та естетична генітальна пластика з гарантією повної конфіденційності.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="#services" class="btn-premium text-white px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm inline-flex items-center gap-2">
                        Наші Послуги <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="about.html" class="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm transition inline-flex items-center gap-2 backdrop-blur-sm">
                        Дізнатись Більше
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- OVERLAPPING FEATURES (The WP Template Signature) -->
    <section class="relative z-10 -mt-24 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Box 1 -->
                <div class="bg-white rounded-xl shadow-premium p-10 card-hover border-b-4 border-brand-500">
                    <i class="fa-solid fa-microscope text-5xl text-brand-500 mb-6 drop-shadow-md"></i>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4">Точність Мікрохірургії</h3>
                    <p class="text-slate-600">Використання оптики Carl Zeiss для максимального збереження тканин та нульового ризику рецидивів.</p>
                </div>
                <!-- Box 2 -->
                <div class="bg-brand-600 rounded-xl shadow-premium p-10 card-hover transform md:-translate-y-4">
                    <i class="fa-solid fa-user-doctor text-5xl text-white mb-6 drop-shadow-md"></i>
                    <h3 class="text-2xl font-bold text-white mb-4">15+ Років Досвіду</h3>
                    <p class="text-brand-100">Понад 8000 успішних оперативних втручань. Дійсний член Європейської асоціації урологів (EAU).</p>
                </div>
                <!-- Box 3 -->
                <div class="bg-white rounded-xl shadow-premium p-10 card-hover border-b-4 border-brand-500">
                    <i class="fa-solid fa-shield-halved text-5xl text-brand-500 mb-6 drop-shadow-md"></i>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4">Анонімність</h3>
                    <p class="text-slate-600">Повна конфіденційність на всіх етапах: від першої консультації до виписки з комфортного стаціонару.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="image-frame">
                    <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Аксьонов Павло Валерійович" class="rounded-lg shadow-2xl w-full object-cover h-[600px]">
                    <!-- Floating badge -->
                    <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 text-2xl">
                                <i class="fa-solid fa-award"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-navy-900">Вища Категорія</h4>
                                <p class="text-sm text-slate-500">Сертифікований спеціаліст</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="mb-2">
                        <span class="text-brand-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                            <i class="fa-solid fa-minus text-brand-600"></i> Про Лікаря
                        </span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                        Відновлюємо якість життя з <span class="text-brand-500 italic">хірургічною точністю</span>
                    </h2>
                    <p class="text-lg text-slate-600 mb-8 font-light">
                        Моя філософія базується на органозберігаючих методиках та мінімальному періоді реабілітації. Використовуючи доказову медицину (EBM) та стандарти Європейської асоціації урологів, ми досягаємо ідеальних результатів без болю та ускладнень.
                    </p>
                    
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-center gap-4 text-slate-700">
                            <i class="fa-solid fa-circle-check text-brand-500 text-xl"></i>
                            <span class="font-medium">Виключно мікрохірургічний та лазерний підхід</span>
                        </li>
                        <li class="flex items-center gap-4 text-slate-700">
                            <i class="fa-solid fa-circle-check text-brand-500 text-xl"></i>
                            <span class="font-medium">Стаціонар одного дня (виписка через 3-4 години)</span>
                        </li>
                        <li class="flex items-center gap-4 text-slate-700">
                            <i class="fa-solid fa-circle-check text-brand-500 text-xl"></i>
                            <span class="font-medium">Супровід до повного відновлення</span>
                        </li>
                    </ul>

                    <div class="flex items-center gap-8 border-t border-slate-200 pt-8">
                        <img src="Photo/aksonov.jpg" alt="Doctor" class="w-16 h-16 rounded-full object-cover border-2 border-brand-500">
                        <div>
                            <h4 class="text-xl font-bold text-navy-900 font-serif">П.В. Аксьонов</h4>
                            <p class="text-brand-600 text-sm font-semibold uppercase tracking-wider">Головний Хірург</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES (PREMIUM GRID) -->
    <section class="py-24 bg-slate-50" id="services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="section-title-wrapper">
                <span class="section-subtitle">Клінічні Напрямки</span>
                <h2 class="text-4xl md:text-5xl font-bold text-navy-900">Елітні Хірургічні Послуги</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group">
                    <div class="icon-box">
                        <i class="fa-solid fa-dna"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Операція Мармара</h3>
                    <p class="text-slate-600 mb-6">Мікрохірургічне лікування варикоцеле. Золотий стандарт усунення чоловічого безпліддя без рецидивів.</p>
                    <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Детальніше <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Service 2 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group">
                    <div class="icon-box">
                        <i class="fa-solid fa-scissors"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Циркумцизіо</h3>
                    <p class="text-slate-600 mb-6">Естетичне обрізання крайньої плоті при фімозі. Накладання косметичних швів, що розсмоктуються.</p>
                    <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Детальніше <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Service 3 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group">
                    <div class="icon-box">
                        <i class="fa-solid fa-droplet-slash"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Водянка (Гідроцеле)</h3>
                    <p class="text-slate-600 mb-6">Операція Бергмана для ліквідації водянки яєчка. Швидке відновлення нормального об'єму мошонки.</p>
                    <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Детальніше <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Service 4 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group">
                    <div class="icon-box">
                        <i class="fa-solid fa-ruler-combined"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Ендофалопротезування</h3>
                    <p class="text-slate-600 mb-6">Хірургічне відновлення потенції. Імплантація сучасних трикомпонентних гідравлічних протезів.</p>
                    <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Детальніше <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Service 5 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group">
                    <div class="icon-box">
                        <i class="fa-solid fa-leaf"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Хвороба Пейроні</h3>
                    <p class="text-slate-600 mb-6">Хірургічна корекція та випрямлення статевого члена з видаленням фіброзних бляшок.</p>
                    <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Детальніше <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Service 6 -->
                <div class="bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group bg-brand-50 border-brand-100">
                    <div class="icon-box bg-brand-600 text-white">
                        <i class="fa-solid fa-list-ul"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Всі 26 Операцій</h3>
                    <p class="text-slate-600 mb-6">Перегляньте повний реєстр наших хірургічних можливостей у сферах урології та андрології.</p>
                    <a href="operations.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-brand-800 transition">
                        Перейти до каталогу <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- PARALLAX STATS -->
    <section class="bg-parallax py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">15+</div>
                    <div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Років Досвіду</div>
                </div>
                <div>
                    <div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">8000</div>
                    <div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Операцій</div>
                </div>
                <div>
                    <div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">99%</div>
                    <div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Успішність</div>
                </div>
                <div>
                    <div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">EAU</div>
                    <div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Сертифікація</div>
                </div>
            </div>
        </div>
    </section>

    <!-- APPOINTMENT SECTION -->
    <section class="py-24 bg-white" id="appointment">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-12 md:p-16 text-white flex flex-col justify-center">
                    <span class="text-brand-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">
                        <i class="fa-solid fa-minus text-brand-400"></i> Прямий Зв'язок
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                        Призначити <span class="text-brand-400 italic">Консультацію</span>
                    </h2>
                    <p class="text-slate-300 mb-8 text-lg font-light">
                        Залиште ваші дані, і наша клініка зв'яжеться з вами найближчим часом для підбору зручного часу візиту.
                    </p>
                    <div class="space-y-6 mt-auto">
                        <div class="flex items-center gap-6">
                            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-400 text-xl border border-white/20">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <p class="text-slate-400 text-sm">Гаряча Лінія</p>
                                <p class="text-xl font-semibold text-white">+38 (067) 000-00-00</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-400 text-xl border border-white/20">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <p class="text-slate-400 text-sm">Email</p>
                                <p class="text-xl font-semibold text-white">doctor@urologist.kiev.ua</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 bg-slate-50 p-12 md:p-16">
                    <form class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-navy-900 mb-2">Ваше Ім'я</label>
                            <input type="text" class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition shadow-sm" placeholder="Олександр">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-navy-900 mb-2">Номер Телефону</label>
                            <input type="tel" class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition shadow-sm" placeholder="+38 (000) 000-00-00">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-navy-900 mb-2">Привід Звернення</label>
                            <select class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition shadow-sm bg-white">
                                <option>Консультація уролога</option>
                                <option>Операція Мармара (Варикоцеле)</option>
                                <option>Циркумцизіо (Фімоз)</option>
                                <option>Генітальна пластика</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full btn-premium text-white px-8 py-4 rounded-lg font-semibold tracking-wide uppercase text-sm mt-4">
                            Надіслати Заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-navy-900 pt-20 pb-10 border-t border-slate-800 text-slate-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Brand -->
                <div>
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-serif font-bold">
                            ПА
                        </div>
                        <h3 class="text-xl font-bold text-white leading-tight">Павло Аксьонов</h3>
                    </div>
                    <p class="text-sm leading-relaxed mb-6">
                        Високоточна хірургічна практика у Києві. Органозберігаючі мікрохірургічні операції та естетична корекція.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 hover:text-white transition"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 hover:text-white transition"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <!-- Links -->
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Навігація</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="index.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Головна</a></li>
                        <li><a href="about.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Про Лікаря</a></li>
                        <li><a href="operations.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Всі Операції</a></li>
                        <li><a href="contacts.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Контакти</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Послуги</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Операція Мармара</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Циркумцизіо</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Хвороба Пейроні</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Протезування</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Контакти</h4>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start gap-4">
                            <i class="fa-solid fa-location-dot mt-1 text-brand-400"></i>
                            <span>м. Київ,<br>вул. Центральна, 1</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-phone text-brand-400"></i>
                            <span>+38 (067) 000-00-00</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fa-solid fa-envelope text-brand-400"></i>
                            <span>doctor@urologist.kiev.ua</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; 2026 Аксьонов П.В. Усі права захищено.</p>
                <p>Розроблено для WordPress</p>
            </div>
        </div>
    </footer>

</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('WP Premium Theme Mockup generated successfully.');
