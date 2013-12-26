Jcache
=========
Jcache is a node.js library for caching.
## Installation
You can install Jcache with the npm:
```bash
npm install jcache
```

## Functions
### add(key, data)
Add new data to cache

__Arguments__

* key - Key (ID) for access to cached data.
* data - Value for caching.

__Example__

```js
// Add data "10" with key "5+5" to cache
var jcache = require('jcache');
jcache.add("5+5", 10);
```

### get(key)
Get data from cache.

__Arguments__

* key - Key (ID) for access to cached data.

__Example__

```js
// Get data with id "5+5" from cache
var jcache = require('jcache');
jcache.get("5+5"); // Should return 10 if using with above example.
```

### exists(key)
Check that data with key exists in cache

__Arguments__

* key - Key (ID) for access to cached data.

__Example__

```js
// Check that data with key "5+5" exists in cache
var jcache = require('jcache');
jcache.exists("5+5"); // Should return true if using with above examples.
```

### remove(key)
Remove data with key

__Arguments__

* key - Key (ID) for access to cached data.

__Example__

```js
// Remove data with key "5+5"
var jcache = require('jcache');
jcache.remove("5+5");
```

### clear()
Clear the cache


__Example__

```js
// Clear the cache
var jcache = require('jcache');
jcache.clear();
```