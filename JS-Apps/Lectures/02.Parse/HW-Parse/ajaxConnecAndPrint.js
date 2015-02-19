$.ajaxSetup({
    headers: {"X-Parse-Application-Id":"hWZKME1lX0ghNGb424c4HpE50if5jZySVBZYCmSP",
        "X-Parse-REST-API-Key":"g26wlrFTSRV7gaOiakk2NsQhJZF4LhyH2Aodcgv0" }

});

var city = '';
$.ajax({
    type: 'GET',
    url: 'https://api.parse.com/1/classes/City',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $.each(data.results, function(index, value){
            city += " " + value['city_name'] + ", ";
        });
        $('#city').append(city);
    },
    error : function(error){
        console.log(error);
    }
});

var country = '';
$.ajax({
    type: 'GET',
    url: 'https://api.parse.com/1/classes/Country',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $.each(data.results, function(index, value){
            country += " " + value['country_name'] + ", ";
        });
        $('#country').append(country);
    },
    error : function(error){
        console.log(error);
    }
});