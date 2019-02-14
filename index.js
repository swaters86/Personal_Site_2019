const pug = require('pug');

const fs = require('fs');

const languagesObj = {
    'HTML5':'90',
    'CSS3':'80',
    'ES6':'70'
};

let html = pug.renderFile('templates/index.pug', {
    languages: languagesObj
});

fs.writeFile("test.html", html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
