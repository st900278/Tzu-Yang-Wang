
let Mustache = require('mustache');
let fs = require('fs');

let indexJson = {}

let projectJson = JSON.parse(fs.readFileSync('./static/json/project.json'));
let projectTemp = fs.readFileSync('./static/mustache/project.mustache').toString();
indexJson['project'] = Mustache.render(projectTemp, projectJson);



let publicationJson = JSON.parse(fs.readFileSync('./static/json/publication.json'));
publicationJson['publication'].sort(function (a, b) {
    return b['year'] - a['year'];
});
let publicationTemp = fs.readFileSync('./static/mustache/publication.mustache').toString();
indexJson['publication'] = Mustache.render(publicationTemp, publicationJson);


let grantJson = JSON.parse(fs.readFileSync('./static/json/grant.json'));
let grantTemp = fs.readFileSync('./static/mustache/grant.mustache').toString();
indexJson['grant'] = Mustache.render(grantTemp, grantJson);

let awardJson = JSON.parse(fs.readFileSync('./static/json/award.json'));
let awardTemp = fs.readFileSync('./static/mustache/award.mustache').toString();
indexJson['award'] = Mustache.render(awardTemp, awardJson);


let indexTemp = fs.readFileSync('./static/mustache/index.mustache').toString();

fs.writeFileSync("index.html", Mustache.render(indexTemp, indexJson));

let teamJson = {}
let memberJson = JSON.parse(fs.readFileSync('./static/json/member.json'));
let memberTemp = fs.readFileSync('./static/mustache/member.mustache').toString();
teamJson['member'] = Mustache.render(memberTemp, memberJson); 

let teamTemp = fs.readFileSync('./static/mustache/team.mustache').toString();


fs.writeFileSync("team.html", Mustache.render(teamTemp, teamJson));