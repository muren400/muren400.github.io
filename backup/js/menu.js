function hideMenu() {
    document.getElementById("menu").classList.add('hide')
    document.getElementById("menu-close").classList.add('hide')
    document.getElementById("menu-open").classList.remove('hide')
}

function showMenu() {
    document.getElementById("menu").classList.remove('hide')
    document.getElementById("menu-close").classList.remove('hide')
    document.getElementById("menu-open").classList.add('hide')
}