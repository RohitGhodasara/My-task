$(document).ready(function(){
    $('<li><a class="text" href="detail.php?type=horror">horror</a></li>').appendTo("ul > li > ul > li")
});



function searchBar() {
    let br =$('#find');
    if (br.val() == "SEARCH"){
        br.val("GO");
        $('#sear').css({"width":"200px","opacity":"1"});
    }
    else {
        br.val("SEARCH");
        $('#sear').css({"width":"0","opacity":"0"});
        let text = $('#sear').value;
    }
}

function blur(){
    $('#sear').css({"width":"0","opacity":"0"});
}

function loadGame(text) {
    let qstr;
    if(typeof text === "string"){
        text = text.trim(' ');
        if(text.length <= 0)
        {
            return;
        }
        qstr = "name="+text;
        }
        else{
        qstr = "id="+text;
    }
    $.ajax({type: 'GET',
            url: "detail.php",
            data: qstr,
            success: function(result){
                $( "#parent").html(result)
            },
    });
}
function buy() {
   alert("kale aav jo");
}
