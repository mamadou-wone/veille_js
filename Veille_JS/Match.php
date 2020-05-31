<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
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

        const ulPere = document.createElement('ul');

        for (let match of psgMatch) {
            const matchLi = document.createElement('li');
            matchLi.innerText = `${match.domicile.equipe} vs ${match.exterieur.equipe}
        ${match.domicile.score} - ${match.domicile.score}`;

            if (match.domicile.score > match.exterieur.score) {
                matchLi.innerHTML = `${match.domicile.equipe} vs ${match.exterieur.equipe}
            <b>${match.domicile.score}-${match.exterieur.score}`;
            } else {
                matchLi.innerHTML = `${match.domicile.equipe} vs ${match.exterieur.equipe}
            ${match.domicile.score}-<b>${match.exterieur.score}`;
            }
        }
    </script>
</body>

</html>