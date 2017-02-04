/**
 * Created by wangqun6 on 2017/2/4.
 */
let sprite = require('../index');
let gulp = require("gulp");

let outDir = "build";

gulp.src("src/**/*css")
    .pipe(sprite({
        cssDesDir: outDir,
        imgDesDir: "result/img"
    }))
    .pipe(gulp.dest(outDir));
