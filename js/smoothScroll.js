window.addEventListener('DOMContentLoaded', function() {
   const linksHead = document.querySelectorAll('.menu-list__link');
   const mainScroll = document.querySelector('.main__scroll');
   const newArray = [...linksHead, mainScroll];
   newArray.forEach(link => {
      link.addEventListener('click', (event) => {
         event.preventDefault();
         const iD =event.target.getAttribute('href').substr(1);
         document.getElementById(iD).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   });  
});