// global variable, do not change!
let ID = 0

class User {
	constructor(name, prefix = '—') {
		this.name = name;
		this.prefix = prefix;
		this.id = ID
		ID += 1
	}
	describe() {
		const description
			= this.prefix + ' '
			+ this.name + ' '
			+ `id:${this.id}`
		return description
	}
}

class Admin extends User {
	constructor(name, prefix, access = 1) {
		super(name, prefix);
		this.access = access;
	}
	describe() {
		const description
			= this.prefix.toUpperCase() + ' '
			+ this.name.toUpperCase() + ' '
			+ `ID:${this.id}`
		return description
	}
}

class Moderator extends Admin {
	constructor(name, prefix) {
		super(name, prefix);
		this.name = name.toUpperCase()
	}
}

// -----------------------------------------------
// Test Code
const andy = new User('Andy', 'Mr.')
const brenda = new User('Brenda', 'Queen')
const cesar = new User('Cesar')
const dan = new Admin('Dan', 'Pooh Bah')
const ellen = new Moderator('Ellen', 'Ms.')

console.log(andy.describe())
console.log(brenda.describe())
console.log(cesar.describe())
console.log(dan.describe())