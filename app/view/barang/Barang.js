/**
 * This view is an example list of people.
 */
Ext.define('MantapApp.view.barang.Barang', {
    extend: 'Ext.grid.Panel',
    xtype: 'barang',

    requires: [
        'MantapApp.store.Barang',
        'MantapApp.view.barang.BarangController',
    ],



    title: 'Manajemen Barang',

    store: {
        type: 'barang'
    },
     reference: 'viewBarangGrid',

    plugins: {
        rowediting: {
            clicksToMoveEditor: 1,
            autoCancel: false
        }
    },


    columns: [
        { text: 'Code Barang',  dataIndex: 'code_barang'},
        { text: 'Nama Barang', dataIndex: 'nama_barang', flex: 1 ,editable: true, 
            editor: {
            // defaults to textfield if no xtype is supplied
            allowBlank: false
            },
        },
        { text: 'Harga', dataIndex: 'harga', flex: 1 , 
            editor: {
            xtype: 'numberfield',
            allowBlank: false,
            minValue: 1,
            maxValue: 150000
            },
        },
        {
            text: 'actions',
            xtype: 'actioncolumn',
                    menuDisabled: true,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-trash',
                            handler: 'onRemoveClick'

                        },
                    ],
        },
    ],

    dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-plus',
                                handler: 'onAddClick',
                                tooltip: 'Tambah Data',
                            },
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-save',
                                handler: 'onSaveClick',
                                tooltip: 'Simpan Data',
                            },
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-undo',
                                handler: 'onCancelClick',
                                tooltip: 'Batal Simpan',
                            },
                        ],
                    },
                ],


});
