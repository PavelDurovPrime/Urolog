const fs = require('fs');

const baseHtmlHead = (title) => `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Аксьонов П.В.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'], },
                    colors: {
                        gray: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 900: '#111827' }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #ffffff; color: #111827; }
        .grid-borders { display: grid; gap: 1px; background-color: #E5E7EB; border: 1px solid #E5E7EB; }
        .grid-borders > * { background-color: #ffffff; }
        .hover-bg-light:hover { background-color: #F9FAFB; }
        html { scroll-behavior: smooth; }
        h1 { font-weight: 300; letter-spacing: -0.02em; }
        .text-micro { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6B7280; }
        .link-line { border-bottom: 1px solid transparent; transition: border-color 0.2s; }
        .link-line:hover { border-bottom-color: #111827; }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">
`;

const headerPartial = (active) => `
    <header class="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-center h-20">
                <a href="index.html" class="flex-shrink-0 flex items-center gap-4">
                    <div>
                        <div class="text-xl font-medium tracking-tight">Аксьонов П.В.</div>
                        <div class="text-micro mt-0.5">Урологія &bull; Андрологія</div>
                    </div>
                </a>
                <nav class="hidden md:flex space-x-10">
                    <a href="index.html" class="text-sm ${active === 'home' ? 'font-medium border-b border-gray-900 pb-1' : 'text-gray-500 hover:text-gray-900 transition'}">Головна</a>
                    <a href="about.html" class="text-sm ${active === 'about' ? 'font-medium border-b border-gray-900 pb-1' : 'text-gray-500 hover:text-gray-900 transition'}">О себе</a>
                    <a href="operations.html" class="text-sm ${active === 'ops' ? 'font-medium border-b border-gray-900 pb-1' : 'text-gray-500 hover:text-gray-900 transition'}">Операції</a>
                    <a href="contacts.html" class="text-sm ${active === 'contact' ? 'font-medium border-b border-gray-900 pb-1' : 'text-gray-500 hover:text-gray-900 transition'}">Контакти</a>
                </nav>
            </div>
        </div>
    </header>
`;

const footerPartial = `
    <footer class="bg-white border-t border-gray-200 mt-auto py-12">
        <div class="max-w-7xl mx-auto px-6 text-sm text-gray-500 font-light flex flex-col md:flex-row justify-between items-center">
            <div>&copy; 2026 Аксьонов П.В.</div>
            <div class="space-x-6 mt-4 md:mt-0 flex">
                <a href="operations.html" class="hover:text-gray-900">Урологія</a>
                <a href="operations.html" class="hover:text-gray-900">Андрологія</a>
                <a href="about.html" class="hover:text-gray-900">О себе</a>
                <a href="contacts.html" class="hover:text-gray-900">Контакти</a>
            </div>
        </div>
    </footer>
</body>
</html>
`;

// INDEX PAGE
const indexHtml = baseHtmlHead('Головна') + headerPartial('home') + `
    <section class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
                    <h1 class="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Усі види сучасної діагностики та лікування урологічних та андрологічних захворювань.
                    </h1>
                    <div class="text-gray-500 font-light leading-relaxed mb-10 text-lg max-w-lg">
                        Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою, лікуванням та профілактикою захворювань органів сечової системи. Етіологія (причина), клініка (прояв), профілактика (попередження) та лікування захворювань цих систем.
                    </div>
                    <div>
                        <a href="operations.html" class="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
                            Перейти до операцій
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <img src="Photo/aksonov.jpg" alt="Doctor" class="w-full h-[700px] object-cover grayscale opacity-90 hover:grayscale-0 transition duration-700">
                </div>
            </div>
        </div>
    </section>
` + footerPartial;

