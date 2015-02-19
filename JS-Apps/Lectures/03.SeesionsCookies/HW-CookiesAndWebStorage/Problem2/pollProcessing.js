(function(){
    $(function(){
        var timeLeft=300;
        var isRunning = true;
        var fontSize = 16;

        if(localStorage.getItem('isRunning')=='false')
        {
            $("#submit").attr("disabled", "disabled");
            $(":radio").attr("disabled", "disabled");
            isRunning = false;
        }
        var submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', function (e)
        {
            isRunning = false;
            localStorage.setItem('isRunning', isRunning);
            $(":radio").attr("disabled", "disabled");
            $("#submit").attr("disabled", "disabled");
        });
        function showCorrectAns()
        {
            $(":radio:checked").next().css("background-color","red");
            $('input[name=question1][value=q1a1]').next().css("background-color","green");
            $('input[name=question2][value=q2a2]').next().css("background-color","green");
            $('input[name=question3][value=q3a3]').next().css("background-color","green");
            $('input[name=question4][value=q4a4]').next().css("background-color","green");
        }

        if (localStorage.getItem('timeLefter') !== null || localStorage.timeLefter == 0)
        {
            timeLeft  = localStorage.timeLefter;
        }

        document.getElementById("timer").innerHTML=timeLeft ;

        var timeLefter=setInterval(timer, 1000);

        function timer()
        {
            if(!isRunning)
            {
                showCorrectAns();
                return;
            }
            timeLeft=timeLeft-1;
            localStorage.setItem('timeLefter',timeLeft);

            if (timeLeft <= 0)
            {
                $(":radio").attr("disabled", "disabled");
                $("#submit").attr("disabled", "disabled");
                localStorage.setItem('isRunning', false);
                clearInterval(timeLefter);
                document.getElementById("timer").innerHTML=timeLeft ;
                showCorrectAns();
                return;
            }
            document.getElementById("timer").innerHTML=timeLeft ;
            if(timeLeft <= 5)
            {
                fontSize+=10;
            }
            document.getElementById("timer").style.fontSize=''+fontSize+'px';
        }


    })
})();