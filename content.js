chrome.runtime.onMessage.addListener(function (request, sender) {
    if(request==="hi"){
        var images = document.getElementsByTagName('img');
        var i = 0;

        setInterval(function(){
            if(images.length > i){
                const link = document.createElement("a");
                link.id=i;
                link.download= images[i].src;
                link.href = images[i].src;
                link.click();
                i++;
            }
        },1500);
    }
})