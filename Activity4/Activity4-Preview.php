<?php 

    echo (empty($_POST["name"])) == false ? "Name: " .$_POST["name"] ."<br>" : "Name: Not Provided<br>";
    echo (empty($_POST["username"])) == false ? "Username: " .$_POST["username"] ."<br>" : "Username: Not Provided<br>";
    echo (empty($_POST["password"])) == false ? "Password: " .$_POST["password"] ."<br>" : "Password: Not Provided<br>";
    echo (empty($_POST["address"])) == false ? "Address: " .$_POST["address"] ."<br>" : "Address: Not Provided<br>";
    echo (empty($_POST["country"])) == false ? "Country: " .$_POST["country"] ."<br>" : "Country: Not Provided<br>";
    echo (empty($_POST["zipCode"])) == false ? "ZIP Code: " .$_POST["zipCode"] ."<br>" : "ZIP Code: Not Provided<br>";
    echo (empty($_POST["email"])) == false ? "Email: " .$_POST["email"] ."<br>" : "Email: Not Provided<br>";

    if(empty($_POST['languages']))
    {
        echo "Language: Not Provided <br>";
    }
    else
    {
        foreach($_POST['languages'] as $item)
        {
            echo $item ."<br/>";
        }
    }

    if(empty($_POST['gender']))
    {
        echo "Gender: Not Provided <br>";
    }
    else
    {
        echo $_POST['gender']."<br>";
    }

    echo (empty($_POST["about"])) == false ? "About: " .$_POST["about"] ."<br>" : "About: Not Provided<br>";

?>
