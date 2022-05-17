
var Player1
var Player2
var choixP1  
var choixP2
var round =0
var scorep1 = 0
var scorep2 = 0

function randp2(){
    var choix =Math.random()*100
    if (choix < 33) choix="p"
    else if(choix<66) choix = "f"
    else choix="c"
    return choix
}
choixP2 = randp2()

function compare(choixp1, choixp2 ){
    round++;
    console.log("Player 1: "+choixp1 + "  Player2: "+choixp2)
    if(choixp1==choixp2){console.log("match nul")}
    else{
        if(choixp1 =="p"){
            
            if(choixp2=="c"){
                console.log("Player 1 gagne")
                scorep1++
            }
            if(choixp2=="f"){
                console.log("Player 2 gagne")
                scorep2++
            }

        }
       
        if(choixp1 =="f"){
            
            if(choixp2=="c"){
                console.log("Player 2 gagne")
                scorep2++
            }
            if(choixp2=="p"){
                console.log("Player 1 gagne")
                scorep1++
            }

        }
    
        if(choixp1 =="c"){
            
            if(choixp2=="p"){
                console.log("Player 2 gagne")
                scorep2++
            }
            if(choixp2=="f"){
                console.log("Player 1 gagne")
                scorep1++
            }

        }
       
    }
    console.log("SCORE:       "+"Player 1: "+scorep1 + "  Player2: "+scorep2)
}




