const fs = require('fs');

const head = (title) => `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Аксьонов Павло Валерійович</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Motion (motion.dev) Library -->
    <script src="https://cdn.jsdelivr.net/npm/motion@latest/dist/motion.js"></script>
    
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
                            200: '#bae6fd',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
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
        .card-shadow { 
            box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.12); 
            transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1); 
        }
        .card-shadow:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.22); 
        }
        
        /* RESTORED: Original blue surgical primary button */
        .btn-primary { 
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); 
            color: white; 
            border-radius: 9999px; 
            font-weight: 700; 
            transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1); 
            box-shadow: 0 4px 15px -3px rgba(14, 165, 233, 0.4);
        }
        .btn-primary:hover { 
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); 
            box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.5); 
            transform: translateY(-2px); 
        }
        .btn-primary:active {
            transform: scale(0.97);
        }
        
        html { scroll-behavior: smooth; }
        
        /* Interactive Nav Link indicator */
        .nav-item {
            position: relative;
        }
        .nav-item::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 50%;
            width: 0;
            height: 3px;
            background: #0ea5e9;
            border-radius: 9999px;
            transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
            transform: translateX(-50%);
        }
        .nav-item:hover::after,
        .nav-item.active::after {
            width: 80%;
        }

        /* Hamburger animation */
        .hamburger-line {
            transition: all 0.25s ease-in-out;
        }
        .hamburger-active .line1 {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger-active .line2 {
            opacity: 0;
        }
        .hamburger-active .line3 {
            transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Motion Initial State (Will be animated smoothly via Motion library) */
        .motion-initial {
            opacity: 0;
            transform: translateY(20px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            .motion-initial {
                opacity: 1 !important;
                transform: none !important;
            }
        }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen bg-white font-medium">
`;

const header = (active) => `
    <!-- Top Meta Bar - Ultra Minimalist & Premium -->
    <div class="bg-slate-50/80 border-b border-slate-100 hidden lg:block">
        <div class="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <div class="flex items-center gap-8">
                <span class="flex items-center gap-2.5 hover:text-slate-800 transition cursor-default">
                    <i class="fa-solid fa-location-dot text-med-400 text-sm"></i> м. Київ, преміум-клініка
                </span>
                <span class="flex items-center gap-2.5 hover:text-slate-800 transition cursor-default">
                    <i class="fa-regular fa-clock text-med-400 text-sm"></i> Пн-Пт: 09:00 - 19:00
                </span>
            </div>
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-4">
                    <a href="https://t.me/" target="_blank" class="flex items-center gap-2 hover:text-sky-500 transition">
                        <i class="fa-brands fa-telegram text-base"></i> Telegram
                    </a>
                    <a href="viber://chat?number=%2B380670000000" class="flex items-center gap-2 hover:text-purple-500 transition">
                        <i class="fa-brands fa-viber text-base"></i> Viber
                    </a>
                </div>
                <div class="w-[1px] h-4 bg-slate-300"></div>
                <a href="tel:+380670000000" class="flex items-center gap-2.5 text-slate-800 hover:text-med-600 transition text-xs">
                    <i class="fa-solid fa-phone text-med-500 text-sm"></i> +38 (067) 000-00-00
                </a>
            </div>
        </div>
    </div>
    
    <!-- Main Header - European Premium Level -->
    <header id="mainHeader" class="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
            
            <!-- Typographic Logo - Premium European Style -->
            <a href="index.html" class="flex items-center group">
                <span class="text-lg md:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight uppercase leading-none group-hover:text-med-600 transition-colors">
                    Аксьонов Павло Валерійович
                </span>
            </a>
            
            <!-- Desktop Nav - Minimalist -->
            <nav class="hidden lg:flex items-center gap-10">
                <a href="index.html" class="relative text-[12px] font-bold uppercase tracking-[0.15em] transition-colors py-2 group ${active === 'home' ? 'text-med-600' : 'text-slate-700 hover:text-med-600'}">
                    Головна
                    <span class="absolute bottom-0 left-0 w-full h-[2px] bg-med-600 transform ${active === 'home' ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
                <a href="about.html" class="relative text-[12px] font-bold uppercase tracking-[0.15em] transition-colors py-2 group ${active === 'about' ? 'text-med-600' : 'text-slate-700 hover:text-med-600'}">
                    Про лікаря
                    <span class="absolute bottom-0 left-0 w-full h-[2px] bg-med-600 transform ${active === 'about' ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
                
                <!-- Services Dropdown -->
                <div class="relative group" id="servicesDropdown">
                    <a href="operations.html" class="relative flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] transition-colors py-8 cursor-pointer ${active === 'ops' ? 'text-med-600' : 'text-slate-700 hover:text-med-600'}">
                        Послуги
                        <i class="fa-solid fa-chevron-down text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300"></i>
                        <span class="absolute bottom-6 left-0 w-full h-[2px] bg-med-600 transform ${active === 'ops' ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                    
                    <div class="absolute left-1/2 -translate-x-1/2 top-[85px] w-80 bg-white shadow-2xl border border-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-2xl">
                        <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-4 py-3 border-b border-slate-50 mb-2">Популярні напрямки</div>
                        
                        <a href="single-operation.html" class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 transition group/item">
                            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm group-hover/item:bg-med-600 group-hover/item:text-white transition">
                                <i class="fa-solid fa-scissors"></i>
                            </div>
                            <div>
                                <div class="font-bold text-slate-900 text-sm group-hover/item:text-med-600 transition">Операція Мармара</div>
                                <div class="text-xs font-semibold text-slate-500">Мікрохірургія варикоцеле</div>
                            </div>
                        </a>
                        
                        <a href="single-operation.html" class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 transition group/item">
                            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm group-hover/item:bg-med-600 group-hover/item:text-white transition">
                                <i class="fa-solid fa-user-nurse"></i>
                            </div>
                            <div>
                                <div class="font-bold text-slate-900 text-sm group-hover/item:text-med-600 transition">Циркумцизіо</div>
                                <div class="text-xs font-semibold text-slate-500">Естетичне обрізання</div>
                            </div>
                        </a>
                        
                        <a href="operations.html" class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 transition group/item">
                            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm group-hover/item:bg-med-600 group-hover/item:text-white transition">
                                <i class="fa-solid fa-droplet"></i>
                            </div>
                            <div>
                                <div class="font-bold text-slate-900 text-sm group-hover/item:text-med-600 transition">Урологія</div>
                                <div class="text-xs font-semibold text-slate-500">МКБ, Аденома, Кісти</div>
                            </div>
                        </a>

                        <div class="mt-2 pt-2 border-t border-slate-100">
                            <a href="operations.html" class="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider hover:bg-med-600 transition">
                                <span>Всі послуги</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <a href="contacts.html" class="relative text-[12px] font-bold uppercase tracking-[0.15em] transition-colors py-2 group ${active === 'contact' ? 'text-med-600' : 'text-slate-700 hover:text-med-600'}">
                    Контакти
                    <span class="absolute bottom-0 left-0 w-full h-[2px] bg-med-600 transform ${active === 'contact' ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
            </nav>
            
            <div class="flex items-center gap-4">
                <button onclick="openBookingModal()" class="hidden md:inline-flex items-center gap-2.5 btn-primary px-8 py-3.5 text-[12px] uppercase tracking-wider font-bold shadow-lg shadow-med-500/30">
                    <i class="fa-regular fa-calendar-check text-sm"></i>
                    <span>Записатися</span>
                </button>
                
                <!-- Mobile Hamburger -->
                <button id="hamburgerBtn" onclick="toggleMobileMenu()" class="lg:hidden w-12 h-12 hover:bg-slate-50 rounded-full flex flex-col items-center justify-center gap-1.5 focus:outline-none transition">
                    <span class="hamburger-line line1 w-5 h-0.5 bg-slate-900 rounded-full"></span>
                    <span class="hamburger-line line2 w-5 h-0.5 bg-slate-900 rounded-full"></span>
                    <span class="hamburger-line line3 w-5 h-0.5 bg-slate-900 rounded-full"></span>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden lg:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-2 shadow-2xl absolute w-full left-0">
            <a href="index.html" class="block px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-[12px] ${active === 'home' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}">Головна</a>
            <a href="about.html" class="block px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-[12px] ${active === 'about' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}">Про лікаря</a>
            <a href="operations.html" class="block px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-[12px] ${active === 'ops' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}">Послуги</a>
            <a href="contacts.html" class="block px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-[12px] ${active === 'contact' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}">Контакти</a>
            
            <div class="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3 px-2">
                <div class="flex items-center justify-center gap-6 mb-2">
                    <a href="https://t.me/" class="text-slate-400 hover:text-sky-500 transition"><i class="fa-brands fa-telegram text-2xl"></i></a>
                    <a href="viber://chat?number=%2B380670000000" class="text-slate-400 hover:text-purple-500 transition"><i class="fa-brands fa-viber text-2xl"></i></a>
                    <a href="tel:+380670000000" class="text-slate-400 hover:text-med-500 transition"><i class="fa-solid fa-phone text-2xl"></i></a>
                </div>
                <button onclick="openBookingModal(); toggleMobileMenu();" class="w-full btn-primary py-4 text-center font-bold text-[12px] uppercase tracking-wider rounded-full shadow-lg shadow-med-500/30">
                    Записатися на прийом
                </button>
            </div>
        </div>
    </header>
`;

