 function fib(n){
 	console.time("test")
	const array = [0,1]
	let a = 0,b = 1,c,j = 0
	if(n === 0){return 0}
	for(let i = 0; i < n; i++){
		c=a
		a=b
		b=c+a
		j++
		array.push(b)
	}
	console.timeEnd("test")

	return {
		sequence: array,
		number: b,
		loops: j,
	}
}

console.log(fib(process.argv[2] || 100))
