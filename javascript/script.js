var _bwaUtils = {
    getName: function () {
        return 'wahyu';
    },
    getAge: function () {
        return 24;
    },
    printMessage: function (message) {
        console.log(message)
    }
}

var _bwaDataLayer = {};
_bwaDataLayer['name'] = _bwaUtils.getName();
_bwaDataLayer['age'] = _bwaUtils.getAge();
_bwaUtils.printMessage("name : " + _bwaDataLayer['name'] + " | age : " + _bwaDataLayer['age'])