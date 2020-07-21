1) <!--Créer un Objet avec les info Suivantes  -->
{
- Numéro série carte GAB <!--- Le numéro de série est un numéro à 16 chiffres, regroupé en des 4 de 4 chiffres -->
- Code secret <!--Le code secret dépend du numéro de série de la carte également le Montant-->
- Montant
}

2) <!-- Créer une fonction qui vérifie si la carte est valide -->
    function verifyCarte(infoCarte){
        -Si la carte n'est pas Valide il nous retourne une erreur (Carte invalide)
        ->Le background-color change en rouge au niveau du input et le btn est disabled
        ->On pourra clicquer sur ejecter pour réinitialiser le input
        -> Tous les autres champs vont etre disabled

        -Si la carte est Valide 
        -L'appli nous demande de saisir un code secret
         j'appelle la fonction(password){
             -Si le code n'est pas bon il  nous signale une erreur
             ->Au bout de 3 essais erronés l'appli se bloque et éjecte la carte

             -Si le code est bon 
             On aura 3 Options qui vont apparaitre
                1. Consulter
                2. Retrait
                3. Quitter

                j'appelle une function verifyChoix(choixValue){
                    
                }
         }
    }

