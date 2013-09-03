Ext.define('cf.view.WindowFormCarona', {
    extend: 'Ext.window.Window',

    requires: [
        'cf.view.FormCarona'
    ],

    xtype: 'windowformcarona',

    modal: true,

    title: 'Cadastro de carona',
    
    initComponent: function () {

        this.items = [{
            xtype: 'formcarona'
        }];

        this.callParent(arguments);
    }
});