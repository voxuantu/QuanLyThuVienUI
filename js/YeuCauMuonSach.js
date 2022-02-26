function OpenModal() {
    $(document).ready(
        function () {
            $('.modal').modal('show');
        }
    )
}

function OpenModelTraSach(){
    $(document).ready(
        function () {
            $('.modalTraSach').modal('show');
        }
    )
}

var checkAll = false;

function CheckAllBook(){
    $(document).ready(
        function () {
            if(checkAll){
                $('.modalTraSach tbody input').each(function(i,obj){
                    $(this).prop('checked', false);
                })
                checkAll = false;
            }else{
                $('.modalTraSach tbody input').each(function(i,obj){
                    $(this).prop('checked', true);
                })
                checkAll = true;
            }
        }
    )
}