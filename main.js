//#region exo 1 
var choixP1 = 'init'
var choixP2 = 'init'
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


//#endregion

//#region  exo 2

var scoreEquipe1 = 0
var scoreEquipe2 = 0
equipeGagnante = "Aucune Equipe"

function Tir() {
    var choix = Math.random() * 100
    if (choix <= 50) return 1
    else return 0
}

function Seance() {
    var nombreDeTir = 5;
    for (var i = 0; i <= nombreDeTir; i++) {
        if (equipeGagnante == null) {
            scoreEquipe1 += Tir();
            scoreEquipe2 += Tir();
            if ((scoreEquipe1 - scoreEquipe2) == 3) {
                equipeGagnante = 'Equipe 1'
            }
            else if ((scoreEquipe2 - scoreEquipe1) == 3) {
                equipeGagnante = 'Equipe 2'
            } else {
                if (scoreEquipe1 < scoreEquipe2)
                    equipeGagnante = 'Equipe 2'
                else
                    equipeGagnante = 'Equipe 1'
            }
        }
        if (equipeGagnante == null) {
        }
        return equipeGagnante;
    }
}

function TireAuBut(){
    console.log("Equipe gagnante : "+Seance());
    equipeGagnante = "Aucune Equipe"
}

//#endregion

module.exports = { choixP1, choixP2, scorep1, scorep2,equipeGagnante,scoreEquipe1,scoreEquipe2 };




