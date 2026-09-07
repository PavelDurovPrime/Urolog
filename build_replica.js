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
                            500: '#0ea5e9', // Primary Blue
                            600: '#0284c7', // Hover Blue
                            800: '#075985', // Dark Blue text
                        },
                        accent: {
                            500: '#f59e0b', // Amber/Orange CTA
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
        .card-shadow { box-shadow: 0 10px 40px -10px rgba(14, 165, 233, 0.15); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-shadow:hover { transform: translateY(-5px); box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.25); }
        .btn-primary { background-color: #0284c7; color: white; border-radius: 9999px; font-weight: 700; transition: all 0.3s; }
        .btn-primary:hover { background-color: #0369a1; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4); transform: translateY(-2px); }
        html { scroll-behavior: smooth; }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">
`;

const header = (active) => `
    <!-- Top bar -->
    <div class="bg-med-800 text-white py-2 text-sm hidden md:block">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
                <span><i class="fa-solid fa-location-dot mr-2"></i> м. Київ</span>
                <span><i class="fa-solid fa-clock mr-2"></i> Пн-Пт: 09:00 - 19:00</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="tel:+380670000000" class="font-bold"><i class="fa-solid fa-phone mr-2"></i> +38 (067) 000-00-00</a>
            </div>
        </div>
    </div>
    
    <!-- Navbar -->
    <header class="bg-white sticky top-0 z-50 shadow-sm py-4">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3">
                <div class="w-12 h-12 bg-med-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md">
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
            
            <a href="index.html#appointment" class="hidden md:inline-block btn-primary px-8 py-3">
                Записатися на прийом
            </a>
        </div>
    </header>
`;

const footer = `
    <footer class="bg-slate-800 text-slate-300 py-12 mt-auto rounded-tr-[100px]">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-white text-xl font-bold mb-4">Аксьонов Павло Валерійович</h3>
                <p class="mb-4">Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою та лікуванням захворювань органів сечостатевої системи.</p>
            </div>
            <div>
                <h3 class="text-white text-xl font-bold mb-4">Навігація</h3>
                <ul class="space-y-2 font-semibold">
                    <li><a href="index.html" class="hover:text-white transition"><i class="fa-solid fa-chevron-right text-med-500 text-xs mr-2"></i> Головна</a></li>
                    <li><a href="about.html" class="hover:text-white transition"><i class="fa-solid fa-chevron-right text-med-500 text-xs mr-2"></i> Про лікаря</a></li>
                    <li><a href="operations.html" class="hover:text-white transition"><i class="fa-solid fa-chevron-right text-med-500 text-xs mr-2"></i> Всі послуги</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white text-xl font-bold mb-4">Контакти</h3>
                <p class="mb-2"><i class="fa-solid fa-location-dot text-med-500 w-5"></i> м. Київ</p>
                <p class="mb-2"><i class="fa-solid fa-phone text-med-500 w-5"></i> +38 (067) 000-00-00</p>
                <p><i class="fa-solid fa-envelope text-med-500 w-5"></i> doctor@urologist.kiev.ua</p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

// INDEX
const index = head('Головна') + header('home') + `
    <!-- HERO (Similar to urologist.net.ua) -->
    <section class="hero-bg pb-20 pt-10">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
                <div class="bg-white/60 inline-block px-4 py-1 rounded-full text-med-600 font-bold text-sm mb-6 shadow-sm border border-white">
                    <i class="fa-solid fa-stethoscope mr-1"></i> Хірургічна Урологія
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-med-800 leading-tight mb-6">
                    Діагностика та лікування урологічних захворювань
                </h1>
                
                <ul class="space-y-4 mb-8 text-lg font-semibold text-slate-700">
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600"><i class="fa-solid fa-check"></i></div>
                        Мікрохірургічні операції
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600"><i class="fa-solid fa-check"></i></div>
                        Лікування без болю та ускладнень
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-med-100 flex items-center justify-center text-med-600"><i class="fa-solid fa-check"></i></div>
                        Швидка реабілітація (1 день у клініці)
                    </li>
                </ul>
                
                <div class="flex gap-4">
                    <a href="#appointment" class="btn-primary px-8 py-4 text-lg">Записатися</a>
                    <a href="operations.html" class="bg-white text-med-600 px-8 py-4 text-lg font-bold rounded-full shadow-md hover:shadow-lg transition">Всі послуги</a>
                </div>
            </div>
            
            <div class="md:w-1/2 relative">
                <!-- Decorative background blobs -->
                <div class="absolute inset-0 bg-med-500 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
                <div class="absolute inset-0 bg-accent-500 rounded-full blur-3xl opacity-20 transform -translate-x-10 -translate-y-10"></div>
                
                <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Лікар Уролог" class="relative z-10 w-full max-w-md mx-auto rounded-4xl shadow-2xl border-8 border-white object-cover">
                
                <!-- Floating badge -->
                <div class="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 hidden md:flex">
                    <div class="w-12 h-12 bg-med-100 rounded-full flex items-center justify-center text-med-600 text-2xl">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div>
                        <div class="font-bold text-slate-800 text-lg">15+ років</div>
                        <div class="text-sm font-semibold text-slate-500">Досвід роботи</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SNIPPET -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 text-center max-w-4xl">
            <h2 class="text-3xl font-extrabold text-med-800 mb-6">Про спеціаліста</h2>
            <p class="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
            </p>
            <p class="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Етіологія (причина), клініка (прояв), профілактика та лікування захворювань цих систем становлять предмет урології як клінічної спеціальності.
            </p>
            <a href="about.html" class="text-med-600 font-bold hover:text-med-800 transition underline underline-offset-4 decoration-2">Читати повну біографію</a>
        </div>
    </section>

    <!-- SERVICES (Icon boxes like reference site) -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-med-800 mb-4">Основні напрямки лікування</h2>
                <p class="text-lg text-slate-500 font-semibold max-w-2xl mx-auto">Консервативне та оперативне лікування за сучасними європейськими протоколами.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6">
                        <i class="fa-solid fa-mars"></i>
                    </div>
                    <h3 class="text-xl font-extrabold text-slate-800 mb-4">Андрологія</h3>
                    <p class="text-slate-600 font-medium mb-6">Варикоцеле (операція Мармара), водянка яєчка, фімоз, коротка вуздечка, протезування.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-6 py-2 rounded-full hover:bg-med-100 transition">Детальніше</a>
                </div>
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6">
                        <i class="fa-solid fa-kidneys"></i>
                    </div>
                    <h3 class="text-xl font-extrabold text-slate-800 mb-4">Урологія</h3>
                    <p class="text-slate-600 font-medium mb-6">Сечокам'яна хвороба (МКБ), аденома простати, кісти нирок, пієлонефрит, цистит.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-6 py-2 rounded-full hover:bg-med-100 transition">Детальніше</a>
                </div>
                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6">
                        <i class="fa-solid fa-virus"></i>
                    </div>
                    <h3 class="text-xl font-extrabold text-slate-800 mb-4">Лікування Інфекцій</h3>
                    <p class="text-slate-600 font-medium mb-6">Діагностика та терапія ЗПСШ, видалення кондилом (папіломавірус), лікування простатиту.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-6 py-2 rounded-full hover:bg-med-100 transition">Детальніше</a>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="operations.html" class="btn-primary px-8 py-4 text-lg inline-block">Всі 26 видів послуг</a>
            </div>
        </div>
    </section>

    <!-- FORM SECTION -->
    <section class="py-20 bg-med-800" id="appointment">
        <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/2 text-white">
                <h2 class="text-3xl font-extrabold mb-4">Потрібна консультація?</h2>
                <p class="text-lg text-med-100 font-medium mb-8">Заповніть форму, і ми передзвонимо вам для узгодження зручного часу візиту.</p>
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl"><i class="fa-solid fa-phone"></i></div>
                    <div>
                        <div class="text-med-200 font-semibold text-sm">Або телефонуйте:</div>
                        <div class="text-2xl font-bold">+38 (067) 000-00-00</div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 w-full">
                <form class="bg-white p-8 rounded-4xl shadow-2xl">
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-6">Записатися на прийом</h3>
                    <div class="space-y-4">
                        <input type="text" placeholder="Ваше ім'я" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-med-500 focus:ring-2 focus:ring-med-100 transition">
                        <input type="tel" placeholder="Номер телефону" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-med-500 focus:ring-2 focus:ring-med-100 transition">
                        <button type="button" class="w-full btn-primary py-4 text-lg mt-2">Відправити заявку</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
` + footer;

// OPERATIONS
const operationsList = [
    "Аденома простати (Гіперплазія)", "Сечокам'яна хвороба (МКБ)", "Пієлонефрит", "Кіста нирки", "Полікістоз нирок", "Гідронефроз", 
    "Простатит", "Уретрит", "Цистит", "Орхіт", "Везикуліт", "Епідидиміт", "Орхоепідидиміт", "Баланіт та Баланопостит", "Каверніт",
    "Варикоцеле (Операція Мармара)", "Гідроцеле (Водянка яєчка)", "Кіста придатка яєчка", "Фімоз (Обрізання, Циркумцизіо)", 
    "Коротка вуздечка (Френулопластика)", "Атероми мошонки", "Гіперактивний сечовий міхур", "Нетримання сечі у чоловіків", 
    "Нетримання сечі у жінок", "Стриктура уретри (Буккальна пластика)", "Гранули Фордайса", "ЗПСШ (Хламідіоз тощо)"
];

let opsHtmlCards = '';
operationsList.forEach(op => {
    opsHtmlCards += `
        <a href="single-operation.html" class="bg-white p-6 rounded-2xl card-shadow border border-slate-100 flex items-center gap-4 group">
            <div class="w-12 h-12 bg-med-50 text-med-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-med-500 group-hover:text-white transition">
                <i class="fa-solid fa-stethoscope"></i>
            </div>
            <div class="font-extrabold text-slate-800 group-hover:text-med-600 transition">${op}</div>
        </a>
    `;
});

const operations = head('Послуги та ціни') + header('ops') + `
    <section class="hero-bg py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-med-800 mb-4">Послуги та захворювання</h1>
            <p class="text-lg text-slate-600 font-semibold max-w-2xl mx-auto">Повний перелік напрямків діагностики та хірургічного лікування.</p>
        </div>
    </section>

    <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${opsHtmlCards}
            </div>
        </div>
    </section>
` + footer;

// SINGLE OP
const singleOp = head('Варикоцеле (Операція Мармара)') + header('ops') + `
    <section class="bg-med-50 py-12 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center gap-2 text-sm font-bold text-med-500 mb-4 uppercase tracking-wider">
                <a href="operations.html">Послуги</a> <i class="fa-solid fa-chevron-right text-xs"></i> <span>Андрологія</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-med-800">Варикоцеле (Операція Мармара)</h1>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
            <div class="md:w-2/3">
                <div class="prose prose-lg text-slate-600 font-medium">
                    <p class="mb-6">
                        <strong>Варикоцеле</strong> — це варикозне розширення вен лозоподібного сплетення сім'яного канатика. Найефективнішим методом лікування є мікрохірургічна субінгвінальна варикоцелектомія (операція Мармара).
                    </p>
                    <h3 class="text-2xl font-extrabold text-slate-800 mt-8 mb-4">Як проходить операція?</h3>
                    <p class="mb-6">
                        Втручання виконується під місцевою або внутрішньовенною анестезією. Хірург робить мініатюрний розріз (1.5-2 см) нижче пахового кільця. Використання мікроскопа дозволяє чітко візуалізувати вени, зберегти артерії та лімфатичні шляхи, що зводить ризик рецидиву або гідроцеле до нуля.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 mb-8">
                        <li>Тривалість операції: 30-40 хвилин.</li>
                        <li>Перебування в стаціонарі: 3-4 години.</li>
                        <li>Реабілітація: повернення до звичного життя через 1-2 дні.</li>
                    </ul>
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="bg-slate-50 p-8 rounded-4xl border border-slate-100 card-shadow sticky top-32">
                    <h3 class="text-2xl font-extrabold text-slate-800 mb-6">Записатися на операцію</h3>
                    <form class="space-y-4">
                        <input type="text" placeholder="Ваше ім'я" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-med-500 transition">
                        <input type="tel" placeholder="Телефон" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:border-med-500 transition">
                        <button type="button" class="w-full btn-primary py-3 text-lg mt-2">Записатися</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
` + footer;

// ABOUT
const about = head('Про лікаря') + header('about') + `
    <section class="hero-bg py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-med-800 mb-4">Аксьонов Павло Валерійович</h1>
            <p class="text-lg text-slate-600 font-semibold">Лікар-уролог, андролог, хірург</p>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
            <div class="md:w-1/3">
                <img src="Photo/aksenov-pavel-valerijevich.jpg" class="w-full rounded-4xl shadow-xl">
            </div>
            <div class="md:w-2/3">
                <div class="prose prose-lg text-slate-600 font-medium">
                    <p class="mb-6">
                        Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, запалення простати, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
                    </p>
                    <p class="mb-6">
                        Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою, лікуванням та профілактикою захворювань органів сечової системи у жінок та органів сечостатевої системи у чоловіків.
                    </p>
                    <p class="mb-6">
                        Етіологія (причина), клініка (прояв), профілактика (попередження) та лікування захворювань цих систем, їх ушкоджень та вад розвитку становлять предмет урології як клінічної спеціальності. Це здебільшого хірургічна спеціальність, на відміну від нефрології, яка займається терапією нирок.
                    </p>
                </div>
            </div>
        </div>
    </section>
` + footer;

// CONTACTS
const contacts = head('Контакти') + header('contact') + `
    <section class="hero-bg py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-med-800 mb-4">Контакти</h1>
        </div>
    </section>

    <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-4xl card-shadow border border-slate-100">
                <h3 class="text-2xl font-extrabold text-slate-800 mb-8">Зв'яжіться з нами</h3>
                <div class="space-y-6 text-lg font-semibold text-slate-700">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-med-50 text-med-500 rounded-full flex items-center justify-center shrink-0"><i class="fa-solid fa-location-dot"></i></div>
                        <div>м. Київ</div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-med-50 text-med-500 rounded-full flex items-center justify-center shrink-0"><i class="fa-solid fa-phone"></i></div>
                        <div><a href="tel:+380670000000" class="hover:text-med-500 transition">+38 (067) 000-00-00</a></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-med-50 text-med-500 rounded-full flex items-center justify-center shrink-0"><i class="fa-solid fa-envelope"></i></div>
                        <div><a href="mailto:doctor@urologist.kiev.ua" class="hover:text-med-500 transition">doctor@urologist.kiev.ua</a></div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 rounded-4xl flex items-center justify-center text-gray-500 min-h-[400px]">
                [ Віджет Google Карт ]
            </div>
        </div>
    </section>
` + footer;

fs.writeFileSync('index.html', index);
fs.writeFileSync('operations.html', operations);
fs.writeFileSync('single-operation.html', singleOp);
fs.writeFileSync('about.html', about);
fs.writeFileSync('contacts.html', contacts);

console.log('Generated Reference Replica (urologist.net.ua style)');
