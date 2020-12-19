import $ from 'jquery'
import moduleLib from './module-lib';
import umdLib from './umd-lib';

$('.app').css('color', 'red')

globalLib({a: 1})
globalLib.doSomething();

moduleLib.doSomething()
console.log(moduleLib.version)

umdLib.doSomething();
console.log(umdLib.version)

import moment from 'moment';


declare module 'moment' {
    export function myFunction():void;
}

moment.myFunction = function() {
    console.log('moment.myFunction')
}

moment.myFunction();

declare global {
    namespace globalLib {
        export function doAnything():void;
    }
}

globalLib.doAnything = function() {
    console.log('globalLib doAnything')
}

globalLib.doAnything()