class Beverage {
    boilWater() {
        console.log('把水煮沸');
    }
    brew() {
        throw new Error('必须被重写');
    }
    pourInCup() {
        throw new Error('必须被重写');
    }
    addCondiments() {
        throw new Error('必须由子类重写');
    }
    start() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
}

class Coffe extends Beverage {
    brew() {
        console.log('用沸水冲泡咖啡');
    }
    pourInCup() {
        console.log('把咖啡倒进杯子');
    }
    addCondiments() {
        console.log('加糖和牛奶');
    }
}

class Tea extends Beverage {
    brew() {
        console.log('用沸水冲泡茶叶');
    }
    pourInCup() {
        console.log('把茶倒进杯子');
    }
    addCondiments() {
        console.log('加柠檬');
    }
}

let coffee = new Coffe();
let tea = new Tea();

coffee.start();
tea.start();

// output
// 把水煮沸
// 用沸水冲泡咖啡
// 把咖啡倒进杯子
// 加糖和牛奶
// 把水煮沸
// 用沸水冲泡茶叶
// 把茶倒进杯子
// 加柠檬