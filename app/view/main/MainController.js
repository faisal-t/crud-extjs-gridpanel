/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MantapApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onAddClick: function() {
           var refs = this.getReferences(),
            view = refs.viewBarangGrid,
            rec = new MantapApp.model.Barang({
                code_barang: '',
                nama_barang: '',
                harga: '',
                new: 1,
            });
            console.log(rec);
         view.store.insert(0, rec);
    },

    onSaveClick:function(){
        var me = this,
            refs = me.getReferences(),
            grid = refs.viewBarangGrid,
            store = grid.getStore(),
            rows = store.data.items;

        
        Ext.Array.each(rows, function(value){
            var data = value.data;
            if (value.dirty) {
                if (data.new != true) {
                    Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/barang/'+data.id,
                    method: "PUT",
                    params: data,
                    success: function(response){
                        Ext.Msg.alert('Sukses Update Data');
                        store.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Update Data');
                    }

                });
                }else{
                    Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/barang',
                    method: "POST",
                    params: data,
                    success: function(response){
                        console.log(response);
                        Ext.Msg.alert('Sukses Simpan Data',response);
                        store.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Simpan Data',);
                    }

                });
                }
            }
        });    
    },

     onCancelClick: function(){
            var me = this,
            refs = me.getReferences(),
            grid = refs.viewBarangGrid  ,
            store = grid.getStore();
            
            store.load();
    },

    onRemoveClick: function(grid, rowIndex, colIndex) {
       var data = grid.getStore().getAt(rowIndex).data;
       var store = grid.getStore();
       console.log(data);
       Ext.MessageBox.confirm('Konfirmasi','apakah anda yakin ingin menghapus data ' + data.nama_barang + ' ?',
        function (btn,text) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/barang/' + data.id,
                    method: "DELETE",
                    params: data,
                    success: function(response){
                        Ext.Msg.alert('Sukses Hapus Data');
                        store.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Simpan Data');
                    }
    });
            }
        }, this)},


    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
