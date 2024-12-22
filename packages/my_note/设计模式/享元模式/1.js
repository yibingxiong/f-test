class Model {
    constructor(sex) {
        // 内部状态
        this.sex = sex;
    }
    takePhoto() {
        console.log(`sex=${this.sex}, underwear=${this.underwear}`);
    }
}

let maleModel = new Model('男');
let femaleModel = new Model('女');

for(let i = 1; i <= 50; i++) {
    // 外部状态
    maleModel.underwear = `underwear${i}`;
    maleModel.takePhoto();
}

for(let i = 1; i <= 50; i++) {
    // 外部状态
    femaleModel.underwear = `underwear${i}`;
    femaleModel.takePhoto();
}