# Installation
```
npm install expect-dom.js
```

# Setup for node.js

```
var expect = require('expect.js');

  //extend expect with DOM related assertions
require('expect-dom.js')(expect);

```


# Setup for the browser
Just use browserify...

 

# Api

* expect($(somelement)).to.be.visible();



# Motivation
This is based on jquery (no conflict) DOM engine

