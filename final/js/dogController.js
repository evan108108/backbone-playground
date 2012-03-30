Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    routes:{
        "":"dogshit"
    },


    dogshit:function () {
      console.log("dogshit action")
      //alert("dogshit son");
     var dog = new Dogshit()
     app.showView('#content', new DogView({model:dog}));

    },
    

    //newWine:function () {
        //this.before(function () {
            //app.showView('#content', new WineView({model:new Wine()}));
        //});
    //},

    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    //before:function (callback) {
        //if (this.wineList) {
            //if (callback) callback();
        //} else {
            //this.wineList = new WineCollection();
            //this.wineList.fetch({success:function () {
                //$('#sidebar').html(new WineListView({model:app.wineList}).render().el);
                //if (callback) callback();
            //}});
        //}
    //}

});

tpl.loadTemplates(['dogHeader', 'dog-details'], function () {
    app = new AppRouter();
    Backbone.history.start();
});
