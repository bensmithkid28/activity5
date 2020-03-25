
    (function() {

    var data = [
 {
name: 'Visual Studio Intellicode',
description: 'The Path Intellisense extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.',
author: 'Benjamin',
downloads: '2,720,508',
stars: '79',
price: 'free',
selector: 'p1'
    },
    {

        name: 'CSS Peek',
        description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup',
        author: 'Joe',
        downloads: '780,057',
        stars: '53',
        price: 'free',
        selector: 'p2'
    },
    {
        name: 'Rainbow Brackets',
        description: 'Add some fun into your editor with 🌈 Rainbow Brackets! This extension provides rainbow colors for round brackets, square brackets, and curly brackets. Especially helpful for JavaScript programmers!',
        author: 'Ben',
        downloads: '451,415',
        stars: '64',
        price: 'free',
        selector: 'p3'
    }
];
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;
    this.getFormattedDownloads = function(){
        return this.downloads.toLocaleString();
    };
    
    this.getFormattedStars = function(){
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function(){
    var today = new Date();
    return today.toDateString();
}

var getEl = function(id){
    return document.getElementById(id);
}

var writePackageInfo = function(package){
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

var trailingSpaces = new Package(data[0]);
writePackageInfo(trailingSpaces);

var gitLens = new Package(data[1]);
writePackageInfo(gitLens);

var debuggerForChrome = new Package(data[2]);
writePackageInfo(debuggerForChrome);
}());

