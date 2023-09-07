$("#ao").bind("click",function(){

    let puniSe=$("#aosura").get(0);

puniSe.pause();
puniSe.currentTime=0;
puniSe.volume=0.5;
puniSe.play();
})

$("#iwa").bind("click",function(){

    let katiSe=$("#iwasura").get(0);

katiSe.pause();
katiSe.currentTime=0;
katiSe.volume=0.5;
katiSe.play();
})

$("#siro").bind("click",function(){

    let huwaSe=$("#sirosura").get(0);

huwaSe.pause();
huwaSe.currentTime=0;
huwaSe.volume=0.5;
huwaSe.play();
})

$("#midori").bind("click",function(){

    let zaraSe=$("#kusasura").get(0);

zaraSe.pause();
zaraSe.currentTime=0;
zaraSe.volume=0.5;
zaraSe.play();
})

$("#mike").bind("click",function(){

    let moniSe=$("#nekosura").get(0);

moniSe.pause();
moniSe.currentTime=0;
moniSe.volume=0.5;
moniSe.play();
})

$("#mike").bind("click",function(){

    let nyaSe=$("#nekonokoe").get(0);

nyaSe.pause();
nyaSe.currentTime=0;
nyaSe.volume=0.5;
nyaSe.play();
})



$("#pink").bind("click",function(){

    let guSe=$("#hatosura").get(0);

guSe.pause();
guSe.currentTime=0;
guSe.volume=0.5;
guSe.play();
})

window.onload = function() {
    $('#camera').hover(
    function(){$(this).addClass('fluffy');},
    function(){$(this).removeClass('fluffy');}
    );
   };
