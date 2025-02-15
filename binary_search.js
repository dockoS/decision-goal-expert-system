class Node{
    constructor (data,left=null,right=null){
        this.data=data
        this.left=left
        this.right=right
    }
}
class BTS{
    constructor(){
        this.root=null
    }
   add=data=>
   {
        const node=this.root
        if (node===null) {
            this.root= new Node(data)
            return 
        }
        const searchTree=node=>
        {
           if(data<node.data){
               if(node.left===null) {
               node.left=new Node(data)
               return 
               }else if(node.left!==null) return searchTree(node.left)

           }else if(data>node.data){
            if(node.right===null) {
            node.right=new Node(data)
            return 
            }else if(node.right!==null) return searchTree(node.right)
            else return null

        }
        }
        return searchTree(node)
   }
find=data=>
{
        var current=this.root
        while (current.data!==data) {
            if (data<current.data){
                current=current.left
            }else{
                current=current.right
            }
            if (current===null) return null
        }
        return current.data
}
}


const bts=new BTS()
bts.add(3)
bts.add(5)
bts.add(6)
console.log(bts.find(3))