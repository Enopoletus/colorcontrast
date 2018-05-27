const myapp={};
window.addEventListener("load", n8ne);
window.addEventListener("input", n8ne);
window.addEventListener("click", n8ne);
function n8ne(){
        myapp.pscore1=29.9
        myapp.pscore2=58.7
        myapp.pscore3=11.4
        myapp.name=document.getElementsByName("name1")[0].value;
        myapp.score11=parseInt(document.getElementsByName("score11")[0].value);
        myapp.score12=parseInt(document.getElementsByName("score12")[0].value);
        myapp.score13=parseInt(document.getElementsByName("score13")[0].value);
        myapp.score21=parseInt(document.getElementsByName("score21")[0].value);
        myapp.score22=parseInt(document.getElementsByName("score22")[0].value);
        myapp.score23=parseInt(document.getElementsByName("score23")[0].value);
        myapp.score1=parseInt(document.getElementsByName("score1")[0].value)+myapp.score11-myapp.score21;
        myapp.score2=parseInt(document.getElementsByName("score2")[0].value)+myapp.score11-myapp.score21;
        myapp.score3=parseInt(document.getElementsByName("score3")[0].value)+myapp.score11-myapp.score21;
        myapp.score4=parseInt(document.getElementsByName("score4")[0].value)+myapp.score12-myapp.score22;
        myapp.score5=parseInt(document.getElementsByName("score5")[0].value)+myapp.score12-myapp.score22;
        myapp.score6=parseInt(document.getElementsByName("score6")[0].value)+myapp.score12-myapp.score22;
        myapp.score7=parseInt(document.getElementsByName("score7")[0].value)+myapp.score13-myapp.score23;
        myapp.score8=parseInt(document.getElementsByName("score8")[0].value)+myapp.score13-myapp.score23;
        myapp.score9=parseInt(document.getElementsByName("score9")[0].value)+myapp.score13-myapp.score23;
        if(myapp.score1<0){myapp.score1=0};
        if(myapp.score2<0){myapp.score2=0};
        if(myapp.score3<0){myapp.score3=0};
        if(myapp.score4<0){myapp.score4=0};
        if(myapp.score5<0){myapp.score5=0};
        if(myapp.score6<0){myapp.score6=0};
        if(myapp.score7<0){myapp.score7=0};
        if(myapp.score8<0){myapp.score8=0};
        if(myapp.score9<0){myapp.score9=0};
        if(myapp.score1>255){myapp.score1=255};
        if(myapp.score2>255){myapp.score2=255};
        if(myapp.score3>255){myapp.score3=255};
        if(myapp.score4>255){myapp.score4=255};
        if(myapp.score5>255){myapp.score5=255};
        if(myapp.score6>255){myapp.score6=255};
        if(myapp.score7>255){myapp.score7=255};
        if(myapp.score8>255){myapp.score8=255};
        if(myapp.score9>255){myapp.score9=255};
document.getElementById("count1").value=myapp.score1;
document.getElementById("count2").value=myapp.score2;
document.getElementById("count3").value=myapp.score3;
document.getElementById("count4").value=myapp.score4;
document.getElementById("count5").value=myapp.score5;
document.getElementById("count6").value=myapp.score6;
document.getElementById("count7").value=myapp.score7;
document.getElementById("count8").value=myapp.score8;
document.getElementById("count9").value=myapp.score9;
        //yeah I know; shoulda used loops earlier
const x=2.55
const y=x*10
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
document.getElementById("ucount3").value=Number((Math.sqrt(myapp.pscore3*((myapp.score9/y)**2)+myapp.pscore2*((myapp.score8/y)**2)+myapp.pscore1*((myapp.score7/y)**2))).toFixed(1));
document.getElementById("ucount2").value=Number((Math.sqrt(myapp.pscore3*((myapp.score6/y)**2)+myapp.pscore2*((myapp.score5/y)**2)+myapp.pscore1*((myapp.score4/y)**2))).toFixed(1));
document.getElementById("ucount1").value=Number((Math.sqrt(myapp.pscore3*((myapp.score3/y)**2)+myapp.pscore2*((myapp.score2/y)**2)+myapp.pscore1*((myapp.score1/y)**2))).toFixed(1));
     myapp.tscore=myapp.pscore1+myapp.pscore2+myapp.pscore3
 if((myapp.tscore==100)==false){
document.getElementById("pscore11").value=myapp.pscore1;
document.getElementById("pscore12").value=myapp.pscore2;
document.getElementById("pscore13").value=myapp.pscore3;};
        const dist1=Math.sqrt((myapp.score4-myapp.score1)**2+(myapp.score5-myapp.score2)**2+(myapp.score6-myapp.score3)**2);
        const dist2=Math.sqrt((myapp.score7-myapp.score1)**2+(myapp.score8-myapp.score2)**2+(myapp.score9-myapp.score3)**2);
        const dist3=Math.sqrt((myapp.score7-myapp.score4)**2+(myapp.score8-myapp.score5)**2+(myapp.score9-myapp.score6)**2);
        const p1=100*dist1/Math.sqrt((255)**2+(255)**2+(255)**2);
        const p2=100*dist2/Math.sqrt((255)**2+(255)**2+(255)**2);
        const p3=100*dist3/Math.sqrt((255)**2+(255)**2+(255)**2);
        document.getElementById("tvl").value=p2;
        document.getElementById("lvr").value=p1;
        document.getElementById("tvr").value=p3;
        const dyst1=Math.sqrt(myapp.pscore1*((myapp.score4-myapp.score1)**2)+myapp.pscore2*((myapp.score5-myapp.score2)**2)+myapp.pscore3*((myapp.score6-myapp.score3)**2));
        const dyst2=Math.sqrt(myapp.pscore1*((myapp.score7-myapp.score1)**2)+myapp.pscore2*((myapp.score8-myapp.score2)**2)+myapp.pscore3*((myapp.score9-myapp.score3)**2));
        const dyst3=Math.sqrt(myapp.pscore1*((myapp.score7-myapp.score4)**2)+myapp.pscore2*((myapp.score8-myapp.score5)**2)+myapp.pscore3*((myapp.score9-myapp.score6)**2));
        document.getElementById("tvly").value=dyst2/y;
        document.getElementById("lvry").value=dyst1/y;
        document.getElementById("tvry").value=dyst3/y;
};
window.addEventListener("load", n3ne);
function n3ne(){
document.getElementById("egalitie").addEventListener("click", egality);
function egality(){
        const x=25.5
        const az=[[((myapp.score1/x)**2)-((myapp.score4/x)**2), ((myapp.score2/x)**2)-((myapp.score5/x)**2), ((myapp.score3/x)**2)-((myapp.score6/x)**2)],
                 [((myapp.score4/x)**2)-((myapp.score7/x)**2), ((myapp.score5/x)**2)-((myapp.score8/x)**2), ((myapp.score6/x)**2)-((myapp.score9/x)**2)],
                 [1, 1, 1]];
        const aq=[0, 0, 100]
        myapp.qy=math.lusolve(az, aq);
 for(i of myapp.qy){if(i<=0){alert('Stop fucking with the equals button');};
 document.getElementsByName("pscore1")[0].value=myapp.pscore1=parseFloat(myapp.qy[0]).toFixed(1);
 document.getElementsByName("pscore2")[0].value=myapp.pscore2=parseFloat(myapp.qy[1]).toFixed(1);
 document.getElementsByName("pscore3")[0].value=myapp.pscore3=parseFloat(myapp.qy[2]).toFixed(1);
document.getElementById("pscore11").value=myapp.pscore1;
document.getElementById("pscore12").value=myapp.pscore2;
document.getElementById("pscore13").value=myapp.pscore3;};
};};
window.addEventListener("load", handler);
function handler() {
const w = (screen.width*.9);
const h = (screen.height)/2;
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
