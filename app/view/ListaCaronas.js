Ext.define('cf.view.ListaCaronas', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'listacaronas',

    requires: [
        'cf.store.Caronas'
    ],

    columns: [
        {text: 'Nome',  dataIndex: 'nome', flex: 3},
        {text: 'Matricula', dataIndex: 'matricula', flex: 1},
        {text: 'Telefone', dataIndex: 'phone', flex: 1},
        {
            text: 'Trajeto', 
            dataIndex: 'rota', 
            flex: 3,
            renderer: function (valor) {
                var val = valor.split(",");
                var cadaValor = val.map(function(valor){
                            if(valor === '1'){
                                return "Linha Amarela";
                            }
                            if(valor === '2'){
                                return "Linha Vermelha";
                            }
                            if(valor === '3'){
                                return "Grajau JPA";
                            }
                        });
                return cadaValor;

            }
        },
        {
            text: 'Pedagio?',
            dataIndex: 'pedagio',
            flex: 1,
            renderer: function (valor) {
                return valor? 'Sim': 'Não';
            }
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                text: 'Criar',
                name: 'criar-usuario',
                icon: 'https://cdn1.iconfinder.com/data/icons/prettyoffice/16/add1-.png'
            },
            {
                text: 'Remover',
                name: 'remover-usuario',
                icon: 'https://cdn1.iconfinder.com/data/icons/oxygen/16x16/actions/list-remove.png'
            }
        ]
    }],


    initComponent: function () {
        this.store = Ext.create('cf.store.Caronas');

        this.callParent(arguments);
    }

});