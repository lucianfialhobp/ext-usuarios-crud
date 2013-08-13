Ext.define('cf.view.FormUsuario', {
    extend: 'Ext.form.Panel',

    xtype: 'formusuario',

    bodyStyle: {
        background: 'transparent'
    },

    border: 0,

    padding: 5,

    items: [{
        xtype: 'textfield',
        name: 'nome',
        fieldLabel: 'Nome'
    },{
        xtype: 'numberfield',
        name: 'age',
        fieldLabel: 'Idade'
    },{
        xtype: 'textfield',
        name: 'phone',
        fieldLabel: 'Telefone'
    },{
        xtype: 'radiofield',
        name: 'alive',
        inputValue: true,
        fieldLabel: 'Vivo'
    },{
       xtype: 'radiofield',
       name: 'alive' ,
       inputValue: false,
       fieldLabel: 'Morto'
    },{
        xtype: 'button',
        text: 'Salvar',
        name: 'salvar-formulario'
    }]
});