"use strict";

const squareComp = {
    template: `from square comp`,
    controller: [ function() {
        const vm = this;
    }]
}

angular
    .module("App")
    .component("squareComp", squareComp)