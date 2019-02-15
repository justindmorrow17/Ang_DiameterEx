"use strict";

const circleComp = {
    template: `<p>This is the component</p>
    
    <input class="size" type="number" placeholder="number" ng-model="$ctrl.size">
    <p>Diameter</p>
    <input type="checkbox" ng-click="$ctrl.circleCheck()">
    <p>Is Circle?</p>
    <div ng-class="{circle: $ctrl.circle, square: !$ctrl.circle}" ng-style="{'width': $ctrl.size + 'px', 'height': $ctrl.size + 'px'}"></div>
     
    `,
    controller: [ function() {
        const vm = this;
        vm.circle = false;
        vm.circleCheck = () => {
            console.log(vm.size);
            vm.circle = !vm.circle;
            console.log(vm.circle);
        }

    }]
}


angular
    .module("App")
    .component("circleComp", circleComp)