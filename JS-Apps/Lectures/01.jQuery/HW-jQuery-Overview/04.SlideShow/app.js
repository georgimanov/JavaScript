$(document).ready(function () {
    var paused = false;
    var tickInterval = 5000;
    var currentSlide = 0;
    var slide = $('#slide');
    var nextBut = $("<button id='next'>></button>");
    var prevBut = $("<button id='prev'><</button>");
    var slides = ["<img src='images/lion-image1.jpg'/>",
        "<img src='images/lion-image2.jpg'/>",
        "<img src='images/lion-image3.jpg'/>",
        "<img src='images/lion-image4.jpg'/>"
    ];

    function hideButtons() {
        var buttons = arguments;
        for (var b in buttons) {
            if (buttons.hasOwnProperty(b)) {
                buttons[b].fadeOut(500);
            }
        }
    }

    function showButtons() {
        var buttons = arguments;
        for (var b in buttons) {
            if (buttons.hasOwnProperty(b)) {
                buttons[b].fadeIn(500);
            }
        }
    }

    function showSlide() {
        slide.html(slides[currentSlide]).fadeIn(700);
        slide.append(nextBut, prevBut);
        hideButtons(nextBut, prevBut);

        slide.mouseleave(function () {
            paused = false;
            hideButtons(nextBut, prevBut);
        });

        slide.mouseover(function () {
            paused = true;
            showButtons(nextBut, prevBut);
        });

        nextBut.click(function () {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
            }
            else {
                currentSlide = 0;
            }

            slide.fadeOut(500);
            setTimeout(showSlide, 600);

        });

        prevBut.click(function () {
            if (currentSlide > 0) {
                currentSlide--;
            }
            else {
                currentSlide = slides.length - 1;
            }

            slide.fadeOut(500);
            setTimeout(showSlide, 600);
        });
    }

    setInterval(function () {
        if (paused) {
            return false;
        }
        else {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
            }
            else {
                currentSlide = 0;
            }

            slide.fadeOut(500);
            setTimeout(showSlide, 600);
        }
    }, tickInterval);

    showSlide();
});