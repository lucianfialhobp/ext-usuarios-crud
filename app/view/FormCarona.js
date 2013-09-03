Ext.define('cf.view.FormCarona', {
    extend: 'Ext.form.Panel',

    xtype: 'formcarona',

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
            xtype: 'textfield',
            name: 'matricula',
            fieldLabel: 'Matricula',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'phone',
            fieldLabel: 'Telefone',
            allowBlank: false
        },
        {
            xtype: 'checkboxgroup',
            
            fieldLabel: 'Trajeto',

            columns: 1,

            items: [
                { 
                    boxLabel: 'Linha Amarela', 
                    name: 'rota', 
                    inputValue: '1' 
                },
                { 
                    boxLabel: 'Linha Vermelha', 
                    name: 'rota', 
                    inputValue: '2' 
                },
                { 
                    boxLabel: 'Grajau JPA', 
                    name: 'rota', 
                    inputValue: '3' 
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: 'Pedagio?',
            defaultType: 'radiofield',
            defaults: {
                flex: 2
            },
            layout: 'hbox',
            items:[
                {
                    boxLabel: 'Sim',
                    name: 'pedagio',
                    inputValue: 's',
                    id: 'radio1'
                },
                {
                    boxLabel: 'Não',
                    name: 'pedagio',
                    inputValue: 'n',
                    id: 'radio2'
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
            width: 150
            
        }
    ]
});