
 isEmptyObject = function(obj){
    for(var n in obj){return false}
    return true;
};
noRepeat =function(arr){
    if(typeof arr=="string")arr = arr.split(",");
     var n = {},r=[];
     for(var i = 0; i < arr.length; i++)
     {
         if (!n[arr[i]])
         {
             n[arr[i]] = true;
             r.push(arr[i]);
         }
     }
     return r;
 }


exports.noRepeat      =noRepeat;
exports.isEmptyObject = isEmptyObject;
