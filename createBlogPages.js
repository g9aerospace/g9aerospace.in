const fs = require('fs');
const path = require('path');

// Replace 'D:\\G9 Aerospace Website\\blog.json' with the actual path to your blog.json file
const blogData = require('D:\\G9 Aerospace Website\\blog.json');
const blogFolder = 'D:\\G9 Aerospace Website\\blog\\'; // Make sure this folder exists

// Create the 'blog' folder if it doesn't exist
if (!fs.existsSync(blogFolder)) {
    fs.mkdirSync(blogFolder);
}

// Generate individual HTML pages for each blog entry
blogData.forEach(entry => {
    const titleSlug = entry.title.replace(/\s+/g, '-').toLowerCase();
    const filePath = path.join(blogFolder, `${titleSlug}.html`);

    const content = `
        <!DOCTYPE HTML>
        <html>
        <head>
            <title>${entry.title}</title>
            <!-- Add your meta tags, stylesheets, and other head elements here -->
        </head>
        <body>
            <div>
                <h2>${entry.title}</h2>
                <p>${entry.date}</p>
                <p>${entry.content}</p>
                <!-- Add more content as needed -->
            </div>
        </body>
        </html>
    `;

    fs.writeFileSync(filePath, content);
});

console.log('Individual blog pages created successfully.');
