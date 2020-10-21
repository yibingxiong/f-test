class SingleDialog {
    static getInstance() {
        if(!this.instance) {
            this.instance = new SingleDialog();
        }
        return this.instance;
    }
}


let a = SingleDialog.getInstance();
let b = SingleDialog.getInstance();
console.log(a===b); // true