const footer = `
    <!-- Global Booking Modal -->
    <div id="bookingModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
        <div class="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-10 relative transform scale-95 transition-transform duration-300" id="bookingModalContent">
            <button onclick="closeBookingModal()" class="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-lg transition">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="text-center mb-6">
                <div class="w-14 h-14 bg-med-100 text-med-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-inner">
                    <i class="fa-solid fa-calendar-check"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-800">Запис на консультацію</h3>
                <p class="text-slate-500 font-medium text-sm mt-1">Оберіть послугу та зручний час для візиту</p>
            </div>
            <form id="modalBookingForm" onsubmit="handleModalSubmit(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Ваше ім'я</label>
                    <input type="text" required placeholder="Олександр" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Телефон</label>
                    <input type="tel" required placeholder="+38 (067) 000-00-00" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Напрямок звернення</label>
                    <select class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition">
                        <option>Консультація уролога / андролога</option>
                        <option>Операція Мармара (Варикоцеле)</option>
                        <option>Циркумцизіо (Обрізання при фімозі)</option>
                        <option>Гідроцеле (Водянка яєчка)</option>
                        <option>Діагностика сечокам'яної хвороби (МКБ)</option>
                        <option>Інше хірургічне втручання</option>
                    </select>
                </div>
                <button type="submit" class="w-full btn-primary py-4 text-base mt-2">
                    Підтвердити запис
                </button>
            </form>
            <div id="modalSuccess" class="hidden text-center py-6">
                <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-800 mb-2">Дякуємо! Заявку прийнято.</h4>
                <p class="text-slate-600 font-medium text-sm">Лікар або адміністратор зателефонує вам протягом 15 хвилин для підтвердження часу візиту.</p>
                <button onclick="closeBookingModal()" class="mt-6 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-sm transition">
                    Закрити
                </button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 py-14 mt-auto rounded-tr-[100px] border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10" data-motion-group>
            <div data-motion-item class="motion-initial">
                <h3 class="text-white text-xl font-bold mb-4 flex items-center gap-2.5">
                    <div class="w-9 h-9 bg-gradient-to-tr from-med-600 to-med-400 text-white rounded-xl flex items-center justify-center text-sm shadow-sm">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 3a1.5 1.5 0 0 0-1.5 1.5v4.5H4.5A1.5 1.5 0 0 0 3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H9v4.5A1.5 1.5 0 0 0 10.5 21h3a1.5 1.5 0 0 0 1.5-1.5V15h4.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H15V4.5A1.5 1.5 0 0 0 13.5 3h-3z"/></svg>
                    </div>
                    Аксьонов Павло Валерійович
                </h3>
                <p class="mb-5 font-medium leading-relaxed text-slate-400">
                    Сучасна урологічна та андрологічна практика лікаря вищої категорії. Індивідуальний підхід, європейські протоколи доказової медицини та малоінвазивні хірургічні втручання.
                </p>
                <div class="flex gap-3 mt-6">
                    <a href="#" class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-med-500 text-slate-400 hover:text-white flex items-center justify-center transition shadow-md"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-med-500 text-slate-400 hover:text-white flex items-center justify-center transition shadow-md"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-med-500 text-slate-400 hover:text-white flex items-center justify-center transition shadow-md"><i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>
            
            <div data-motion-item class="motion-initial">
                <h3 class="text-white text-lg font-bold mb-5 uppercase tracking-wider text-xs text-med-400">Навігація по сайту</h3>
                <ul class="space-y-3 font-medium text-slate-300">
                    <li><a href="index.html" class="hover:text-med-400 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Головна</a></li>
                    <li><a href="about.html" class="hover:text-med-400 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Про лікаря</a></li>
                    <li><a href="operations.html" class="hover:text-med-400 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Послуги та ціни</a></li>
                    <li><a href="contacts.html" class="hover:text-med-400 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-med-500 text-xs"></i> Контакти та клініка</a></li>
                </ul>
            </div>
            
            <div data-motion-item class="motion-initial">
                <h3 class="text-white text-lg font-bold mb-5 uppercase tracking-wider text-xs text-med-400">Прямі контакти</h3>
                <ul class="space-y-4 font-medium">
                    <li class="flex items-start gap-3.5"><i class="fa-solid fa-location-dot text-med-500 mt-1 text-lg"></i> <span>м. Київ, вул. Центральна, 1</span></li>
                    <li class="flex items-start gap-3.5"><i class="fa-solid fa-phone text-med-500 mt-1 text-lg"></i> <a href="tel:+380670000000" class="hover:text-med-400 transition">+38 (067) 000-00-00</a></li>
                    <li class="flex items-start gap-3.5"><i class="fa-solid fa-envelope text-med-500 mt-1 text-lg"></i> <a href="mailto:doctor@urologist.kiev.ua" class="hover:text-med-400 transition">doctor@urologist.kiev.ua</a></li>
                </ul>
                <div class="mt-6">
                    <button onclick="openBookingModal()" class="w-full bg-med-800 hover:bg-med-700 text-white font-bold py-3 rounded-2xl transition border border-med-700/80 shadow-md text-sm">
                        Онлайн-запис на прийом
                    </button>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs font-medium text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>&copy; 2026 Аксьонов П.В. Усі права захищено.</span>
            <span>Преміальна хірургічна урологія та андрологія в Києві.</span>
        </div>
    </footer>

    <!-- Interactive Scripts & Motion Animations -->
    <script>
        // Header scroll behavior
        window.addEventListener('scroll', () => {
            const header = document.getElementById('mainHeader');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md', 'py-2.5');
                header.classList.remove('shadow-sm', 'py-3.5');
            } else {
                header.classList.remove('shadow-md', 'py-2.5');
                header.classList.add('shadow-sm', 'py-3.5');
            }
        });

        // Mobile Menu
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
            document.getElementById('hamburgerBtn').classList.toggle('hamburger-active');
        }

        // Modals with Motion
        function openBookingModal() {
            const modal = document.getElementById('bookingModal');
            const content = document.getElementById('bookingModalContent');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
            
            if (window.Motion && window.Motion.animate) {
                window.Motion.animate(content, 
                    { transform: ['scale(0.95) translateY(12px)', 'scale(1) translateY(0px)'], opacity: [0, 1] }, 
                    { duration: 0.28, easing: [0.23, 1, 0.32, 1] }
                );
            } else {
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }
        }

        function closeBookingModal() {
            const modal = document.getElementById('bookingModal');
            const content = document.getElementById('bookingModalContent');
            
            if (window.Motion && window.Motion.animate) {
                window.Motion.animate(content, 
                    { transform: ['scale(1)', 'scale(0.95)'], opacity: [1, 0] }, 
                    { duration: 0.2, easing: [0.23, 1, 0.32, 1] }
                ).finished.then(() => {
                    modal.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'auto';
                });
            } else {
                modal.classList.add('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                document.body.style.overflow = 'auto';
            }

            setTimeout(() => {
                document.getElementById('modalBookingForm').reset();
                document.getElementById('modalBookingForm').classList.remove('hidden');
                document.getElementById('modalSuccess').classList.add('hidden');
            }, 250);
        }

        function handleModalSubmit(e) {
            e.preventDefault();
            document.getElementById('modalBookingForm').classList.add('hidden');
            document.getElementById('modalSuccess').classList.remove('hidden');
        }
        
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeBookingModal(); });
        document.getElementById('bookingModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('bookingModal')) closeBookingModal();
        });

        // Motion Library Integration
        document.addEventListener("DOMContentLoaded", () => {
            const hasMotion = typeof window.Motion !== 'undefined';
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (!hasMotion || prefersReduced) {
                // Fallback: make all elements visible immediately
                document.querySelectorAll('.motion-initial').forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                });
                return;
            }

            const { animate, inView, stagger } = window.Motion;

            // 1. Hero items entrance
            const heroItems = document.querySelectorAll('.motion-hero-item');
            if (heroItems.length > 0) {
                animate(heroItems, 
                    { transform: ['translateY(24px)', 'translateY(0px)'], opacity: [0, 1] }, 
                    { duration: 0.6, delay: stagger(0.08), easing: [0.23, 1, 0.32, 1] }
                );
            }

            // 2. Hero doctor image
            const heroImg = document.querySelector('.motion-hero-img');
            if (heroImg) {
                animate(heroImg, 
                    { transform: ['scale(0.96) translateY(20px)', 'scale(1) translateY(0px)'], opacity: [0, 1] }, 
                    { duration: 0.8, delay: 0.15, easing: [0.23, 1, 0.32, 1] }
                );
            }

            // 3. Scroll Reveal Groups with inView & stagger
            document.querySelectorAll('[data-motion-group]').forEach(group => {
                inView(group, () => {
                    const items = group.querySelectorAll('[data-motion-item]');
                    if (items.length > 0) {
                        animate(items, 
                            { transform: ['translateY(24px)', 'translateY(0px)'], opacity: [0, 1] }, 
                            { duration: 0.55, delay: stagger(0.09), easing: [0.23, 1, 0.32, 1] }
                        );
                    }
                }, { margin: "0px 0px -50px 0px" });
            });

            // 4. Standalone single reveal items
            document.querySelectorAll('[data-motion-single]').forEach(item => {
                inView(item, () => {
                    animate(item, 
                        { transform: ['translateY(20px)', 'translateY(0px)'], opacity: [0, 1] }, 
                        { duration: 0.5, easing: [0.23, 1, 0.32, 1] }
                    );
                }, { margin: "0px 0px -40px 0px" });
            });

            // Failsafe timeout to prevent hidden elements
            setTimeout(() => {
                document.querySelectorAll('.motion-initial').forEach(el => {
                    if (window.getComputedStyle(el).opacity === '0') {
                        el.style.opacity = '1';
                        el.style.transform = 'none';
                        el.style.transition = 'opacity 0.4s ease';
                    }
                });
            }, 1200);
        });
    </script>
</body>
</html>
`;

