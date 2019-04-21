define([], function() {
  
    // O(n^2) 
    function brute_force(nums, target){
        for(var i = 0; i < nums.length; ++i){
            for(var j = i + 1; j < nums.length; ++j){
                if(nums[i] + nums[j] == target) return [i, j];
            }
        }
        return [];
    }

    function two_pass_hashtable(nums, target){
    
        var numsMap = nums.reduce((acc, num, idx) => {
            acc[num] = idx;
            return acc;
        }, {});
        
        var complement, secondIdx;
        for(var i = 0; i < nums.length; ++i){
            complement = target - nums[i];
            secondIdx = numsMap[complement];
            if(secondIdx && secondIdx != i) return [i, secondIdx];
        }
        return [];
    }

    // O(n) One-pass Hash table
    function one_pass_hashtable(nums, target) {
    
        var complement, idx, numsMap = {};
        for(var i = 0; i < nums.length; ++i){
            
            complement = target - nums[i];
            idx = numsMap[complement];
            if(idx != null) 
                return [idx, i];
            else
                numsMap[nums[i]] = i;
        }
        return [];
    };

});