 <?php

$recepient = "hi@mycreacity.ru";
$sitename = "Инженерный электронный конструктор";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$message = trim($_POST["message"]);
$city = trim($_POST["city"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $mail \nГород: $city \nСообщение: $message";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");