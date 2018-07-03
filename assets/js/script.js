
//Type in word into search bar
// all images should disappear
//assign word to variable
//search to see if the word is in the alt tag
//if word is in alt tag  put it in a list 
// hide all items
// print out list
//pull all items into a list
//compare word to each item
//if index has word push it to a new list
//output new list onto screen

//var $imageList= $('img');
//console.log($imageList);

 


 $('#search').on('keyup click', function(){
 		var $result =  $('#search').val();
 		 
 		 if ($result !== ""){
 		 	searchforImage($result);

 		 	$(".flex-container a").hide();
 		 }

 		 else {

 		 	console.log("The box is empty");
 		 }

 });



function searchforImage($result){

		var searchList = [ ];


		for(var i = 0; i < $imageList.length; i++ ){

			var $altTag = $imageList[i].alt;

			var n = $altTag.search($result);

			//console.log(n);


			if(n !== -1){

				searchList.push($imageList[i]);
				console.log(searchList);
				printImageList(searchList);

			}



	}


}


function printImageList(searchList){


	for (var i=0; i <searchList.length; i++)
	{

		$(".flex-container").append('<img src="'+searchList[i].src+'">');
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





