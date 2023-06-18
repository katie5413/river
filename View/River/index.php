<?php
session_start();
include "../../pdoInc.php";
?>

<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
    <link rel="stylesheet" type="text/css" href="../../Common/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/DropBox/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/PillMsg/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Button/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Input/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Dialog/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Notice/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Modal/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/QuestionItem/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/QuickView/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/ErrorMsg/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="../../Components/Loading/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" type="text/css" href="index.css?v=<?php echo time(); ?>">
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-K7S8TL9');
    </script>
    <!-- End Google Tag Manager -->
    <title>超時空座談｜房間</title>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7S8TL9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="loaderWrapper" class="active" type="init">
        <div class="loader"></div>
        <div class="text init">
            初始化中，請稍等
        </div>
        <div class="text saving">
            儲存中
        </div>
        <div class="text success">
            儲存成功
        </div>
        <div class="text fail">
            儲存失敗
        </div>
    </div>
    <div class="room_header">
        <div class="room_name"><?php echo $_SESSION['roomName']; ?>（<span id="roomMemberQuantity"></span>）</div>
    </div>

    <div id="dialog">
        <div class="top">
            <div class="name">name</div>
            <div class="quote">:</div>
            <div class="text">文字</div>
        </div>
        <div class="bottom">
            <div id="goFind"></div>
            <div class="control">
                <img id="triggerMsgPrev" class="prev arrow" src="../../Images/icon/arrow-left.svg" alt="prev">
                <div class="page">
                    <span id="current">1</span>
                    <span>/</span>
                    <span id="total">3</span>
                </div>
                <img id="triggerMsgNext" class="next arrow" src="../../Images/icon/arrow-right.svg" alt="next">
            </div>
        </div>
    </div>

    <div id="room_bg">
        <!-- <img id="riverBackground" src="../../Images/allName.jpg"> -->
        <img id="riverBackground" src="../../Images/all.jpg">
        <div id="quickView" class="modal">
            <div class="modalWrapper">
                <!-- <img class="icon modalCancel" src="../Images/icon/close.svg" /> -->
                <div class="content">
                    <div class="middle">
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="room_question">
        <div class="wrapper">
            <div class="blockTitle">作答區
                <img id="closeQA" src="../../Images/icon/close.svg" alt="close">
            </div>
            <div class="form__input">
                <input id="submitName" class="input" type="text" value="" placeholder="暱稱（選填）" />
            </div>
            <div id="question"></div>
            <div class="errorMsg">
                <img class="icon" src="../../Images/icon/error.svg" alt="error" />
                <span class="text">errorText</span>
            </div>
            <div class="congrats">
                <div class="text"><span></span>答對啦～</div>
                <div class="time">作答時間：<span></span></div>
                <div class="submitTimes">作答次數：<span></span></div>
            </div>
            <div class="function_button">
                <button id="submitAnswer" class="button button-fill">提交</button>
            </div>
        </div>
    </div>


    <script src="../../Common/util.js"></script>
    <script src="../../Common/global.js"></script>
    <script src="../../Dependencies/jquery/jquery.min.js"></script>
    <script src="../../Components/DropBox/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/PillMsg/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/Notice/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/Modal/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/QuestionItem/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/ErrorMsg/index.js?v=<?php echo time(); ?>"></script>
    <script src="../../Components/Loading/index.js?v=<?php echo time(); ?>"></script>
    <script src="index.js?v=<?php echo time(); ?>"></script>
</body>

</html>