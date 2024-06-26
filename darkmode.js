document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('nav a');

    // Laad opgeslagen modus van localStorage
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        navLinks.forEach(link => link.classList.add('dark-mode'));
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        navLinks.forEach(link => link.classList.toggle('dark-mode'));
        // Sla de huidige modus op in localStorage
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });
});
