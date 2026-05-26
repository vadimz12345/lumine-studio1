<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "vadimz0989@gmail.com";
    $subject = "Новое сообщение с сайта";

    $text = "
Имя: $name
Email: $email

Сообщение:
$message
";

    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $text, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка отправки.";
    }

} else {
    echo "Доступ запрещен.";
}
?>