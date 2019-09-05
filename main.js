
(function(){
    var init = function(){
        setToggleNavbar();
        setCloseNavbar();
        setSlowScrollDown();

        $(window).off("resize");
        $(window).on("resize", function(){
            setCloseNavbar();
        });
    };

    var setToggleNavbar = function(){
        var bugger = $(".navbar .burger");
        var rightSection = $(".navbar .right_section");

        bugger.on("click", function(){
            rightSection.toggleClass("showing");
        });
    };

    var setCloseNavbar = () => {
        var rightSection = $(".navbar .right_section");
        var rightSectionLink = $(".navbar .right_section .link");
        var deviceWidth = window.screen.width;

        if(deviceWidth <= 1024){
            rightSectionLink.on("click", function(){
                rightSection.removeClass("showing");
            });
        }
    };

    var setSlowScrollDown = function(){
        var linkButton = $(".navbar .right_section .link");

        linkButton.on("click", function(){
            var me = $(this);
            var gethref = me.attr("href");
            var gethrefSeletor = $(gethref);
            var htmlSelector = $("body, html");

            htmlSelector.animate({
                scrollTop: gethrefSeletor.position().top - 70
            }, 700);

            return false;
        });
    };

    init();
})();
