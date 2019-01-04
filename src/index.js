import { timingSafeEqual } from "crypto";

export let data = {};


export let state = {

};

export function update() {

  // DATA for Testing
  let data = [110, 20, 12];

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
    .attr("x", function(d,i) {

      let prev_perc = perc_so_far;
      let this_perc = 100*(d/total);
      perc_so_far = perc_so_far + this_perc;
      
      if (i == 1){
        //let balkentext = Number.parseFloat(100*(d/total)).toFixed(1) + "%";
        //let textcenter = (((prev_perc) * 705) / 100);
        console.log(perc_so_far);
        console.log(prev_perc);
        console.log(this_perc);
        console.log(perc_so_far - prev_perc);
        console.log((perc_so_far - prev_perc)/2);
        console.log(prev_perc + (perc_so_far - prev_perc)/2);
        let centric = prev_perc + (perc_so_far - prev_perc)/2;
        console.log(centric);
        return centric + "%";
      }

      if (i == 2){
        return "680px"; //(prev_perc + "%")
      }

      //console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
      return 22;
    })


    //.attr("y", 11)

    // To middle/center in the bar-chart
    // .attr("dy", (height + (fontsize/2))/2)
    
    .attr("dy", height/2 - fontsize/4)
    
    // .attr("fill", "#ffffff")
    // .attr("font-size", fontsize + "px")
    .text(function(d) { 
      let balkentext = Number.parseFloat(100*(d/total)).toFixed(1) + "%";
      return balkentext; 
  });

  // d3.selectAll('g').selectAll("text").each(function(d,i){
    
  //   var firstChild = this.firstChild,
  //       lastChild = this.lastChild;
    
  //   console.log(lastChild);

  //   lastChild.attr("x", "705px");
  // })
      
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
