const pug = require('pug');
const fs = require('fs');


const languagesObj = {
    'HTML5': '95',
    'CSS3': '90',
    'ES6': '70',
    'PHP': '90',
    'MySQL': '80',
    'Python': '50',
    'Node.js': '60',
    'JSON': '90',
    'XML': '95',
};

const softwareObj = {
    'Adobe Illustrator': '90',
    'Adobe Photoshop': '80',
    'Balsamiq': '90',
    'Adobe Premier': '40',
    'Visual Studio Code': '70',
    'Eclipse': '80',
}

const toolsObj = {
    'GIT': '60',
    'SVN': '60',
    'Webpack': '50',
    'Gulp.js': '50',
    'NPM': '60',
    'Developer Tools': '70',
}

const frameworksObj = {
    'Vue.js': '40',
    'Yii 1.1': '90',
    'Yii 2': '80',
    'Wordpress': '70',
    'Express.js': '50'
}

const librariesObj = {
    'React': '50',
    'Pug': '70',
}

const otherObj = {
    'SEO': '60',
    'Email Tempaltes': '60',
    'Documentation': '90',
    'Graphic Design': '90',
    'Organization': '80',
    'Attention to Detail': '90',
    'QA': '70',
}

Object.assign(otherObj, librariesObj, frameworksObj, toolsObj);

const skillsObj = {
    languages: languagesObj,
    software: softwareObj,
    other: otherObj,
}

const projectsObj = [
    {
        title: 'CSS Terminal',
        thumbnailFileName: 'css_terminal',
        altText: 'Screenshot of the CSS terminal project that was taken on codepen.io',
        descriptionText: 'A basic cli tool that I made using HTML5, CSS3, and ES6. The goal is to make it interactive someday.',
        url: 'https://codepen.io/swaters86/full/XjBPdp',
        linkTitleText: 'See a demo of the CSS Terminal application on Codepen.io',
        linkText: 'Visit Codepen',
    },
    {
        title: 'Ozark Title Sequence Recreating using HTML/CSS/JavaScript and an SVG library.',
        thumbnailFileName: 'ozark_title_seq_reproduciton',
        altText: 'Screenshot of the reproduction of the title sequence for Ozark which  was taken on codepen.io',
        descriptionText: 'I decided to recreate the Ozark title sequence using web techonlogies HTML, CSS, JS, and an library for creating SVG graphics.',
        url: 'https://codepen.io/swaters86/full/PdpXKa',
        linkTitleText: 'See a demo of the Ozark title sequence recreation on Codepen.io',
        linkText: 'Visit Codepen',
    },
]

let html = pug.renderFile('templates/index.pug', {
    skills: skillsObj,
    projects: projectsObj,
});

fs.writeFile("site/index.html", html, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
