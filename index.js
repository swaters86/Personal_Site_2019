const pug = require('pug');

const fs = require('fs');

const languagesObj = {
    'HTML5' : '90',
    'CSS3' : '80',
    'ES6' : '70', 
    'PHP' : '80', 
    'MySQL' : '80',
    'Python' : '50', 
};

const softwareObj = {
    'Adobe Illustrator' : '90', 
    'Adobe Photoshop' : '80',
    'Balsamiq' : '90', 
    'Adobe Premier' : '40', 
    'Visual Studio Code' : '70', 
    'Eclipse' : '80',
}

const toolsObj = {
    'GIT' : '60',
    'SVN' : '60',
    'Webpack' : '50', 
    'Gulp.js' : '50',  
}

let html = pug.renderFile('templates/index.pug', {
    languages: languagesObj, 
    software: softwareObj,
    tools: toolsObj,
});

fs.writeFile("test.html", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
