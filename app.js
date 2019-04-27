
require.config({
    baseUrl: './',
    paths: {
        app: 'app',
        TwoSum: 'twosum/TwoSum',
        addtwoNum: 'addtwonum',
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['TwoSum',
    'addtwoNUm'
]);
