define([], function(){

    // slide i and repeatedly j when skip onto a new i.
    function lengthOfLongestSubstring1(s){
        var subset = {};
        var substrs = {start:-1, length:0};
        var longest = 0, other_same_idx;
        for(var i = 0; i < s.length;){
            
            for(var j = i; j < s.length; j++){
                other_same_idx = subset[s.charAt(j)];
                if(other_same_idx == undefined){
                    subset[s.charAt(j)] = j;
                    longest += 1;
                }else{
                    if(longest > substrs.length){
                        substrs.start = i;
                        substrs.length = longest;
                    }
                    i = other_same_idx +1;
                    longest = 0;
                    subset = {};
                    break;
                }
            }
            
            if(j == s.length){
                if(longest > substrs.length){
                    substrs.start = i;
                    substrs.length = longest;
                }
                break;
            }
        }
        return substrs.length;
    }

    // slide i and j
    function lengthOfLongestSubstring2(s){
        var subset = {};
        //var substrs = {start:-1, length:0};
        var longest = 0, idx, cur_char;
        for(var i = 0, j = 0; i < s.length && j < s.length; j++ ){
            cur_char = s[j];
            idx = subset[cur_char];
            i = idx == undefined ? i : (idx + 1 > i ? idx + 1 : i);
            subset[cur_char] = j;   
            if(longest < j - i + 1) longest = j - i + 1;
        }
        return longest;
    }

});