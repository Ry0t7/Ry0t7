<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "webkakrt7@gmail.com"; // 受信するメールアドレス
    $subject = "【お問い合わせ】$name さんからのメッセージ";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "名前: $name\n";
    $body .= "メールアドレス: $email\n";
    $body .= "メッセージ:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "メールが送信されました！";
    } else {
        echo "メールの送信に失敗しました。";
    }
}
?>
