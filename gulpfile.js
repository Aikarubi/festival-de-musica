import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

/*export function hola( done ) {
    console.log('Hola desde Gulpfile.js');

    done(); // Callback que se ejecuta cuando finalice el gulp
}*/

//EN EL JSON SCRIPTS
//"hola": "gulp hola"

const sass = gulpSass(dartSass);

export function css( done ) {
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', { sourcemaps: true }) )

    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css); //Esta ruta es para leer todos los archivos .scss que esten en esta carpeta y sus subcarpetas
}