// INDEX PAGE
const index = head('Головна') + header('home') + `
    <!-- HERO -->
    <section class="bg-white pt-24 pb-16 overflow-hidden border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div class="lg:col-span-7 md:pr-10 z-20">
                <!-- Clean editorial tag -->
                <div class="motion-hero-item motion-initial mb-6">
                    <span class="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] border-l-2 border-med-600 pl-4 py-0.5">
                        Приватна хірургічна практика
                    </span>
                </div>
                
                <h1 class="motion-hero-item motion-initial text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-slate-900 leading-[1] tracking-tighter mb-8">
                    Експертна<br>урологія та<br>андрологія
                </h1>
                
                <p class="motion-hero-item motion-initial text-lg md:text-xl text-slate-600 font-medium mb-12 max-w-xl leading-relaxed">
                    Доказова медицина, європейські протоколи <strong class="text-slate-900 font-extrabold">EAU</strong> та мікрохірургічний підхід для швидкого і безболісного відновлення.
                </p>
                
                <div class="motion-hero-item motion-initial flex flex-col sm:flex-row gap-5 mt-6">
                    <!-- Button 1 (Blue gradient pill, larger) -->
                    <button onclick="openBookingModal()" class="btn-primary px-12 py-5 md:py-6 text-[13px] md:text-sm uppercase tracking-[0.15em] font-extrabold shadow-xl shadow-med-500/30 flex items-center justify-center gap-3 w-full sm:w-auto">
                        <span>Записатися на прийом</span>
                        <i class="fa-solid fa-arrow-right text-[11px]"></i>
                    </button>
                    <!-- Button 2 (Blue gradient pill, larger) -->
                    <a href="operations.html" class="btn-primary px-12 py-5 md:py-6 text-[13px] md:text-sm uppercase tracking-[0.15em] font-extrabold shadow-xl shadow-med-500/30 flex items-center justify-center gap-3 w-full sm:w-auto">
                        <span>Всі послуги</span>
                        <i class="fa-solid fa-arrow-right text-[11px]"></i>
                    </a>
                </div>
            </div>
            
            <div class="lg:col-span-5 relative mt-16 lg:mt-0 h-[480px] md:h-[580px] flex items-center justify-center group">
                <!-- Background texture -->
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] transform translate-x-12 translate-y-12 -z-10 w-full h-full opacity-60"></div>
                
                <!-- Photo 1 (Bottom Left, offset to reduce overlap) -->
                <div class="absolute bottom-0 -left-2 md:-left-8 w-[62%] aspect-[4/5] z-20 shadow-2xl transform group-hover:-translate-y-4 group-hover:-translate-x-6 transition-all duration-700 ease-out border-8 border-white bg-white">
                    <div class="relative overflow-hidden group/img w-full h-full">
                        <div class="absolute inset-0 bg-med-900/10 group-hover/img:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src="Photo/aksonov.jpg" alt="Лікар в роботі" class="w-full h-full object-cover grayscale-[30%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700">
                    </div>
                </div>
                
                <!-- Photo 2 (Top Right, offset to reduce overlap) -->
                <div class="absolute top-0 -right-2 md:-right-8 w-[62%] aspect-[4/5] z-10 shadow-xl transform group-hover:translate-y-2 group-hover:translate-x-6 transition-all duration-700 ease-out border-8 border-white bg-slate-50">
                    <div class="relative overflow-hidden group/img2 w-full h-full">
                        <img src="Photo/aksenov-pavel-valerijevich.jpg" alt="Аксьонов Павло Валерійович" class="w-full h-full object-cover object-top group-hover/img2:scale-105 transition-all duration-700">
                    </div>
                </div>
                
                <!-- Center decorative element (appears on hover) -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-xl pointer-events-none transform scale-75 group-hover:scale-100">
                    <i class="fa-solid fa-user-doctor text-med-600 text-xl"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- STATS SECTION (Integrated seamlessly as a grid, no big dark floating widgets) -->
    <section class="bg-slate-50 py-16 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center md:text-left" data-motion-group>
                <div data-motion-item class="motion-initial py-6 md:py-0 md:pr-12">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Хірургічний досвід</div>
                    <div class="text-4xl md:text-5xl font-extrabold text-slate-900">15+ <span class="text-xl font-bold text-slate-400 ml-1">років</span></div>
                </div>
                <div data-motion-item class="motion-initial py-6 md:py-0 md:px-12">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Практика</div>
                    <div class="text-4xl md:text-5xl font-extrabold text-slate-900">3000+ <span class="text-xl font-bold text-slate-400 ml-1">операцій</span></div>
                </div>
                <div data-motion-item class="motion-initial py-6 md:py-0 md:pl-12">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Стандарти</div>
                    <div class="text-4xl md:text-5xl font-extrabold text-slate-900">EAU <span class="text-xl font-bold text-slate-400 ml-1">протоколи</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SNIPPET -->
    <section class="py-16 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 text-center max-w-4xl" data-motion-single>
            <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Компетенція</span>
            <h2 class="text-3xl md:text-4xl font-bold text-med-900 mb-8">Про спеціаліста</h2>
            <p class="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
            </p>
            <p class="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                Етіологія (причина), клініка (прояв), профілактика та лікування захворювань цих систем становлять предмет урології як клінічної спеціальності.
            </p>
            <a href="about.html" class="inline-flex items-center gap-2 text-med-600 font-bold hover:text-med-800 transition text-lg group">
                <span>Читати повну біографію</span>
                <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </section>

    <!-- SERVICES -->
    <section class="py-24 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-motion-single>
                <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Спеціалізація</span>
                <h2 class="text-3xl md:text-4xl font-bold text-med-900 mb-4">Основні напрямки лікування</h2>
                <p class="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Консервативне та оперативне лікування за сучасними європейськими протоколами.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-motion-group>
                <!-- Card 1 -->
                <div data-motion-item class="motion-initial bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6 shadow-sm">
                        <i class="fa-solid fa-mars"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-4">Андрологія</h3>
                    <p class="text-slate-600 font-medium mb-8 leading-relaxed text-sm">Варикоцеле (операція Мармара), водянка яєчка, фімоз, коротка вуздечка, протезування.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm text-sm">Детальніше</a>
                </div>
                <!-- Card 2 -->
                <div data-motion-item class="motion-initial bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6 shadow-sm">
                        <i class="fa-solid fa-droplet"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-4">Урологія</h3>
                    <p class="text-slate-600 font-medium mb-8 leading-relaxed text-sm">Сечокам'яна хвороба (МКБ), аденома простати, кісти нирок, пієлонефрит, цистит.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm text-sm">Детальніше</a>
                </div>
                <!-- Card 3 -->
                <div data-motion-item class="motion-initial bg-white p-8 rounded-4xl card-shadow border border-slate-100 text-center">
                    <div class="w-20 h-20 mx-auto bg-med-50 rounded-full flex items-center justify-center text-med-500 text-3xl mb-6 shadow-sm">
                        <i class="fa-solid fa-virus"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-4">Лікування Інфекцій</h3>
                    <p class="text-slate-600 font-medium mb-8 leading-relaxed text-sm">Діагностика та терапія ЗПСШ, видалення кондилом (папіломавірус), простатит.</p>
                    <a href="operations.html" class="inline-block bg-med-50 text-med-600 font-bold px-8 py-3 rounded-full hover:bg-med-500 hover:text-white transition shadow-sm text-sm">Детальніше</a>
                </div>
            </div>
            
            <div class="text-center mt-16" data-motion-single>
                <a href="operations.html" class="btn-primary px-10 py-4 text-base inline-flex items-center gap-3">
                    <span>Переглянути всі послуги</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-motion-single>
                <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Переваги</span>
                <h2 class="text-3xl md:text-4xl font-bold text-med-900 mb-4">Чому обирають нашу клініку</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-motion-group>
                <div data-motion-item class="motion-initial bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-med-200 transition">
                    <div class="w-14 h-14 bg-white rounded-2xl text-med-600 flex items-center justify-center text-2xl mb-6 shadow-sm"><i class="fa-solid fa-book-medical"></i></div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">Європейські протоколи</h3>
                    <p class="text-slate-600 font-medium">Лікування виключно за доказовими стандартами Європейської асоціації урологів (EAU) без зайвих призначень.</p>
                </div>
                <div data-motion-item class="motion-initial bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-med-200 transition">
                    <div class="w-14 h-14 bg-white rounded-2xl text-med-600 flex items-center justify-center text-2xl mb-6 shadow-sm"><i class="fa-solid fa-bed-pulse"></i></div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">Хірургія одного дня</h3>
                    <p class="text-slate-600 font-medium">Малоінвазивні методики дозволяють виписувати пацієнта додому в день операції у 90% випадків.</p>
                </div>
                <div data-motion-item class="motion-initial bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-med-200 transition">
                    <div class="w-14 h-14 bg-white rounded-2xl text-med-600 flex items-center justify-center text-2xl mb-6 shadow-sm"><i class="fa-solid fa-user-secret"></i></div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">Повна конфіденційність</h3>
                    <p class="text-slate-600 font-medium">Гарантуємо анонімність, комфортні умови перебування в преміум-стаціонарі та індивідуальний підхід.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-24 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-motion-single>
                <span class="text-med-500 font-bold tracking-widest uppercase text-sm mb-2 block">Відгуки</span>
                <h2 class="text-3xl md:text-4xl font-bold text-med-900 mb-4">Що кажуть пацієнти</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-motion-group>
                <div data-motion-item class="motion-initial bg-white p-8 rounded-3xl card-shadow border border-slate-100">
                    <div class="flex gap-1 text-sky-500 text-sm mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-slate-600 font-medium mb-6 italic">"Робив операцію Мармара. Все пройшло швидко і без болю, як і обіцяли. В той же день поїхав додому. Дуже вдячний Павлу Валерійовичу за професіоналізм!"</p>
                    <div class="font-bold text-slate-800">Олексій М.</div>
                    <div class="text-xs text-slate-400">Пацієнт клініки</div>
                </div>
                <div data-motion-item class="motion-initial bg-white p-8 rounded-3xl card-shadow border border-slate-100">
                    <div class="flex gap-1 text-sky-500 text-sm mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-slate-600 font-medium mb-6 italic">"Звертався з делікатною проблемою. Лікар дуже тактовний, все пояснив людською мовою, призначив тільки необхідні аналізи. Результатом лікування задоволений повністю."</p>
                    <div class="font-bold text-slate-800">Сергій В.</div>
                    <div class="text-xs text-slate-400">Пацієнт клініки</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FORM SECTION -->
    <section class="py-24 bg-med-900 relative overflow-hidden" id="appointment">
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-med-600 rounded-full blur-3xl opacity-40"></div>
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center relative z-10" data-motion-group>
            <div data-motion-item class="motion-initial md:w-1/2 text-white">
                <span class="text-med-300 font-bold tracking-widest uppercase text-sm mb-2 block">Запис на прийом</span>
                <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Потрібна консультація фахівця?</h2>
                <p class="text-lg text-med-100 font-medium mb-10 leading-relaxed">Заповніть форму, і адміністратор клініки передзвонить вам для узгодження зручного часу візиту. Гарантуємо повну конфіденційність.</p>
                
                <div class="flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <div class="w-14 h-14 bg-white text-med-600 rounded-full flex items-center justify-center text-2xl shadow-lg shrink-0"><i class="fa-solid fa-phone"></i></div>
                    <div>
                        <div class="text-med-200 font-semibold text-sm mb-1">Або телефонуйте прямо зараз:</div>
                        <div class="text-2xl font-bold tracking-wide">+38 (067) 000-00-00</div>
                    </div>
                </div>
            </div>
            <div data-motion-item class="motion-initial md:w-1/2 w-full">
                <form onsubmit="handleInlineSubmit(event)" class="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-med-100">
                    <h3 class="text-2xl font-bold text-slate-800 mb-8 text-center">Швидкий запис</h3>
                    <div id="inlineFormFields" class="space-y-5">
                        <div>
                            <label class="block text-sm font-bold text-slate-600 mb-2 ml-1">Ваше ім'я</label>
                            <input type="text" required placeholder="Олександр" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-600 mb-2 ml-1">Контактний телефон</label>
                            <input type="tel" required placeholder="+38 (000) 000-00-00" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition shadow-inner">
                        </div>
                        <button type="submit" class="w-full btn-primary py-4 text-lg mt-4">Відправити заявку</button>
                        <p class="text-center text-xs font-medium text-slate-400 mt-4">Натискаючи кнопку, ви погоджуєтесь на обробку даних.</p>
                    </div>
                    <div id="inlineFormSuccess" class="hidden text-center py-6">
                        <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <h4 class="text-xl font-bold text-slate-800 mb-1">Заявку прийнято!</h4>
                        <p class="text-slate-500 font-medium text-sm">Ми зателефонуємо вам найближчим часом.</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script>
        function handleInlineSubmit(e) {
            e.preventDefault();
            document.getElementById('inlineFormFields').classList.add('hidden');
            document.getElementById('inlineFormSuccess').classList.remove('hidden');
        }
    </script>
` + footer;

