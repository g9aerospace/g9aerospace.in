document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the JSON file
    fetch('blog.json')
      .then(response => response.json())
      .then(data => {
        // Handle the blog data and insert it into the HTML
        const blogContainer = document.getElementById('blog-container');
  
        data.forEach(entry => {
          const blogPost = document.createElement('div');
          blogPost.innerHTML = `
            <h2>${entry.title}</h2>
            <p>Date: ${entry.date}</p>
            <p>${entry.content}</p>
            <hr />
          `;
  
          blogContainer.appendChild(blogPost);
        });
      })
      .catch(error => console.error('Error fetching blog data:', error));
  });
  