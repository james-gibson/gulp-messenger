# gulp-messenger
### gulp plugin for browser, command line notification and logging!

[![Build Status](https://travis-ci.org/mikeerickson/gulp-messenger.svg?branch=master)](https://travis-ci.org/mikeerickson/gulp-messenger) [![Dependency Status](https://gemnasium.com/mikeerickson/gulp-messenger.svg)](https://gemnasium.com/mikeerickson/gulp-messenger) [![npm](https://img.shields.io/npm/dm/localeval.svg)]() [![npm](https://img.shields.io/badge/mocha-passed-green.svg)]()




### Install with [npm](npmjs.org)

```sh
npm install gulp-messenger
```

### Usage

```js
var msg = require('gulp-messenger');

msg.init(); // initialize module, otherwise defaults will be used

// this example will enable file logging (see options below)
msg.init({logToFile: true});


// this will disable logging to file and interpolation variables will be font style as message (no bold)
var options = { logToFile: false, boldVariables: false };
msg.init(options);


msg.Info('-', 'Loading...', '*');
msg.Info   ('style: <%= name %>', {name: 'info'});
msg.Success('style: <%= name %>', {name: 'success'});
msg.Warning('style: <%= name %>', {name: 'warning'});
msg.Error  ('style: <%= name %>', {name: 'error'});
msg.Note   ('style: <%= name %>', {name: 'note'});
msg.Time   ('style: <%= name %>', {name: 'time'});
msg.Debug  ('style: <%= name %>', {name: 'debug'});
```


### API
#### info/Info, success/Success, warning/Warning, error/Error, note/Note, time/Time, debug/Debug

- lowercase methods are to bue used in gulp pipeline
- Titlecase methods are to be used outside of gulp (ie node or browser)

Default Options (supplied to `init` method)

```js
var defOptions = {
    logToFile:     false,
    logToConsole:  true,
    logPath:       'logs/',
    logFile:       'app.log',
    timestamp:     false,
    rotateLog:     false,
    boldVariables: true
};
```

For example `info`
Use `msg.info` for each file into the stream

```js

msg.Info('This information message logged to console and optionally log');

or -

gulp.src('src/**/*')
    .pipe(msg.info('Piping Message')); //'Piping Message' for each file
```

Use `msg.flush.info` at the and of the stream

```js
gulp.src('src/**/*')
    .pipe(msg.flush.info('Process Completed Successfully')); //'Process Completed Successfully' at the and of stream
```

Use `msg.Info` from the outside of the stream

```js
msg.Info('Application Message'); //'Application Message' in node.js application
```

### msg.Info([before,] message, [after,] [data])

Show message

#### Parameters

##### before
##### after
Type: `String`

Delimiter before/after the message. Each character is repeated 80 times

#### Usage

```js
msg.Info('--', 'Hello World', '*')
```

##### data
Type: `Object`

Data for message. Inherited values:

<pre>
env           - process.env
file          - vinyl file
file.relative - relative path (extra field)
file.basename - basename (extra field)
duration      - duration of streaming
totalDuration - duration from gulpfile start
</pre>


##### message
Type: `String`

Lodash template.

#### Usage

```js
msg.Info('Enviroment: <%= env.NODE_ENV %>. Name: <%= name %>', {name: 'codedungeon'})
//Enviroment: dev. name: codedungeon
```


### License

Copyright (c) 2015 Mike Erickson
Released under the MIT license


### Credits

gulp-messenger written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Webiste: [codedungeon.org](http://codedungeon.org)

***
