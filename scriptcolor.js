window.addEventListener("load", handler);
function handler() {
const w = (screen.width)/2;
const h = (screen.width)/2;
const svg = d3.select("#ten10")
            .append('svg')
            .attr('width', (w+50))
            .attr('height', h)
            .style("fill", "lightyellow");
const yscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (h*.8)]);
const xscale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, (w*.8)]);
            };
