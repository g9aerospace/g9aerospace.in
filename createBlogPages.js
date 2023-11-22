const fs = require('fs');
const path = require('path');

// Replace 'D:\\G9 Aerospace Website\\blog.json' with the actual path to your blog.json file
const blogData = require('./blog.json');
const blogFolder = './blog/';  // Make sure this folder exists

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
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
            <title>${entry.title}</title>
            <link rel="stylesheet" href="../assets/css/main.css">
            <noscript><link rel="stylesheet" href="../assets/css/noscript.css"></noscript>
            <link rel="icon" type="image/png" href="../images/g9aerospace.png">
        </head>
        <body class="is-preload blog">
            <div id="page-wrapper">
                <!-- Header -->
                <header id="header">
                    <h1 id="logo"><a href="../">G9 Aerospace | Blog</a></h1>
                    <nav id="nav">
                        <ul>
                            <li><a href="../home">Home</a></li>
                            <li><a href="../blog/blog">Blog</a></li>
                            <li>
                                <a>Games</a>
                                <ul>
                                    <li><a href="../kerbalspaceprogram">Kerbal Space Program</a></li>
                                    <li><a href="../minecraft">Minecraft</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Utilities</a>
                                <ul>
                                    <li><a href="../bbn-resources">BBN Resources</a></li>
                                </ul>
                            </li>
                            <li>
                            <a>Repos</a>
                            <ul>
                                <li><a href="https://github.com/g9militantsYT/Minecraft-Server-Showcase">Minecraft Server Showcase Bot</a></li>
                                <li><a href="https://github.com/g9militantsYT/g9militantsyt.github.io">G9 Aerospace Website Source Code</a></li>
                                <li><a href="https://github.com/g9militantsYT/BricksNetwork">Bricks Network Website Source Code</a></li>
    
                            </ul>
                        </li>
                        </ul>
                    </nav>
                </header>

                <!-- Individual Blog Content -->
                <section id="individual-blog">
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <header>
                                        <h2>${entry.title}</h2>
                                        <p class="date">${entry.date}</p>
                                    </header>
                                </div>
                                <div class="col-12">
                                    <p>${entry.content}</p>
                                    <!-- Add more content as needed -->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Footer -->
                <footer id="footer">
                    <ul class="icons">
                        <li><a href="https://www.instagram.com/g9aerospace/" target="_blank" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="https://github.com/g9militantsYT" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank" class="icon brands alt fa-youtube"><span class="label">YouTube</span></a></li>
                    </ul>
                    <ul class="copyright">
                        <li>&copy; G9 Aerospace. All rights reserved.</li>
                    </ul>
                </footer>
            </div>

            <!-- Scripts -->
            <script src="../assets/js/jquery.min.js"></script>
            <script src="../assets/js/jquery.scrolly.min.js"></script>
            <script src="../assets/js/jquery.dropotron.min.js"></script>
            <script src="../assets/js/jquery.scrollex.min.js"></script>
            <script src="../assets/js/browser.min.js"></script>
            <script src="../assets/js/breakpoints.min.js"></script>
            <script src="../assets/js/util.js"></script>
            <script src="../assets/js/main.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(filePath, content);
});

console.log('Individual blog pages created successfully.');
