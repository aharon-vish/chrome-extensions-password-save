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
            deps: ["underscore", "jquery","apiFirbaseStorage"],
            exports: "Backbone"
        }
    },
    map: {
        '*': {
            'templates/item': '../../templates/item'
        }
    }
});
requirejs(["app/main"]);