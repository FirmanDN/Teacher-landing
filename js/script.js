const element = document.getElementById('-navbar')
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
   element.classList.add('navbar-dark')
 } else {
   element.classList.remove('navbar-dark')
 }

darkThemeMq.addEventListener("change", e => {
   if (e.matches) {
      element.classList.add('navbar-dark')
   } else {
      if(element.classList.contains('navbar-dark')){
         element.classList.remove('navbar-dark')
      }
    }
  });

