Ext.define('cf.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'Usuarios'
    ],

    refs: [{
        ref: 'ListaUsuarios',
        selector: 'listausuarios'
    }],

    init: function () {
        
        this.control({
            'listausuarios button[name="criar-usuario"]': {
                click: this.criarUsuario
            }
        });

    },

    criarUsuario: function () {
        var store = this.getListaUsuarios().getStore();

        store.add({
            nome: 'Abc',
            age: 123,
            phone: '5541',
            alive: false
        });

    }
});
