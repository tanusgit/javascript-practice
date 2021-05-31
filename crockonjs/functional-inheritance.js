/**
 * @author Baba Kofi Weusijana
 * Functional Inheritance
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

var Gizmo = function (new_id) {
    'use strict';
    return {
        id: new_id,
        toString: function () {
            return "gizmo " + this.id;
        }
    };
};

var Hoozit = function (someid) {
    'use strict';
    var that = new Gizmo(someid);
    // Hoozit now inherits from Gizmo and sets its id by calling its super's constructor
    that.test = function (some_id) {
        // In the current function "this" is the object also known as "that"
        // which is the already created object of the Hoozit ype
        return this.id === some_id;
    };
    that.hoozitProp = 'defaultHoozitPropValue';
    return that;
};

var gizmo = new Gizmo(0);
console.log(gizmo.toString());
console.log(gizmo);
var hoozit = new Hoozit(1);
console.log(hoozit.toString());
console.log(hoozit.id);
console.log(hoozit.test(hoozit.id));
console.log(hoozit.hoozitProp);
console.log(hoozit); // Functional Inheritance is NOT preferred because developer tools like Firebug don't support it as well

// You can NOT easily add new properties and methods to prototypes and mutate (change) all related objects dynamically!
// Gizmo.prototype.sentensePrefix = "My ID number is ";
// Gizmo.prototype.toSentenseString = function () {
// return this.sentensePrefix + this.id + ".";
// };
// console.log(gizmo.toSentenseString()); // Causes an error because the object gizmo doesn't have a toSentenseString method
// console.log(hoozit.toSentenseString()); // Causes an error because the object hoozit doesn't have a toSentenseString method

// console.log(gizmo.test(gizmo.id)); // Causes an error because Gizmos don't have a test method
