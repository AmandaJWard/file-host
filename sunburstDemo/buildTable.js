d3.text("https://amandajward.github.io/file-host/sunburstDemo/data/sunburstdata.csv", function(data) {
    var parsedCSV = d3.csvParseRows(data);

    var container = d3.select("body")
        .append("table")

    .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")

    .selectAll("td")
        .data(function(d) {
            return d;
        }).enter()
        .append("td")
        .text(function(d) {
            return d;
        });
});