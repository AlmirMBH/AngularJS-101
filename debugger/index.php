<?php

require_once __DIR__ . '/Person.php';

$person = new Person('Almir', '41');

echo "Person name is: " . $person->getName();