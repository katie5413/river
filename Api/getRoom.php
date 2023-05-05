

<?php
/* 20230505 改成進去房間才拿資料，節省載入時間，暫時不會用到這支 */

session_start();
include('../pdoInc.php');
$roomData = array();
$roomData = array("status" => '404');
if (isset($_POST['roomID'])) {

    // getRoomInfo
    $findRoom = $dbh->prepare('SELECT roomID, roomName FROM river_room WHERE roomID = ?');
    $findRoom->execute(array($_POST['roomID']));
    if ($roomItem = $findRoom->fetch(PDO::FETCH_ASSOC)) {

        // getRoomInfo
        $findRoomMsg = $dbh->prepare('SELECT roomID, content FROM river_message WHERE roomID = ?');
        $findRoomMsg->execute(array($_POST['roomID']));
        if ($msgItem = $findRoomMsg->fetch(PDO::FETCH_ASSOC)) {
            $_SESSION['roomMsg'] = $msgItem['content'];
        }

        // getRoomQuestion
        $findRoomQuestion = $dbh->prepare('SELECT content FROM river_question WHERE roomID = ? ');
        $findRoomQuestion->execute(array($_POST['roomID']));

        if ($questionItem = $findRoomQuestion->fetch(PDO::FETCH_ASSOC)) {
            $_SESSION['roomQuestion'] = $questionItem['content'];
        }

        $roomData = array("status" => 'success', "roomName" => $roomItem['roomName'], "roomMsg" => $msgItem['content'], "roomQuestion" => $questionItem['content']);

        // 有找到才會放到 SESSION
        $_SESSION['roomID'] = $_POST['roomID'];
        $_SESSION['roomName'] = $roomItem['roomName'];
        $_SESSION['roomImage'] = $images;

        echo json_encode($roomData);
    } else {
        echo json_encode($roomData);
    }
} else {
    echo json_encode($roomData);
}
