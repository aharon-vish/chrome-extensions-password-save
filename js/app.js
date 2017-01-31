requirejs.config({
    "baseUrl": "js/scripts",
    "paths": {
        "app": "../app"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    },
    map: {
        '*': {
            'templates/item': '../../templates/item'
        }
    }
});
requirejs(["app/main","app/testApiFirebase"]);