document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const currentActive = document.querySelector('.accordion-item.active');
            if (currentActive && currentActive !== header.parentNode) {
                currentActive.classList.remove('active');
            }
            header.parentNode.classList.toggle('active');
        });
    });
});
