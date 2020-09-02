class Decision_Goal{
constructor (place,X,Y){
    this.place=place
    this.X=X
    this.Y=Y
}
set_place(place){
    this.place=place
}
findSpace=function(x){
    for (let i = 0; i < this.place.length; i++) {
        for (let j = 0; j < this.place[i].length; j++) {
            if (this.place[i][j]===x) {
                console.log(x+" is in the  "+i+"th bloc at the "+j+"th position")
                return [i,j]
            }
        }
        
    }
    return null
}
is_in_top(x){
   var position=this.findSpace(x)
    if(this.place[position[0]]===position[1]+1 || this.place[position[0][position[1]+1]]===null) return true
    return false
}
list_Free(){
    var list=[]
    for (let i = 0; i < this.place.length; i++) {
       var positionX=this.findSpace(this.X)
      var positionY=this.findSpace(this.Y)
      var j=positionX[0]
      var k=positionY[0]
       if(i!==j && i!==k && this.place[i][this.place.length-1]===null) {list.push(i)
    console.log("the bloc number "+i+"have free space")
    }

    }
 return list
}
first_null_element(tab){
    for (let i = 0; i < tab.length; i++) {
      if (tab[i]===null) {
          return i
      }    
    }
    return null
}
async get_rid_of(i,j){
    if(this.is_in_top(this.place[i][j])===false){
       var first_null=this.first_null_element(this.place[this.list_Free()[0]])
       this.place[this.list_Free()[0]][first_null]=this.place[i][j]
       this.place[i][j]=null
       console.log(this.place)
        console.log(this.place[this.list_Free()[0]][first_null]+" on the bloc "+i+"is puted on the bloc "+this.list_Free()[0])
        this.list_Free()
    }
}
clear_top=function(x){
   var position=this.findSpace(x)
   var i=position[0]
   var j=position[1]
   var first_null=this.first_null_element(this.place[i])
   console.log("first_null "+first_null)
    if (first_null===null) {
       console.log(x+" is in the top " ) 
    }else{
        
        for (let k =first_null-1 ; k >j; k--) {     
               this.get_rid_of(i,k)
        }
        console.log(x+ "is now in the top of the bloc "+i)
    }
     return position

}
put_on(){
 var    positionX=this.clear_top(this.X)
  var  i=positionX[0]
   var j=positionX[1]
    
    //do {
       var positionY=this.clear_top(this.Y)
       var k=positionY[0]
      var  m=positionY[1]
        
    //} while (this.first_null_element(this.place[k])===null);
this.place[k][m+1]=this.place[i][j]
 this.place[i][j]=null    
 console.log("bimmmmmmmm it is done "+this.X+" is on "+this.Y)
 return this.place
}
}
var place=[
    [null,null,null,null],
[1,8,7,null,]
,[6,5,null,null],
[9,2,3,null]]
console.log(place)
decision_tree=new Decision_Goal(place,2,1)
new_place=decision_tree.put_on()
console.log(new_place)