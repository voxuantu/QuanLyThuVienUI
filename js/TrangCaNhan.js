var down = false;

function toggleEdit() {

    if (down) {
        document.getElementById('nuteditThongTin').classList.remove("display-edit-button");

        $(document).ready(function () {
            $(".thongtincanhan label.tieude").each(function (i, obj) {
                obj.classList.remove('hide-element')
            })
        })
        $(document).ready(function () {
            $(".thongtincanhan input.form-control").each(function (i, obj) {
                obj.classList.add('hide-element')
            })
        })
        down = false;
    } else {
        document.getElementById('nuteditThongTin').classList.add("display-edit-button");

        $(document).ready(function () {
            $(".thongtincanhan label.tieude").each(function (i, obj) {
                obj.classList.add('hide-element')
            })
        })
        $(document).ready(function () {
            $(".thongtincanhan input.form-control").each(function (i, obj) {
                obj.classList.remove('hide-element')
            })
        })

        down = true;
    }
}
function OpenModal(mamuonsach, matrangthai) {
    $(document).ready(
        function () {
            if(matrangthai != 3){

                $('.modal .nutbam').addClass('hide-element');
            }
            $('.modal').modal('show');
        }
    )
}
