<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include necessary files
require_once('C:\wamp64\www\PLC\Back\api\Banco_de_dados\connect\index.php');
require_once('C:\wamp64\www\PLC\Back\api\Helpers\hash\index.php');

// Check if the request type is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    // Check if there's an authorization token
    $headers = getallheaders();

    // Check if the Authorization header exists
    if (!isset($headers['Authorization'])) {
        echo json_encode(array('error' => 'Header \'Authorization\' not found.'));
        return;
    }
    
    // Extract the bearer token
    $bearerToken = explode(' ', $headers['Authorization'])[1] ?? '';

    // Check the tokens table to validate the bearer token  
    $bearerToken = mysqli_real_escape_string($connect, $bearerToken); 
    $query = "SELECT id_user FROM tokens WHERE token = '$bearerToken' ";
    $result = mysqli_query($connect, $query);

    function addLeadingZero($number) {
        return ($number < 10) ? '0' . $number : $number;
    }
    
    // If the token is valid, proceed to fetch and return data
    if ($result && mysqli_num_rows($result) > 0) {
        $userData = mysqli_fetch_assoc($result);
        $userId = $userData['id_user'];

        // Query to fetch all data from 'historyMatch' table for the user
        $historyQuery = "SELECT xp,difficult,rest_time,total_time,rest_life,total_lives,time_created FROM historyMatch WHERE id_user = $userId";
        $historyResult = mysqli_query($connect, $historyQuery);

        // Check if data was successfully fetched
        if ($historyResult && mysqli_num_rows($historyResult) > 0) {
            // Fetch all data into an array
            $historyData = array();
            while ($row = mysqli_fetch_assoc($historyResult)) {
                $historyData[] = $row;
            }
            
            $response = array();
            foreach ($historyData as $row) {

                if($row['rest_time'] <= 0 || $row['rest_life'] <= 0){
                    $win = false;
                }else{
                    $win = true;
                };

                $response[] = array(
                    'Xp' => $row['xp'],
                    'Modo' => $row['difficult'],
                    'Tempo' => addLeadingZero($row['rest_time']) . "/" . addLeadingZero($row['total_time']),
                    'Vidas' => addLeadingZero($row['rest_life']) . "/" . addLeadingZero($row['total_lives']),            
                    'Data' => $row['time_created'],
                    'win' => $win
                );
            }
            
            echo json_encode($response,JSON_UNESCAPED_SLASHES);
        } else {
            // Return a message if no data found
            echo json_encode(array('error' => 'No history data found for the user.'));
        }
    } else {
        // Return an error message if the token is invalid or expired
        echo json_encode(array('error' => 'Invalid or expired token.'));
    }
} else {
    // Return an error message if the request method is not GET
    echo json_encode(array('error' => 'Only GET requests are allowed.'));
}
?>
