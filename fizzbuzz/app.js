
// for(let i = 0; i <= 100; i++){
// 	if(i != 0){
// 		if(i % 15 === 0){
// 			console.log(i,'fizzbuzz')
// 		}
// 		else if(i % 5 === 0){
// 			console.log(i,'buzz')
// 		}
// 		else if(i % 3 === 0){
// 			console.log(i,'fizz')
// 		}
// 	}
// }

function fizzbuzz(i){
	if(i != 0){
		if(i % 15 === 0){
			console.log(i,'fizzbuzz')
		}
		else if(i % 5 === 0){
			console.log(i,'buzz')
		}
		else if(i % 3 === 0){
			console.log(i,'fizz')
		}
		else{
			console.log('aint that')
		}
	}
	else{
		console.log('0')
	}
}

fizzbuzz(process.argv[2])