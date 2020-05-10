<?php
function cuentaVocales($palabra) {
	$contador = 0;
	str_split($palabra);
	foreach ($palabra as $key => $value) {
		if (strtolower($palabra) == "a" ||strtolower($palabra) == "e" ||strtolower($palabra) == "i" ||strtolower($palabra) == "o" || strtolower($palabra) == "u") {
			$contador = $contador + 1;
		}
	}
	return $contador;
	if ($contador > 5) {
		echo "Hay mas de 5";
	} else {
		echo "Hay menos de 5";
	}
}
?>