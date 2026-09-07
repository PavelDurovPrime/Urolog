const fs = require('fs');

// --- DATA FROM OLD SITE ---
const fullOperationsList = [
    { cat: 'andro', id: 'marmara', title: 'Варикоцеле (Операція Мармара)', desc: 'Мікрохірургічне субінгвінальне лікування варикозного розширення вен сім\'яного канатика.' },
    { cat: 'andro', id: 'hydrocele', title: 'Гідроцеле (Водянка яєчка)', desc: 'Операція Бергмана/Вінкельмана для усунення рідини в оболонках яєчка.' },
    { cat: 'andro', id: 'cyst', title: 'Кіста придатка яєчка', desc: 'Мікрохірургічне видалення сперматоцеле зі збереженням репродуктивної функції.' },
    { cat: 'andro', id: 'atheroma', title: 'Атероми калитки', desc: 'Радіохвильове видалення кіст сальних залоз мошонки без рубців.' },
    { cat: 'penis', id: 'phimosis', title: 'Фімоз (Циркумцизіо)', desc: 'Естетичне обрізання крайньої плоті з накладанням косметичного шва.' },
    { cat: 'penis', id: 'frenuloplasty', title: 'Коротка вуздечка', desc: 'Френулопластика для усунення болю та запобігання розривам під час статевого акту.' },
    { cat: 'penis', id: 'peyronie', title: 'Хвороба Пейроні', desc: 'Хірургічна корекція викривлення статевого члена, висічення фіброзних бляшок.' },
    { cat: 'uro', id: 'bph', title: 'Аденома простати', desc: 'Малоінвазивне лікування гіперплазії передміхурової залози (лазерна енуклеація/ТУР).' },
    { cat: 'uro', id: 'stones', title: 'Сечокам\'яна хвороба', desc: 'Контактна лазерна літотрипсія (дроблення каменів у нирках, сечоводах та міхурі).' },
    { cat: 'uro', id: 'stricture', title: 'Стриктура уретри', desc: 'Буккальна пластика (заміщення звуженої ділянки уретри слизовою щоки).' },
    { cat: 'uro', id: 'kidney_cyst', title: 'Кіста нирки', desc: 'Лапароскопічне висічення або пункція кістозних утворень нирок.' },
    { cat: 'uro', id: 'prostatitis', title: 'Простатит та Уретрит', desc: 'Комплексна діагностика та лікування запальних захворювань чоловічої сечостатевої системи.' },
    { cat: 'uro', id: 'cystitis', title: 'Цистит та ГАМП', desc: 'Діагностика та терапія гострих/хронічних циститів, гіперактивного сечового міхура.' },
    { cat: 'std', id: 'std_all', title: 'Лікування ІПСШ', desc: 'Точна ПЛР-діагностика та лікування хламідіозу, мікоплазмозу, трихомоніазу та інших інфекцій.' },
    { cat: 'std', id: 'balanitis', title: 'Баланопостит', desc: 'Лікування запалення головки та крайньої плоті статевого члена.' },
    { cat: 'std', id: 'papilloma', title: 'Папіломавірус (Кондиломи)', desc: 'Радіохвильове та лазерне видалення гострокінцевих кондилом.' }
];

// --- HTML PARTIALS ---
const head = (title) => `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Аксьонов П.В.</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0fdfa', 100: '#ccfbf1', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a',
                        },
                        navy: { 800: '#1e293b', 900: '#0f172a', }
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
        body { font-family: 'Poppins', sans-serif; color: #475569; background-color: #f8fafc; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; color: #0f172a; }
        
        .bg-hero {
            background-image: linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 118, 110, 0.7)), url('https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        .bg-parallax {
            background-image: linear-gradient(rgba(15, 118, 110, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        .card-hover { transition: all 0.4s ease; }
        .card-hover:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15); }
        .btn-premium { background: linear-gradient(135deg, #0d9488, #0f766e); transition: all 0.3s ease; }
        .btn-premium:hover { background: linear-gradient(135deg, #0f766e, #115e59); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(13, 148, 136, 0.3); }
        
        /* Modern aesthetic for services instead of icons */
        .service-number {
            position: absolute; right: -15px; top: -25px;
            font-size: 140px; font-family: 'Playfair Display', serif;
            color: #f1f5f9; z-index: 0; line-height: 1; transition: color 0.4s ease;
        }
        .group:hover .service-number { color: #e2e8f0; }
        
        .image-frame { position: relative; }
        .image-frame::after {
            content: ''; position: absolute; top: 20px; right: -20px; width: 100%; height: 100%; border: 4px solid #14b8a6; z-index: -1; border-radius: 8px;
        }
        
        html { scroll-behavior: smooth; }
        .filter-btn.active { background-color: #0d9488; color: white; border-color: #0d9488; }
        
        .spoiler-content { display: none; }
        .spoiler-content.active { display: block; animation: fadeIn 0.5s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">
`;

