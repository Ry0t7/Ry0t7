$(document).ready(function () {
    // ナビゲーションエリア、トグルボタン、マスクの選択
    var $nav = $('#navArea');
    var $btn = $('.toggle-btn');
    var $mask = $('#mask');
    var openClass = 'open'; // ナビゲーションが開いている状態を示すクラス

    // トグルボタンのクリックイベントでナビゲーションの開閉を制御
    $btn.on('click', function () {
        $nav.toggleClass(openClass);
    });

    // マスクのクリックイベントでナビゲーションを閉じる
    $mask.on('click', function () {
        $nav.removeClass(openClass);
    });

    // スムーズスクロール機能
    $('a[href^="#"]').on('click', function () {
        var speed = 600;
        var href = $(this).attr("href");
        var $target = $(href === "#" || href === "" ? 'html' : href);
        var position = $target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        
        // ナビゲーションメニューが開いている場合は閉じる
        $nav.removeClass(openClass);
        
        return false;
    });
});