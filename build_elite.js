const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Аксьонов П.В. | Урологія та Андрологія</title>
    
    <!-- Elite Minimalist Fonts (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        gray: {
                            50: '#F9FAFB',
                            100: '#F3F4F6',
                            200: '#E5E7EB',
                            300: '#D1D5DB',
                            900: '#111827',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #ffffff; color: #111827; }
        
        /* Thin, sharp borders for structural architecture */
        .grid-borders {
            display: grid;
            gap: 1px;
            background-color: #E5E7EB;
            border: 1px solid #E5E7EB;
        }
        .grid-borders > * {
            background-color: #ffffff;
        }
        
        /* Ultra minimal hover */
        .hover-bg-light:hover { background-color: #F9FAFB; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }

        /* Typography */
        h1 { font-weight: 300; letter-spacing: -0.02em; }
        .text-micro { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6B7280; }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">

    <!-- Header / Navbar (Wireframe style) -->
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
                    <a href="index.html" class="text-sm font-medium border-b border-gray-900 pb-1">Головна</a>
                    <a href="about.html" class="text-sm text-gray-500 hover:text-gray-900 transition">О себе</a>
                    <a href="operations.html" class="text-sm text-gray-500 hover:text-gray-900 transition">Операції</a>
                    <a href="contacts.html" class="text-sm text-gray-500 hover:text-gray-900 transition">Контакти</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- HERO SECTION (Pure Typography + Clinical Photo) -->
    <section class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
                    <h1 class="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Усі види сучасної діагностики та лікування урологічних та андрологічних захворювань.
                    </h1>
                    <div class="text-gray-500 font-light leading-relaxed mb-10 text-lg">
                        Урологія (від грец. uros – сеча та logos – наука) – розділ медицини, який займається вивченням, діагностикою, лікуванням та профілактикою захворювань органів сечової системи у жінок та органів сечостатевої системи у чоловіків.
                    </div>
                    <div>
                        <a href="#operations" class="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
                            Перейти до операцій
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <img src="Photo/aksonov.jpg" alt="Doctor" class="w-full h-full object-cover grayscale aspect-square lg:aspect-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES GRID (Exact structure from old site, wireframe grid) -->
    <section class="bg-gray-50 py-20" id="operations">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-12">
                <span class="text-micro block mb-2">Напрямки</span>
                <h2 class="text-3xl font-light">Каталог Захворювань та Операцій</h2>
            </div>

            <!-- Architectural Grid -->
            <div class="grid-borders grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <!-- Group 1 -->
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Урологія</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="#" class="hover:text-gray-900">ГИПЕРПЛАЗИЯ ПРЕДСТАТЕЛЬНОЙ ЖЕЛЕЗЫ (АДЕНОМА)</a></li>
                        <li><a href="#" class="hover:text-gray-900">МОЧЕКАМЕННАЯ БОЛЕЗНЬ (МКБ)</a></li>
                        <li><a href="#" class="hover:text-gray-900">ПИЕЛОНЕФРИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">КИСТА ПОЧКИ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ПОЛИКИСТОЗ ПОЧЕК</a></li>
                        <li><a href="#" class="hover:text-gray-900">ГИДРОНЕФРОЗ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ПРОСТАТИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">УРЕТРИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ЦИСТИТ</a></li>
                    </ul>
                </div>
                <!-- Group 2 -->
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Андрологія</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="#" class="hover:text-gray-900">ОРХИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ВЕЗИКУЛИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ЭПИДИДИМИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">БАЛАНИТ, БАЛАНОПОСТИТ</a></li>
                        <li><a href="#" class="hover:text-gray-900">КАВЕРНИТ</a></li>
                        <li><a href="single-operation.html" class="text-gray-900 font-medium">ВАРИКОЦЕЛЕ, ОПЕРАЦІЯ МАРМАРА</a></li>
                        <li><a href="#" class="hover:text-gray-900">ГІДРОЦЕЛЕ, ВОДЯНКА ЯЄЧКА</a></li>
                        <li><a href="#" class="hover:text-gray-900">КІСТА ДОДАТКА ЯЄЧКА</a></li>
                        <li><a href="#" class="hover:text-gray-900">АТЕРОМИ КАЛИТКИ (МОШОНКИ)</a></li>
                    </ul>
                </div>
                <!-- Group 3 -->
                <div class="p-8 hover-bg-light transition-colors">
                    <h3 class="text-lg font-medium mb-6">Пластика та Інше</h3>
                    <ul class="space-y-4 text-sm text-gray-600 font-light">
                        <li><a href="#" class="hover:text-gray-900">ФІМОЗ, ЦИРКУМЦИЗІО</a></li>
                        <li><a href="#" class="hover:text-gray-900">КОРОТКА ВУЗДЕЧКА, ФРЕНУЛОПЛАСТИКА</a></li>
                        <li><a href="#" class="hover:text-gray-900">СТРИКТУРА УРЕТРЫ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ГИПЕРАКТИВНЫЙ МОЧЕВОЙ ПУЗЫРЬ</a></li>
                        <li><a href="#" class="hover:text-gray-900">НЕДЕРЖАНИЕ МОЧИ</a></li>
                        <li><a href="#" class="hover:text-gray-900">ГРАНУЛЫ ФОРДАЙСА</a></li>
                        <li><a href="#" class="hover:text-gray-900">ЗАБОЛЕВАНИЯ ПЕРЕДАЮЩИЕСЯ ПОЛОВЫМ ПУТЁМ (ЗППП)</a></li>
                        <li><a href="#" class="hover:text-gray-900">ПАПИЛЛОМАВИРУС</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 mt-auto py-12">
        <div class="max-w-7xl mx-auto px-6 text-sm text-gray-500 font-light flex flex-col md:flex-row justify-between items-center">
            <div>&copy; 2026 Аксьонов П.В.</div>
            <div class="space-x-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-gray-900">Урологія</a>
                <a href="#" class="hover:text-gray-900">Андрологія</a>
                <a href="#" class="hover:text-gray-900">О себе</a>
                <a href="#" class="hover:text-gray-900">Контакти</a>
            </div>
        </div>
    </footer>

</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('Generated Elite Minimalist index.html');
