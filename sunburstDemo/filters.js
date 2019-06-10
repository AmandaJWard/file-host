d3.select("#selected-dropdown").text("first");

d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#device").node().value;
    console.log( selected );
    d3.select("#selected-dropdown").text(selected);
})