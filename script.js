// script.js — мінімальна взаємодія
document.addEventListener('DOMContentLoaded', function(){
  // Newsletter form handling (mock)
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-message');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if(!email){
        msg.textContent = 'Будь ласка, введіть коректний email.';
        return;
      }
      // Мок-відправка — тут можна підключити API
      msg.textContent = 'Дякуємо! Перевірте вашу пошту для підтвердження.';
      form.reset();
    });
  }

  // Simple mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav__list');
  if(navToggle && navList){
    navToggle.addEventListener('click', function(){
      const shown = navList.style.display === 'flex';
      navList.style.display = shown ? 'none' : 'flex';
    });
  }
});
