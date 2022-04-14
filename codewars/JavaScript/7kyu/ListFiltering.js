// Solution : arr.filter(conditions)

/*----------------------------------------------------------------

WARNING: 0 is a "falsy" value that will make 
         .filter() remove it even when we want
          to include it in the result.
         
----------------------------------------------------------------*/

function filter_list(l) {
    return l.filter((x) => typeof x == 'number');
}

console.log(filter_list([1, 'a', 'b', 0, 15]));
