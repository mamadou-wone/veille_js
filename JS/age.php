<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Boss</title>
</head>

<body>
    <h1 id="boss"></h1>
            <script>
                function AgeinDay(age){
                        result= age *365;
                    //  alert("Vous avez " + result +" Jours :)");
                    var h1 = document.createElement('h1');
                    var text = document.createTextNode("You are " + result +" days old :)");
                    h1.setAttribute('id' ,'ageindays');
                    h1.appendChild(text);
                    document.getElementById('boss').appendChild(h1);
                }              
            </script>
                    
    <div class="container">
        <div class="p-4">
            <form action="" method="post">
                <div action="" class="form-group">
                    <input type="number" class="form-control" placeholder="Your age" name="age" >
                    <div class="row">
                    <div class="card" style="width: 14rem; margin: 10px;">
                        <div class="card-body">
                            <button type="submit" class="btn btn-primary" onclick="AgeinDay(<?= $_POST['age']?>)">Click me</button>
                            <button type="reset" class="btn btn-danger">Reset</button>
                        </div>
                    </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
                            
</body>

</html>