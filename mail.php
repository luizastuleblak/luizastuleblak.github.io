<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = $_POST["subject"];
$to = "stuleblakluiza@gmail.com";
$message = $_POST["msg"];

$txt = "Name" . $name . "\r\n" . "Email: " . $from . "\r\n" . "Subject: " . $subject . "\r\n" . "Message content: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " .$from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
	header("Location: /index.html?mail_status=sent");
} else {
	header("Location: /index.html?mail_status=error")
}