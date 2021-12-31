const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/app.js',
        'resources/js/materialize.min.js'],
         'public/js/app.js');
mix.styles(['resources/css/app.css',
            'resources/css/all.css',
            'resources/css/materialize.min.css',
            'resources/css/materialize.rtl.min.css'],
         'public/css/app.css');
