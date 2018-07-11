
//Type in word into search bar
//deleting word  brings up all images
//search bar takes in value
//looks at each photo
// if alt tag has letter or word show it
// if alt tag doesn't find it hide it

//compare result item to each alt tag
//if value matches put it in result list







 $('#search').on('keydown', function(){


 	//'
 		 var $result =  $('#search').val();	 

		$result= $result.toLowerCase();

 		 if ($result !== ""){
 		 	searchforImage($result);

 		 }

 		 else {

 		 	$('.gallery img').show();

 		 }

 	

});



function searchforImage($result){



		$('.gallery img').each(function(index){

			var imageAlt = $(this).attr('alt');

			//search for image
			var found = imageAlt.search($result);

			if(found === -1 ) {

				$(this).toggle();
			} 
		

		});
}


  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false
    })



