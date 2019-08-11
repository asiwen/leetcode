
require.config({
    baseUrl: './',
    paths: {
        app: 'app',
        TwoSum: 'twosum/TwoSum',
        addtwoNum: 'addtwonum',
        filter: 'filter',
        palinsubstr: 'longestpalindromic',
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['TwoSum',
    'addtwoNUm', 'filter'
], function(t, addtwoNUm, filter){
    var A = [10, 7, 4, 3, 2, 1];
    console.log(A, filter.avgfilt(A, 3));
});
