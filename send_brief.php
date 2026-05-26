<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $service = $_POST["service"];
    $budget = $_POST["budget"];
    $message = $_POST["message"];

    $to = "luminestudio.hello@gmail.com";
    $subject = "Новый бриф с сайта";

    $text = "
Имя: $name
Email: $email
Услуга: $service
Бюджет: $budget

Описание задачи:
$message
";

    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $text, $headers)) {
        echo "Бриф успешно отправлен!";
    } else {
        echo "Ошибка отправки.";
    }

} else {
    echo "Доступ запрещен.";
}
?>