// grab elements
const hamburgerBtn = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('opacity-40');
    hamburgerBtn.classList.toggle('opacity-100');

    mobileNav.classList.toggle('flex');
    mobileNav.classList.toggle('hidden');
});