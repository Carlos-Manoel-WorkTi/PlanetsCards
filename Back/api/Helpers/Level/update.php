<?php 

function updateLevel($connect,$xpp,$id_user){

$levels = array(0, 100, 1000, 2000, 3000, 6000, 10000, 15000, 20000, 25000, 30000, 35000 , 40000 , 45000); 

$UpdateQuery =  "UPDATE account SET xp = xp + $xpp WHERE id_user = $id_user";

$connect->query($UpdateQuery);

$queryGet = "SELECT level, xp FROM account WHERE id_user = $id_user";
$stmt_get = $connect->query($queryGet);
$stmt_get = $stmt_get->fetch_assoc();

$level = $stmt_get['level'];
$xp = $stmt_get['xp'];

// Check if the XP corresponds to the level
$current_level = -1;
for ($i = 0; $i < count($levels); $i++) {
    if ($xp >= $levels[$i]) {
        $current_level = $i;
    } else {
        break;
    }
}
if($current_level < 0){
    $current_level = 1;
}

// Update the level
if ($current_level != $level) {

    $queryUpdate = "UPDATE account SET level = ? WHERE id_user = ?";
    $stmt_update = $connect->prepare($queryUpdate);
    $stmt_update->bind_param("ii", $current_level, $id_user);
    $stmt_update->execute();
    $stmt_update->close();
    return [
        'status' => true,
        'level' => $level,
        'xp' => $xp,
        'current_level' => $levels[$level] ,
        'next_level' =>  $levels[$level + 1] 
    ];
} else {
    return [
        'status' => false,
        'level' => $level,
        'xp' => $xp,
        'current_level' => $levels[$level] ,
        'next_level' =>  $levels[$level + 1] 
    ];;
}



}

?>
