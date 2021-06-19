var canvas = new fabric.Canvas('mycanvas');

block_image_widht = 30;
block_image_height = 30;

x_player = 10;
y_player = 10;

img_play = "";
img_block = "";

function update_player()
{
    fabric.Image.fromUrl("hero.png",function (Img){
    img_play = Img;
    img_play = scaleToWidht(150);
    img_play = scaleToHeight(140);
    img_play.set({
    top:x_player,
    left:y_player,
    });
    canvas.add(img_play);
    });

}

function new_image(get_image)
{
    fabric.Image.fromUrl(get_image,function (Img){
    img_block = Img;
    img_block = scaleToWidht(block_image_widht);
    img_block = scaleToHeight(block_image_height);
    img_block.set({
    top:x_player,
    left:y_player,
    });
    canvas.add(img_block);
    });

}