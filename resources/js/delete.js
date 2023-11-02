$(function() {
    $('.delete').click(function(){

        Swal.fire({
            title: 'Jesteś pewien?',
            text: "Nie będziesz mógł cofnąć tej decyzji!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak, usuń!',
            cancelButtonText: 'Anuluj'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    method: "DELETE",
                    url: deleteUrl + $(this).data("id") 
                })
                .done(function(data) {
                    window.location.reload();
                })
                .fail(function(data){
                    Swal.fire({
                        icon: 'error',
                        title: data.responseJSON.message,
                        text: 'Something went wrong!'
                      })
                })
            }
          })
    })
  });