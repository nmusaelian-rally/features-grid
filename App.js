Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
                this.add({
                    xtype: 'rallygrid',
                    model: 'PortfolioItem/Feature',
                    enableRanking: true,
                    storeConfig: {
                      context: {
                          context: this.getContext().getDataContext()
                          //project: '/project/12527515559' //you may comment out the line above and hardcode any valid project ObjectID here
                      }
                    },
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
                        dataIndex: 'Project',
                        flex: 1,
                        minWidth: 160
                    }
                    ]
                });
    }
});

