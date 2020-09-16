let time = 7000,
    currentImageWeb = 0,
    currentTextWeb = 0,
    text = document.querySelectorAll(".texts p"),
    images = document.querySelectorAll(".sliders img")
    max = images.length;
    maxtext = text.length;

    function nextImage(){
        images[currentImageWeb].classList.remove("selected")
       
        currentImageWeb++

        if(currentImageWeb >= max)
            currentImageWeb = 0

        images[currentImageWeb].classList.add("selected")  
    }
    function nextText(){
        text[currentTextWeb].classList.remove("first")

        currentTextWeb++

        if(currentTextWeb >= maxtext)
            currentTextWeb = 0

        text[currentTextWeb].classList.add("first")
    }

    function startImage(){
        setInterval(() => {
            //Troca Imagem
            nextImage();
        }, time)
    }

    function startText(){
        setInterval(() => {
            //Troca text
            nextText();
        }, time)
    }
window.addEventListener("load", startText)
window.addEventListener("load", startImage)