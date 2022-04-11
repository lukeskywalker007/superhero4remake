var canvas=new fabric.Canvas('canvas');
player_width=30;
player_heigth=30;
player_x=10;
player_y=10;
function update()
{
    
}
function up()
{
    if(player_y >=0)
    {
        console.log("block image height =" +block_image_height);
        console.log("when up arrow key is pressed X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update;
    }
}
function down()
{
    if(player_y <=600)
    {
        console.log("block image height =" +block_image_height);
        console.log("when up arrow key is pressed X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update;}
    }  
    
    
    function up()
{
    if(player_x >=0)
    {
        console.log("block image height =" +block_image_height);
        console.log("when up arrow key is pressed X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update;
    
}
}

function up()
{
    if(player_x >=0)
    {
        console.log("block image height =" +block_image_height);
        console.log("when up arrow key is pressed X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update;
    }
}