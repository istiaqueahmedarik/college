function done(){
	var image = document.getElementById("pictures");
    image.style.background= "url(image/s2.jpg)";
    image.style.width="1350px";
    image.style.height="496px";
    image.style.backgroundPosition="right";
    image.style.backgroundRepeat="no-repeat";
    image.style.size="100";
    
    image.style.backgroundSize="cover";
    var i = document.getElementById("click");
    i.style.display = "none";
    var i1 = document.getElementById("click1");
    i1.style.display = "inline-block";
}

function Undo(){
	var image = document.getElementById("pictures");
    image.style.background="url(image/s1.jpg)";
   	image.style.width="1350px";
    image.style.height="496px";
    image.style.backgroundPosition="right";
    image.style.backgroundRepeat="no-repeat";
    image.style.size="100";
    
    image.style.backgroundSize="cover";
    var i = document.getElementById("click");
    i.style.display = "inline-block";
    var i1 = document.getElementById("click1");
    i1.style.display = "none";
}



