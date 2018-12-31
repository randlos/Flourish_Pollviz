export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export var state = {
  // example_state_property: 25
  // The current state of template. You can make some or all of the properties
  // of the state object available to the user as settings in settings.js.
};

export function update() {
  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.

  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.

  // DATA for Testing
  var data = [16, 23, 42];

  data.sort(function(a, b){return a-b});
  //data.sort(d3.descending());
  var width = "100%",
      height = 30,
      goal = 705,
      perc_so_far = 0;


  //console.log(d3.sum(data));
  var total_time = d3.sum(data);
  var bar_x = 0;
  var chart = d3.select("#pollviz")
    .attr("width", width)
    .attr("height", height);
    bar_x = 0;
    //var chart_width = chart.style("width").replace("px", "");
  var chart_width = parseInt(d3.select("#pollviz").style("width"));
  console.log(chart_width);

  var color = d3.scale.category10();
  //console.log(color);
    //d3.scale.ordinal()
    //.domain(["6TH", "7TH", "5TH", "4TH"])
    //.range(colorbrewer.RdBu[12]);
  var bar = chart.selectAll("g")
    .data(data)
    .enter().append("g");
    //console.log(bar);
  bar.append("rect")
    .attr("width", function(d) { return ((d/total_time)*100) + "%"; } )
    .attr("x", function(d) {
      var prev_perc = perc_so_far;
      var this_perc = 100*(d/total_time);
      perc_so_far = perc_so_far + this_perc;
      //console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
      return prev_perc + "%";
    })
    .attr("height", height)
    .attr("fill",  function(d) { return (color(d)) } );

  perc_so_far = 0;
  bar.append("text")
    .attr("x", function(d) {
      var prev_perc = perc_so_far;
      var this_perc = 100*(d/total_time);
      perc_so_far = perc_so_far + this_perc;
      //console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
      return prev_perc + 0.5 + "%";
    })
    //.attr("y", 11)
    .attr("dy", "1.35em")
    .text(function(d) { return Number.parseFloat(100*(d/total_time)).toFixed(1) + "%"; });
      
  // d3.select(window).on('resize', resize);

  //   function resize () {
  //     var width = parseInt(d3.select("#chart").style("width"));
  //     console.log(width);
  //     console.log(bar);
  //   }

  }

export function draw() {
  // The draw function is called when the template first loads
  update();
}
