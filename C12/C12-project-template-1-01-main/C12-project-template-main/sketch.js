var path,boy,coin,leftBoundary,rightBoundary;
var pathImg,boyImg,coinImg;
var i;


function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg = loadAnimation("Runner-1.png","Runner-2.png") ;
 pathImg = loadImage("path.png");
 coinImg = loadImage("coin.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path = createSprite(200,200);
path.addImage("path",pathImg);
path.y = path.width /2;
path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite (200,300,50,50);
boy.addAnimation("running", boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visiblity = false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visiblity = false;
//defina visibilidade como falsa para o limite à direita

}

function draw() {
  background("black");
  path.velocityY = 4;
  
 
  
  
  // mover o menino com o mouse usando mouseX
  boy.x=mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary,rightBoundary)
  

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
spawnCoins()


  drawSprites();
}

function spawnCoins (){

  if (frameCount%60===0){
  coin=createSprite (200,20)
  coin.velocityY=3;
  coin.addImage("coin", coinImg)
}

}