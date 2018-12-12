class Person {
	constructor(name, age, id) {
		this.name = name;
		this.age = age;
		this.id = id;
	}
	whoIs() {
		const info
			= '===INFORMATION===\n'
			+ `Name: ${this.name}\n`
			+ `Age: ${this.age}\n`
			+ `ID: ${this.id}\n`
		return info
	}
}

const Wegman = new Person('Wegman', 33, 9348576)

console.log(Wegman.whoIs())