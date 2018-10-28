
let title;
let year;
let plot;
let myUrl;
let verifyCheckStatus;
// $('#loader').hide();
$(document).ready(()=>{


$('#submit').click(function(){
   verify();
  if(verifyCheckStatus == true){
    getAllDetails();
  }

}); 
});



let verify = () => {

title = $('#title').val();
if(title == null || title == "" || title == undefined) {
 
 // no title 
 alert('No Title');
 verifyCheckStatus = false; 
} else {
    
       year = $('#year').val();
       plot = $('#plot').val();

       if(year == null || year == "" || year.length > 4 || year == undefined) { 
       myUrl = '&t=' + title + '&plot='+ plot + '&r=json';
        
       } else {

       myUrl = '&t=' + title + '&y=' + year + '&plot=' + plot + '&r=json';
       
       }
       
       verifyCheckStatus = true;
       myUrl = 'https://www.omdbapi.com/?apikey=df12b502' + myUrl;

     }

}





  /*Fetching input from searchbar ends*/

 let getAllDetails = () => {
    
        // To get response
        $.ajax({
          type:"GET",
          url:myUrl,
          success: (response) => {
             console.log(response);
             
             $('#gallery_card1').html(`
              <div class="card card-3">
              <img class="my-card-img img-fluid " src="${response.Poster}" alt="Card image cap" >
              <div class="card-body">
              <h5 class="card-title">${response.Title}</h5>
              <p class="card-text">${response.Plot}</p>
              <p class="card-text"><small class="text-muted">Rating ${response.imdbRating} </small></p>
              </div>
              </div>`)




            
          },

          timeout:10000,
            error: function (jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        alert(msg);
    },

          beforeSend: () => {
            $('#loader').show();
    
          },

          complete : () => {
           $('#loader').hide();
            }

    });

  }
