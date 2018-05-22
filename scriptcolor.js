const myapp={};
window.addEventListener("click", n8ne);
window.addEventListener("keyup", n8ne);
function n8ne(){
myapp.score1=parseInt(document.getElementsByName("score1")[0].value);
myapp.score2=parseInt(document.getElementsByName("score2")[0].value);
myapp.score3=parseInt(document.getElementsByName("score3")[0].value);
myapp.score4=parseInt(document.getElementsByName("score4")[0].value);
myapp.score5=parseInt(document.getElementsByName("score5")[0].value);
myapp.score6=parseInt(document.getElementsByName("score6")[0].value);
myapp.score7=parseInt(document.getElementsByName("score7")[0].value);
myapp.score8=parseInt(document.getElementsByName("score8")[0].value);
myapp.score9=parseInt(document.getElementsByName("score9")[0].value);
myapp.name=document.getElementsByName("name1")[0].value;
for (let i of myapp){if (isNaN(i)==true){i=50};};
if (myapp.name==undefined){myapp.name="You"};
};
window.addEventListener("load", handler);
function handler() {
const w = (screen.width)/2;
const h = (screen.width)/2;
const svg = d3.select("#ten11")
            .append('svg')
            .attr('width', (w+50))
            .attr('height', h);
svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .width((w/2))
    .style("fill", d3.rgb(myapp.score1, myapp.score2, myapp.score3);
            };
