d3.select("#selected-dropdown").text("first");

d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#subscriberType").node().value;
    console.log( selected );
    d3.select("#selected-dropdown-subscriberType").text(selected);
})

d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#location").node().value;
    console.log( selected );
    d3.select("#selected-dropdown-location").text(selected);
})
