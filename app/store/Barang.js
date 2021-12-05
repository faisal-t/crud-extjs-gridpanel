Ext.define('MantapApp.store.Barang', {
    extend: 'Ext.data.Store',

    alias: 'store.barang',

    model: 'MantapApp.model.Barang',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/barang',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    }
});