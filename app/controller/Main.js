Ext.define('cf.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'Caronas'
    ],

    requires: [
        'cf.view.WindowFormCarona'
    ],

    refs: [{
        ref: 'ListaCaronas',
        selector: 'listacaronas'
    }],

    init: function () {
        
        this.control({
            'listacaronas button[name="criar-usuario"]': {
                click: this.criarUsuario
            },

            'listacaronas button[name="remover-usuario"]':{
                click: this.excluiUsuario
            },

            'formcaronas button[name="salvar-formulario"]': {
                click: this.salvarFormulario
                
            },
            'formcaronas button[name="cancelar-window"]': {
                click: this.fecharFormulario
            }

        });

    },

    criarUsuario: function () {
        Ext.create('cf.view.WindowFormCarona').show();
    },
    excluiUsuario: function (btn) {
        var itemSelected = this.getListaUsuarios().getSelectionModel().getSelection()[0];
        var store = this.getListaUsuarios().getStore();

        store.remove(itemSelected);
    },
    
    executaForm: function(btn){
        
        // salvarFormulario(btn);
        // resetaFormulario(btn);
    },

    salvarFormulario: function (btn) {
        var form =  btn.up('form').getForm();
        if (form.isValid()) {
            var values = form.getValues();
            var store = this.getListaUsuarios().getStore();

            store.add(values);
        }
    },

    resetaFormulario: function(btn){
        var formReseta = btn.up('form').getForm();
        formReseta.reset();
    },

    fecharFormulario: function(btn){
        var closeForm = btn.up('window');
        closeForm.hide();
    }
});