// ABOUT PAGE
const about = head('Про лікаря') + header('about') + `
    <section class="hero-bg py-20 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4 text-center" data-motion-single>
            <span class="bg-white/80 inline-block px-4 py-1.5 rounded-full text-med-600 font-bold text-sm mb-4 shadow-sm border border-white">Біографія</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-med-900 mb-6">Аксьонов Павло Валерійович</h1>
            <p class="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Лікар-уролог, андролог, хірург вищої категорії</p>
        </div>
    </section>

    <section class="py-20 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start" data-motion-group>
            <div data-motion-item class="motion-initial md:w-1/3 relative">
                <div class="absolute inset-0 bg-med-200 rounded-full blur-3xl opacity-50 transform -translate-x-10 translate-y-10"></div>
                <img src="Photo/aksenov-pavel-valerijevich.jpg" class="relative z-10 w-full rounded-[3rem] shadow-2xl border-8 border-white">
            </div>
            <div data-motion-item class="motion-initial md:w-2/3">
                <div class="prose prose-lg text-slate-600 font-medium leading-relaxed max-w-none">
                    <h3 class="text-2xl font-bold text-med-900 mb-4">Професійний підхід</h3>
                    <p class="mb-6 text-lg">
                        Поширена думка, що доктор уролог – це чоловічий лікар. Якоюсь мірою це так, адже урологи діагностують і лікують статеві дисфункції, запалення простати, чоловіче безпліддя. Але уролог і жіночий лікар також: сечокам'яна хвороба, цистити, пієлонефрити – ці захворювання безстатеві.
                    </p>
                    
                    <div class="bg-med-50 p-8 rounded-3xl border border-med-100 my-8 shadow-inner">
                        <p class="italic text-med-900 font-bold m-0">
                            "Моя головна мета — надати пацієнтам сучасну, безболісну та ефективну медичну допомогу. Я практикую органозберігаючу хірургію та малоінвазивні методики, що дозволяють скоротити період реабілітації до мінімуму."
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8 mt-12">
                        <div>
                            <h4 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-graduation-cap text-med-500"></i> Освіта та сертифікація</h4>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Національний медичний університет ім. О.О. Богомольця (Лікувальна справа)</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Інтернатура за спеціальністю «Урологія»</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Спеціалізація «Ультразвукова діагностика»</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Вища кваліфікаційна категорія</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-award text-med-500"></i> Асоціації та досвід</h4>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Дійсний член Європейської асоціації урологів (EAU)</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Член асоціації урологів України</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> 15+ років безперервної хірургічної практики</li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-check text-med-500 mt-1"></i> Регулярна участь у міжнародних конгресах</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
` + footer;

