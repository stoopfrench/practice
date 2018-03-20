const array1 = []
const array2 = []
const array3 = []

for(let i = 0; i < 6000; i++){
	array1.push(Math.floor(Math.random() * 10000))
}
for(let i = 0; i < 4536; i++){
	array2.push(Math.floor(Math.random() * 10000))
}
for(let i = 0; i < 3249; i++){
	array3.push(Math.floor(Math.random() * 10000))
}

commonElement(array1,array2,array3)

// ======================================================

function commonElement(arr1,arr2,arr3) {
	
	arr1.sort((a,b)=>{return a-b})
	arr2.sort((a,b)=>{return a-b})
	arr3.sort((a,b)=>{return a-b})
		
	const common = []
	let i1 = 0
	let i2 = 0 
	let i3 = 0 
	let j = 0

	while(i1 < arr1.length && i2 < arr2.length && i3 < arr3.length){
		if(arr1[i1] === arr2[i2] && arr2[i2] === arr3[i3]){
			common.push(arr1[i1])
			i1++
			i2++
			i3++
		}
		else if (arr1[i1] < arr2[i2]) {
			i1++
		}
		else if (arr2[i2] < arr3[i3]) {
			i2++
		}
		else {
			i3++
		}
		j++
	}
	console.log('loops',j)
	console.log('#', common.length)
	console.log(common.join())
	
	return common.join()
}












