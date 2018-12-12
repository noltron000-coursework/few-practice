// ------------------------------------------------
// Consider the PiggyBank a black box. You are not
// allowed to edit this
class PiggyBank {
	constructor() {
		this.account = 0
	}

	update() {
		this.account += 0.1
		console.log(this.account)
	}
}
// ------------------------------------------------

const accumulate = (Bank) => {
	setInterval(bank.account += 1, 1000)
}

const MyBank = new PiggyBank()
accumulate(MyBank)