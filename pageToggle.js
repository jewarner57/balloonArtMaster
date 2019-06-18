var homePageOpen = true;

$("#menuButton").click(function() {
                
    $("#menuDropDown").slideToggle(200);
                
});

function openHome() {
    homePageOpen = true;
            
    closeOther();
    closeOther2();
            
    $("#slideShowContainer").fadeIn();
    resizeSlideShowDesktop();
}

function openInfo() {
    windowHeight = $(window).height();
                
        homePageOpen = false;
            
        $("#otherPage").css("zIndex", "7");
        $("#otherPage").css("display", "block");
            
        $("#otherPage").animate({
            width:pageWidth,
            marginLeft:pageMargin,
            height:"1300px",
            borderRadius:"0",
            zIndex: "7"
        }, 600);
            
        closeHome();
        closeOther2();
            
    setTimeout(function() {
        if (homePageOpen == false) {
        $("#slideShowContainer").fadeOut();
        }
    }, 450)
}

function openAboutMe() {
    windowHeight = $(window).height();
            
            
        homePageOpen = false;
            
        $("#otherPage2").css("zIndex", "7");
        $("#otherPage2").css("display", "block");
            
        $("#otherPage2").animate({
            width:pageWidth,
            marginLeft:pageMargin,
            height:"100vh",
            borderRadius:"0",
            zIndex: "7"
        }, 600);
            
        closeHome();
        closeOther();
                
    setTimeout(function() {
        if (homePageOpen == false) {
            $("#slideShowContainer").fadeOut();
        }
    }, 450)
}

$("#button3").click(function() {
    openAboutMe();
});
$("#aboutMe").click(function() {
   openAboutMe(); 
});
$("#button2").click(function() {
    openInfo();
});
$("#info").click(function() {
    openInfo();
});
$("#homeButton").click(function() {
    openHome();
}); 
$("#home").click(function() {
    openHome(); 
});       
        
function closeHome() {
        $("#homePage").css("zIndex", "1");
                
        $("#homePage").animate({
            width:"0",
            height:"0"
        }, 400, function() {
                    
            $("#hosmePage").css("display", "none");
            $("#homePage").css("borderBottomRightRadius", "100px");
                    
        }); 
            
}
        
function closeOther() {
    $("#otherPage").css("zIndex", "1");
                
    $("#otherPage").animate({
        width:"0",
        height:"0",
    },400, function() {
                    
        $("#otherPage").css("display", "none");
        $("#otherPage").css("borderBottomRightRadius", "100px");
                    
    }); 
            
}
        
function closeOther2() {
    $("#otherPage2").css("zIndex", "1");
                
    $("#otherPage2").animate({
        width:"0",
        height:"0"
    },400, function() {
                    
        $("#otherPage2").css("display", "none");
        $("#otherPage2").css("borderBottomRightRadius", "100px");
                    
    }); 
            
}