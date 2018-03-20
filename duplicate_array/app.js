
function duplicate(arr){
	arr.map((i) => {
		arr.push(i)
	})
	return arr
}
const array = [1,2,3,4,5]

console.log(duplicate(array))