Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
                this.add({
                    xtype: 'rallygrid',
                    model: 'PortfolioItem/Feature',
                    enableRanking: true,
                    storeConfig: {},
                    columnCfgs: [{
                        dataIndex: 'FormattedID',
                        maxWidth: 50
                    },{
                        dataIndex: 'Name',
                        maxWidth:200
                    },
                    {
                        dataIndex: 'Project',
                        maxWidth:100
                    },
                    {
                        dataIndex: 'PercentDoneByStoryCount'
                    },
                    {
                        dataIndex: 'PercentDoneByStoryPlanEstimate'
                    }
                    ]
                });
    }
});

