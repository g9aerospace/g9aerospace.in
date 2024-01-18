const fs = require('fs');
const path = require('path');

function generateProjectMap(directory, excludeDirs) {
  const projectMap = {};

  function traverseDir(currentDir, parentKey) {
    let files;
    try {
      files = fs.readdirSync(currentDir);
    } catch (error) {
      console.error(`Error reading directory ${currentDir}: ${error.message}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const key = parentKey ? path.join(parentKey, file) : file;

      try {
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (isDirectory && !excludeDirs.includes(file)) {
          projectMap[key] = {};
          traverseDir(filePath, key);
        } else {
          projectMap[key] = null;
        }
      } catch (error) {
        console.error(`Error checking stats for ${filePath}: ${error.message}`);
      }
    });
  }

  traverseDir(directory);

  return projectMap;
}

// Set your project directory here
const projectDirectory = process.cwd(); // Current working directory

// Set the directories you want to exclude (e.g., 'node_modules', '.github')
const excludeDirectories = ['node_modules', '.github', '.git'];

const projectMap = generateProjectMap(projectDirectory, excludeDirectories);
console.log(JSON.stringify(projectMap, null, 2));
