Ext.define('cf.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'Usuarios'
    ],

    requires: [
        'cf.view.WindowFormUsuario'
    ],

    refs: [{
        ref: 'ListaUsuarios',
        selector: 'listausuarios'
    }],

    init: function () {
        
        this.control({
            'listausuarios button[name="criar-usuario"]': {
                click: this.criarUsuario
            },

            'listausuarios button[name="remover-usuario"]':{
                click: this.excluiUsuario
            },

            'formusuario button[name="salvar-formulario"]': {
                click: this.salvarFormulario
            }

        });

    },

    criarUsuario: function () {
        Ext.create('cf.view.WindowFormUsuario').show();
    },
    excluiUsuario: function (btn) {
        var itemSelected = this.getListaUsuarios().getSelectionModel().getSelection()[0];
        var store = this.getListaUsuarios().getStore();

        store.remove(itemSelected);
    },
    salvarFormulario: function (btn) {
        var values = btn.up('form').getForm().getValues();
        var store = this.getListaUsuarios().getStore();

        store.add(values);
    }
});
