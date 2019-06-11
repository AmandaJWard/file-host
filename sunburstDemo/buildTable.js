function tabulate(data,columns)  {
    var table =  d3.select("#tablecontainer").append("table")
        thead = table.append("thead"),
        tbody = table.append("tbody");

        thead.append("tr")
            .selectAll("th")
            .data(columns)
            .enter()
            .append("th")
                .text(function(d) {return d;});

        var rows = tbody.selectAll("tr")
            .data(data)
            .enter()
            .append("tr");
        
        rows.selectAll("td")
            .data(function(d) {return d;})
            .enter()
            .append("td")
            .text(function(d) {return d});
        
    return table;

}

//render the table
d3.text("https://amandajward.github.io/file-host/sunburstDemo/data/kpidisplay.csv", function(text) {
    var csv = d3.csvParseRows(text);
    tabulate(csv,['System Reference', 'Metric Type', 'Display Name', 'Description', 'Parent KPI'])
    });