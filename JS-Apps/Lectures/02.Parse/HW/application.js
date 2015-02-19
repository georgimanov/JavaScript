(function() {
    var listICityTemplate =
        '<div class="col-md-12 list-item-container">' +
        '<li class="list-group-item col-md-6">{{ListText}}</li>' +
        '<button class="edit custom-button btn btn-info text-center col-md-2 col-md-offset-1">' +
        '<span class="glyphicon glyphicon-pencil"></span> Edit' +
        ' </button>' +
        '<button class="remove custom-button btn btn-danger col-md-1"> ' +
        '<span class="glyphicon glyphicon-remove"></span>' +
        '</button>' +
        '</div>';
    var listCountryTemplate =
        '<div class="col-md-12 list-item-container">' +
        '<li class="list-group-item col-md-6">{{ListText}}</li>' +
        '<button class="edit custom-button btn btn-info text-center col-md-2 col-md-offset-1">' +
        '<span class="glyphicon glyphicon-pencil"></span> Edit' +
        ' </button>' +
        '<button class="add-city custom-button btn btn-success text-center col-md-2 col-md-offset-1">' +
        '<span class="glyphicon glyphicon-plus"></span> City' +
        ' </button>' +
        '<button class="remove custom-button btn btn-danger col-md-1"> ' +
        '<span class="glyphicon glyphicon-remove"></span>' +
        '</button>' +
        '</div>';
    $.ajaxSetup({
        headers: {
            "X-Parse-Application-Id": "hWZKME1lX0ghNGb424c4HpE50if5jZySVBZYCmSP",
            "X-Parse-REST-API-Key": "g26wlrFTSRV7gaOiakk2NsQhJZF4LhyH2Aodcgv0"
        }
    });
    $(function () {
        updateCountries();
        updateCitys();
    });
    function updateCountries(){
        $.ajax({
            method: "GET",
            url: "https://api.parse.com/1/classes/Country",
            success: [getCountries, drawCountriesInSelect],
            error: errorLoadData
        });
    }
    function updateCitys(){
        $.ajax({
            method: "GET",
            url: "https://api.parse.com/1/classes/City",
            success: getCitys,
            error: errorLoadData
        });
    }
    function getCountries(data){
        $('#countries').children().remove();
        var countries = data.results;
        if (countries.length > 0) {
            $(countries).each(function (_, country) {
                var currentTemplate = listCountryTemplate.replace('{{ListText}}', country.name);
                currentTemplate = $.parseHTML(currentTemplate);
                $(currentTemplate).data('country', country);
                $('#countries').append(currentTemplate);
            });
            $('#countries').find('.remove').off().click(function () {
                var country = $(this).parent().data('country');
                $.ajax({
                    method: 'DELETE',
                    url: 'https://api.parse.com/1/classes/Country/' + country.objectId
                });
                var $this = $(this);
                $this.parent().remove();
            });
            $('#countries').find('.edit').off().click(function () {
                var country = $(this).parent().data('country');
                modal({
                    type : 'prompt',
                    title : 'Edit Country name',
                    text : "Name: ",
                    theme : 'atlant',
                    callback : editCountry
                });
                function editCountry(newCountryName){
                    if (newCountryName) {
                        $.ajax({
                            method: 'PUT',
                            url: 'https://api.parse.com/1/classes/Country/' + country.objectId,
                            data: JSON.stringify(
                                {'name': newCountryName}
                            ),
                            contentType: "application/json",
                            success: updateCountries,
                            error: errorLoadData
                        });
                    } else{
                        errorLoadData();
                    }
                }
            });
            $('#countries').find('.add-city').off().click(function () {
                var country = $(this).parent().data('country');
                modal({
                    type : 'prompt',
                    title : 'Add City to this Country',
                    text : "Name: ",
                    theme : 'atlant',
                    callback : addCityToCountry
                });
                function addCityToCountry(newCity){
                    if (newCity) {
                        $.ajax({
                            method: 'POST',
                            url: 'https://api.parse.com/1/classes/City',
                            data: JSON.stringify(
                                {
                                    'name': newCity,
                                    'country' : {
                                        "__type": "Pointer",
                                        "className": "Country",
                                        "objectId": country.objectId
                                    }
                                }
                            ),
                            contentType: "application/json",
                            success: updateCitys,
                            error: errorLoadData
                        });
                    } else{
                        errorLoadData();
                    }
                }
            });
        } else {
            $('#countries').append($('<li class="list-group-item list-group-item-danger">').text('No Results.'))
        }
    }
    function getCitys(data){
        $('#cities').children().remove();
        var countries = data.results;
        if (countries.length > 0) {
            $(countries).each(function (_, city) {
                var currentTemplate = listICityTemplate.replace('{{ListText}}', city.name);
                currentTemplate = $.parseHTML(currentTemplate);
                $(currentTemplate).data('city', city);
                $('#cities').append(currentTemplate);
            });
            $('#cities').find('.remove').off().click(function () {
                var city = $(this).parent().data('city');
                $.ajax({
                    method: 'DELETE',
                    url: 'https://api.parse.com/1/classes/City/' + city.objectId
                });
                var $this = $(this);
                $this.parent().remove();
            });
            $('#cities').find('.edit').off().click(function () {
                var city = $(this).parent().data('city');
                modal({
                    type : 'prompt',
                    title : 'Edit city name',
                    text : "Name: ",
                    theme : 'atlant',
                    callback : editCity
                });
                function editCity(newCityName){
                    if (newCityName) {
                        $.ajax({
                            method: 'PUT',
                            url: 'https://api.parse.com/1/classes/City/' + city.objectId,
                            data: JSON.stringify(
                                {'name': newCityName}
                            ),
                            contentType: "application/json",
                            success: updateCitys,
                            error: errorLoadData
                        });
                    } else{
                        errorLoadData();
                    }
                }
            });
        } else {
            $('#cities').append($('<li class="list-group-item list-group-item-danger">').text('No Results.'))
        }
    }
    function errorLoadData(){
        $(function () {
            modal({
                type: 'alert',
                title: 'Error!',
                text: 'Problem with connection with database.'
            });
        })
    }
    function uploadCountry(countryName) {
        if (countryName) {
            $.ajax({
                method: "POST",
                url: "https://api.parse.com/1/classes/Country",
                data: JSON.stringify(
                    {'name': countryName}
                ),
                success: updateCountries,
                contentType: "application/json",
                error: errorLoadData
            })
        } else{
            errorLoadData();
        }
    }
    function drawCountriesInSelect(data){
        var countries = data.results;
        $('#by-country').children().remove();
        $(countries).each(function (_, country) {
            $('#by-country').append($('<option>').attr('value', country.objectId).text(country.name).data('country', country));
        });
        $('#by-country').on('change', function () {
            var id = $(this).val();
            $.ajax({
                method: "GET",
                url: 'https://api.parse.com/1/classes/City?where={"country":{"__type":"Pointer","className":"Country","objectId":"' + id + '"}}',
                success: drawCitysByCountry,
                error: errorLoadData
            })
        });
        function drawCitysByCountry(data){
            $('#cities-by-country').children().remove();
            var cities = data.results;
            if (cities.length > 0) {
                $(cities).each(function (_, city) {
                    $('#cities-by-country').append($('<li class="list-group-item">').text(city.name))
                })
            } else{
                $('#cities-by-country').append($('<li class="list-group-item list-group-item-danger">').text('No Results.'))
            }
        }
    }
    $(function () {
        $('#add-country').click(function () {
            modal({
                type : 'prompt',
                title : 'Add Country',
                text : "Name: ",
                theme : 'atlant',
                callback : uploadCountry
            });
        });
    });
    $(function () {
        $.ajax({
            method: "GET",
            url: "https://api.parse.com/1/classes/Country",
            success: drawCountriesInSelect,
            error: errorLoadData
        });
    })
}());