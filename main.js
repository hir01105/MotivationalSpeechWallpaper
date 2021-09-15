function motivationalSpeechWallpaper(text, colorCode, wallpaperUrl, verticalDirection, horizontalDirection, domObj){
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("d-flex", "container", "justify-content-center");
    
    let picText = document.createElement("div");
    picText.style = "background-image: url('" + wallpaperUrl + "')";

    let items = "";
    let content = "";
    if (verticalDirection == "top") {
        items = "align-items-start";
    } else if (verticalDirection == "center") {
        items = "align-items-center";
    } else {
        items = "align-items-end";
    }

    if (horizontalDirection == "left") {
        content = "justify-content-start";
    } else if (horizontalDirection == "center") {
        content = "justify-content-center";
    } else {
        content = "justify-content-end";
    }

    picText.classList.add("vh-75", "col-12", "col-md-8", "my-5", "p-3", "p-md-5", "d-flex", "background", items, content);

    let sentenceDiv = document.createElement("div");
    sentenceDiv.classList.add("col-8");

    let sentence = document.createElement("div");
    sentence.classList.add("h3");
    sentence.style = "color:" + colorCode;
    sentence.innerHTML = text;
    sentenceDiv.append(sentence);
    
    picText.append(sentenceDiv);
    innerDiv.append(picText);
    domObj.append(innerDiv);
}

let domObj = document.getElementById("target");

motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", domObj);

motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);

motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);
