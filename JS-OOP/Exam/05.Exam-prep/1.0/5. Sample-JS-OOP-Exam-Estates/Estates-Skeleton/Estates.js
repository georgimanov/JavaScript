function processEstatesAgencyCommands(commands) {

    'use strict';

    Object.prototype.inherits = function(parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    Object.prototype.isNullOrEmpty = function(field) {
        return !!(!field || field == null || field == '');
    };

    Object.prototype.isNumber = function(field) {
        return !!(field ^ 0 == field);
    };

    var Estate = (function () {
        function Estate(name,area,location,isFurnished) {
            if (this.constructor === Estate) {
                throw new Error('Cannot instantiate abstract class');
            }

            this.setName(name);
            this.setArea(area);
            this.setLocation(location);
            this.setIsFurnished(isFurnished);
        }

        Estate.prototype.setName = function(name) {
            if (this.isNullOrEmpty(name)) {
                throw new Error('The field should be a non-empty string');
            }
            this._name = name;
        };

        Estate.prototype.getName = function() {
            return this._name;
        };

        Estate.prototype.setArea = function(area) {
            if (!this.isNumber(area)) {
                throw new Error('The field should be numeric');
            }
            if (area < 1 || area > 10000) {
                throw new Error('The field is out of range');
            }
            this._area = area;
        };

        Estate.prototype.getArea = function() {
            return this._area;
        };

        Estate.prototype.setLocation = function(location) {
            if (this.isNullOrEmpty(location)) {
                throw new Error('The field should be a non-empty string');
            }
            this._location = location;
        };

        Estate.prototype.getLocation = function() {
            return this._location;
        };

        Estate.prototype.setIsFurnished = function(isFurnished) {
            if (typeof (isFurnished) != 'boolean') {
                throw new Error('The field should be either true or false');
            }
            this._isFurnished = isFurnished;
        };

        Estate.prototype.getIsFurnished = function() {
            return this._isFurnished;
        };

        Estate.prototype.toString = function() {
            return this.constructor.name + ': Name = ' + this.getName() + ', Area = ' + this.getArea() + ', Location = ' + this.getLocation() + ', Furnitured = ' + (this.getIsFurnished() ? 'Yes' : 'No');
        };

        return Estate;
    })();


    var BuildingEstate = (function () {
        function BuildingEstate(name,area,location,isFurnished,rooms,hasElevator) {
            Estate.call(this,name,area,location,isFurnished);
            if (this.constructor === BuildingEstate) {
                throw new Error('Cannot instantiate abstract class');
            }

            this.setRooms(rooms);
            this.setHasElevator(hasElevator);
        }

        BuildingEstate.inherits(Estate);

        BuildingEstate.prototype.setRooms = function(rooms) {
            if (!this.isNumber(rooms)) {
                throw new Error('The field should be numeric');
            }
            if (rooms < 1 || rooms > 100) {
                throw new Error('The field is out of range');
            }
            this._rooms = rooms;
        };

        BuildingEstate.prototype.getRooms = function() {
            return this._rooms;
        };

        BuildingEstate.prototype.setHasElevator = function(hasElevator) {
            if (typeof (hasElevator) != 'boolean') {
                throw new Error('The field should be either true or false');
            }
            this._hasElevator = hasElevator;
        };

        BuildingEstate.prototype.getHasElevator = function() {
            return this._hasElevator;
        };

        BuildingEstate.prototype.toString = function() {
            return Estate.prototype.toString.call(this) + ', Rooms: ' + this.getRooms() + ', Elevator: ' + (this.getHasElevator() ? 'Yes' : 'No');
        };

        return BuildingEstate;
    })();


    var Apartment = (function () {
        function Apartment(name,area,location,isFurnished,rooms,hasElevator) {
            BuildingEstate.call(this,name,area,location,isFurnished,rooms,hasElevator);
        }

        Apartment.inherits(BuildingEstate);

        return Apartment;
    })();


    var Office = (function () {
        function Office(name,area,location,isFurnished,rooms,hasElevator) {
            BuildingEstate.call(this,name,area,location,isFurnished,rooms,hasElevator);
        }

        Office.inherits(BuildingEstate);

        return Office;
    })();


    var House = (function () {
        function House(name,area,location,isFurnished,floors) {
            Estate.call(this,name,area,location,isFurnished);
            this.setFloors(floors);
        }

        House.inherits(Estate);

        House.prototype.setFloors = function(floors) {
            if (!this.isNumber(floors)) {
                throw new Error('The field should be numeric');
            }
            if (floors < 1 || floors > 10) {
                throw new Error('The field is out of range');
            }
            this._floors = floors;
        };

        House.prototype.getFloors = function() {
            return this._floors;
        };

        House.prototype.toString = function() {
            return Estate.prototype.toString.call(this) + ', Floors: ' + this.getFloors();
        };

        return House;
    })();

    var Garage = (function () {
        function Garage(name,area,location,isFurnished,width, height) {
            Estate.call(this,name,area,location,isFurnished);
            this.setWidth(width);
            this.setHeight(height);
        }

        Garage.inherits(Estate);

        Garage.prototype.setWidth = function (width) {
            if (!this.isNumber(width)) {
                throw new Error('The field should be numeric');
            }
            if (width < 1 || width > 500) {
                throw new Error('The field is out of range');
            }
            this._width = width;
        };

        Garage.prototype.getWidth = function () {
            return this._width;
        };

        Garage.prototype.setHeight = function (height) {
            if (!this.isNumber(height)) {
                throw new Error('The field should be numeric');
            }
            if (height < 1 || height > 500) {
                throw new Error('The field is out of range');
            }
            this._height = height;
        };

        Garage.prototype.getHeight = function () {
            return this._height;
        };

        Garage.prototype.toString = function () {
            return Estate.prototype.toString.call(this) + ', Width: ' + this.getWidth() + ', Height: ' + this.getHeight();
        };

        return Garage;
    })();

    var Offer = (function () {
        function Offer(estate, price) {
            if (this.constructor === Offer) {
                throw new Error('Cannot instantiate abstract class');
            }

            this.setEstate(estate);
            this.setPrice(price);
        }

        Offer.prototype.setEstate = function(estate) {
            if (this.isNullOrEmpty(estate)) {
                throw new Error('The field should be a non-empty string');
            }
            this._estate = estate;
        };

        Offer.prototype.getEstate = function() {
            return this._estate;
        };

        Offer.prototype.setPrice = function(price) {
            if (!this.isNumber(price)) {
                throw new Error('The field should be numeric');
            }
            this._price = price;
        };

        Offer.prototype.getPrice = function() {
            return this._price;
        };

        Offer.prototype.toString = function() {
            return "Estate = " + this.getEstate().getName() + ", Location = " + this.getEstate().getLocation() + ", Price = " + this.getPrice();
        };

        return Offer;
    })();


    var RentOffer = (function () {
        function RentOffer(estate,price) {
            Offer.call(this,estate,price);
        }

        RentOffer.inherits(Offer);

        RentOffer.prototype.toString = function() {
            return "Rent: " + Offer.prototype.toString.call(this);
        };

        return RentOffer;
    })();


    var SaleOffer = (function () {
        function SaleOffer(estate,price) {
            Offer.call(this,estate,price);
        }

        SaleOffer.inherits(Offer);

        SaleOffer.prototype.toString = function() {
            return "Sale: " + Offer.prototype.toString.call(this);
        };

        return SaleOffer;
    })();


    var EstatesEngine = (function() {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            switch (cmdName) {
                case 'create':
                    return executeCreateCommand(cmdArgs);
                case 'status':
                    return executeStatusCommand();
                case 'find-sales-by-location':
                    return executeFindSalesByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-location':
                    return executeFindRentsByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-price':
                    return executeFindRentsByPriceCommand(
                        Number(cmdArgs[0]), Number(cmdArgs[1]));
                default:
                    throw new Error('Unknown command: ' + cmdName);
            }
        }

        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
                case 'Apartment':
                    var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(apartment);
                    break;
                case 'Office':
                    var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(office);
                    break;
                case 'House':
                    var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                    addEstate(house);
                    break;
                case 'Garage':
                    var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                    addEstate(garage);
                    break;
                case 'RentOffer':
                    var estate = findEstateByName(cmdArgs[1]);
                    var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                    addOffer(rentOffer);
                    break;
                case 'SaleOffer':
                    estate = findEstateByName(cmdArgs[1]);
                    var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                    addOffer(saleOffer);
                    break;
                default:
                    throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
                case "true":
                    return true;
                case "false":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindSalesByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, SaleOffer);
        }
        function executeFindRentsByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, RentOffer);
        }

        function executeFindOfferByLocationCommand(location, offerType){
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function(offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof offerType;
            });
            selectedOffers.sort(function(a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function executeFindRentsByPriceCommand( minPrice, maxPrice){

        }

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                        ', Location: ' + offer.getEstate().getLocation() +
                        ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());


    // Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function(cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();
}


// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function() {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function(line) {
            arr.push(line);
        }).on('close', function() {
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();
