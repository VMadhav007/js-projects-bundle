function generate(){
    var url=document.getElementsByTagName("input")[0].value;
    var imgage=document.createElement("img");
    var cont=document.getElementsByClassName("qr_Container")[0];
    cont.innerHTML='';
    if(!url){
        alert("Enter url nigga!!!");
        return
    }
    QRCode.toDataURL(url,{height:1 ,width:500},(error,DataURL)=>{
        if(error){
            throw error;
        }
        else{
            imgage.src=DataURL;
            cont.appendChild(imgage);
        }
    })
}