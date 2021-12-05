/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MantapApp.Application',

    name: 'MantapApp',

    requires: [
        // This will automatically load all classes in the MantapApp namespace
        // so that application classes do not need to require each other.
        'MantapApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MantapApp.view.main.Main'
});
