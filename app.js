
let Mustache = require('mustache');
let fs = require('fs');

let j = {}
let publicationJson = JSON.parse(fs.readFileSync('./static/json/publication.json'));
let publicationTemp = fs.readFileSync('./static/mustache/publication.mustache').toString();
j['publication'] = Mustache.render(publicationTemp, publicationJson);


let grantJson = JSON.parse(fs.readFileSync('./static/json/grant.json'));
let grantTemp = fs.readFileSync('./static/mustache/grant.mustache').toString();
j['grant'] = Mustache.render(grantTemp, grantJson);

let awardJson = JSON.parse(fs.readFileSync('./static/json/award.json'));
let awardTemp = fs.readFileSync('./static/mustache/award.mustache').toString();
j['award'] = Mustache.render(awardTemp, awardJson);


let indexTemp = fs.readFileSync('./static/mustache/index.mustache').toString();

fs.writeFileSync("index.html", Mustache.render(indexTemp, j));
