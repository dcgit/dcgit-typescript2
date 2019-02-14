import _analytics = require('./MYNS.Analytics');
import _utils = require('./MYNS.Utils');

let MYNS:any = {};

MYNS.Analytics = _analytics;
MYNS.Utils = _utils;

window["MYNS"] = MYNS;  

export = MYNS;