console.time('test')
let loop = 0 
const splitGenres = ["action","adventure","action","horror","thriller",,"comedy"]
splitGenres.sort()
const filteredGenres = splitGenres.filter((element, i) => {
	console.log("element",element)
	console.log("i",i)
	// console.log("self",self)
	loop++
    return i === splitGenres.indexOf(element)
})
console.timeEnd('test')
console.log(filteredGenres,loop)