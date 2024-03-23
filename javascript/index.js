$(document).ready(function(){
    $("#up").click(function(){
        document.getElementById("sl-adm1").style.display="none";
        document.getElementById("sl-adm2").style.display="none";
        document.getElementById("sl-adm3").style.display="none";
        document.getElementById("up").style.color="grey";
        document.getElementById("down").style.color="black";

        // document.getElementById("sl-adm3").style.display="none";
        $(".sl-adm2").slideDown();
    })
    $("#down").click(function(){
        document.getElementById("sl-adm4").style.display="none";
        document.getElementById("sl-adm5").style.display="none";
        document.getElementById("sl-adm6").style.display="none";
        document.getElementById("down").style.color="grey";
        document.getElementById("up").style.color="black";
        $(".sl-adm1").slideDown();
    })
})