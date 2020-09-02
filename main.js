$(document).ready(()=>{
  color=["blue","red","#ffaa21","yellow","green","#0022ff","rgb(220, 115, 71)","rgb(220, 255, 71)","rgb(60, 255, 71)","rgb(255, 38, 242)","rgb(255, 108, 46)","rgb(173, 239, 46)"]
  i=0
numeroBox=[]
    $(".box").each(function(){
        j=Math.floor(Math.random()*color.length)
        console.log(id)
         $(this).css("background-color",color[j]).text(j)
//numeroBox.push(j)

        i++
    });
    console.log(numeroBox)
   tl= anime.timeline({
duration:500
      })
      tl.add({
        targets: document.getElementById('box03'),
        translateY: -100
      }).add({
        targets: document.getElementById('box03'),
        translateX: 110
      })
      .add({
        targets: document.getElementById('box03'),
        translateY: 50
      })
})