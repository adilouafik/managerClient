/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'app',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'jquery': 'npm:jquery/',
            'lodash': 'npm:lodash/lodash.js',
            'moment': 'npm:moment/',
            'ng2-bootstrap': 'npm:ng2-bootstrap',
            'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar',
            'ng2-translate': 'node_modules/ng2-translate',
            "ng2-popover": "node_modules/ng2-popover",
            'ng2-pagination': "node_modules/ng2-pagination/dist"
        },
        packages: {
            angular: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'moment': { main: 'moment.js', defaultExtension: 'js' },
            'ng2-bootstrap': { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
            'ng2-slim-loading-bar': { main: 'index.js', defaultExtension: 'js' },
            "ng2-popover": {main: "index.js", defaultExtension: "js"},
            'ng2-pagination':{ main: 'ng2-pagination.js', defaultExtension: 'js' }
        }
    });
})(this);
