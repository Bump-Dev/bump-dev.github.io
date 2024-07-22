
function selectGame(game) {
    var projects = document.getElementById("projects");

    for (var i = 0; i < projects.children.length; i++) {
        projects.children[i].style.opacity = 0.5;
    }
    game.style.opacity = 1.0;
}