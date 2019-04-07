const pug = require('pug');
const fs = require('fs');

const languagesObj = {
    'HTML5': '95',
    'CSS3': '90',
    'ES6': '70',
    'PHP': '90',
    'MySQL': '80',
    'Python': '50',
    'JSON': '90',
    'XML': '95',
}

const softwareObj = {
    'Adobe Illustrator': '90',
    'Adobe Photoshop': '80',
    'Balsamiq': '90',
    'Adobe Premier': '40',
    'Visual Studio Code': '70',
    'Eclipse': '80',
}

// const toolsObj = {
//     'GIT': '60',
//     'SVN': '60',
//     'Webpack': '50',
//     'Gulp.js': '50',
//     'NPM': '60',
//     'Developer Tools': '70',
// }

// const frameworksObj = {
//     'Vue.js': '40',
//     'Yii 1.1': '90',
//     'Yii 2': '80',
//     'Wordpress': '70',
//     'Express.js': '50'
// }

// const librariesObj = {
//     'jQuery': '85',
//     'React': '50',
//     'Pug': '70',
// }

const otherObj = {
    'jQuery': '85',
    'React': '50',
    'Pug': '70',
    'Node.js': '55',
    'SEO': '60',
    'A11y': '60',
    'Email Tempalate Deveopment': '65',
    'Documentation': '90',
    'Graphic Design': '90',
    'Organization': '80',
    'Attention to Detail': '90',
    'QA': '70',
    'Vue.js': '40',
    'Yii 1.1': '90',
    'Yii 2': '80',
    'Wordpress': '70',
    'Express.js': '50',
    'GIT': '60',
    'SVN': '60',
    'Webpack': '50',
    'Gulp.js': '50',
    'NPM': '60',
    'Developer Tools': '70',
}

//Object.assign(otherObj, librariesObj, frameworksObj, toolsObj);

const skillsObj = {
    languages: languagesObj,
    software: softwareObj,
    other: otherObj,
}

const projectsObj = [
    {
        title: 'CSS Terminal',
        thumbnailFileName: 'css_terminal',
        altText: 'Screenshot of the CSS Terminal Codepen project',
        descriptionText: 'A basic cli tool that I made using HTML5, CSS3, and ES6. The goal is to make it interactive someday.',
        url: 'https://codepen.io/swaters86/full/XjBPdp',
        linkTitleText: 'See a demo of the CSS Terminal application on Codepen.io',
        linkText: 'Visit Codepen',
    },
    {
        title: 'A Web-Based Recreation of the Ozark Title Sequence',
        thumbnailFileName: 'ozark_title_seq_reproduction',
        altText: 'Screenshot of the Ozark Title Sequence Codepen project',
        descriptionText: 'This is a web-based / SVG experimentation of Ozark\'s title sequence. Each episode displays a different symbol depending on the story, so I made this so the Font Awesome symbols can be swaped out easily.',
        url: 'https://codepen.io/swaters86/full/PdpXKa',
        linkTitleText: 'See a demo of the Ozark title sequence recreation on Codepen.io',
        linkText: 'Visit Codepen',
    },
]

let indexPage = pug.renderFile('templates/index.pug', {
    skills: skillsObj,
    projects: projectsObj,
});

let filmsPage = pug.renderFile('templates/films.pug', {
    //skills: skillsObj,
    //projects: projectsObj,
});

fs.writeFile("site/index.html", indexPage, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


fs.writeFile("site/films.html", filmsPage, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
