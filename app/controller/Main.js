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

            'formusuario button[name="salvar-formulario"]': {
                click: this.salvarFormulario
            }
        });

    },

    criarUsuario: function () {
        Ext.create('cf.view.WindowFormUsuario').show();
    },

    salvarFormulario: function (btn) {
        var values = btn.up('form').getForm().getValues();
        var store = this.getListaUsuarios().getStore();

        store.add(values);
    }
});
