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
            cardContent += '<h3><a class="repo-title" href="' + (repo.html_url || '') + '" target="_blank">' + (repo.name || '') + '</a></h3>';
            cardContent += '<p>' + (repo.description || '') + '</p>';
            cardContent += '<p>Languages: ' + getLanguages(repo.languages_url) + '</p>';
            cardContent += '<p>Stars: ' + (repo.stargazers_count !== null && repo.stargazers_count !== undefined ? repo.stargazers_count : '0') + '</p>';
            cardContent += '<p>Created: ' + (repo.created_at ? new Date(repo.created_at).toLocaleDateString() : 'Not specified') + '</p>';
            cardContent += '<p>Last Updated: ' + (repo.updated_at ? new Date(repo.updated_at).toLocaleDateString() : 'Not specified') + '</p>';
            cardContent += '</div>';
            card.innerHTML = cardContent;

            // Append the card to the container
            cardContainer.appendChild(card);
        }
    });

    // Function to get all languages from the repository's languages_url
    function getLanguages(languagesUrl) {
        var languages = [];
        $.ajax({
            url: languagesUrl,
            async: false,
            success: function (data) {
                languages = Object.keys(data);
            }
        });
        return languages.join(', ');
    }
});
