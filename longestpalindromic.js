
define([], function(){
    /**
     * @param {string} s
     * @return {string}
     */
    function longestPalindrome(s) {
        var i=0, j=0;
        var pos = {}, c;
        for(var k = 0; k < s.length; k++){
            c = s.charAt(k);
            spos = pos[c]
            if(spos){
                
                for(var x in spos){
                    console.log(c, spos, k, x, i, j);
                    if(ishuiwen(s.slice(spos[x], k+1)) && ((k - spos[x]) > (j - i))){
                        i = spos[x]; j = k;
                        console.log(c, spos, i, j);
                    }
                }
                spos.push(k)
            }else{
                pos[c] = [k];
            }
        }
        return s.slice(i, j+1)
    };

    function ishuiwen(s){
    
        for(var i = 0, j = s.length -1; i <= j; i++, j--){
            if(s.charAt(i) != s.charAt(j)) return false;
        }
        return true;
    };    

    longestPalindrome("acbbacaa");
});