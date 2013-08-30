Ext.define('cf.view.FormUsuario', {
    extend: 'Ext.form.Panel',

    xtype: 'formusuario',

    title: 'Cadastro de usuários',

    bodyStyle: {
        background: 'transparent'
    },
    
    trackResetOnLoad: true,

    border: 0,

    padding: 5,
    
    defaults:{
        width: 300,
        margin: '5 0 0 10'  
    },

    items: [
        {
            xtype: 'textfield',
            name: 'nome',
            fieldLabel: 'Nome',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name: 'age',
            fieldLabel: 'Idade',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'phone',
            fieldLabel: 'Telefone',
            allowBlank: false
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: 'Status',
            defaultType: 'radiofield',
            defaults: {
                flex: 2
            },
            layout: 'hbox',
            items: [
                {   
                    xtype: 'radiofield',
                    name: 'alive',
                    inputValue: true,
                    fieldLabel: 'Vivo',
                    width: 100,
                    labelWidth: 50
                },
                {
                    xtype: 'radiofield',
                    name: 'alive' ,
                    inputValue: false,
                    fieldLabel: 'Morto',
                    labelWidth: '50',
                    width: 100,
                    labelWidth: 50
                }
            ]
        },
        {
            xtype: 'button',
            text: 'Salvar',
            name: 'salvar-formulario',
            width: 150
        },
        {
            xtype: 'button',
            text: 'Cancelar',
            name: 'cancelar-window',
            width: 150,
            
        }
    ]
});