(function () {
    document.getElementById("buttonId").addEventListener("click", function () {
        let content = document.getElementById("inputText").value;
        const ytLink = "https://www.youtube.com/watch?v=";

        let fileID = content.replace(ytLink, "");

        let iFrameSource = 'https://www.youtube.com/embed/' + fileID;
        document.getElementById("videoBox").setAttribute("src", iFrameSource);
    });

    const BODY = document.body.classList;


    if (docCookies.getItem("theme") == 1) {
        BODY.remove("black");
        console.log("theme DAY loaded");
    } else if (docCookies.getItem("theme") == 2) {
        BODY.add("black");
        console.log("theme NIGHT loaded");
    } else {
        console.log("cookies not working");
    }


    document.getElementById("themeButton").addEventListener("click", function () {
        if (BODY.contains("black")) {
            BODY.remove("black");
            docCookies.setItem("theme", "1", "Infinity", "/");
        } else {
            BODY.add("black");
            docCookies.setItem("theme", "2", "Infinity", "/");
        }
    });
})()