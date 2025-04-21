// Select all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Select all items
const items = document.querySelectorAll('.item');

// Add event listeners to buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category'); // Get the category from the button
        
        items.forEach(item => {
            if (category === 'all') {
                // Show all items if "All" is clicked
                item.style.display = 'block';
            } else {
                // Show items matching the selected category, hide others
                if (item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});