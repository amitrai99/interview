/**
 * JavaScript objects are hashes. But it would be fun to write our own hashmap.
 * A hashmap / hashtable are same thing in theory.
 * In Java hastable class is older synchronized class hashmap is new unsyncronized class both do the same thing.
 */
/**
 * Considerations
 * (1) Bucket Size
 * We need a minimum bucket size. i.e. the initial number of slots where keys can be distributed. Typically 16.
 * This grows once the bucket reaches a specific load factor typically 75%.
 * Bucket size is always a power of 2. Even if you initialize with a number "n" not power of two, the class
 * automatically will create buckets such that 2^y >= n
 *
 * (2) Hashcode generator function for keys.
 *
 * (3) API, we will need a basic API
 * 	(a) get(key)
 *  (b) put(key, value)
 *  (c) remove(key);
 *
 */

function HashMap( bucketSize ) {
  this.bucketSize = bucketSize ? bucketSize : 16; //number of slots for keys to be distributed
  this.bucket = []; //keys are ditributed here
  this.load = 0; // number of slots already occupied
}

/**
 * fills the given array with null values till ith index if that location is undefined/null
 * @param  {array} arr [description]
 * @return {array} updated array : Note : not needed arrays are pass by reference
 */
HashMap.prototype.fillArray = function (arr, maxIndex) {
  var i = 0;
  while( i < maxIndex ) {
    if( !arr[i] ) {
      arr[i] = null;
    }
  }
  return arr;
};

HashMap.prototype.getHashCode = function(key) {
  if(!key) {
    return 0;
  }
  //uses same code as Java
  var len = key.length,
      cc = 0,
      i = 0,
      hash = 0;

  while( i < len ) {
    cc = key.charCodeAt(i);
    hash = hash * 31 + cc;
    i++;
  }
  return hash;
};

HashMap.prototype.getIndex = function(hash) {
  return hash % this.bucketSize;
};

HashMap.prototype.get = function(key) {
  var hash = this.getHashCode(key),
      index = this.getIndex(hash);

  return this.bucket[index];
};

HashMap.prototype.put = function(key, value) {
  var hash = this.getHashCode(key),
      index = this.getIndex(hash);

  if( !this.bucket[index] ) {
    this.bucket[index] = value;
    this.load = this.load + 1;
  } else {
    throw new Error('Collision');
  }
};

HashMap.prototype.remove = function(key) {
  if( this.load === 0 ) {
    return false;
  }
  var hash = this.getHashCode(key),
      index = this.getIndex(hash);

  this.bucket[index] = null;
  this.load = this.load - 1;
  return true;
};

HashMap.prototype.checkLoadFactor = function () {
  if( this.load / this.bucketSize >= 0.75 ) {
    this.fillArray( this.bucket, this.bucketSize * 2 );
  }
  this.bucketSize = this.bucketSize * 2;
};


function test() {
  var hm = new HashMap();
  hm.put('amit','amit rai');
  console.log(hm.get('amit'));
  console.log(hm.remove('a'));
  console.log(hm.get('a'));
}

test();
