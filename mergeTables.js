//this function merges to sorted arrays into 1	
			function mergeTables(tab1,tab2)
			{
				//here we check if first table is empty. If so we just have to return second array
				if(tab1.length ===0){
					return tab2;
				}
				// same as above but for second array
				if(tab2.length ===0){
					return tab1;	
				} 

				var result = []; // here we will store our merged table
				var resultLength = tab1.length + tab2.length; // merged table length
				var j = 0; // iterator for first table
				var k = 0; // iterator for second table


				for(var i = 0; i<resultLength;i++){
					if(tab1[j] >tab2[k]&&k<tab2.length){ // here we check which element is greater and also we check if we are out of array2
						result.push(tab2[k]); // adding elemnt to our reult table
						k++; // incramantig iterator
						
					}
					else{
						if(j<tab1.length) // e check if we are out of array1
						{
							result.push(tab1[j]); //adding elemnt to our reult table
							j++;  //incramantig iterator
						}
					}
				}


				return result;
			}