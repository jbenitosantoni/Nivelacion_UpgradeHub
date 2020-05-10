<?php
function cuentaLetraA($palabra, $letra) {
	$contador = 0;
	str_split($palabra);
	foreach ($palabra as $key => $value) {
		if (strtolower($palabra) == strtolower($letra)) {
			$contador = $contador + 1;
		}
	}
	return $contador;
}
?>