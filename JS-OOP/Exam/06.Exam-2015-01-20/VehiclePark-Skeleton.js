function processVehicleParkCommands(commands) {
    'use strict';

    // const Type
    var Types = {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () {
        }
    };

    var globalConstants = {
        BIKE_WHEELS: 2,
        TRUCK_WHEELS: 4,
        ROAD: 'road',
        ALL_ROAD: 'all'
    };

    Object.prototype.extend = function (parent) {
        if (Object.create) {
            Object.prototype.create = function (proto) {
                function F() {
                    F.propertype = proto;
                    return new F;
                }
            }
        }

        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    Object.prototype.isNullOrEmpty = function (field) {
        if (!field || field == null || field == '') {
            return true;
        }
        return false;
    };

    Object.prototype.isNumber = function (field) {
        if (field ^ 0 == field) {
            return true;
        }
        return false;
    };


    var Models = (function () {
        var Employee = (function () {
            function Employee(name, position, grade) {
                this.setName(name);
                this.setPosition(position);
                this.setGrade(grade);
            };

            Employee.prototype.getName = function () {
                return this._name;
            };

            Employee.prototype.setName = function (name) {
                if (name === undefined || name === "") {
                    throw new Error("Name cannot be empty or undefined.");
                }
                this._name = name;
            };

            Employee.prototype.getPosition = function () {
                return this._position;
            };

            Employee.prototype.setPosition = function (position) {
                if (position === undefined || position === "") {
                    throw new Error("Position cannot be empty or undefined.");
                }
                this._position = position;
            };

            Employee.prototype.getGrade = function () {
                return this._grade;
            };

            Employee.prototype.setGrade = function (grade) {
                if (grade === undefined || isNaN(grade) || grade < 0) {
                    throw new Error("Grade cannot be negative.");
                }
                this._grade = grade;
            };

            Employee.prototype.toString = function () {
                return '\n' + " ---> " + this.getName() +
                    ",position=" + this.getPosition();
            };

            return Employee;
        }());

        var Vehicle = (function () {

            function Vehicle(brand, age, terrain, wheels) {
                if (this.constructor === Vehicle) {
                    throw new Error('Recipe cannot be instantiated');
                }

                this.setBrand(brand);
                this.setAge(age);
                this.setTerrain(terrain);
                this.setWheels(wheels);
            }

            Vehicle.prototype.getBrand = function getBrand() {
                return this._brand;
            };

            Vehicle.prototype.setBrand = function setBrand(brand) {
                if (this.isNullOrEmpty(brand)) {
                    throw new Error('The field should be a non-empty string');
                }
                this._brand = brand;
            };

            Vehicle.prototype.setAge = function setAge(age) {
                if (age <= 0) {
                    throw new Error('Age must be positive');
                }
                this._age = age;
            };

            Vehicle.prototype.getAge = function getAge() {
                return this._age;
            };

            Vehicle.prototype.setTerrain = function setTerrain(terrain) {
                this._terrain = terrain;
            };

            Vehicle.prototype.getTerrain = function getTerrain() {
                return this._terrain;
            };

            Vehicle.prototype.setWheels = function setWheels(wheels) {
                if (wheels <= 0) {
                    throw new Error('Wheels must be positive');
                }
                this._wheels = wheels;
            };

            Vehicle.prototype.getWheels = function getWheels() {
                return this._wheels;
            };

            Vehicle.prototype.toString = function () {
                return " -> " + this.constructor.name + ": brand=" + this.getBrand() + ",age=" + this.getAge().toFixed(1) + ",terrainCoverage=" + this.getTerrain() + ",numberOfWheels=" + this.getWheels();
            };

            return Vehicle;
        }());

        var Bike = (function () {
            function Bike(brand, age, terrain, frameSize, numberOfShifts) {
                Vehicle.call(this, brand, age, terrain, globalConstants.BIKE_WHEELS);
                this.setFrameSize(frameSize);
                this._numberOfShifts = numberOfShifts;
            }

            Bike.extend(Vehicle);

            Bike.prototype.setFrameSize = function setFrameSize(frameSize) {
                if (frameSize <= 0) {
                    throw new Error('Frame size must be positive');
                }
                this._frameSize = frameSize;
            };

            Bike.prototype.getFrameSize = function getFrameSize() {
                return this._frameSize;
            };


            Bike.prototype.toString = function () {
                return Vehicle.prototype.toString.call(this) + ',frameSize=' + this.getFrameSize() + (this._numberOfShifts ? (',numberOfShifts=' + this._numberOfShifts) : "");
            }

            return Bike;
        }());

        var Automobile = (function () {
            function Automobile(brand, age, terrain, wheels, consumption, fuelType) {
                if (this.constructor === Automobile) {
                    throw new Error('Automobile cannot be instantiated');
                }
                Vehicle.call(this, brand, age, terrain, wheels);
                this.setConsumption(consumption);
                this.setFuel(fuelType);
            }

            Automobile.extend(Vehicle);


            Automobile.prototype.setConsumption = function setConsumption(consumption) {
                if (consumption <= 0) {
                    throw new Error('Consumption must be positive');
                }
                this._consumption = consumption;
            };

            Automobile.prototype.getConsumption = function getConsumption() {
                return this._consumption;
            };

            Automobile.prototype.getFuel = function getFuel() {
                return this._fuelType;
            };

            Automobile.prototype.setFuel = function setFuel(fuelType) {
                if (this.isNullOrEmpty(fuelType)) {
                    throw new Error('The field should be a non-empty string');
                }
                this._fuelType = fuelType;
            };

            Automobile.prototype.toString = function () {
                return Vehicle.prototype.toString.call(this) + ',consumption=[' + this.getConsumption() + 'l/100km ' + this.getFuel() + ']';
            }

            return Automobile;
        }());

        var Truck = ( function () {
            function Truck(brand, age, terrain, consumption, fuelType, doors) {
                Automobile.call(this, brand, age, terrain, globalConstants.TRUCK_WHEELS, consumption, fuelType);
                this.setDoors(doors);
                this.setTerrain(terrain || globalConstants.ALL_ROAD);
            }

            Truck.extend(Automobile);

            Truck.prototype.setDoors = function setDoors(doors) {
                if (doors <= 0) {
                    throw new Error('Frame size must be positive');
                }
                this._doors = doors;
            };

            Truck.prototype.getDoors = function getDoors() {
                return this._doors;
            };


            Truck.prototype.toString = function () {
                return Automobile.prototype.toString.call(this) + ',numberOfDoors=' + this.getDoors();
            }

            return Truck;
        }());

        var Limo = ( function () {
            function Limo(brand, age, wheels, consumption, fuelType) {
                Automobile.call(this, brand, age, globalConstants.ROAD, wheels, consumption, fuelType);
                this.setTerrain(globalConstants.ROAD);
                this._employees = [];
            }

            Limo.extend(Automobile);

            Limo.prototype.appendEmployee = function appendEmployee(employee) {
                if (!(employee instanceof Employee)) {
                    throw new TypeError('Parameter should be instace of Employee');
                }

                this._employees.push(employee);
            }

            Limo.prototype.detachEmployee = function detachEmployee(employee) {
                var index = this._employees.indexOf(employee);
                this._employees.splice(index, 1);
            };


            var formatEmployees = function formatEmployees() {
                var employees;
                employees = getEmployee.call(this, Employee);
                var output = '';
                if (employees) {
                    employees.forEach(function (employees) {
                        output += employees.toString();
                    })
                }
                return output;
            };

            var getEmployee = function () {
                return this._employees.filter(function (employee) {
                    return employee instanceof Employee;
                })
            };

            Limo.prototype.printEmployees = function printEmployees() {
                var result = ' --> Employees, allowed to drive:';

                if (this._employees.length) {
                    result += formatEmployees.call(this);
                } else {
                    result += ' ---';
                }
                return result;
            };

            Limo.prototype.toString = function () {
                return Automobile.prototype.toString.call(this) + '\n' + this.printEmployees();
            }

            return Limo;
        }());

        return {
            Employee: Employee,
            Vehicle: Vehicle,
            Bike: Bike,
            Automobile: Automobile,
            Truck: Truck,
            Limo: Limo
        }
    }());

    var ParkManager = (function () {
        var _vehicles;
        var _employees;

        function init() {
            _vehicles = [];
            _employees = [];
        }

        var CommandProcessor = (function () {

            function processInsertCommand(command) {
                var object;

                switch (command["type"]) {
                    case "bike":
                        object = new Models.Bike(
                            command["brand"],
                            parseFloat(command["age"]),
                            command["terrain-coverage"],
                            parseFloat(command["frame-size"]),
                            command["number-of-shifts"]);
                        _vehicles.push(object);
                        break;
                    case "truck":
                        object = new Models.Truck(
                            command["brand"],
                            parseFloat(command["age"]),
                            command["terrain-coverage"],
                            parseFloat(command["consumption"]),
                            command["type-of-fuel"],
                            parseFloat(command["number-of-doors"]));
                        _vehicles.push(object);
                        break;
                    case "limo":
                        object = new Models.Limo(
                            command["brand"],
                            parseFloat(command["age"]),
                            parseFloat(command["number-of-wheels"]),
                            parseFloat(command["consumption"]),
                            command["type-of-fuel"]);
                        _vehicles.push(object);
                        break;
                    case "employee":
                        object = new Models.Employee(command["name"], command["position"], parseFloat(command["grade"]));
                        _employees.push(object);
                        break;
                    default:
                        throw new Error("Invalid type.");
                }

                return object.constructor.name + " created.";
            }

            function processDeleteCommand(command) {
                var object,
                    index;

                switch (command["type"]) {
                    case "employee":
                        object = getEmployeeByName(command["name"]);
                        _vehicles.forEach(function (t) {
                            if (t instanceof Models.Limo && t.getEmployees().indexOf(object) !== -1) {
                                t.detachEmployee(object);
                            }
                        });
                        index = _employees.indexOf(object);
                        _employees.splice(index, 1);
                        break;
                    case "bike":
                    case "truck":
                    case "limo":
                        object = getVehicleByBrandAndType(command["brand"], command["type"]);
                        index = _vehicles.indexOf(object);
                        _vehicles.splice(index, 1);
                        break;
                    default:
                        throw new Error("Unknown type.");
                }

                return object.constructor.name + " deleted.";
            }

            function processListCommand(command) {
                return formatOutputList(_vehicles);
            }

            function processAppendEmployeeCommand(command) {
                var employee = getEmployeeByName(command["name"]);
                var limos = getLimosByBrand(command["brand"]);

                for (var i = 0; i < limos.length; i++) {
                    limos[i].appendEmployee(employee);
                }
                return "Added employee to possible Limos.";
            }

            function processDetachEmployeeCommand(command) {
                var employee = getEmployeeByName(command["name"]);
                var limos = getLimosByBrand(command["brand"]);

                for (var i = 0; i < limos.length; i++) {
                    limos[i].detachEmployee(employee);
                }

                return "Removed employee from possible Limos.";
            }

            function processListEmployees(grade) {
                console.log(_employees);
                console.log(grade);

            return result;
        }

        // Functions below are not revealed

        function getVehicleByBrandAndType(brand, type) {
            for (var i = 0; i < _vehicles.length; i++) {
                if (_vehicles[i].constructor.name.toString().toLowerCase() === type &&
                    _vehicles[i].getBrand() === brand) {
                    return _vehicles[i];
                }
            }
            throw new Error("No Limo with such brand exists.");
        }

        function getLimosByBrand(brand) {
            var currentVehicles = [];
            for (var i = 0; i < _vehicles.length; i++) {
                if (_vehicles[i] instanceof Models.Limo &&
                    _vehicles[i].getBrand() === brand) {
                    currentVehicles.push(_vehicles[i]);
                }
            }
            if (currentVehicles.length > 0) {
                return currentVehicles;
            }
            throw new Error("No Limo with such brand exists.");
        }

        function getEmployeeByName(name) {

            for (var i = 0; i < _employees.length; i++) {
                if (_employees[i].getName() === name) {
                    return _employees[i];
                }
            }
            throw new Error("No Employee with such name exists.");
        }

        function formatOutputList(output) {
            var queryString = "List Output:\n";

            if (output.length > 0) {
                queryString += output.join("\n");
            } else {
                queryString = "No results.";
            }

            return queryString;
        }

        return {
            processInsertCommand: processInsertCommand,
            processDeleteCommand: processDeleteCommand,
            processListCommand: processListCommand,
            processAppendEmployeeCommand: processAppendEmployeeCommand,
            processDetachEmployeeCommand: processDetachEmployeeCommand,
            processListEmployees: processListEmployees
        }
    }());

    var Command = (function () {
        function Command(cmdLine) {
            this._cmdArgs = processCommand(cmdLine);
        }

        function processCommand(cmdLine) {
            var parameters = [],
                matches = [],
                pattern = /(.+?)=(.+?)[;)]/g,
                key,
                value,
                split;

            split = cmdLine.split("(");
            parameters["command"] = split[0];
            while ((matches = pattern.exec(split[1])) !== null) {
                key = matches[1];
                value = matches[2];
                parameters[key] = value;
            }

            return parameters;
        }

        return Command;
    }());

    function executeCommands(cmds) {
        var commandArgs = new Command(cmds)._cmdArgs,
            action = commandArgs["command"],
            output;

        switch (action) {
            case "insert":
                output = CommandProcessor.processInsertCommand(commandArgs);
                break;
            case "delete":
                output = CommandProcessor.processDeleteCommand(commandArgs);
                break;
            case "append-employee":
                output = CommandProcessor.processAppendEmployeeCommand(commandArgs);
                break;
            case "detach-employee":
                output = CommandProcessor.processDetachEmployeeCommand(commandArgs);
                break;
            case "list":
                output = CommandProcessor.processListCommand(commandArgs);
                break;
            case "list-employees":
                output = CommandProcessor.processListEmployees(commandArgs);
                break;
            default:
                throw new Error("Unsupported command.");
        }

        return output;
    }

    return {
        init: init,
        executeCommands: executeCommands
    }
}());

var output = "";
ParkManager.init();

commands.forEach(function (cmd) {
    var result;
    if (cmd != "") {
        try {
            result = ParkManager.executeCommands(cmd) + "\n";
        } catch (e) {
            result = "Invalid command." + "\n";
            result = e.message + "\n";
        }
        output += result;
    }
});

return output;
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function () {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function (line) {
            arr.push(line);
        }).on('close', function () {
            //console.log(processVehicleParkCommands(arr));
        });
    }
})();