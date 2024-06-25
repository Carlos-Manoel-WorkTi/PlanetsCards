<?php 
function updateHistory($connect,$userId, $xp, $rest_life,$total_lives, $rest_time,$total_time,$difficult){
      // Insert the data into the 'historyMatch' table
      $insertQuery = "INSERT INTO historyMatch (id_user, xp, rest_life,total_lives,rest_time,total_time, difficult) 
      VALUES ($userId, $xp, $rest_life,$total_lives, $rest_time,$total_time, '$difficult')";

      return  mysqli_query($connect, $insertQuery);
}

?>