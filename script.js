document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos e coloca no clicado
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter').toLowerCase().trim();

            cards.forEach(card => {
                const category = card.getAttribute('data-category').toLowerCase().trim();

                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});