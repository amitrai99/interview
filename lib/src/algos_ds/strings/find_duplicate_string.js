//Find duplicates using hashmap
function findDuplicateMap(str) {
  if(!str) {return;}
  var map = {};
  var len = str.length - 1;

  while(len >= 0) {
    if(map[str.charAt(len)]) {
      map[str.charAt(len)] = map[str.charAt(len)] + 1;
    } else {
      map[str.charAt(len)] = 1;
    }
    len = len - 1;
  }

  for(var key in map) {
    if(map.hasOwnProperty(key) && map[key] > 1) {
      console.log(key + ' : ' + map[key]);
    }
  }

}

findDuplicate('amitt');
