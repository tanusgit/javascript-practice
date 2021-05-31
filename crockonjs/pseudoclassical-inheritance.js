/**
 * @author Baba Kofi Weusijana
 * Pseudoclassical Inheritance
 */
/*global console:false, window:false*/
/*jslint browser:true*/
/*jshint globalstrict: true*/
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

var Gizmo = function (newIdForAGizmo) {
    'use strict';
    // this.id can't be declared 'protected' like one could in Java
    // 'this' is the new Gizmo object that is currently being built.
    this.id = newIdForAGizmo;
};
// override the default toString() method
Gizmo.prototype.toString = function () {
    'use strict';
    return "gizmo " + this.id;
};

var Hoozit = function (newIdForAHoozit) {
    'use strict';
    // You have to type the next line again
    // this.id = newIdForAHoozit;
    // or use the call method to call the super constructor Gizmo and control what 'this' is.
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call#Using_call_to_chain_constructors_for_an_object
    // and read page 603-605 of "Head First JavaScript" 2014 1st edition
    // Remember, on the next line 'this' is the new Hoozit object that is currently being built.
    Gizmo.call(this, newIdForAHoozit);
    // Hoozit's super Gizmo constructor is being called with Hoozit's parameter newIdForAHoozit
    this.hoozitProp = 'defaultHoozitPropValue';
};
Hoozit.prototype = new Gizmo();
// Hoozit now inherits from Gizmo
Hoozit.prototype.test = function (some_id) {
    'use strict';
    return this.id === some_id;
};

var gizmo = new Gizmo(0);
console.log(gizmo.toString());
console.log(gizmo);
var hoozit = new Hoozit(1);
console.log(hoozit.toString());
console.log(hoozit.id);
console.log(hoozit.test(hoozit.id));
console.log(hoozit.hoozitProp);
console.log(hoozit);

// You can add new properties and methods to prototypes and mutate (change) all related objects dynamically!
Gizmo.prototype.sentensePrefix = "My ID number is ";
Gizmo.prototype.toSentenseString = function () {
    'use strict';
    return this.sentensePrefix + this.id + ".";
};
console.log(gizmo.toSentenseString());
// Hoozits also have access to the toSentenseString method (and the sentensePrefix property) via inheritance!
console.log(hoozit.toSentenseString());

console.log(gizmo.test(gizmo.id));
// Caused an error because Gizmos don't have a test method
