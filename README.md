# tinysequence.js

An extremely tiny (257 bytes) sequence generator.

## Install

#### Through NPM

```
npm install tinysequence.js
```

#### In the browser

```
<script src="/path/to/tinysequence.min.js"></script>
```

## Usage
```
ts(count, delimiter, transform);
```

### Simple

```
var seq = ts(5);
return seq; // [0, 1, 2, 3, 4]

var stringSeq = ts(5, " ");
return stringSeq; // "0 1 2 3 4"
```

### Custom Delimiter

```
var seq = ts(3, ":");
return seq; // "0:1:2"
```

### Iteration transformer

```
var seq = ts(3, " ", function(x){
  return "foo-" + (x+1) + "-bar";
});
return seq; // "foo-1-bar foo-2-bar foo-3-bar"
```