// OPERATIONS PAGE (Categorized)
const andrology = [
    { title: "Варикоцеле (Операція Мармара)", icon: "fa-scissors" },
    { title: "Гідроцеле (Водянка яєчка)", icon: "fa-droplet" },
    { title: "Фімоз (Обрізання, Циркумцизіо)", icon: "fa-user-nurse" },
    { title: "Коротка вуздечка (Френулопластика)", icon: "fa-syringe" },
    { title: "Атероми мошонки", icon: "fa-disease" },
    { title: "Орхіт", icon: "fa-virus" },
    { title: "Епідидиміт", icon: "fa-hospital-user" },
    { title: "Кіста придатка яєчка", icon: "fa-circle-notch" },
    { title: "Баланіт та Баланопостит", icon: "fa-crutch" }
];
const urology = [
    { title: "Аденома простати (Гіперплазія)", icon: "fa-person" },
    { title: "Сечокам'яна хвороба (МКБ)", icon: "fa-gem" },
    { title: "Кіста нирки", icon: "fa-circle-dot" },
    { title: "Полікістоз нирок", icon: "fa-cubes" },
    { title: "Гідронефроз", icon: "fa-water" },
    { title: "Пієлонефрит", icon: "fa-temperature-high" },
    { title: "Цистит", icon: "fa-bed-pulse" },
    { title: "Гіперактивний сечовий міхур", icon: "fa-bolt" },
    { title: "Нетримання сечі у чоловіків", icon: "fa-mars" },
    { title: "Нетримання сечі у жінок", icon: "fa-venus" },
    { title: "Стриктура уретри", icon: "fa-wave-square" }
];
const infections = [
    { title: "Простатит", icon: "fa-shield-virus" },
    { title: "Уретрит", icon: "fa-bacterium" },
    { title: "Везикуліт", icon: "fa-briefcase-medical" },
    { title: "Гранули Фордайса", icon: "fa-microscope" },
    { title: "ЗПСШ (Хламідіоз тощо)", icon: "fa-vial-virus" }
];

