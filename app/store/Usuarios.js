Ext.define('cf.store.Usuarios', {
    extend: 'Ext.data.ArrayStore',

    model: 'cf.model.Usuario',

    data: [
        ['Eduardo', 26, '21-11223366', true],
        ['Lucian', 29, '21-99887744', true],
        ['Getulio Vargas', 99, '21-11223366', false]
    ]

});
