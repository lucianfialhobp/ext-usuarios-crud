Ext.define('cf.view.ListaUsuarios', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'listausuarios',

    requires: [
        'cf.store.Usuarios'
    ],

    columns: [
        {text: 'Nome',  dataIndex: 'nome', flex: 3},
        {text: 'Idade', dataIndex: 'age', flex: 1},
        {text: 'Telefone', dataIndex: 'phone', flex: 1},
        {
            text: 'Vivo?',
            dataIndex: 'alive',
            flex: 1,
            renderer: function (valor) {
                return valor? 'Sim': 'Não';
            }
        }
    ],


    initComponent: function () {
        this.store = Ext.create('cf.store.Usuarios');

        this.callParent(arguments);
    }

});