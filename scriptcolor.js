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
};
window.addEventListener("load", handler);
function handler() {
const w = (screen.width);
const h = (screen.width)/2;
const svg = d3.select("#ten11")
            .append('svg')
            .attr('width', (w+50))
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
      .attr("x", w)
      .attr("y", h/2)
      .style("text-anchor", "middle")
      .text(" ");
window.addEventListener("click", frame);
window.addEventListener("keyup", frame);
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
     .attr("x", w)
     .attr("y", h/2)
     .text(String(myapp.name));
                };
            };
