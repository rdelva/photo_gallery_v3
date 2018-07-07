
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


 	//'
 		 var $result =  $('#search').val();	 

		$result= $result.toLowerCase().trim();

 		 if ($result !== ""){
 		 	searchforImage($result);

 		 }

 		 else {

 		 	$(".gallery a").show();
 		 	$('.gallery').removeClass('flex-start');
 		 	$('.gallery').addClass('flex-container');

 		 }

});



function searchforImage($result){

		var $imageList= $('.gallery a');



		$(".gallery a").hide();
		var $searchList = [ ];


		//Checks Search List before a value is entered to avoid repeated entries

		while($searchList.length > 0){
					
				$searchList.pop();

		}



		console.log("Search  List " + $searchList.length);


		for(var i = 0; i < $imageList.length; i++ ){

			var $altTag = $imageList[i].innerHTML;
			var n = $altTag.search($result);

		
			if(n > -1){ // found something
				
				//clears the search list
				$searchList.push($imageList[i]);

			} 


		}// end of for loop to push images		
		console.log("Search Built List " + $searchList.length);


		printImageList($searchList);


}


function printImageList($searchList){

		console.log("Printing " + $searchList.length)
		
				$(".gallery a").remove();


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
		
			$('.gallery').append(link);

	}

	
}








