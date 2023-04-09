<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label {
            display: inline-block;
            width: 100px;
        }

        .from-div {
            margin-bottom: 16px;
        }

        .submit-div {
            text-align: right;
            width: 600px;
            margin-top: 16px;
        }
    </style>
</head>

<body>
    <form method="POST">
        <div class="from-div">
            <label>From: </label>
            <input type="text" name="from" id="from" />

            <label>Currency</label>
            <select name="fromCurrency">
                <option selected disabled>Select a Currency</option>
                <option value="usd">US Dollar</option>
                <option value="cad">Canadian Dollar</option>
                <option value="eur">Euro</option>
            </select>
        </div>
        <div>
            <label>To:</label>
            <input type="text" disabled id="toResult" />

            <label>Currency</label>
            <select name="toCurrency">
                <option selected disabled>Select a Currency</option>
                <option value="usd">US Dollar</option>
                <option value="cad">Canadian Dollar</option>
                <option value="eur">Euro</option>
            </select>
        </div>
        <div class="submit-div">
            <input type="submit" value="convert" name="convert" />
        </div>
    </form>
</body>

</html>


<?php

$exchanges = array(
    "usd" => array("usd" => 1, "eur" => 0.91, "cad" => 1.36),
    "eur" => array("eur" => 1, "usd" => 1.10, "cad" => 1.47),
    "cad" => array("cad" => 1, "usd" => 0.74, "eur" => 0.68)
);

if (isset($_POST["convert"])) {
    if (isset($_POST["from"])) {
        $from = $_POST["from"];
        $fromCurrency = $_POST["fromCurrency"];
        $toCurrency = $_POST["toCurrency"];

        $toResult = $from * $exchanges[$fromCurrency][$toCurrency];    
        
        echo "<script>
                document.getElementById('from').value = $from;
                document.getElementById('toResult').value = $toResult;
            </script>";
    }
}
?>