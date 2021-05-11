var t = require("ix");
result = {};
_from = 1500000;
let _rate = 1.5;
for (var i = _from; i <= _from*_rate; i++) {
    if (!t) {
        console.log("not found");
    }
    try {
        let _t = t(i.toString());
        if (_t && _t._spi) {
            console.log(_t);
            result[i.toString()] = _t;
        }
    } catch {}
}

console.save(result, `${_from}-${_from*_rate}.json`);

//

(function(console){
console.save = function(data, filename){
    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)