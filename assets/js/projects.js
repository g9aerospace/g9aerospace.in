document.addEventListener('DOMContentLoaded', function () {
    // GitHub API endpoint for my repositories
    var githubApiUrl = 'https://api.github.com/users/g9militantsYT/repos';

    // Fetch all repositories
    $.get(githubApiUrl, function (data) {
        // Create and populate the project cards
        var cardContainer = document.getElementById('projects');
        cardContainer.innerHTML = ''; // Clear previous content

        for (var i = 0; i < data.length; i++) {
            var repo = data[i];

            // Create a project card
            var card = document.createElement('div');
            card.className = 'project-card';

            // Populate the card content
            var cardContent = '<div class="card-content">';
            cardContent += '<h3>' + (repo.name || '') + '</h3>';
            cardContent += '<p>' + (repo.description || '') + '</p>';
            cardContent += '<p>Stars: ' + (repo.stargazers_count !== null && repo.stargazers_count !== undefined ? repo.stargazers_count : '0') + '</p>';
            cardContent += '<a class="repo-link" href="' + (repo.html_url || '') + '" target="_blank">View Repository</a>';
            cardContent += '</div>';
            card.innerHTML = cardContent;

            // Append the card to the container
            cardContainer.appendChild(card);
        }
    });
});
