const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = []

for(let i = 1; i <= 26; i++){
	numbers.push(i)
}

function combine(arr1,arr2){
	const newArray = []
	let big, small
	let iterator = 0
	if(arr1.length === arr2.length){
		small = arr1
		big = arr2
	}
	else if(arr1.length > arr2.length){
		small = arr2
		big = arr1
	}
	else if(arr1.length < arr2.length) {
		small = arr1
		big = arr2
	}
	for(let i = 0; i < big.length; i++){
		newArray.push(`${small[iterator]},${big[i]}`)
		iterator++
		if(iterator >= small.length){
			iterator = 0
		}
	}
	console.log(newArray)
	return newArray
}

combine(letters, numbers)