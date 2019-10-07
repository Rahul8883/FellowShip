function click(){
    //Observer
    this.handlers=[]
}
click.prototype={
    subscribe : function(fn){
        this.handlers.push(fn);
    },
    unsubscribe : function(fn){
        this.handlers=this.handlers.filter(
            function(item){
                if(item!==fn){
                    return item;
                }
            }
        );
    },
    fire : function(o, thisObj){
        var scope=thisObj || window;
        this.handlers.forEach(function(item){
            item.call(scope, o);
        });
    }
}
//log Helper 
var log=(function(){
    var log=" ";
    return {
        add : function(msg){log+=msg+"\n";},
        show : function(){console.log(log); log = " ";},
    }
})();
function run(){
    var clickhandler=function(item){
        log.add("fired : "+ item);
    };
    var click=new click();
    click.subscribe(clickhandler);
    click.fire('event#1')
    click.unsubscribe(clickhandler);
    click.fire('event#2')
    click.subscribe(clickhandler);
    click.fire('event#3')
    log.show();
}
run();