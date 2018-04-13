<!DOCTYPE html>
<html>
    <head>
    </head>
    
    <body>
        <?php if(isset($_GET['error'])):  ?>
        <?php echo $_GET['error'] ?>
        <?php endif; ?>
        <form method="POST" action="register.php">
            <label>name</label><input  type="text" name="name"><br><br>
            <label>email</label><input  type="text" name="email"><br><br>
            <label>Region</label>
            <select name="region">
                <option  value="china">China</option>
                <option  value="usa">USA</option>
            </select>
            <input type="submit" name="Submit">
        </form>
    </body>
</html>