class Collection {
	constructor(items = []) {
		this.items = items;
	}

	count() {
		return this.items.length
	}
}

class Origami {
	constructor(folds = 1) {
		this.folds = folds;
		this.collect();
	}

	foldMe() {
		console.log("Preparing to fold item...");
		this.foldAction();
		if (this.folds == 0) {
			console.log("makes a piece of paper");
		} else if (this.folds == 1) {
			console.log("makes a folded sheet");
		} else if (this.folds == 2) {
			console.log('makes an envelope');
		} else if (this.folds == 3) {
			console.log('makes a crane');
		} else if (this.folds == 4) {
			console.log(`makes a frog`);
		} else if (this.folds == 5) {
			console.log('makes an elephant');
		} else {
			console.log('makes a crumpled wad');
		}
	}

	foldAction() {
		for (let i = 0; i < this.folds; i++) {
			const step = 1 + i;
			console.log("fold step... " + step);
		}
	}

	collect() {
		myCollection.items.push(self);
	}
}

// IMPORTANT VARIABLE -- DO NOT REMOVE
const myCollection = new Collection();

// Create items for my collection
const crane = new Origami(3);
const frog = new Origami(4);
const elephant = new Origami(5);
const oops = new Origami(6);

crane.foldMe();
frog.foldMe();
elephant.foldMe();
oops.foldMe();

console.log("My collection has " + myCollection.count() + " items.");
