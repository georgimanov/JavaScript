function getAllSelected(getNames){
    var selectCityOrCountry = $('#getClass').val();
    if(selectCityOrCountry == 'City'){
        var name = 'city_name';
    } else{
        var name = 'country_name';
    }
    var printAll = '';
    $.ajax({
        type: 'GET',
        url: 'https://api.parse.com/1/classes/' + selectCityOrCountry,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $.each(data.results, function(index, value){
                printAll += "<option value="+value['objectId']+">" + value[name] + "</option> ";
            });
            $('#myList').append(printAll);
        },
        error : function(error){
            console.log(error);
        }
    });
}