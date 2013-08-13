Ext.define('cf.model.Usuario', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'nome', type: 'string'},
        {name: 'age',   type: 'int'},
        {name: 'phone', type: 'string'},
        {name: 'alive', type: 'boolean', defaultValue: true}
    ]

});
