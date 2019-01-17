/*
添加和移除事件处理函数
*/ 

var EventUtil = {
    //添加事件处理函数
    addHandler: function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler)
        }else{
            element["on"+type] = handler;
        }
    },
    //获取event事件
    getEvent: function(event){
        return event ? event:window.event;
    },
    //获取target
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    //获取相关元素
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if (event.fromElement) {
            return event.fromElement
        }else{
            return null;
        }
    },
    //获取鼠标点击事件
    getButton: function(event) {
        if (document.implementation.hasFeature("MouseEvents","2.0")) {
            return event.button;
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    //阻止默认行为
    preventDefault: function(event){
        if (event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //移除事件处理函数
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null
        }
    },
    stopPropagation: function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}