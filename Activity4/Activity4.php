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

        form input {
            height: 25px;
        }
        form input[type='checkbox'],
        form input[type='radio']{
            height: auto;
        }

        .saveBtn {
            position: absolute;
            margin-left: -82px;
            margin-top: 100px;
            width: 80px;
        }
        .countrySelect{
            width: 80px;
            height: 30px;
        }
        .gender{
            width: 15px;
        }
        .language{
            width: 15px;
        }
    </style>
</head>

<body>
    <h1>Registration Form</h1>
    <form action="Activity4-Preview.php" method="POST">

        <label>Name:</label>
        <input type="text" name="name" /><br><br>

        <label>Username:</label>
        <input type="text" name="username" /><br><br>

        <label>Password:</label>
        <input type="password" name="password" /><br><br>

        <label>Address:</label>
        <input type="text" name="address" /><br><br>

        <label>Country:</label>
        <select name="country" class="countrySelect">
            <option value="Turkey">Turkey</option>
            <option value="America" selected>America</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
        </select><br><br>

        <label>ZIP Code:</label>
        <input type="text" name="zipCode" /><br><br>

        <label>Email:</label>
        <input type="email" name="email" /><br><br>

        <label>Sex:</label>
        <input type="radio" class="gender" name="gender" value="Male" />Male <input type="radio" class="gender" name="gender" value="Female" />Female<br><br>

        <label>Language:</label>
        <input type="checkbox" class="language" name="languages[]" value="English" />English<input type="checkbox" class="language" name="languages[]" value="French" />French <input type="checkbox" class="language" name="languages[]" value="Türkçe" />Türkçe<br><br>

        <label>About:</label>
        <textarea name="about" cols="30" rows="5"></textarea>
        <input type="submit" class="saveBtn" value="Submit" />
    </form>
</body>

</html>