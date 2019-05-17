const pug = require('pug');
const fs = require('fs');

const languagesObj = {
    'HTML5': '95',
    'CSS3': '90',
    'JavaScript': '70',
    'PHP': '80',
    'MySQL': '80',
    'Python': '50',
    'JSON': '90',
    'XML': '95',
    'C#' : '50',
};

const softwareObj = {
    'Adobe Illustrator': '90',
    'Adobe Photoshop': '80',
    'Balsamiq': '90',
    'Adobe Premier': '40',
    'Visual Studio Code': '70',
    'Eclipse': '80',
};

// const toolsObj = {
//     'GIT': '60',
//     'SVN': '60',
//     'Webpack': '50',
//     'Gulp.js': '50',
//     'NPM': '60',
//     'Developer Tools': '70',
// };

// const frameworksObj = {
//     'Vue.js': '40',
//     'Yii 1.1': '90',
//     'Yii 2': '80',
//     'Wordpress': '70',
//     'Express.js': '50'
// };

// const librariesObj = {
//     'jQuery': '85',
//     'React': '50',
//     'Pug': '70',
// };

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
};

//Object.assign(otherObj, librariesObj, frameworksObj, toolsObj);

const skillsObj = {
    languages: languagesObj,
    software: softwareObj,
    other: otherObj,
};

const projectsObj = [
    {
        title: 'I am Batman FAQ React App',
        thumbnailUrl: 'i-am-batman-accordion',
        thumbnailAltText: '',
        description: `This is an accordion / FAQ solution made with <strong>React</strong> and <strong>Sass</strong>. 
        The main component tag can accept a boolean attribute called "allowMultipleOpen" which allows multiple accordion 
        panes to be open simultaneously or only allow one to be open at the time (when the boolean attribute is absent). The 
        questions are also generated from a JSON string so the content can be changed easily and the solution is flexible 
        enough so new themes can be added by defining the primary, secondary, and tertiary color and animations and 
        the collapsed/uncollapsed icons within a SASS switch statement. <strong>Hint</strong>: Try the Adam West theme.`,
        link: 'https://codepen.io/swaters86/pen/MxdvKP',
        linkTitleText: 'Check out I am Batman FAQ React App',
        linkText: 'Visit Codepen',
    },
    {
        title: 'Stevenwaters.com',
        thumbnailUrl: 'steven-waters-website',
        thumbnailAltText: '',
        description: `I went through to several designs before arriving at this design. This is my "Less is More" design. 
        I initially started it without using a CSS framework but then decided to port it to <strong>Bulma</strong>. I also use <strong>Sass</strong> 
        and <strong>Node.js</strong> for generating the static files. In other words, the Node.js app that I created serves a simple static site generator.
        The <a href="https://github.com/swaters86/Personal_Site_2019" title="Steve Waters.com GitHub Repo">code</a> for this website can be found 
        <a href="https://github.com/swaters86/Personal_Site_2019" title="Steve Waters.com GitHub Repo">here</a>`,
        link: 'http://stevenwaters.com/',
        linkTitleText: '',
        linkText: 'Visit Codepen',
    },
    {
        title: 'Random.me React Interface',
        thumbnailUrl: 'random-me-api',
        thumbnailAltText: '',
        description: `I wanted to make something <strong>API-related</strong> with <strong>React</strong> so I developed
        this application. This application uses the Random.me API to generate a list of users. Users are kept track of
        in a state object. I made very good use out of the spread operator for this one!`,
        link: 'https://codepen.io/swaters86/pen/zXagyz',
        linkTitleText: 'Random.me React Interface',
        linkText: 'Visit Codepen',
    },
    {
        title: 'Dog Lover Hover Effect <span class="tag">WIP</span>',
        thumbnailUrl: 'dog-lover',
        thumbnailAltText: '',
        description: `I wanted to make a cool in/out zoom effect for images and ended up with this. All of the scaling and 
        rollover effects are CSS-driven.`,
        link: 'https://codepen.io/swaters86/pen/axxpob',
        linkTitleText: 'Dog Lover Hover Effect',
        linkText: 'Visit Codepen',
    },
];

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
