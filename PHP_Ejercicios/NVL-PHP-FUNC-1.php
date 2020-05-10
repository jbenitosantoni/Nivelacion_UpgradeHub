<?php
function cuentaLetraA($palabra) {
	$contador = 0;
	str_split($palabra);
	foreach ($palabra as $key => $value) {
		if ($value == "a" || $value == "A") {
			$contador = $contador + 1;
		}
	}
	return $contador;
}
?>