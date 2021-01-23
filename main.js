$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});

<script>
 $(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "dd-mm-yyyy",
        changeMonth:true,
        changeYear:true,
        showButtonPanel: true,
        yearRange: "-100:+0"
    });
});

 $(document).ready(function()
     {
    $('#mod_cls').on('click', function () {
  $('#myform').trigger("reset");
    console.log($('#myform'));
 })
  });

$(document).ready(function(){
  $("#Btnn").click(function(){
    $("#tablepopup").modal('show');
  });
});



