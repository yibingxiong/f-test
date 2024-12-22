class Dialog {
    constructor() {
        console.log(1);
    }
}

class SingleDialog {
    constructor(){
        if(SingleDialog.instance) {
            return SingleDialog.instance;
        } else {
            SingleDialog.instance = new Dialog(arguments);
            return SingleDialog.instance;
        }
    }
}

let a = new SingleDialog();
let b = new SingleDialog();

console.log(a === b);