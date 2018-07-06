
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

 		 	//console.log("The box is empty");
 		 	$(".gallery a").show();
 		 	$('.gallery').removeClass('flex-start');
 		 	$('.gallery').addClass('flex-container');

 		 }

 });



function searchforImage($result){

		//console.log($result);
		var $imageList= $('.gallery a');

		$(".gallery a").hide();
		var $searchList = [ ];


		console.log("Amount of Items in List Before Entering Value  " + $searchList.length);

		if($searchList.length !== 0){
			//Checks Search List before a value is entered.
			for (var i = 0; i < $searchList.length; i++){
						
							$searchList.pop();
							$(".gallery a").remove();

			}
		}


			//console.log($imageList);


		for(var i = 0; i < $imageList.length; i++ ){

			var $altTag = $imageList[i].innerHTML;
			var n = $altTag.search($result);

		
			if(n > -1){ // found something
				
				//clears the search list
				$searchList.push($imageList[i]);

			} 


		}// end of for loop to push images		
		console.log("Search List " + $searchList.length);


		printImageList($searchList);


}


function printImageList($searchList){

		console.log("Printing " + $searchList.length)
		


		if($searchList.length < 4){
					$('.gallery').removeClass('flex-container');
					$('.gallery').addClass('flex-start');
		} else {

					$('.gallery').addClass('flex-container');

		}

		for (var i=0; i < $searchList.length; i++)
		{	
			
			//<a href=""><img src=""></a>
			var photo = $searchList[i];
			var link = "<a href='"; 
			link += photo.href; 
			link += "'>";
			link += photo.innerHTML.trim();
			link += "</a>"
			console.log(link);


		
			$('.gallery').append(link);

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





