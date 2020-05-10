    <?php
    $contador = 0;
    $palabras_mayor5 = [];
    $palabras = ["lunes", "mariposa", "sol", "acelerador", "aceituna", "palo"];
    foreach ($palabras as $key => $value) {
    	if (strlen($value) > 5) {
    		array_push($palabras_mayor5, $value);
    		$contador = $contador + 1;
    	}
    }
    foreach ($palabras_mayor5 as $key => $value) {
    	echo $value . ", ";
    }
    echo "Hay " . $contador . " palabras con mas de 5 letras.";
    ?>