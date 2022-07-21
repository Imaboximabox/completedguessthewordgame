function adduser () {
    player1name = document.getElementById("player1name").value
    player2name = document.getElementById("player2name").value
    localStorage.setItem("player1_name",player1name)
    localStorage.setItem("player2_name",player2name)
    window.location="game_page.html"
}