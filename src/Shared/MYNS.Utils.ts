

let utils:any = {};

utils.logClick = function():void {
    utils.logConsole("received click");
}

utils.logConsole = function(msg: string):void {
    console.log("logConsole called:"+msg);
}

export = utils;