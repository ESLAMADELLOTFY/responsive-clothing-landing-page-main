/*=============== CHANGE BACKGROUND HEADER ===============*/
window.onscroll=()=>
{
    const nav=document.getElementById('header');
    if (window.scrollY >= 50) 
    {
        nav.classList.add('scroll-header')
    }
    else
    {
        nav.classList.remove('scroll-header')
    }
}
/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      }
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll' , scrollActive)
function scrollActive()
{
    const scrolly=window.scrollY;
    sections.forEach(current=>
        {
            const sectionheight=current.offsetHeight;
            const sectiontop=current.offsetTop - 50;
            const sectionId=current.getAttribute('id')
            const currentSection=document.querySelector('.nav__menu a[href*='+ sectionId +']');

            if(scrolly > sectiontop && scrolly <= sectiontop + sectionheight)
            {
                currentSection.classList.add('active-link');
            }
            else
            {
                currentSection.classList.remove('active-link');
            }
        })
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =()=>
{
    const scroll_button=document.getElementById('scroll-up');
    if(window.scrollY >= 350)
    {
        scroll_button.classList.add('show-scroll')
    }
    else
    {
        scroll_button.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll' , scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const theme_button = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon=localStorage.getItem('selected-icon');
// we obtain the current theme that the interface has by the validating the dark theme class
const getCurrenntTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const grtCurrentIcon=()=>theme_button.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if(selectedTheme)
{
    // if the validation is fulfilled , me ask what the issue was to know if we activated
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    theme_button.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
// Activate or Deactivate the theme manually with my button
theme_button.addEventListener('click' , ()=>
{
    // add or remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    theme_button.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme' , getCurrenntTheme())
    localStorage.setItem('selected-icon' , grtCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const src=ScrollReveal(
    {
        origin : 'top',
        distance:'60px',
        duration:2500,
        delay:400,
        rest:true,
    }
)
src.reveal(`.home__data,.products__container ,.footer__container`);
src.reveal(`.home__images`,{delay:600, origin:'bottom'});
src.reveal(`.new__card , .brand__img`,{interval:100});
src.reveal(`.collection__explore:nth-child(1)`,{origin:'right'});
src.reveal(`.collection__explore:nth-child(2)`,{origin:'left'});