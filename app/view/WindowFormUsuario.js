Ext.define('cf.view.WindowFormUsuario', {
    extend: 'Ext.window.Window',

    requires: [
        'cf.view.FormUsuario'
    ],

    xtype: 'windowformusuario',

    modal: true,

    initComponent: function () {

        this.items = [{
            xtype: 'formusuario'
        }];

        this.callParent(arguments);
    }
});