var wins = 0
var losses = 0
var ties = 0

var options = ['r', 'p', 's']

function playGame() {
    var userinput = prompt("Choose your weapon! [r, p, s]")

    if (!userinput) {
        return
    }
    while (!options.includes(userinput)) {
        alert(userinput + " is not an option")
        return playGame()
    }

    alert("You have chosen " + userinput)

    var randomIndex = Math.floor(Math.random() * options.length)
    var computerChoice = options[randomIndex]

    alert("Your foe has chosen " + computerChoice)

    if (userinput === computerChoice) {
        alert("Its a tie!")
        ties++
    }
    else if (
        (userinput === 'r' && computerChoice === 's') || 
        (userinput === 's' && computerChoice === 'p') ||
        (userinput === 'p' && computerChoice === 'r')
    ) {
        alert("You Win!")
        wins++
    }
    else {
        alert("You Lose!😜")
        losses++
    }

    alert(`
        Standings: 
            Wins:   ${wins} 
            Losses: ${losses}
            Ties:   ${ties}
    
    `)

    return playGame()
   
}

playGame()