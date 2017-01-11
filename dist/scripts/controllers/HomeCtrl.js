(function(){
    console.log("Running?")
    function HomeCtrl(Room){
        this.name = "World";
        this.rooms = Room.all;
    }
    
    angular 
        .module('blocChat')
        .controller("HomeCtrl", ["Room", HomeCtrl])
    
})();