const renderCards = (arr) => {
    return arr.map((op, i) => {
        return `
        <a href="single-operation.html" data-motion-item class="motion-initial bg-white p-6 rounded-3xl card-shadow border border-slate-100 hover:border-med-300 flex items-center gap-5 group transition-all duration-300">
            <div class="w-14 h-14 bg-med-50 text-med-600 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:bg-med-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <i class="fa-solid ${op.icon}"></i>
            </div>
            <div class="font-bold text-slate-800 group-hover:text-med-600 transition text-lg leading-snug">${op.title}</div>
        </a>`
    }).join('');
};

const operations = head('Послуги та ціни') + header('ops') + `
    <section class="hero-bg py-20 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-4 text-center" data-motion-single>
            <span class="bg-white/80 inline-block px-4 py-1.5 rounded-full text-med-600 font-bold text-sm mb-4 shadow-sm border border-white">Каталог</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-med-900 mb-6">Послуги та захворювання</h1>
            <p class="text-xl text-slate-600 font-bold max-w-2xl mx-auto">Повний реєстр хірургічних втручань та діагностичних послуг згідно з європейськими стандартами.</p>
        </div>
    </section>

    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
            
            <!-- Category 1 -->
            <div class="mb-16">
                <h2 class="text-2xl font-bold text-med-900 mb-6 flex items-center gap-3" data-motion-single>
                    <span class="w-10 h-10 bg-med-100 text-med-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-mars"></i></span>
                    Андрологія та мікрохірургія
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-motion-group>
                    ${renderCards(andrology)}
                </div>
            </div>

            <!-- Category 2 -->
            <div class="mb-16">
                <h2 class="text-2xl font-bold text-med-900 mb-6 flex items-center gap-3" data-motion-single>
                    <span class="w-10 h-10 bg-med-100 text-med-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-droplet"></i></span>
                    Урологічні захворювання
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-motion-group>
                    ${renderCards(urology)}
                </div>
            </div>

            <!-- Category 3 -->
            <div class="mb-10">
                <h2 class="text-2xl font-bold text-med-900 mb-6 flex items-center gap-3" data-motion-single>
                    <span class="w-10 h-10 bg-med-100 text-med-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-virus"></i></span>
                    Інфекції та запалення
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-motion-group>
                    ${renderCards(infections)}
                </div>
            </div>

        </div>
    </section>
` + footer;

