var down = false;
    
    function toggleEdit(){
        var a = document.getElementById('hovaten');
        var b = document.getElementById('sodt');
        var c = document.getElementById('email');
        var d = document.getElementById('diachi');
        if(down){
            document.getElementById('nuteditThongTin').classList.remove("display-edit-button");

            down=false;
        }else{
            document.getElementById('nuteditThongTin').classList.add("display-edit-button");
            
            a.attributes.removeNamedItem('readonly');
            b.attributes.removeNamedItem('readonly');
            c.attributes.removeNamedItem('readonly');
            d.attributes.removeNamedItem('readonly');
            down=true;
        }
    }