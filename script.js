let idealCar = {            //idealCar is defined as the object;
    //object idealCar consists of 3 properties:  name, color, & weightInPounds (see below);
    name: "Mustang",          //Mustang is the value of the name property;
    color: "red",              //red is the value of the color property;
    weightInPounds: 3600,    //3600 is the value of weightInPounds;
    myCar: function() {
        //myCar is the defined method;
        console.log("My ideal car is a " + this.name + " with a color of " + this.color + ", " + 
        "but I don't want it to be over " + this.weightInPounds + " pounds.");
        //the method, myCar, is invoked/called using console.log;
    }

}
idealCar.myCar();
//output will be "My ideal car is a Mustang with a color 
//of red, but I don't want it to be over 3600 pounds";
