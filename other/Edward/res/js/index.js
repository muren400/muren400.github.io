function getUrlParam(key) {
    let url = new URL(window.location.href);
    return url.searchParams.get(key);
}

function init() {
    let menuName = getUrlParam("menu");

    selectMenu(menuName);

    let menuItems = document.getElementsByClassName("menuItem");

    for (let currentMenu of menuItems) {
        // currentMenu.classList.remove("selectedMenu");
        let name = currentMenu.id.replace("menu_", "");
        currentMenu.onclick = function () {
            selectMenu(name);
        }
    };

    let inputGo = document.getElementById("upperNavGo");
    let form = document.getElementById("upperNavInputForm")
    if (inputGo && form) {
        inputGo.onclick = function () {
            form.submit();
        }
    }

    let search = getUrlParam("search");
    let input = document.getElementById("inputTextField");

    if (input && search) {
        input.value = search;
    }

    let content = document.getElementById("content");

    if (search) {
        results.forEach(result => {
            let newResult = document.createElement("div");
            newResult.classList.add("searchResult");
            content.appendChild(newResult);

            let newResulHeader = document.createElement("h3");
            newResult.appendChild(newResulHeader);

            let newResultTitle = document.createTextNode(result.title);
            newResulHeader.appendChild(newResultTitle);

            let newResultParagraph = document.createElement("p");
            newResult.appendChild(newResultParagraph);

            let newResultSnippet = document.createTextNode(result.snippet);
            newResultParagraph.appendChild(newResultSnippet);
        })
    }
}

function selectMenu(menuName) {
    menuItem = document.getElementById("menu_" + menuName);

    if (menuItem) {
        menuItems = document.getElementsByClassName("menuItem");

        for (let currentMenu of menuItems) {
            currentMenu.classList.remove("selectedMenu");
        };

        menuItem.classList.add("selectedMenu");
    }
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var results = [
    {
        title: "Title 1",
        snippet: "Content 1"
    },
    {
        title: "Title 2",
        snippet: "Content 2"
    }
]

window.onload = function () {
    init();
}