// let token = df12b502;
let title;
let year;
let plot;
let myUrl;
let verifyCheckStatus;

$(document).ready( () => {
$('#loader').hide();
$('#submit').click(function(){
  verify();
  if(verifyCheckStatus == true){
    getAllData();
  }

});

 
});

let verify = () => {

title = $('#title').val();
if(title == null || title == "") {
 
 // no title 
 alert('No Title');
<<<<<<< HEAD
 verifyCheckStatus = false; 
=======
 verifyCheckStatus = false;	
>>>>>>> 1506ba0531be4378abd31def4cab54f78a71795b

} else {
    
       year = $('#year').val();
       plot = $('#plot').val();

       if(year == null || year =="") { 
       myUrl = '&t=' + title + '&plot='+ plot + '&r=json';
        
       } else {

       myUrl = '&t=' + title + '&y=' + year + '&plot=' + plot + '&r=json';
       
       }
       
       verifyCheckStatus = true;

     }

}

<<<<<<< HEAD
let getAllData = () => {  
$.ajax({
    type : 'GET',
    // dataType : 'json',
    async : true,
    url : 'https://www.omdbapi.com/?apikey=df12b502' + myUrl,
    success : (response) => {
      alert(response.status);
      console.log(response);
=======
let getAllData = () => {	
$.ajax({
    type : 'GET',
    dataType : 'json',
    async : true,
    url : 'https://yts.unblocked.gdn/api/v2/list_movies.json',
    success : (response) => {
	    alert(response.status);
    	console.log(response);
>>>>>>> 1506ba0531be4378abd31def4cab54f78a71795b

    },

    error : (err) => {
    
    alert(err.Error);

    },

    beforeSend: () => {
<<<<<<< HEAD
      
=======
    	
>>>>>>> 1506ba0531be4378abd31def4cab54f78a71795b
    $('#loader').show();
    },

    complete : () => {
    $('#loader').hide();
    
    }
}); //end of AJAX CALL
<<<<<<< HEAD
  
  
  
  
  
=======
	
	
	
	
	
>>>>>>> 1506ba0531be4378abd31def4cab54f78a71795b
}
