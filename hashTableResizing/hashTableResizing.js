var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var tempTupleStorage = []
  function _double(){
    storageLimit *= 2;
    console.log(storageLimit)
    for (let list of storage){
      console.log(list)
    }
  } 

  result.insert = function(key, value) {
    // TODO: implement `insert`
    var hash = getIndexBelowMaxForKey(key.toString(), storageLimit);
    if (!storage[hash]) {
      storage[hash] = [[key, value]];
      size += 1
    } else {
      storage[hash].push([key, value]);
      size += 1
    }
    if (size / storageLimit > 0.75){
      _double();
    }
  };

  result.retrieve = function(key) {
    var hash = getIndexBelowMaxForKey(key.toString(), storageLimit);
    var linkedList = storage[hash];
//     console.log(linkedList)
    var res;
    if (linkedList.length !== 0) {
      linkedList.forEach(function(tuple) {
        if (tuple[0] === key.toString()) {
//             console.log(tuple)
          res = tuple[1];
        }
      });
    } else {
      return undefined;
    }
    return res;
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    var hash = getIndexBelowMaxForKey(key.toString(), storageLimit);
    var linkedList = storage[hash];
    var ioi = undefined;
    if (linkedList.length !== 0) {
      linkedList = linkedList.filter(function(tuple) {
        if (tuple[0]=== key) { ioi = tuple[1]}
        console.log(tuple[0].toString() === key.toString())
        return tuple[0].toString() !== key.toString()
      });
    }
    storage[hash] = linkedList;
    return ioi;
  };
  

  return result;
};

var dict = makeHashTable();
dict.insert("josh", "first input");
dict.insert("jake", "2nd input");
dict.insert("andy", "3rd input");
dict.insert("phillip", "4th input");
dict.insert("ben", "5th input");
dict.insert("cade", "6th input");
dict.insert("tantri", "7th input");
dict.insert("Tantri", "8th inpu");
dict.insert("Jaws", "movie");

var res = dict.remove("Fake");


console.log(res)


