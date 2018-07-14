
//Type in word into search bar
//deleting word  brings up all images
//search bar takes in value
//looks at each photo
// if alt tag has letter or word show it
// if alt tag doesn't find it hide it

//compare result item to each alt tag
//if value matches put it in result list







 $('#search').on('keyup', function(){


 	//'
 		 var $result =  $('#search').val();	 

		$result= $result.toLowerCase();

 		 if ($result !== ""){
 		 	searchforImage($result);

 		 }

 		 else {

 		 	$('.gallery a').show();

 		 }

 	

});



function searchforImage($result){

		$('.gallery a').each(function(index){

			//changes alt tags text to lowercase
			var imageAlt = $(this).attr('data-alt').toLowerCase();

			//search for image
			var found = imageAlt.indexOf($result);

			if(found === -1 ) {

				$(this).css('display', 'none');
			}
		 

		});

	

}


  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false
    })



