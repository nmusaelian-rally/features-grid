Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
                this.add({
                    xtype: 'rallygrid',
                    model: 'PortfolioItem/Feature',
                    enableRanking: true,
                    columnCfgs: [{
                        dataIndex: 'DragAndDropRank',
                        maxWidth: 50
                    },{
                        dataIndex: 'FormattedID',
                        maxWidth: 50
                    },{
                        dataIndex: 'Name',
                        flex: 1,
                        minWidth: 160
                    },
                    {
                        dataIndex: 'Description',
                        flex: 1,
                        minWidth: 300

                    }]
                });
    }
});

