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

const frameworksObj = {
    'Vue.js' : '40', 
    'Yii 1.1' : '90', 
    'Yii 2' : '80', 
    'Wordpress' : '70'
}

const librariesObj = {
    'React' : '50',
    'Pug' : '70',
}

const otherObj = {
    'Documentation' : '90',
    'Organization' : '80',
    'Attention to Detail' : '100',
}

const skillsObj = {
    languages: languagesObj, 
    software: softwareObj,
    tools: toolsObj,
    frameworks: frameworksObj, 
    libraries: librariesObj,
    other: otherObj,
}

let html = pug.renderFile('templates/index.pug', {
    skills: skillsObj
});

fs.writeFile("site/index.html", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
