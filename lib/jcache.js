var cache = {};
exports.add = function(key, data) {
    if (!(key in cache)) {
        cache[key] = data;
        return true;
    } else {
        throw new Error("Value with key \"{{key}}\" already exists".replace("{{key}}", key));
    }
};

exports.get = function(key) {
    if (key in cache) {
        return cache[key];
    } else {
        throw new Error("Value with key \"{{key}}\" does not exists".replace("{{key}}", key));
    }
};

exports.remove = function(key) {
    if (key in cache) {
        delete cache[key];
        return true;
    } else {
        // It's already does not exists
        return true;
    }
};

exports.exists = function(key) {
    return key in cache;
};

exports.clear = function() {
    cache = {};
    return true;
};