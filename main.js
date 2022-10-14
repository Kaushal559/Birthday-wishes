
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('Birthdayimage.jpg',function(Img) {
        block_image_object= Img;

    });

    
	
}

function playsound(){
	x.play();
}
