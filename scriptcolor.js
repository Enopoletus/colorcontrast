const myapp={};
window.addEventListener("load", n8ne);
window.addEventListener("input", n8ne);
window.addEventListener("click", n8ne);
function n8ne(){
        myapp.name=document.getElementsByName("name1")[0].value;
document.getElementById("count1").innerHTML=myapp.score1=parseInt(document.getElementsByName("score1")[0].value);
document.getElementById("count2").innerHTML=myapp.score2=parseInt(document.getElementsByName("score2")[0].value);
document.getElementById("count3").innerHTML=myapp.score3=parseInt(document.getElementsByName("score3")[0].value);
document.getElementById("count4").innerHTML=myapp.score4=parseInt(document.getElementsByName("score4")[0].value);
document.getElementById("count5").innerHTML=myapp.score5=parseInt(document.getElementsByName("score5")[0].value);
document.getElementById("count6").innerHTML=myapp.score6=parseInt(document.getElementsByName("score6")[0].value);
document.getElementById("count7").innerHTML=myapp.score7=parseInt(document.getElementsByName("score7")[0].value);
document.getElementById("count8").innerHTML=myapp.score8=parseInt(document.getElementsByName("score8")[0].value);
document.getElementById("count9").innerHTML=myapp.score9=parseInt(document.getElementsByName("score9")[0].value);
document.getElementById("count33").innerHTML=Number(((myapp.score9+myapp.score8+myapp.score7)/3).toFixed(1));
document.getElementById("count32").innerHTML=Number(((myapp.score6+myapp.score5+myapp.score4)/3).toFixed(1));
document.getElementById("count31").innerHTML=Number(((myapp.score3+myapp.score2+myapp.score1)/3).toFixed(1));
};
window.addEventListener("load", handler);
function handler() {
const w = (screen.width*.95);
const h = (screen.width)/4;
const svg = d3.select("#ten11")
            .append('svg')
            .attr('width', (w))
            .attr('height', h);
svg.append('rect')
    .attr("id", "rect1")
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', (w/2))
    .attr('height', h)
    .style("fill", d3.rgb(myapp.score1, myapp.score2, myapp.score3));
svg.append('rect')
    .attr("id", "rect2")
    .attr('x', (w/2))
    .attr('y', 0)
    .attr('width', (w/2))
    .attr('height', h)
    .style("fill", d3.rgb(myapp.score4, myapp.score5, myapp.score6));
svg.append("text")
      .attr("id", "fifty")
      .attr("x", w/2)
      .attr("y", h/2)
      .style("text-anchor", "middle")
      .text(" ");
window.addEventListener("load", frame);
window.addEventListener("input", frame);
window.addEventListener("click", n8ne);
function frame(){
svg.select("#rect1")                
     .style("fill", d3.rgb(myapp.score1, myapp.score2, myapp.score3));
svg.select("#rect2")
     .style("fill", d3.rgb(myapp.score4, myapp.score5, myapp.score6));
svg.select("#fifty")
     .transition()
     .duration(400)
     .style('font-weight', 'bold')
     .style("fill", d3.rgb(myapp.score7, myapp.score8, myapp.score9))
     .attr("x", w/2)
     .attr("y", h/2)
     .text(String(myapp.name));
                };
            };
