$(document).ready(function() {
    $('#form').submit(function (event) {
        var object = $.parseJSON($('#json').val());
        var table = "<table><thead id='table-header'><tr>";
        var headers = Object.keys(object[0]);
        for(var i = 0; i < headers.length; i+=1) {
            table += "<th>" + headers[i] + "</th>"
        }
        table += "</tr></thead>";
        table += "<tbody>";
        for (var i = 0; i < object.length; i+=1) {
            table += "<tr>";
            for (var j = 0; j < headers.length; j+=1) {
                table += "<td>" + object[i][headers[j]] + "</td>";
            }
            table += "</tr>";
        }
        table += "</tbody>";
        table += "</table>";
        $(document.body).append(table);
        event.preventDefault();
    })
});

$('#json').val('[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"}, {"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"}, {"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]')