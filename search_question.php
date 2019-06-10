<!DOCTYPE >
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="style_question_page.css">
    <title>Result</title>
</head>    
<body>
    
<h1> OUTPUT PAGE : </h1>
<?php
    include "db_connect.php";
    $keyword_from_form = $_GET["questionNo"];
    
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    //    echo $mysqli->host_info . "\n";

    
    $sql = "SELECT output_file FROM java WHERE q_id = '" . $keyword_from_form . "'";
    $result = mysqli_query($mysqli,$sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
//            echo $row["output_file"];
            $res = $row["output_file"];
            $len = strlen($row["output_file"]);    
            
//            echo $len;
            $loc = 0;
            
//            $result = array("");
            $s = "";
            
            for($i = 0; $i < $len ; $i++){
                if($res[$i] == "\n" ){
                    $str = "";
                    for($j = $loc ; $j < $i ; $j++ ){
                        
                           $str = $str . ($res[$j]);
                    }
                    echo '<li><a href = "C:\Users\Avinash\Downloads\USBWebserver\root\code\elabJava\\' . $str . '">' . $str . '</a></li>';
                    
//                   
//                        echo "<br>";
//                    echo "<a href='" . $str . "'\>";
//                    $result = array($str);
//                    echo "<br>";
                    $loc = $i + 1;
                }
            }
            
        }
    } else {
        echo "0 results";
    }

?>
</body>
</html>    