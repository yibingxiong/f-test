// 例子来源 https://www.kancloud.cn/kancloud/learn-js-design-patterns/56474

const CarManager = {

    // request information
    requestInfo: function (model, id) {
        return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function (model, id) {
        return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function (model, id) {
        return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }

};


CarManager.execute = function (name) {
    console.log(CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1)));
};

CarManager.execute("arrangeViewing", "Ferrari", "14523");
CarManager.execute("requestInfo", "Ford Mondeo", "54323");
CarManager.execute("requestInfo", "Ford Escort", "34232");
CarManager.execute("buyVehicle", "Ford Escort", "34232");

// output

// You have successfully booked a viewing of Ferrari ( 14523 ) 
// The information for Ford Mondeo with ID 54323 is foobar
// The information for Ford Escort with ID 34232 is foobar
// You have successfully purchased Item 34232, a Ford Escort