define([], function(){
    var exports = {};
    function medfilt(ar, w){
        var med = Math.floor(w / 2);
        var win = new Array(w);
        var L = ar.length;
        return (ar || []).map((item, idx, a) =>{
            var b = idx >= med ? idx - med : 0;
            var e = idx + med < L ? idx + med : L - 1;
            var b_w = med - (idx -b), e_w = med + (e -idx);
            win.fill(0)
            var s = a.slice(b, e + 1);
            
            s.unshift(e_w - b_w + 1); s.unshift(b_w);
            Array.prototype.splice.apply(win, s);
            
            win.sort((a,b)=> a - b);
            //console.log(s, w1);
            return win[med];
        });
    }

    function avgfilt(ar, w){
        var med = Math.floor(w / 2);
        var L = ar.length;
        return (ar || []).map((item, idx) => {
            var b = idx >= med ? idx - med : 0;
            var e = idx + med < L ? idx + med : L - 1;
            return ar.slice(b, e + 1).reduce((acc, cur) => acc + cur) / (e - b + 1);
        });
    }

    exports.medfilt = medfilt;
    exports.avgfilt = avgfilt;
    return exports;
});