// OPERATIONS PAGE
const opsHtml = baseHtmlHead('Операції') + headerPartial('ops') + `
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-12">
                <span class="text-micro block mb-2">Напрямки</span>
                <h1 class="text-4xl md:text-5xl font-light">Каталог Захворювань та Операцій</h1>
            </div>

            <div class="grid-borders grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Урологія</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="single-operation.html" class="link-line">ГИПЕРПЛАЗИЯ ПРЕДСТАТЕЛЬНОЙ ЖЕЛЕЗЫ (АДЕНОМА)</a></li>
                        <li><a href="single-operation.html" class="link-line">МОЧЕКАМЕННАЯ БОЛЕЗНЬ (МКБ)</a></li>
                        <li><a href="single-operation.html" class="link-line">ПИЕЛОНЕФРИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">КИСТА ПОЧКИ</a></li>
                        <li><a href="single-operation.html" class="link-line">ПОЛИКИСТОЗ ПОЧЕК</a></li>
                        <li><a href="single-operation.html" class="link-line">ГИДРОНЕФРОЗ</a></li>
                        <li><a href="single-operation.html" class="link-line">ПРОСТАТИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">УРЕТРИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">ЦИСТИТ</a></li>
                    </ul>
                </div>
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Андрологія</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="single-operation.html" class="link-line">ОРХИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">ВЕЗИКУЛИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">ЭПИДИДИМИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">БАЛАНИТ, БАЛАНОПОСТИТ</a></li>
                        <li><a href="single-operation.html" class="link-line">КАВЕРНИТ</a></li>
                        <li><a href="single-operation.html" class="link-line text-gray-900 font-medium">ВАРИКОЦЕЛЕ, ОПЕРАЦІЯ МАРМАРА</a></li>
                        <li><a href="single-operation.html" class="link-line">ГІДРОЦЕЛЕ, ВОДЯНКА ЯЄЧКА</a></li>
                        <li><a href="single-operation.html" class="link-line">КІСТА ДОДАТКА ЯЄЧКА</a></li>
                        <li><a href="single-operation.html" class="link-line">АТЕРОМИ КАЛИТКИ (МОШОНКИ)</a></li>
                    </ul>
                </div>
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Пластика та Інше</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="single-operation.html" class="link-line">ФІМОЗ, ЦИРКУМЦИЗІО</a></li>
                        <li><a href="single-operation.html" class="link-line">КОРОТКА ВУЗДЕЧКА, ФРЕНУЛОПЛАСТИКА</a></li>
                        <li><a href="single-operation.html" class="link-line">СТРИКТУРА УРЕТРЫ</a></li>
                        <li><a href="single-operation.html" class="link-line">ГИПЕРАКТИВНЫЙ МОЧЕВОЙ ПУЗЫРЬ</a></li>
                        <li><a href="single-operation.html" class="link-line">НЕДЕРЖАНИЕ МОЧИ</a></li>
                        <li><a href="single-operation.html" class="link-line">ГРАНУЛЫ ФОРДАЙСА</a></li>
                        <li><a href="single-operation.html" class="link-line">ЗАБОЛЕВАНИЯ ПЕРЕДАЮЩИЕСЯ ПОЛОВЫМ ПУТЁМ (ЗППП)</a></li>
                        <li><a href="single-operation.html" class="link-line">ПАПИЛЛОМАВИРУС</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
` + footerPartial;

