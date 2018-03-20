const array1 = [1,2,3,4]
const array2 = [2,3,4,5]

function addArrays(arr1, arr2){
	const sum = arr1.map(function(num,i){
		return num + arr2[i]
	})
	return sum
}

console.log(addArrays(array1,array2))