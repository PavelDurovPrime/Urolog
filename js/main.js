document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Operations Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const opCards = document.querySelectorAll('.op-item-card');

  if (filterBtns.length > 0 && opCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        opCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. Sensitive 18+ Spoiler Toggle
  window.toggleSensitiveSpoiler = function(button) {
    const parent = button.closest('.sensitive-spoiler-panel');
    const body = parent.querySelector('.sensitive-body');
    if (body.classList.contains('active')) {
      body.classList.remove('active');
      button.innerText = 'Показати клінічні матеріали (18+)';
    } else {
      body.classList.add('active');
      button.innerText = 'Приховати матеріали';
    }
  };

  // 3. Consultation Booking submission dummy feedback
  const bookForm = document.getElementById('consultationForm');
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = bookForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = 'Заявку прийнято. Лікар зв’яжеться з вами';
      btn.style.background = '#0E747B';
      setTimeout(() => {
        bookForm.reset();
        btn.innerText = originalText;
        btn.style.background = '';
      }, 4000);
    });
  }
});
