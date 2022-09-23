// grab elements
const hamburgerBtn = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('opacity-40');
    mobileNav.classList.toggle('flex');
    mobileNav.classList.toggle('hidden');
});