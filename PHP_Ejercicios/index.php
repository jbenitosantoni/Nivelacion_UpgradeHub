<?php

$valido = true;
function cambiarValido() {
	$valido = false;
}
cambiarValido();
echo "Valido tiene el valor: " . var_dump($valido);

?>