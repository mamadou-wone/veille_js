<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Document</title>
</head>

<body>
    <div id="div">
        <!-- <p id="boss">
            WONE THE BOSS
        </p> -->
    </div>
    <!-- <p>boss</p> -->
    <script>
        const psgMatch = [{
                domicile: {
                    equipe: 'Lyon',
                    score: 1,
                    gagnant: 'false'
                },
                exterieur: {
                    equipe: 'Psg',
                    score: 3,
                    gagnant: 'true'
                },
            },

            {
                domicile: {
                    equipe: 'Psg',
                    score: 1,
                    gagnant: 'false'
                },
                exterieur: {
                    equipe: 'Lyon',
                    score: 3,
                    gagnant: 'true'
                },

            }, {
                domicile: {
                    equipe: 'Monaco',
                    score: 1,
                    gagnant: 'false'
                },
                exterieur: {
                    equipe: 'Psg',
                    score: 3,
                    gagnant: 'true'
                },
            },

            {
                domicile: {
                    equipe: 'Nice',
                    score: 1,
                    gagnant: 'true'
                },
                exterieur: {
                    equipe: 'Psg',
                    score: 0,
                    gagnant: 'false'
                },
            }
        ]

                // for (let Match of psgMatch) {
                //     console.log(Match);
                //     const matchLi = document.createElement('li');
                //     document.body.appendChild(matchLi);
                //     matchLi.innerHTML = `${Match.domicile.equipe}`;
                // }

                // console.log(psgMatch);
             
                psgMatch.forEach(element => {
                    console.log(element);
                    const matchLi = document.createElement('p');
                    document.body.appendChild(matchLi);
                    matchLi.innerText = `${element.domicile.equipe} vs ${element.exterieur.equipe} ${element.domicile.score}-${element.exterieur.score}`;
                   if (element.domicile.score > element.exterieur.score) {
                    matchLi.innerHTML = `<strong>${element.domicile.equipe}</strong> vs ${element.exterieur.equipe} <strong>${element.domicile.score}</strong>-${element.exterieur.score}`;
                   }else{
                    matchLi.innerHTML = `${element.domicile.equipe} vs <strong>${element.exterieur.equipe}</strong> ${element.domicile.score}- <strong>${element.exterieur.score}</strong>`;
                   }
                });

                    // titleConteneu = document.getElementById('title');
                    // var query = document.querySelector('title');
                    // var boss = document.getElementById('boss');
                    // boss.style.color = 'blue';
                    // boss.innerHTML = '<ul><li>This is an modification of tag value</li></ul>';
                    // var createdAt = document.createElement('p');
                    // var divParent = document.getElementById('div');
                    // createdAt.innerHTML= 'New tag';
                    // divParent.appendChild(createdAt);
            
                        // alert(query.innerText);
        // const ulPere = document.createElement('ul');

        // for (let match of psgMatch) {
        //     const matchLi = document.createElement('li');
        //     matchLi.innerText = `${match.domicile.equipe} vs ${match.exterieur.equipe}
        // ${match.domicile.score} - ${match.domicile.score}`;

        //     if (match.domicile.score > match.exterieur.score) {
        //         matchLi.innerHTML = `${match.domicile.equipe} vs ${match.exterieur.equipe}
        //     <b>${match.domicile.score}-${match.exterieur.score}`;
        //     } else {
        //         matchLi.innerHTML = `${match.domicile.equipe} vs ${match.exterieur.equipe}
        //     ${match.domicile.score}-<b>${match.exterieur.score}`;
        //     }
        // }
    </script>
</body>

</html>