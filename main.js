
var choixP1  
var choixP2
var scorep1 = 0
var scorep2 = 0

/*
* Lancement d'un test automatisé
*/
match(3);

/*
* Fonction Random qui retoune un choix entre Pierre Feuille & Ciseaux, 
*/
function random(){
    var choix =Math.random()*100
    if (choix < 33) choix="p"
    else if(choix<66) choix = "f"
    else choix="c"
    return choix
}

/*
* Fonction compare qui compare les choix des joueurs 1 et 2 et itere un point de score
*/
function compare(choixp1, choixp2 ){
    
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
    
}

/*
* Fonction lancer qui simule la procedure de lancement d'une partie
*/
function lancer(){
    choixP2 = random()
    choixP1 = random()
    compare(choixP1,choixP2)
}

/*
* Fonction match qui reinit le score et boucle le nombre de round de la partie
*/
function match(nombrepartie) {
        scorep1=0;
        scorep2=0;
    for(var i=0; i<nombrepartie;i++){
        lancer()    
    }
    if(scorep1==0 && scorep2==0) {
        console.log("MATCH NUL")
    } 
    console.log("SCORE:       "+"Player 1: "+scorep1 + "  Player2: "+scorep2)
}