const nav = (active) => `
    <div class="bg-navy-900 text-slate-300 text-sm py-3 hidden md:block">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div class="flex space-x-6">
                <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-brand-500"></i> м. Київ, клініка преміум-класу</span>
                <span class="flex items-center gap-2"><i class="fa-regular fa-clock text-brand-500"></i> Пн-Пт: 09:00 - 19:00</span>
            </div>
            <div class="flex space-x-4">
                <span class="text-brand-500 font-semibold tracking-widest uppercase text-xs">Дійсний член EAU</span>
            </div>
        </div>
    </div>
    <header class="bg-white sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24">
                <a href="index.html" class="flex-shrink-0 flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl font-serif font-bold">ПА</div>
                    <div>
                        <h1 class="text-2xl font-bold text-navy-900 leading-tight">Павло Аксьонов</h1>
                        <span class="text-xs text-brand-600 uppercase tracking-widest font-semibold">Уролог &bull; Хірург</span>
                    </div>
                </a>
                <nav class="hidden md:flex space-x-8">
                    <a href="index.html" class="${active==='home'?'text-brand-600 font-bold':'text-slate-600 hover:text-brand-600'} font-medium transition">Головна</a>
                    <a href="about.html" class="${active==='about'?'text-brand-600 font-bold':'text-slate-600 hover:text-brand-600'} font-medium transition">Про Лікаря</a>
                    <a href="operations.html" class="${active==='ops'?'text-brand-600 font-bold':'text-slate-600 hover:text-brand-600'} font-medium transition">Каталог Послуг</a>
                    <a href="contacts.html" class="${active==='contact'?'text-brand-600 font-bold':'text-slate-600 hover:text-brand-600'} font-medium transition">Контакти</a>
                </nav>
                <div class="hidden md:flex items-center gap-6">
                    <div class="text-right">
                        <span class="block text-xs text-slate-500">Конфіденційний запис</span>
                        <a href="tel:+380670000000" class="text-lg font-bold text-navy-900 hover:text-brand-600 transition">+38 (067) 000 00 00</a>
                    </div>
                    <a href="index.html#appointment" class="btn-premium text-white px-8 py-3 rounded-md font-semibold tracking-wide uppercase text-sm">Записатись</a>
                </div>
            </div>
        </div>
    </header>
`;

const footer = `
    <footer class="bg-navy-900 pt-20 pb-10 border-t border-slate-800 text-slate-300 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-serif font-bold">ПА</div>
                        <h3 class="text-xl font-bold text-white leading-tight">Павло Аксьонов</h3>
                    </div>
                    <p class="text-sm leading-relaxed mb-6">
                        Високоточна хірургічна практика у Києві. Органозберігаючі мікрохірургічні операції та естетична корекція з дотриманням протоколів EBM.
                    </p>
                </div>
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Навігація</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="index.html" class="hover:text-brand-400 transition">Головна</a></li>
                        <li><a href="about.html" class="hover:text-brand-400 transition">Про Лікаря</a></li>
                        <li><a href="operations.html" class="hover:text-brand-400 transition">Каталог Послуг</a></li>
                        <li><a href="contacts.html" class="hover:text-brand-400 transition">Контакти</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Популярні Послуги</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition">Операція Мармара</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition">Циркумцизіо (Фімоз)</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition">Хвороба Пейроні</a></li>
                        <li><a href="single-operation.html" class="hover:text-brand-400 transition">Стриктура уретри</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white text-lg font-bold mb-6 font-serif">Контакти</h4>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start gap-4"><i class="fa-solid fa-location-dot mt-1 text-brand-400"></i><span>м. Київ,<br>вул. Центральна, 1</span></li>
                        <li class="flex items-center gap-4"><i class="fa-solid fa-phone text-brand-400"></i><span>+38 (067) 000-00-00</span></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; 2026 Аксьонов П.В. Усі права захищено.</p>
            </div>
        </div>
    </footer>
    <script>
        function filterOps(category, btnElement) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');
            
            document.querySelectorAll('.op-card').forEach(card => {
                if (category === 'all' || card.getAttribute('data-cat') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function toggleSpoiler() {
            const content = document.getElementById('spoilerContent');
            if(content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        }
    </script>
</body>
</html>
`;

