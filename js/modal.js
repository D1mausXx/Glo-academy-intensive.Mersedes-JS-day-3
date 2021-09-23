window.addEventListener('DOMContentLoaded', function() {
   const modalBtn = document.querySelector('.more');
   const modal = document.querySelector('.modal');

   modalBtn.addEventListener('click', () => {
      modal.classList.toggle('hidden');
   });

   modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
         modal.classList.toggle('hidden');
      }
   });
});