export let data = {};


export let state = {

};

export function update() {

  // DATA for Testing
  let data = [16, 23, 42];

  data.sort(function(a, b){return a-b});
  //data.sort(d3.descending());
  let width = "705px",
      height = 70,
      fontsize = 18,
      center = "0 auto",
      // goal = 705,
      perc_so_far = 0;


  //console.log(d3.sum(data));
  let total = d3.sum(data);
  let bar_x = 0;
  let chart = d3.select("#pollviz")
    .attr("width", width)
    .attr("height", height);
    bar_x = 0;
    //let chart_width = chart.style("width").replace("px", "");
  let chart_width = parseInt(d3.select("#pollviz").style("width"));
  //console.log(chart_width);

  let color = d3.scale.category10();
  //console.log(color);
    //d3.scale.ordinal()
    //.domain(["6TH", "7TH", "5TH", "4TH"])
    //.range(colorbrewer.RdBu[12]);
  let bar = chart.selectAll("g")
    .data(data)
    .enter().append("g");
    //console.log(bar);
  
  bar.append("rect")
    .attr("width", function(d) { return ((d/total)*100) + "%"; } )
    .attr("x", function(d) {
      let prev_perc = perc_so_far;
      let this_perc = 100*(d/total);
      perc_so_far = perc_so_far + this_perc;
      //console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
      return prev_perc + "%";
    })
    .attr("y", "50%")
    .attr("height", height/2)
    .attr("fill",  function(d) { return (color(d)) } );

  perc_so_far = 0;
  
  // let bartext = d3.selectAll("g")
  // .append("div")
  // .attr("class", "textbox");

  d3.selectAll("g")
    .append("text")
    .attr("x", function(d) {
      let prev_perc = perc_so_far;
      let this_perc = 100*(d/total);
      perc_so_far = perc_so_far + this_perc;
      //console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
      return prev_perc + "%";
    })
    
    //.attr("y", 11)

    // To middle/center in the bar-chart
    // .attr("dy", (height + (fontsize/2))/2)
    
    .attr("dy", height/2 - fontsize/4)
    
    // .attr("fill", "#ffffff")
    // .attr("font-size", fontsize + "px")
    .text(function(d) { return Number.parseFloat(100*(d/total)).toFixed(1) + "%"; });
      
  // d3.select(window).on('resize', resize);

  //   function resize () {
  //     let width = parseInt(d3.select("#chart").style("width"));
  //     console.log(width);
  //     console.log(bar);
  //   }

  }

export function draw() {
  update();
}
