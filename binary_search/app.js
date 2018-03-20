const myArray = []
for(let i = 0; i < 100; i++){
	myArray.push(Math.floor(Math.random() * 200))
}

let counter = 0
function binarySearch(arr, value){
	arr.sort(function(a,b){return a-b})
	console.log(arr.length)
	const mid = Math.floor(arr.length/2)
	if(arr[mid] === value){
		counter++
		console.log('counter',counter)
		return console.log('value found!!!',arr[mid])
	}
	else if(value < arr[mid] && arr.length > 1){
		counter++
		return binarySearch(arr.slice(0, mid), value)
		}	
	else if(value > arr[mid] && arr.length > 1){
		counter++
		return binarySearch(arr.slice(mid, arr.length),value)
	}
	else {
		console.log('counter',counter)
		console.log(value,'not found ):')
		return
	}
}

binarySearch(myArray, 8)


// console.log('myArray',myArray)