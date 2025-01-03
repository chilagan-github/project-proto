document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        dropdown.classList.toggle('active'); 
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
        }
    });
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2600,
	delay: 150,
	reset: true
});

sr.reveal('.card1',{delay:100, origin:'top'})
