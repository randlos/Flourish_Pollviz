var template=function(t){"use strict";function e(){var t=[16,23,42];t.sort(function(t,e){return t-e});var e=0,r=d3.sum(t),n=d3.select("#pollviz").attr("width","100%").attr("height",30),a=parseInt(d3.select("#pollviz").style("width"));console.log(a);var u=d3.scale.category10(),i=n.selectAll("g").data(t).enter().append("g");i.append("rect").attr("width",function(t){return t/r*100+"%"}).attr("x",function(t){var n=e;return e+=t/r*100,n+"%"}).attr("height",30).attr("fill",function(t){return u(t)}),e=0,i.append("text").attr("x",function(t){var n=e;return e+=t/r*100,n+.5+"%"}).attr("dy","1.35em").text(function(t){return Number.parseFloat(t/r*100).toFixed(1)+"%"})}return t.data={},t.state={},t.update=e,t.draw=function(){e()},t}({});
//# sourceMappingURL=template.js.map