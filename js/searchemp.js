
$('#frmcontact').on('submit', function(e){
    e.preventDefault();

$('#success_message').fadeIn().html('Checking Data');
$("#btnadd").prop('disabled', true);

let fd = new FormData(this);
$.ajax({
    url: 'https://exceptionalpanaceasolutions.com/Angular/getinfo.php',
    type: 'POST',
    data:  fd,
    contentType: false,
    processData:false,
    success: function(data) 
    {
       alert(data);
  
            $('#success_message').fadeIn().html('Data Submitted sucessfully');
            setTimeout(function() {
                $('#frmcontact')[0].reset();
                $("#btnadd").prop('disabled', false);
                $('#success_message').fadeOut("slow");
            }, 1000 );
        },
    });
});