// SINGLE OPERATION TEMPLATE
const singleOp = head('Операція Мармара') + header('ops') + `
    <!-- Header with breadcrumbs -->
    <div class="bg-slate-50 py-4 border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 text-sm font-bold text-slate-500 flex items-center gap-2">
            <a href="index.html" class="hover:text-med-600 transition">Головна</a>
            <i class="fa-solid fa-chevron-right text-xs"></i>
            <a href="operations.html" class="hover:text-med-600 transition">Послуги</a>
            <i class="fa-solid fa-chevron-right text-xs"></i>
            <span class="text-slate-800">Операція Мармара</span>
        </div>
    </div>

    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12" data-motion-group>
            
            <!-- Main Content -->
            <div class="lg:w-2/3 motion-initial" data-motion-item>
                <div class="w-16 h-16 bg-med-50 text-med-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                    <i class="fa-solid fa-scissors"></i>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Мікрохірургічна операція Мармара при варикоцеле</h1>
                
                <div class="prose prose-lg text-slate-600 font-medium max-w-none">
                    <p class="text-xl text-slate-700 font-bold mb-8">Золотий стандарт лікування варикоцеле за міжнародними рекомендаціями Європейської Асоціації Урологів (EAU).</p>
                    
                    <h3 class="text-2xl font-bold text-slate-800 mt-10 mb-4">Що таке варикоцеле?</h3>
                    <p>Це розширення вен сім'яного канатика, що призводить до порушення кровопостачання яєчка, підвищення його температури та, як наслідок, зниження якості сперми і розвитку безпліддя. Захворювання часто протікає безсимптомно на ранніх стадіях.</p>

                    <h3 class="text-2xl font-bold text-slate-800 mt-10 mb-4">Чому метод Мармара?</h3>
                    <ul class="space-y-3 my-6 list-none p-0">
                        <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-med-500 mt-1.5"></i> <span><strong>Мінімальний розріз:</strong> Доступ здійснюється через мікророзріз (до 2 см) в області зовнішнього пахвинного кільця.</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-med-500 mt-1.5"></i> <span><strong>Висока ефективність:</strong> Найменший відсоток рецидивів (менше 1%) порівняно з іншими методами.</span></li>
                        <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-med-500 mt-1.5"></i> <span><strong>Швидка реабілітація:</strong> Операція проводиться в режимі "хірургії одного дня".</span></li>
                    </ul>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:w-1/3 motion-initial" data-motion-item>
                <div class="bg-slate-50 p-8 rounded-4xl border border-slate-100 sticky top-32 shadow-sm">
                    <h3 class="text-2xl font-bold text-slate-800 mb-2">Запис на процедуру</h3>
                    <p class="text-slate-500 font-medium mb-6 text-sm">Залиште контакти, ми передзвонимо для уточнення деталей.</p>
                    
                    <form onsubmit="handleInlineSubmit(event)" class="space-y-4">
                        <div id="sidebarFormFields" class="space-y-4">
                            <input type="text" required placeholder="Ваше ім'я" class="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-2 focus:ring-med-100 transition shadow-sm">
                            <input type="tel" required placeholder="Телефон" class="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none focus:border-med-500 focus:ring-2 focus:ring-med-100 transition shadow-sm">
                            <button type="submit" class="w-full btn-primary py-4 text-base">Записатися</button>
                        </div>
                        <div id="sidebarFormSuccess" class="hidden text-center py-4">
                            <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-check"></i></div>
                            <h4 class="font-bold text-slate-800">Заявку прийнято!</h4>
                        </div>
                    </form>
                    
                    <div class="mt-8 pt-8 border-t border-slate-200">
                        <div class="flex items-center gap-4 mb-4">
                            <img src="Photo/aksonov.jpg" class="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white">
                            <div>
                                <div class="font-bold text-slate-800 text-sm">Аксьонов П.В.</div>
                                <div class="text-xs font-bold text-med-600">Хірург-уролог</div>
                            </div>
                        </div>
                        <p class="text-xs text-slate-500 font-medium italic">"Використовую мікрохірургічну техніку з оптичним збільшенням для максимальної точності та безпеки."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        function handleInlineSubmit(e) {
            e.preventDefault();
            document.getElementById('sidebarFormFields').classList.add('hidden');
            document.getElementById('sidebarFormSuccess').classList.remove('hidden');
        }
    </script>
` + footer;

