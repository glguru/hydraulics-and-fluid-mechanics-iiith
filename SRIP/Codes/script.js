var canh=458;
var canl=969;

function bg()
{
  var canvas=document.getElementById("draw");
  var ctx=canvas.getContext("2d");
  ctx.fillStyle="gray";
  ctx.strokeStyle="white";
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0.18*canl,0);
  ctx.lineTo(0.27*canl,0.1*canh);
  ctx.lineTo(0.27*canl, 0.73*canh);
  ctx.lineTo(0.08*canl, canh);  
  ctx.lineTo(0,canh)
  ctx.closePath();
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(0.18*canl,0);
  ctx.lineTo(canl*0.27,canh*0.1);
  ctx.lineTo(canl*0.73,canh*0.1);
  ctx.lineTo(canl*0.82,canh*0);
  ctx.closePath();
  ctx.fillStyle="blue";
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(canl,0);
  ctx.lineTo(canl*0.82,0);
  ctx.lineTo(canl*0.73,canh*0.1);
  ctx.lineTo(canl*0.73,canh*0.73);
  ctx.lineTo(canl*0.92,canh);
  ctx.lineTo(canl,canh);
  ctx.closePath();
  ctx.fillStyle="gray";
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(0.08*canl,canh);
  ctx.lineTo(canl*0.27,canh*0.73);
  ctx.lineTo(canl*0.73,canh*0.73);
  ctx.lineTo(canl*0.92,canh);
  ctx.closePath();
  ctx.fillStyle="#99DD3A";
  ctx.fill();

  ctx.fillStyle="white";
  ctx.fillRect(canl*0.27,canh*0.1,canl*0.46,canh*0.63);

  //TABLE 
  var x=canl*0.39;
  var y=canh*0.58;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+210,y+0);
  ctx.lineTo(x+230,y+20);
  ctx.lineTo(x+230,y+20);
  ctx.lineTo(x+230,y+35);
  ctx.lineTo(x-20, y+35);
  ctx.lineTo(x-20, y+20);
  ctx.closePath();
  ctx.fillStyle="#B2491C";
  ctx.fill(); 

  //TABLE LEGS
  x=canl*0.38;
  y=canh*0.655;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+35,y);
  ctx.lineTo(x+35,y+55);
  ctx.lineTo(x+20,y+55);
  ctx.lineTo(x+20,y+90);
  ctx.lineTo(x,y+90);
  ctx.closePath();
  ctx.fillStyle="#8D310A";
  ctx.fill();

  x=x+230;
  y=canh*0.655;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x-35,y);
  ctx.lineTo(x-35,y+55);
  ctx.lineTo(x-20,y+55);
  ctx.lineTo(x-20,y+90);
  ctx.lineTo(x,y+90);
  ctx.closePath();
  ctx.fillStyle="#8D310A";
  ctx.fill();
  
}
function showapp()
{
  var canvas=document.getElementById("draw");
  var ctx=canvas.getContext("2d");

}