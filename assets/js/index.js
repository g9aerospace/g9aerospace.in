fetch('assets/creations.json')
    .then(response => response.json())
    .then(data => {
        const creationsGrid = document.getElementById('creations-grid');
        data.forEach(item => {
            // Create HTML elements for each item
            const creationItem = document.createElement('div');
            creationItem.classList.add('portfolio-item');

            const creationButton = document.createElement('button');
            creationButton.textContent = item.name;
            creationButton.addEventListener('click', () => {
                window.location.href = item.link;
            });

            // Append elements to the creation item
            creationItem.appendChild(creationButton);

            // Append creation item to the creations grid
            creationsGrid.appendChild(creationItem);
        });
    })
    .catch(error => console.error('Error fetching creations:', error));
