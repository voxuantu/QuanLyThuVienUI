function SuaSach() {
    $(document).ready(function () {
        $('.title_themmoi').text("Chỉnh sửa sách");
    });
}
function HienFormThemSachs(){
    $(document).ready(function () {
        $('.title_themmoi').text("Thêm sách mới");
        $('#tensach').val("");
        $('#tacgia').val("");
        $('#soluong').val("");
        $('#mota').val("");
        $('select #default').prop('selected', true);
    });
}