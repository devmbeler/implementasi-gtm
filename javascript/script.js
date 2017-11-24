var __gtmHelper = {
    name : this.getName(),
    age : this.getAge(),
    getName: function(){
        console.log("getName function is fired");
        return "wahyu albab";
    },
    getAge: function(){
        console.log("getAge function is fired");
        return 24;
    },
    printMessage : function(message){
        console.log(message);
    }
}
__gtmHelper.printMessage("fired from script.js");