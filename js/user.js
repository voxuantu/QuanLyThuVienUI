var show = false;

function toggleUserBox(){
    var userbox = document.getElementById("userBox");
    if(show){
        userbox.classList.remove("showElement");
        show = false;
    }else{
        userbox.classList.add("showElement");
        show = true;
    }
}