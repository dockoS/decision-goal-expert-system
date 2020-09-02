findSpace=function(x){
    for (let i = 0; i < place.length; i++) {
        for (let j = 0; j < place[i].length; j++) {
            if (place[i][j]==x) {
                console.log(x+" is in the  "+i+"th bloc at the "+j+"th position")
                return [i,j]
            }
        }
        
    }
    return null
}
var place=[
    [null,null,null,null],
[1,8,7,null]
,[6,5,null,null],
[9,2,3,4]]
console.log(findSpace(4))
first_null_element=function(tab){
    for (let i = 0; i < tab.length; i++) {
      if (tab[i]===null) {
          return i
      }    
    }
    return null
}
console.log(first_null_element([1,2,4,4]))