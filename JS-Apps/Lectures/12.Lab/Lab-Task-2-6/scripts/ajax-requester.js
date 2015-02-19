(function(){
    var block = '';
    var question = '';
    var answers = '';
    var label = '';
    $.ajax({
        type: 'GET',
        url: 'https://api.parse.com/1/classes/Question',
        dataType: 'json',
        success: function (data) {
            // Visualize question with answers
            // Attach event handler to Vote button -> AJAX call to vote with updated answers
            // Close the questions container

            $.each(data.results, function(index, value){
                block +='<li data-id=' + value['objectId'] + '">';
                question = "<div>" + value['questionText'] + "</div>";
                block += question;
                block +='<form>';
                var answersJSON = JSON.parse(value['answers']);
                $.each(answersJSON, function(name, score){
                    answer = '<input type="radio" name="answers-'+ value['objectId'] +'" id="answer-'+ name + '" value="'+ name +'">';
                    label = '<label for="answer-'+ name + '">' + name +' </label>';
                    block += answer;
                    block += label;
                    block += '<br />';
                });

                block += '<input type="submit" class="voteBtn" value="Vote" />';
                block += '</form>';
                block += '</li>';

                $('#questions').append(block);
                block = '';
            });
        },
        error : function(error){
            console.log(error);
        }
    });
}());