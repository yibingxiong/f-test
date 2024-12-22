class Light {
    constructor(){
        this.offLightState = new OffLightState(this);
        this.onLightState = new OnLightState(this);
    }
    init() {
        this.currentState = this.offLightState;
    }
    setState(newState) {
        this.currentState = newState;
    }
    excute() {
        this.currentState.buttonPressed();
    }
}

class State {
    buttonPressed() {
        throw new Error('必须被重写');
    }
}

class OffLightState extends State{
    constructor(light) {
        super(light);
        this.light = light;
    }
    buttonPressed() {
        console.log('开灯');
        this.light.setState(this.light.onLightState);
    }
}

class OnLightState extends State{
    constructor(light) {
        super(light);
        this.light = light;
    }
    buttonPressed() {
        console.log('关灯');
        this.light.setState(this.light.offLightState);
    }
}

let light = new Light();
light.init();
light.excute();
light.excute();