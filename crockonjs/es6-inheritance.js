/**
 * @author Baba Kofi Weusijana
 * ES6 Inheritance
 */
// The following comments are settings for various linters
/*jslint es6: true*/ // Causes an "Unexpected 'es6'." warning in JSLint that you should ignore.
/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env es6*/
/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

class Gizmo {
    constructor(id) {
        this._id = id;
    }

    /* @Override */
    toString() {
        return "gizmo " + this._id;
    }
}

class Hoozit extends Gizmo {
    constructor(id) {
        super(id);
        this._hoozitProp = "defaultHoozitPropValue";
    }

    test(some_id) {
        return this._id === some_id;
    }
}

let gizmo = new Gizmo(0);
console.log(gizmo.toString());
console.log(gizmo);
let hoozit = new Hoozit(1);
console.log(hoozit.toString());
console.log(hoozit._id);
console.log(hoozit.test(hoozit._id));
console.log(hoozit._hoozitProp);
console.log(hoozit);

// You can add new properties and methods to prototypes and mutate (change) all related objects dynamically!
Gizmo.prototype.sentensePrefix = "My ID number is ";
Gizmo.prototype.toSentenseString = function () {
    return this.sentensePrefix + this._id + ".";
};
console.log(gizmo.toSentenseString());
// Hoozits also have access to the toSentenseString method (and the sentensePrefix property) via inheritance!
console.log(hoozit.toSentenseString());

console.log(gizmo.test(gizmo._id));
// Caused an error because Gizmos don't have a test method
