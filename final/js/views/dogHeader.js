window.HeaderView = Backbone.View.extend({

    initialize:function () {
        this.template = _.template(tpl.get('dogHeader'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click .newPoop":"newPoop"
    },

    newPoop:function (event) {
        //app.navigate("wines/new", true);
        alert('That Stinks!')
        return false;
    }

});
