class origami {

}

const widget = (f) => {
	if (f === undefined) {
		this.folds = 1
	} else { this.folds = f; }

	this.Id = widget.nextCount();

}

widget.prototype.origami = () => {
	console.log("Preparing to fold unit: " + this.Id)
	this.foldAction();
	if (this.folds === 2) {
		console.log('makes an envelope');
	}

	if (this.folds == 3) {
		console.log('makes a crane')
	}

	if (this.folds === 4) {
		console.log(`makes a frog`)
	}

	if (this.folds === 5) {
		console.log('makes an elephant')
	}

	if (6 == this.folds) { console.log('makes a crumpled wad') }
}

widget.prototype.foldAction = () => {
	console.log('???')
	for (i = 0; i < this.folds; i++) {

		let step = 1 + i; console.log("fold... " + step)

	}
}

widget.nextCount = () => {
	widget.count = widget.count || 0
	widget.count += 1;
	return widget.count
}

widget.getCount = () => {
	return widget.count;
}

const crane = new widget(3)
const frog = new widget(4);
const elephant = new widget(5);
const oops = new widget(6);

console.log(widget.getCount())

crane.origami()
frog.origami();
elephant.origami();
oops.origami()