const myapp={};
window.addEventListener("load", n8ne);
window.addEventListener("input", n8ne);
window.addEventListener("click", n8ne);
function n8ne(){
        myapp.name=document.getElementsByName("name1")[0].value;
        myapp.score11=parseInt(document.getElementsByName("score11")[0].value);
        myapp.score12=parseInt(document.getElementsByName("score12")[0].value);
        myapp.score13=parseInt(document.getElementsByName("score13")[0].value);
document.getElementById("count1").value=myapp.score1=parseInt(document.getElementsByName("score1")[0].value)+myapp.score11;
document.getElementById("count2").value=myapp.score2=parseInt(document.getElementsByName("score2")[0].value)+myapp.score11;
document.getElementById("count3").value=myapp.score3=parseInt(document.getElementsByName("score3")[0].value)+myapp.score11;
document.getElementById("count4").value=myapp.score4=parseInt(document.getElementsByName("score4")[0].value)+myapp.score12;
document.getElementById("count5").value=myapp.score5=parseInt(document.getElementsByName("score5")[0].value)+myapp.score12;
document.getElementById("count6").value=myapp.score6=parseInt(document.getElementsByName("score6")[0].value)+myapp.score12;
document.getElementById("count7").value=myapp.score7=parseInt(document.getElementsByName("score7")[0].value)+myapp.score13;
document.getElementById("count8").value=myapp.score8=parseInt(document.getElementsByName("score8")[0].value)+myapp.score13;
document.getElementById("count9").value=myapp.score9=parseInt(document.getElementsByName("score9")[0].value)+myapp.score13;
        //yeah I know
const x=2.55
document.getElementById("c0unt1").value=myapp.score1/x;
document.getElementById("c0unt2").value=myapp.score2/x;
document.getElementById("c0unt3").value=myapp.score3/x;
document.getElementById("c0unt4").value=myapp.score4/x;
document.getElementById("c0unt5").value=myapp.score5/x;
document.getElementById("c0unt6").value=myapp.score6/x;
document.getElementById("c0unt7").value=myapp.score7/x;
document.getElementById("c0unt8").value=myapp.score8/x;
document.getElementById("c0unt9").value=myapp.score9/x;
document.getElementById("sRGB3").value=Number((((7.22*myapp.score9/255)+(71.52*myapp.score8/255)+(21.26*myapp.score7/255))).toFixed(1));
document.getElementById("sRGB2").value=Number((((7.22*myapp.score6/255)+(71.52*myapp.score5/255)+(21.26*myapp.score4/255))).toFixed(1));
document.getElementById("sRGB1").value=Number((((7.22*myapp.score3/255)+(71.52*myapp.score2/255)+(21.26*myapp.score1/255))).toFixed(1));
document.getElementById("WC33").value=Number((((11.4*myapp.score9/255)+(58.7*myapp.score8/255)+(29.9*myapp.score7/255))).toFixed(1));
document.getElementById("WC32").value=Number((((11.4*myapp.score6/255)+(58.7*myapp.score5/255)+(29.9*myapp.score4/255))).toFixed(1));
document.getElementById("WC31").value=Number((((11.4*myapp.score3/255)+(58.7*myapp.score2/255)+(29.9*myapp.score1/255))).toFixed(1));
document.getElementById("gmean3").value=Number((Math.sqrt(1140*((myapp.score9/255)**2)+5870*((myapp.score8/255)**2)+2990*((myapp.score7/255)**2))).toFixed(1));
document.getElementById("gmean2").value=Number((Math.sqrt(1140*((myapp.score6/255)**2)+5870*((myapp.score5/255)**2)+2990*((myapp.score4/255)**2))).toFixed(1));
document.getElementById("gmean1").value=Number((Math.sqrt(1140*((myapp.score3/255)**2)+5870*((myapp.score2/255)**2)+2990*((myapp.score1/255)**2))).toFixed(1));
document.getElementById("smean3").value=Number((Math.sqrt(722*((myapp.score9/255)**2)+7152*((myapp.score8/255)**2)+2126*((myapp.score7/255)**2))).toFixed(1));
document.getElementById("smean2").value=Number((Math.sqrt(722*((myapp.score6/255)**2)+7152*((myapp.score5/255)**2)+2126*((myapp.score4/255)**2))).toFixed(1));
document.getElementById("smean1").value=Number((Math.sqrt(722*((myapp.score3/255)**2)+7152*((myapp.score2/255)**2)+2126*((myapp.score1/255)**2))).toFixed(1));
};
window.addEventListener("load", n6ne)
function n6ne(){
document.getElementById("egalitie").addEventListener("click", n7ne);
function n7ne(){
        const vec1=[myapp.score1-myapp.score4, myapp.score2-myapp.score5,myapp.score3-myapp.score6];
        const vec2=[myapp.score4-myapp.score7,myapp.score5-myapp.score8,myapp.score6-myapp.score9];
        const d=math.cross(vec1, vec2);
        const n=math.norm(d);
        const f=d/n
        const r= math.dot([myapp.score1, myapp.score2, myapp.score3],d);
        console.log(vec1, vec2, d, n);
        console.log(r, f);
};};
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
window.addEventListener("click", frame);
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
