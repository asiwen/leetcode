
require.config({
    baseUrl: './',
    paths: {
        app: 'app',
        TwoSum: 'twosum/TwoSum'
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['TwoSum']);
