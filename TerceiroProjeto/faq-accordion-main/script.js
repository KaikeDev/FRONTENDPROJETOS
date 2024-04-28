function mudarDiv(){


    let vElement = document.getElementById("pFrase")
    let vElement2 = document.getElementById("botao")

    if(vElement.style.display !== "none"){
        vElement.style.display = "none";
    
        vElement2.style.backgroundImage = "url('assets/images/icon-plus.svg')"
    }else{
        vElement.style.display = "block";
    
        vElement2.style.backgroundImage = "url('assets/images/icon-minus.svg')"
    }
   
}

assets/images/icon-plus.svg