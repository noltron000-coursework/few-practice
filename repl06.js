const callbacks = [];

for (let i = 0; i < 4; i++) {
	callbacks.push(() => {
		console.log(i)
	});
}

callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();

/*
the most simple possible change is to change var to let.
var gets hoisted.
this means that in any instance throughout the program...
...it has the same shared value...!
For example, callbacks is listed as [i,i,i,i].
That means it would return [4,4,4,4] as an output!
But there's a better way... keep reading!!!
*/

console.log('\n\n\n\n\n')

/*
its bad practice to declare a function in a loop.
lets make our function first, and put the loop inside.
Since all its doing is printing 0-3, we can just print each iteration of the loop.
This makes the program smaller, less repetitive (DRY), and easier to understand.
Finally, it returns a value which makes it more useful elsewhere too!
*/

// the easiest change is
const callbacks_v2 = () => {
	array = []
	let i
	for (i = 0; i < 4; i += 1) {
		array.push(i)
		console.log(i)
	}
	return array
}

callbacks_v2()