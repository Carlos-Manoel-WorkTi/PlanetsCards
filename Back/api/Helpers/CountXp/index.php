<?php

function calcular_xp($rest_life, $total_lives, $rest_time, $total_time, $difficult) {
  $life = $total_lives - $rest_life;
  $time = $total_time - $rest_time;

  if($difficult == 'easy'){
    if($rest_life <= 0 ||  $rest_time <= 0){
      return ((200 - ($time + $life)) * 1) / 8 ;
    }else{
      return (200 - ($time + $life)) *  2 ;
    }
  
  }
  if($difficult == 'hard'){
    if($life <= 0 || $time <= 0){
      return ((200 - ($time + $life)) *  1) / 4;
    }else{
      return (200 - ($time + $life)) *  4;
    }

  }else{
    if($life <= 0 || $time <= 0){
      return ((200 - ($time + $life)) *  1) / 6;
    }else{
      return (200 - ($time + $life)) *  3;
    }
  }

}

