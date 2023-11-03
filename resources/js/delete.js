$(function() {
    $('.delete').click(function(){

        Swal.fire({
            title: confirmDelete,
            text: moreInfoDelete,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: deleteAgree,
            cancelButtonText: deleteCancel
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