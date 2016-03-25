"use strict";

var list = function() {
    var list = function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }

        var l = {
            length: 0,
            currentNode: null,
            head: new Node(null),
            add: function (e) {
                if (l.currentNode === null) { // This is true the first time
                    l.head.data = e;
                    l.currentNode = new Node(null);
                    l.head.next = l.currentNode;
                    l.length++;
                }
                else {
                    l.currentNode.data = e;
                    var node = new Node(null);
                    l.currentNode.next = node;
                    l.currentNode = node;
                    l.length++;
                }
            },
        };

        var F = function () {
        };
        var f = new F();

        // public data
        f.run = function (e) {
            return l[e];
        };
        f.first = f.car = function () {
            return l.head.data
        };
        f.rest = f.cdr = function () {
            if (l.length > 0) {
                l.head = l.head.next;
                l.length--;
            }
            return this;
        }
        f.concat = f.cons = function (e) {
            if (typeof e === 'string' || e instanceof String) {
                l.add(e);
            }
            else {
                var n = e.run('head');
                for (var i = 0; i < e.run('length'); i++) {
                    l.add(n.data);
                    n = n.next;
                }
            }
        }
        f.length = function () {
            return l.length
        };
        f.map = function (f) {
            if (f instanceof Function) {
                var n = l.head;
                for (var i = 0; i < l.length; i++) {
                    n.data = f(n.data);
                    n = n.next;
                }
            }
        }

        // problem 2 iterator code
        f.iterate = function() {
            var current_node = l.head;
            var counter = 0;
            return function(){
                if (counter < 1){
                    counter += 1;
                    return current_node.data;

                } else{
                    counter += 1;
                    current_node = current_node.next;
                    return current_node.data;
                }
            }
        }();
        return f;
    }();
    return list;

};

var list1 = new list();
list1.concat("please");
list1.concat("give");
list1.concat("us");
list1.concat("an");
list1.concat("A+");
list1.concat("thank");
list1.concat("you");
list1.concat(":)");

for (var i = 0; i<list1.length(); i++){
    document.writeln("(" + i + ")"+ list1.iterate());

}



