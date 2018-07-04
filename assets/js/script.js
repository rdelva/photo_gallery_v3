
//Type in word into search bar
//search bar takes in value
//hides all images
//build gallery List
//compare result item to each alt tag
//if value matches put it in result list
//print out new list into flex-container
//if word is in alt tag  put it in a list 
// hide all items
// print out list
//if no item is found dont hide list
//output new list onto screen


 


 $('#search').on('keyup', function(){
 		var $result =  $('#search').val();	 

		$result= $.trim($result);

 		 if ($result !== ""){
 		 	searchforImage($result);

 		 }

 		 else {

 		 	console.log("The box is empty");
 		 	$(".gallery a").show();
 		 	$('.gallery').removeClass('flex-start');
 		 	$('.gallery').addClass('flex-container');

 		 }

 });



function searchforImage($result){

		var searchList = [ ];
		var itemFound = false;






		var $imageList= $('img');


		for(var i = 0; i < $imageList.length; i++ ){

			var $altTag = $imageList[i].alt;

			var n = $altTag.search($result);

		
			if(n > -1){ // found something
				itemFound = true;
				$(".gallery a").hide();
					console.log("now" + searchList.length);


					if(searchList.length !== 0 ) {
						for (var i = 0; i < searchList.length; i++)
						$imageList.remove()	
						searchList.pop();

					}


			} else {

					if(searchList.length !== 0 ) {
						for (var i = 0; i < searchList.length; i++)
						searchList.pop();

					}

				searchList.push($imageList[i]);
				//console.log(searchList);

			}




		}// end of for loop to push images		
		console.log("later" + searchList.length);


		printImageList(searchList);



}


function printImageList(searchList){


		console.log("later2" + searchList.length);


	for (var i=0; i < searchList.length; i++)
	{

		$(".flex-container").append('<img src="'+searchList[i].src+'">');


	}

		if(searchList.length < 4){
					$('.gallery').removeClass('flex-container');
					$('.gallery').addClass('flex-start');
				}
				else {

					$('.gallery').addClass('flex-container');

				}
	
}



/*
		


if ($textbox !== "") {

	console.log("hi");

	for(var i = 0; i < $imageList.length; i++ ){

		if($imageList[i].alt.indexOf('$search') ){

			var $test = $imageList[i].alt.indexOf('$search')
			console.log("turn" + i);
			console.log($imageList[i].alt);
			console.log($test);

		}
	}	
}	

else {

	console.log("ho");
}

*/