// RESTORED: THE ORIGINAL CONTACTS PAGE AS EXPLICITLY REQUESTED
const contacts = head('Контакти') + header('contact') + `
    <section class="hero-bg py-24 border-b border-med-100">
        <div class="max-w-7xl mx-auto px-6 text-center" data-motion-group>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 motion-initial" data-motion-item>Запис на прийом</h1>
            <p class="text-lg md:text-xl text-slate-500 font-bold max-w-2xl mx-auto motion-initial" data-motion-item>Оберіть зручний для вас спосіб зв'язку або залиште заявку онлайн.</p>
        </div>
    </section>

    <section class="py-24 bg-slate-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10" data-motion-group>
            
            <!-- Left: Contact Info & Map (Animated) -->
            <div class="space-y-10 flex flex-col h-full motion-initial" data-motion-item>
                <div>
                    <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Наші координати</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div class="flex items-start gap-4 group">
                            <div class="w-12 h-12 rounded-2xl bg-white text-med-600 flex items-center justify-center shrink-0 border border-slate-200 text-lg shadow-sm group-hover:bg-med-600 group-hover:text-white group-hover:border-med-600 transition-all duration-300"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Клініка</div>
                                <div class="text-[13px] font-extrabold text-slate-800 leading-tight">м. Київ<br>вул. Центральна, 1</div>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4 group">
                            <div class="w-12 h-12 rounded-2xl bg-white text-med-600 flex items-center justify-center shrink-0 border border-slate-200 text-lg shadow-sm group-hover:bg-med-600 group-hover:text-white group-hover:border-med-600 transition-all duration-300"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Телефон</div>
                                <a href="tel:+380670000000" class="text-[13px] font-extrabold text-slate-800 hover:text-med-600 transition block">+38 (067) 000-00-00</a>
                                <div class="flex gap-3 mt-1.5">
                                    <a href="https://t.me/" class="text-[10px] font-bold text-sky-500 hover:text-sky-600 transition uppercase tracking-wider"><i class="fa-brands fa-telegram text-[11px] mr-1"></i>Telegram</a>
                                    <a href="viber://chat?number=%2B380670000000" class="text-[10px] font-bold text-purple-500 hover:text-purple-600 transition uppercase tracking-wider"><i class="fa-brands fa-viber text-[11px] mr-1"></i>Viber</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4 group">
                            <div class="w-12 h-12 rounded-2xl bg-white text-med-600 flex items-center justify-center shrink-0 border border-slate-200 text-lg shadow-sm group-hover:bg-med-600 group-hover:text-white group-hover:border-med-600 transition-all duration-300"><i class="fa-solid fa-clock"></i></div>
                            <div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Графік роботи</div>
                                <div class="text-[13px] font-extrabold text-slate-800">Пн-Пт: 09:00 - 19:00</div>
                                <div class="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Сб-Нд: За записом</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Map embedded -->
                <div class="flex-grow mt-4 rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 bg-slate-200 relative min-h-[300px] lg:min-h-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162705.51478148386!2d30.38023773199859!3d50.40208152205562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1714488310000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; position:absolute; top:0; left:0; width:100%; height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
            <!-- Right: Premium Booking Form (Animated) -->
            <div class="motion-initial" data-motion-item>
                <div class="bg-white p-8 md:p-12 rounded-[2.5rem] card-shadow border border-slate-100 relative overflow-hidden h-full flex flex-col justify-center">
                    
                    <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 relative tracking-tight">Онлайн-запис</h3>
                    <p class="text-slate-500 font-bold mb-10 relative text-sm">Залиште свої контактні дані, і адміністратор клініки зателефонує вам найближчим часом.</p>
                    
                    <form class="space-y-6 relative" onsubmit="event.preventDefault(); alert('Дякуємо! Ваша заявка відправлена і знаходиться в обробці.');">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2.5">Ваше ім'я</label>
                            <input type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-500/10 transition-all placeholder:text-slate-300 text-sm" placeholder="Наприклад, Олександр">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2.5">Номер телефону</label>
                            <input type="tel" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-500/10 transition-all placeholder:text-slate-300 text-sm" placeholder="+38 (000) 000-00-00">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2.5">Короткий опис (необов'язково)</label>
                            <textarea rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 font-bold focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-500/10 transition-all placeholder:text-slate-300 resize-none text-sm" placeholder="Що вас турбує?"></textarea>
                        </div>
                        
                        <div class="pt-4">
                            <button type="submit" class="w-full btn-primary py-4 text-[12px] uppercase tracking-[0.15em] font-bold shadow-xl shadow-med-500/30 flex items-center justify-center gap-3">
                                <span>Надіслати заявку</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                        <p class="text-[9px] text-center text-slate-400 font-semibold mt-6 uppercase tracking-widest leading-relaxed">
                            Натискаючи кнопку, ви даєте згоду<br>на обробку персональних даних.
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
    </section>
` + footer;

// Write all files
fs.writeFileSync('index.html', index);
fs.writeFileSync('operations.html', operations);
fs.writeFileSync('single-operation.html', singleOp);
fs.writeFileSync('about.html', about);
fs.writeFileSync('contacts.html', contacts);

console.log('Site successfully generated with minimalist interactive branding, restored blue buttons, restored original contacts page, and Motion library animations.');