// --- INDEX.HTML ---
const buildIndex = () => {
    let html = head('Головна') + nav('home');
    html += `
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
                    <a href="operations.html" class="btn-premium text-white px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm inline-flex items-center gap-2">
                        Каталог Послуг <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="about.html" class="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm transition inline-flex items-center gap-2 backdrop-blur-sm">
                        Про Лікаря
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Overlapping Features -->
    <section class="relative z-10 -mt-24 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-premium p-10 card-hover border-b-4 border-brand-500">
                    <h3 class="text-2xl font-bold text-navy-900 mb-4">Точність Мікрохірургії</h3>
                    <p class="text-slate-600">Використання операційної оптики для максимального збереження тканин та нульового ризику ускладнень.</p>
                </div>
                <div class="bg-brand-600 rounded-xl shadow-premium p-10 card-hover transform md:-translate-y-4">
                    <h3 class="text-2xl font-bold text-white mb-4">15+ Років Досвіду</h3>
                    <p class="text-brand-100">Понад 8000 успішних оперативних втручань. Дійсний член Європейської асоціації урологів (EAU).</p>
                </div>
                <div class="bg-white rounded-xl shadow-premium p-10 card-hover border-b-4 border-brand-500">
                    <h3 class="text-2xl font-bold text-navy-900 mb-4">Анонімність</h3>
                    <p class="text-slate-600">Повна конфіденційність на всіх етапах: від першої консультації до виписки з комфортного стаціонару.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services (No Smileys, Typography Based) -->
    <section class="py-24 bg-slate-50" id="services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center text-center mb-16">
                <span class="text-brand-600 uppercase tracking-widest text-sm font-semibold mb-3 flex items-center gap-4">
                    <span class="h-[2px] w-12 bg-brand-600"></span> Клінічні Напрямки <span class="h-[2px] w-12 bg-brand-600"></span>
                </span>
                <h2 class="text-4xl md:text-5xl font-bold text-navy-900">Елітні Хірургічні Послуги</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="relative bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group overflow-hidden">
                    <div class="service-number">01</div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Операція Мармара</h3>
                        <p class="text-slate-600 mb-6 font-light">Мікрохірургічне лікування варикоцеле. Золотий стандарт усунення чоловічого безпліддя без рецидивів.</p>
                        <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2">Детальніше <i class="fa-solid fa-arrow-right text-xs"></i></a>
                    </div>
                </div>

                <div class="relative bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group overflow-hidden">
                    <div class="service-number">02</div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Циркумцизіо</h3>
                        <p class="text-slate-600 mb-6 font-light">Естетичне обрізання крайньої плоті при фімозі. Накладання косметичних швів, що швидко розсмоктуються.</p>
                        <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2">Детальніше <i class="fa-solid fa-arrow-right text-xs"></i></a>
                    </div>
                </div>

                <div class="relative bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group overflow-hidden">
                    <div class="service-number">03</div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Гідроцеле</h3>
                        <p class="text-slate-600 mb-6 font-light">Операція Бергмана для ліквідації водянки яєчка. Швидке відновлення нормального об'єму мошонки.</p>
                        <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2">Детальніше <i class="fa-solid fa-arrow-right text-xs"></i></a>
                    </div>
                </div>

                <div class="relative bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group overflow-hidden">
                    <div class="service-number">04</div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Фалопротезування</h3>
                        <p class="text-slate-600 mb-6 font-light">Хірургічне відновлення потенції. Імплантація сучасних трикомпонентних гідравлічних протезів.</p>
                        <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2">Детальніше <i class="fa-solid fa-arrow-right text-xs"></i></a>
                    </div>
                </div>

                <div class="relative bg-white rounded-xl p-10 shadow-card card-hover border border-slate-100 group overflow-hidden">
                    <div class="service-number">05</div>
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 group-hover:text-brand-600 transition">Хвороба Пейроні</h3>
                        <p class="text-slate-600 mb-6 font-light">Хірургічна корекція та випрямлення статевого члена з видаленням фіброзних бляшок.</p>
                        <a href="single-operation.html" class="text-brand-600 font-semibold uppercase text-sm tracking-wide flex items-center gap-2">Детальніше <i class="fa-solid fa-arrow-right text-xs"></i></a>
                    </div>
                </div>

                <div class="relative bg-brand-600 rounded-xl p-10 shadow-card card-hover border border-brand-700 group flex items-center justify-center">
                    <div class="text-center relative z-10">
                        <h3 class="text-3xl font-bold text-white mb-4 font-serif">Всі 26 Операцій</h3>
                        <p class="text-brand-100 mb-8 font-light">Повний реєстр хірургічних втручань.</p>
                        <a href="operations.html" class="bg-white text-brand-600 px-6 py-3 rounded-md font-semibold tracking-wide uppercase text-sm inline-flex items-center gap-2 hover:bg-slate-50 transition">
                            Перейти до каталогу
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Parallax Stats -->
    <section class="bg-parallax py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div><div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">15+</div><div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Років Досвіду</div></div>
                <div><div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">8000</div><div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Операцій</div></div>
                <div><div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">99%</div><div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Успішність</div></div>
                <div><div class="text-5xl md:text-6xl font-bold text-white font-serif mb-4">EAU</div><div class="text-brand-100 uppercase tracking-widest text-sm font-semibold">Сертифікація</div></div>
            </div>
        </div>
    </section>

    <!-- Appointment -->
    <section class="py-24 bg-white" id="appointment">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-12 md:p-16 text-white flex flex-col justify-center">
                    <span class="text-brand-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-4">Прямий Зв'язок</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Призначити <span class="text-brand-400 italic">Консультацію</span></h2>
                    <p class="text-slate-300 mb-8 text-lg font-light">Залиште ваші дані, і наша клініка зв'яжеться з вами найближчим часом.</p>
                    <div class="space-y-6 mt-auto">
                        <div class="flex items-center gap-6">
                            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-400 text-xl border border-white/20"><i class="fa-solid fa-phone"></i></div>
                            <div><p class="text-slate-400 text-sm">Гаряча Лінія</p><p class="text-xl font-semibold text-white">+38 (067) 000-00-00</p></div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 bg-slate-50 p-12 md:p-16">
                    <form class="space-y-6">
                        <div><label class="block text-sm font-medium text-navy-900 mb-2">Ваше Ім'я</label><input type="text" class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition shadow-sm"></div>
                        <div><label class="block text-sm font-medium text-navy-900 mb-2">Номер Телефону</label><input type="tel" class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition shadow-sm"></div>
                        <div>
                            <label class="block text-sm font-medium text-navy-900 mb-2">Привід Звернення</label>
                            <select class="w-full px-5 py-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition shadow-sm bg-white">
                                <option>Консультація уролога</option>
                                <option>Хірургічне лікування</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full btn-premium text-white px-8 py-4 rounded-lg font-semibold tracking-wide uppercase text-sm mt-4">Надіслати Заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
    return html + footer;
};

// --- OPERATIONS.HTML ---
const buildOperations = () => {
    let html = head('Каталог Послуг') + nav('ops');
    
    let cards = '';
    fullOperationsList.forEach(op => {
        cards += `
        <div class="op-card bg-white rounded-xl p-8 shadow-card border border-slate-100 flex flex-col h-full card-hover" data-cat="${op.cat}">
            <h3 class="text-xl font-bold text-navy-900 mb-3">${op.title}</h3>
            <p class="text-slate-600 font-light text-sm mb-6 flex-grow">${op.desc}</p>
            <a href="single-operation.html" class="inline-block mt-auto text-brand-600 font-semibold uppercase text-xs tracking-wide">
                Детальніше <i class="fa-solid fa-arrow-right ml-1"></i>
            </a>
        </div>
        `;
    });

    html += `
    <div class="bg-slate-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl md:text-5xl font-bold text-navy-900 mb-6 text-center">Повний Каталог Послуг</h1>
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-12">Перелік хірургічних втручань та діагностичних маніпуляцій згідно зі структурою старої версії сайту, але на новому європейському рівні.</p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button onclick="filterOps('all', this)" class="filter-btn active px-6 py-2 rounded-full border border-brand-500 text-brand-600 font-medium text-sm transition hover:bg-brand-50">Всі Напрямки</button>
                <button onclick="filterOps('andro', this)" class="filter-btn px-6 py-2 rounded-full border border-brand-500 text-brand-600 font-medium text-sm transition hover:bg-brand-50">Андрологія & Мошонка</button>
                <button onclick="filterOps('penis', this)" class="filter-btn px-6 py-2 rounded-full border border-brand-500 text-brand-600 font-medium text-sm transition hover:bg-brand-50">Пластика Члена</button>
                <button onclick="filterOps('uro', this)" class="filter-btn px-6 py-2 rounded-full border border-brand-500 text-brand-600 font-medium text-sm transition hover:bg-brand-50">Загальна Урологія</button>
                <button onclick="filterOps('std', this)" class="filter-btn px-6 py-2 rounded-full border border-brand-500 text-brand-600 font-medium text-sm transition hover:bg-brand-50">Інфекції (ІПСШ)</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="opsGrid">
                ${cards}
            </div>
        </div>
    </div>
    `;
    return html + footer;
};

// --- SINGLE OPERATION ---
const buildSingle = () => {
    let html = head('Операція Мармара') + nav('ops');
    html += `
    <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12">
                
                <div class="lg:w-2/3">
                    <span class="text-brand-600 font-semibold uppercase tracking-widest text-xs mb-4 block">Андрологія & Мікрохірургія</span>
                    <h1 class="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">Мікрохірургічне лікування варикоцеле (Операція Мармара)</h1>
                    
                    <div class="flex flex-wrap gap-4 mb-10">
                        <div class="bg-slate-50 px-6 py-4 rounded-lg border border-slate-100">
                            <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Тривалість</span>
                            <span class="font-bold text-navy-900">40 хвилин</span>
                        </div>
                        <div class="bg-slate-50 px-6 py-4 rounded-lg border border-slate-100">
                            <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Анестезія</span>
                            <span class="font-bold text-navy-900">Місцева / Седація</span>
                        </div>
                        <div class="bg-slate-50 px-6 py-4 rounded-lg border border-slate-100">
                            <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Стаціонар</span>
                            <span class="font-bold text-brand-600">3-4 години</span>
                        </div>
                    </div>

                    <div class="prose prose-lg text-slate-600 max-w-none font-light leading-relaxed">
                        <p class="mb-6">Операція Мармара визнана Європейською асоціацією урологів (EAU) золотим стандартом лікування варикоцеле завдяки своїй безпечності та ефективності.</p>
                        
                        <h3 class="text-2xl font-bold text-navy-900 mb-4 font-serif mt-10">Показання до операції</h3>
                        <ul class="list-disc pl-5 mb-8 space-y-2 text-slate-700">
                            <li>Погіршення показників спермограми (чоловіче безпліддя).</li>
                            <li>Хронічний біль або дискомфорт у ділянці мошонки під час фізичних навантажень.</li>
                            <li>Візуально виражене розширення вен (естетичний дефект).</li>
                        </ul>

                        <h3 class="text-2xl font-bold text-navy-900 mb-4 font-serif mt-10">Переваги методу</h3>
                        <p class="mb-6">Доступ здійснюється через мініатюрний розріз (1.5–2 см) в ділянці зовнішнього пахового кільця. За допомогою операційного мікроскопа хірург філігранно перев'язує розширені вени, зберігаючи при цьому артерії та лімфатичні судини. Це повністю виключає ризик розвитку водянки в майбутньому.</p>
                    </div>

                    <!-- WordPress Style Accordion for 18+ -->
                    <div class="mt-12 bg-red-50 border border-red-100 rounded-xl p-6">
                        <div class="flex justify-between items-center cursor-pointer" onclick="toggleSpoiler()">
                            <h4 class="text-red-800 font-bold flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation"></i> Клінічні матеріали (18+)</h4>
                            <span class="text-red-800 bg-red-200 px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-300 transition">Показати фото</span>
                        </div>
                        <div id="spoilerContent" class="spoiler-content mt-6 pt-6 border-t border-red-200">
                            <p class="text-sm text-red-700 mb-4">Фотографії інтраопераційного процесу призначені виключно для ознайомлення з методикою.</p>
                            <div class="h-48 bg-slate-200 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-500 text-sm">
                                [ WP Media Gallery Placeholder ]
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Sidebar -->
                <div class="lg:w-1/3">
                    <div class="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-100 sticky top-32">
                        <h4 class="text-xl font-bold text-navy-900 mb-6 font-serif">Запис на процедуру</h4>
                        <p class="text-sm text-slate-600 mb-6">Залиште заявку, і ми підберемо зручний час для передопераційної консультації.</p>
                        <form class="space-y-4 mb-6">
                            <input type="text" placeholder="Ім'я" class="w-full px-4 py-3 rounded border border-slate-200 focus:border-brand-500 outline-none text-sm">
                            <input type="tel" placeholder="Телефон" class="w-full px-4 py-3 rounded border border-slate-200 focus:border-brand-500 outline-none text-sm">
                            <button type="button" class="w-full btn-premium text-white py-3 rounded font-bold uppercase text-xs tracking-wider">Відправити заявку</button>
                        </form>
                        <div class="border-t border-slate-200 pt-6">
                            <h5 class="font-bold text-navy-900 mb-4 text-sm uppercase tracking-wider">Суміжні послуги</h5>
                            <ul class="space-y-3 text-sm">
                                <li><a href="#" class="text-brand-600 hover:underline">Операція Бергмана (Гідроцеле)</a></li>
                                <li><a href="#" class="text-brand-600 hover:underline">Кіста придатка яєчка</a></li>
                                <li><a href="#" class="text-brand-600 hover:underline">Біопсія яєчка (TESE)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
    return html + footer;
};

