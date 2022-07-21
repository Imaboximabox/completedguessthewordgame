player1name= localStorage.getItem("player1_name")
player2name= localStorage.getItem("player2_name")
console.log(player1name)
console.log(player2name)
player1score = 0
player2score = 0
document.getElementById("player1score").innerHTML = player1score
document.getElementById("player2score").innerHTML = player2score
document.getElementById("player1name").innerHTML = player1name
document.getElementById("player2name").innerHTML = player2name
document.getElementById("playerquestion").innerHTML = player1name
document.getElementById("playeranswer").innerHTML = player2name
 function send(){
     getword = document.getElementById("question").value
     word = getword.toLowerCase()
     charat1 = word.charAt(1)
     lengthbyto = Math.floor(word.length/2)
    charat2 = word.charAt(lengthbyto)
    lengthminus1 = word.length-1
    charat3 = word.charAt(lengthminus1)
    removecharat1 = word.replace(charat1,"_")
    removecharat2 = removecharat1.replace(charat2,"_")
    removecharat3 = removecharat2.replace(charat3,"_")
    questionword = "<h4 id='word_display'> Q. "+removecharat3+"</h4>";
    inputbox = "<br>answer;<input id='inputcheckbox'>" 
    checkbutton = "<br><br><button onclick='check()'>check</button>"
    row = questionword+inputbox+checkbutton
    document.getElementById("output").innerHTML = row
 }
 questionturn = player1name
 answerturn = player2name
 function check(){
     answer = document.getElementById("inputcheckbox").value
     lowercaseanswer = answer.toLowerCase()
    if (lowercaseanswer == word) {
        if (answerturn == player1name) {
            player1score = player1score + 1
            document.getElementById("player1score").innerHTML = player1score
            
        
        } else {
            player2score = player2score + 1
            document.getElementById("player2score").innerHTML = player2score
            
        }
        
    }
    if (answerturn == player1name) {
        answerturn = player2name
        document.getElementById("playeranswer").innerHTML = player2name
        
    }
    else{
        answerturn = player1name
        document.getElementById("playeranswer").innerHTML = player1name

    }
    if (questionturn == player1name) {
        questionturn = player2name
        document.getElementById("playerquestion").innerHTML = player2name
        
    }
    else{
        questionturn = player1name
        document.getElementById("playerquestion").innerHTML = player1name

    }

 }