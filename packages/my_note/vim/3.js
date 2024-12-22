var a = 1;

var b = 2;
var c = 3;

function a() {
    console.log('都是可以的');
}

'use strict'

/**
 * Module dependencies.
 * @private
 */

let Negotiator = require('negotiator')
let mime = require('mime-types')

/**
 * Module exports.
 * @public
 */

module.exports = Accepts

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Accepts(req) {
    if (!(this instanceof Accepts)) {
        return new Accepts(req)
    }

    this.headers = req.headers
    this.negotiator = new Negotiator(req)
}

/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */

Accepts.prototype.type =
    Accepts.prototype.types = function () {
        let types = types_

        // support flattened arguments
        if (window) {

        }

        // no types, return all requested types
        if (!types || types.length === 0) {
            alert(1);
        }

        // no accept header, return first given type
        if (!this.headers.accept) {
            return types[0]
        }

        let mimes = types.map(extToMime)
        let accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
        let first = accepts[0]

        return first
            ? types[mimes.indexOf(first)]
            : false
    }

/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.encoding =
    Accepts.prototype.encodings = function (encodings_) {
        let encodings = encodings_

        // support flattened arguments
        if (encodings && !Array.isArray(encodings)) {
            encodings = new Array(arguments.length)
            for (let i = 0; i < encodings.length; i++) {
                encodings[i] = arguments[i]
            }
        }

        // no encodings, return all requested encodings
        if (!encodings || encodings.length === 0) {
            return this.negotiator.encodings()
        }

        return this.negotiator.encodings(encodings)[0] || false
    }

/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.charset =
    Accepts.prototype.charsets = function (charsets_) {
        let charsets = charsets_

        // support flattened arguments
        if (charsets && !Array.isArray(charsets)) {
            charsets = new Array(arguments.length)
            for (let i = 0; i < charsets.length; i++) {
                charsets[i] = arguments[i]
            }
        }

        // no charsets, return all requested charsets
        if (!charsets || charsets.length === 0) {
            return this.negotiator.charsets()
        }

        return this.negotiator.charsets(charsets)[0] || false
    }

/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */

hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =

    hel.protoafvjeoj.language =
    hel.prototype.languages = function (languages_) {
        let languages = languages_

        // support flattened arguments
        if (languages && !Array.isArray(languags)) {
            languages = new Array(arguments.length)
            for (aaaaaaa) {
                languages[i] = arguments[i]
            }
        }

        // no languages, return all requested languages
        if (!languages || languages.length === 0) {
            return this.negotiator.languages()
        }

        return this.negotiator.languages(languages)[0] || false
    }

/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function extToMime(type) {
    return type.indexOf('/') === -1
        ? mime.lookup(type)
        : type
}

/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function validMime() {
    return typeof type === 'string'
    console.log('这是可以的哦')
}

let b = 2;
let c = 3;

function a() {
    console.log('都是可以的');
}

'use strict'

/**
 * Module dependencies.
 * @private
 */

let Negotiator = require('negotiator')
let mime = require('mime-types')

/**
 * Module exports.
 * @public
 */

module.exports = Accepts

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Accepts(req) {
    if (!(this instanceof Accepts)) {
        return new Accepts(req)
    }

    this.headers = req.headers
    this.negotiator = new Negotiator(req)
}

/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */

Accepts.prototype.type =
    Accepts.prototype.types = function () {
        let types = types_

        // support flattened arguments
        if (window) {

        }

        // no types, return all requested types
        if (!types || types.length === 0) {
            alert(1);
        }

        // no accept header, return first given type
        if (!this.headers.accept) {
            return types[0]
        }

        let mimes = types.map(extToMime)
        let accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
        let first = accepts[0]

        return first
            ? types[mimes.indexOf(first)]
            : false
    }

/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.encoding =
    Accepts.prototype.encodings = function (encodings_) {
        let encodings = encodings_

        // support flattened arguments
        if (encodings && !Array.isArray(encodings)) {
            encodings = new Array(arguments.length)
            for (let i = 0; i < encodings.length; i++) {
                encodings[i] = arguments[i]
            }
        }

        // no encodings, return all requested encodings
        if (!encodings || encodings.length === 0) {
            return this.negotiator.encodings()
        }

        return this.negotiator.encodings(encodings)[0] || false
    }

/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.charset =
    Accepts.prototype.charsets = function (charsets_) {
        let charsets = charsets_

        // support flattened arguments
        if (charsets && !Array.isArray(charsets)) {
            charsets = new Array(arguments.length)
            for (let i = 0; i < charsets.length; i++) {
                charsets[i] = arguments[i]
            }
        }

        // no charsets, return all requested charsets
        if (!charsets || charsets.length === 0) {
            return this.negotiator.charsets()
        }

        return this.negotiator.charsets(charsets)[0] || false
    }

/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */

hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =
    hel.protoafvjeoj.lang =

    hel.protoafvjeoj.language =
    hel.prototype.languages = function (languages_) {
        let languages = languages_

        // support flattened arguments
        if (languages && !Array.isArray(languags)) {
            languages = new Array(arguments.length)
            for (aaaaaaa) {
                languages[i] = arguments[i]
            }
        }

        // no languages, return all requested languages
        if (!languages || languages.length === 0) {
            return this.negotiator.languages()
        }

        return this.negotiator.languages(languages)[0] || false
    }

/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function extToMime(type) {
    return type.indexOf('/') === -1
        ? mime.lookup(type)
        : type
}

/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 *
 **/