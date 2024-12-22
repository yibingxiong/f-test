class BaiduMap {
    show(lat, lng) {
        console.log(`渲染: 经度${lng}, 纬度${lat}`);
    }
}

class GaodeMap {
    display(lng, lat) {
        console.log(`渲染: 经度${lng}, 纬度${lat}`);
    }
}

class GaodeMapAdapter {
    constructor() {
        this.map = new GaodeMap();
    }
    show(lat, lng) {
        this.map.display(lng, lat);
    }
}

function renderMap(map) {
    if (typeof map.show === 'function') {
        map.show(1,2);
    }
}

renderMap(new GaodeMapAdapter());
renderMap(new BaiduMap());