// SINGLE OPERATION PAGE
const singleHtml = baseHtmlHead('Операція Мармара') + headerPartial('ops') + `
    <section class="border-b border-gray-200 bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-6">
            <span class="text-micro mb-4 block">Андрологія</span>
            <h1 class="text-4xl md:text-5xl font-light max-w-3xl leading-tight">
                Варикоцеле — операція Мармара у Києві
            </h1>
        </div>
    </section>

    <section class="py-16">
        <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
            <div class="lg:w-2/3">
                <div class="aspect-video bg-gray-100 mb-10 flex items-center justify-center text-gray-400">
                    [ Фотографія операції або клініки ]
                </div>
                <div class="text-lg font-light text-gray-600 leading-relaxed space-y-6">
                    <p>
                        Мікрохірургічна варикоцелектомія за методикою Мармара є найефективнішим і найбезпечнішим методом лікування варикоцеле на сьогоднішній день. На відміну від операції Іваніссевича, втручання проводиться через розріз розміром 1,5–2 см.
                    </p>
                    <h3 class="text-xl font-medium text-gray-900 mt-10 mb-4">Показання</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Зміни у спермограмі (чоловіче безпліддя)</li>
                        <li>Больовий синдром або відчуття важкості у мошонці</li>
                        <li>Естетичний дефект (розширені вени)</li>
                        <li>Зменшення об'єму яєчка</li>
                    </ul>

                    <h3 class="text-xl font-medium text-gray-900 mt-10 mb-4">Фото результатів (18+)</h3>
                    <details class="group border border-gray-200 rounded-none bg-gray-50 p-6 cursor-pointer">
                        <summary class="font-medium text-gray-900 outline-none list-none flex justify-between items-center">
                            Показати клінічні фотографії
                            <span class="transition group-open:rotate-180">+</span>
                        </summary>
                        <div class="mt-4 pt-4 border-t border-gray-200 text-sm">
                            Фотографії призначені для ознайомлення. [ Placeholder ]
                        </div>
                    </details>
                </div>
            </div>

            <div class="lg:w-1/3">
                <div class="border border-gray-200 p-8 sticky top-32 bg-white">
                    <h4 class="text-lg font-medium mb-6">Записатися на прийом</h4>
                    <form class="space-y-4">
                        <input type="text" placeholder="Ім'я" class="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm">
                        <input type="tel" placeholder="Телефон" class="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm">
                        <button type="button" class="w-full bg-gray-900 text-white font-medium text-sm py-4 uppercase tracking-wider hover:bg-gray-800 transition-colors mt-4">
                            Надіслати
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
` + footerPartial;

// ABOUT PAGE
const aboutHtml = baseHtmlHead('О себе') + headerPartial('about') + `
    <section class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Аксьонов Павло Валерійович" class="w-full h-full object-cover grayscale">
                </div>
                <div class="lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center">
                    <span class="text-micro mb-4 block">Лікар вищої категорії</span>
                    <h1 class="text-5xl font-light mb-8">Аксьонов Павло Валерійович</h1>
                    <div class="text-lg font-light text-gray-600 leading-relaxed space-y-6">
                        <p>
                            Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, запалення простати, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
                        </p>
                        <p>
                            Моя спеціалізація охоплює повний спектр оперативної урології та генітальної хірургії з дотриманням сучасних стандартів EBM (доказової медицини).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
` + footerPartial;

// CONTACTS PAGE
const contactsHtml = baseHtmlHead('Контакти') + headerPartial('contact') + `
    <section class="py-20 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
            <h1 class="text-5xl font-light mb-16">Контакти</h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div class="mb-10">
                        <h4 class="text-micro text-gray-500 mb-2">Адреса</h4>
                        <p class="text-lg font-light text-gray-900">м. Київ</p>
                    </div>
                    <div class="mb-10">
                        <h4 class="text-micro text-gray-500 mb-2">Телефон</h4>
                        <a href="tel:+380000000000" class="text-lg font-light text-gray-900 link-line">+38 (000) 000-00-00</a>
                    </div>
                    <div class="mb-10">
                        <h4 class="text-micro text-gray-500 mb-2">Часи роботи</h4>
                        <p class="text-lg font-light text-gray-900">Пн-Пт: 09:00 - 19:00</p>
                    </div>
                </div>
                <div class="bg-gray-100 min-h-[400px] flex items-center justify-center text-gray-400 font-light">
                    [ Карта ]
                </div>
            </div>
        </div>
    </section>
` + footerPartial;


fs.writeFileSync('index.html', indexHtml);
fs.writeFileSync('operations.html', opsHtml);
fs.writeFileSync('single-operation.html', singleHtml);
fs.writeFileSync('about.html', aboutHtml);
fs.writeFileSync('contacts.html', contactsHtml);

console.log('Elite Minimalist pages fully rebuilt with raw text from original site.');
