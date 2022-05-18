
var choixP1  
var choixP2
var scorep1 = 0
var scorep2 = 0
var historique = [];
var winner;


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
function compare(choixp1, choixp2) {
        if (choixp1 == "p") {

            if (choixp2 == "c") {
                scorep1++
                return "joueur 1"
            } else if (choixp2 == "f") {
                scorep2++
                return "joueur 2"
            } else {
                return "aucun"
            }

        }

        if (choixp1 == "f") {

            if (choixp2 == "c") {
                scorep2++
                return "joueur 2"
            } else if (choixp2 == "p") {
                scorep1++
                return "joueur 1"
            } else {
                return "aucun"
            }
        }



        if (choixp1 == "c") {

            if (choixp2 == "p") {
                scorep2++
                return "joueur 2"
            } else if (choixp2 == "f") {
                scorep1++
                return "joueur 1"
            } else {
                return "aucun"
            }

        }
}


/*
* Fonction lancer qui simule la procedure de lancement d'une partie
*/
function lancer(){
    choixP2 = random()
    choixP1 = random()
    winner = compare(choixP1,choixP2)
}

/*
* Fonction match qui reinit le score et boucle le nombre de round de la partie
*/
function match(nombrepartie) {
    scorep1 = 0;
    scorep2 = 0;
    historique.push("--- Nouvelle partie de " + nombrepartie + " rounds ---")

    for (var i = 0; i < nombrepartie; i++) {
        lancer()
        historique.push(i + 1 + " : P1 " + choixP1 + " / P2 " + choixP2 + " -  Vainqeur: " + winner)
    }

    historique.push("SCORE FINAL:       " + "Player 1: " + scorep1 + "  Player2: " + scorep2);

    /* Affichage*/
    historique.forEach(element => {
        console.log(element);
    });
}

function ClearHistorique(){
    historique = [];
    console.log("Historique vide");
}

function Tests(){
    console.log("Tout va bien :)");
}








