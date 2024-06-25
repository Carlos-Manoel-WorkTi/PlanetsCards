<?php 
function calculateTotalProgressPercentage($current_level_xp, $next_level_xp, $xp) {
 
    if ($xp >= $next_level_xp) {
        $progressPercentage = 100; 
    } else {
        // Calculando o progresso em relação ao nível atual
        $progressPercentage = (($xp - $current_level_xp) / ($next_level_xp - $current_level_xp)) * 100;
        // Garantindo que o progresso nunca seja menor que zero
        $progressPercentage = max(0, $progressPercentage);
    }

    $resp = array(
        'progress' => $progressPercentage,
    );
    return $resp;
}

?>