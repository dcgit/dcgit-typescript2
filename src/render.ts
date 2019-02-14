function render() {
    var elems = document.getElementsByTagName('my-label');
    
    for (let i=0; i<elems.length; i++) {
        let title = "[none]";
        if (elems[i].hasAttribute('data-title') )
        {
            title = elems[i].getAttribute('data-title');
        }
        elems[i].innerHTML = "<h4> Hello World " + i.toString() + " " + title + "</h4>";
    };

    window["MYNS"].Utils.logConsole("my-label loaded");
}

export = render;