// --- ABOUT ---
const buildAbout = () => {
    let html = head('Про Лікаря') + nav('about');
    html += `
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div class="image-frame sticky top-32">
                    <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Аксьонов Павло Валерійович" class="rounded-lg shadow-2xl w-full object-cover">
                </div>
                
                <div>
                    <h1 class="text-4xl md:text-5xl font-bold text-navy-900 mb-2 leading-tight">Аксьонов П.В.</h1>
                    <span class="text-brand-600 font-semibold uppercase tracking-widest text-sm block mb-8">Провідний Хірург-Уролог</span>
                    
                    <div class="prose prose-lg text-slate-600 font-light leading-relaxed mb-10">
                        <p>Я присвятив понад 15 років вирішенню найскладніших проблем чоловічого здоров'я. Моя головна мета — не просто провести операцію, а відновити якість життя пацієнта, використовуючи найсучасніші досягнення світової медицини.</p>
                        <p>Кожне втручання планується індивідуально, спираючись виключно на доказову базу EAU (Європейської асоціації урологів).</p>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-navy-900 mb-6 font-serif">Професійний Шлях</h3>
                    <div class="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                        
                        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div class="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-brand-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                            <div class="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm">
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-navy-900">НМУ ім. О.О. Богомольця</div>
                                    <time class="font-serif text-brand-600">2006-2012</time>
                                </div>
                                <div class="text-sm text-slate-500">Базова медична освіта (Лікувальна справа).</div>
                            </div>
                        </div>

                        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div class="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-brand-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                            <div class="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm">
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-navy-900">Спеціалізація</div>
                                    <time class="font-serif text-brand-600">2012-2015</time>
                                </div>
                                <div class="text-sm text-slate-500">Інтернатура та клінічна ординатура з урології та хірургії.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    return html + footer;
};

// --- CONTACTS ---
const buildContacts = () => {
    let html = head('Контакти') + nav('contact');
    html += `
    <div class="bg-slate-50 py-16 min-h-[70vh]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl md:text-5xl font-bold text-navy-900 mb-12 text-center">Контакти Клініки</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="bg-white p-10 rounded-xl shadow-card border border-slate-100">
                    <h3 class="text-2xl font-bold text-navy-900 mb-8 font-serif">Зв'яжіться з нами</h3>
                    
                    <div class="space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 text-xl shrink-0"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <h4 class="font-bold text-navy-900 mb-1">Телефон</h4>
                                <a href="tel:+380670000000" class="text-lg text-slate-600 hover:text-brand-600 transition">+38 (067) 000-00-00</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 text-xl shrink-0"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4 class="font-bold text-navy-900 mb-1">Адреса</h4>
                                <p class="text-slate-600">м. Київ, вул. Центральна, 1<br><span class="text-sm text-brand-600 mt-1 block">Є безкоштовний паркінг</span></p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 text-xl shrink-0"><i class="fa-regular fa-clock"></i></div>
                            <div>
                                <h4 class="font-bold text-navy-900 mb-1">Графік Роботи</h4>
                                <p class="text-slate-600">Пн-Пт: 09:00 - 19:00<br>Субота: Операційні дні (за записом)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center min-h-[400px]">
                    <div class="text-center p-6 text-slate-500">
                        <i class="fa-solid fa-map-location-dot text-4xl mb-4 text-slate-400"></i>
                        <p>[ Віджет Google Карт вставляється через WordPress ]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return html + footer;
};

// WRITE FILES
fs.writeFileSync('index.html', buildIndex());
fs.writeFileSync('operations.html', buildOperations());
fs.writeFileSync('single-operation.html', buildSingle());
fs.writeFileSync('about.html', buildAbout());
fs.writeFileSync('contacts.html', buildContacts());

console.log('All pages generated with premium WordPress template styling (no emojis, typography-driven services, accurate structure).');
