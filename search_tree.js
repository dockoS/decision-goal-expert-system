class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}
class manageTree{
    constructor(){
   this.value=null     
    }
find(value){
}
}
// create nodes with values
const a = new TreeNode('put A on B');
const c=new TreeNode("graspB")
const d=new TreeNode("findSpace")
const b=new TreeNode("move")
a.descendents.push(c,b,d)
// associate root with is descendents
console.log(a.descendents[0].descendents)
