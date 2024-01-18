// assets/js/githubquery.js

// Function to fetch and display GitHub repositories in a 3x2 grid
function displayGitHubRepos(username, container) {
    $.ajax({
        url: 'https://api.github.com/users/' + username + '/repos',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var reposGrid = $('<div class="repo-grid">');  // Ensure the class name is "repo-grid"
            for (var i = 0; i < Math.min(data.length, 6); i++) {
                var repo = data[i];
                var repoCard = $('<div class="repo-card">');

                // Display repository name
                repoCard.append('<h3>' + repo.name + '</h3>');

                // Display repository description
                repoCard.append('<p>' + (repo.description || 'No description available') + '</p>');

                // Display number of stars
                repoCard.append('<p>Stars: ' + repo.stargazers_count + '</p>');

                // Display date created
                repoCard.append('<p>Created: ' + new Date(repo.created_at).toLocaleDateString() + '</p>');

                // Display date updated
                repoCard.append('<p>Updated: ' + new Date(repo.updated_at).toLocaleDateString() + '</p>');

                // Add a button to open the repository
                repoCard.append('<a class="repo-button" href="' + repo.html_url + '" target="_blank">View Repository</a>');

                reposGrid.append(repoCard);
            }
            $(container).html(reposGrid);
        },
        error: function (error) {
            console.error('Error fetching GitHub repositories:', error);
            $(container).html('<p>Error fetching GitHub repositories. Please try again later.</p>');
        }
    });
}

// Call the function to display GitHub repositories
$(document).ready(function () {
    displayGitHubRepos('g9militantsYT', '#github-grid');
});
