Ext.define('cf.model.Carona', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'nome', type: 'string'},
        {name: 'matricula',   type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'rota', type: 'string'},
        {name: 'pedagio', type: 'boolean', defaultValue: true},
    ]

});
