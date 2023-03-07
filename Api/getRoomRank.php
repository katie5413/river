<?php
session_start();
include('../pdoInc.php');

// getRoomRank
$findRoomRank = $dbh->prepare('SELECT river_loginLog.roomID, river_room.managerEmail, river_room.roomName, river_room.id as createTime, COUNT(*) as times FROM river_loginLog LEFT JOIN river_room ON river_loginLog.roomID = river_room.roomID GROUP BY river_room.roomID ORDER BY river_room.id DESC');
$findRoomRank->execute();

$res = array();
while ($rankItem = $findRoomRank->fetch(PDO::FETCH_ASSOC)) {

    $item = array();
    $item = array("id" => $rankItem['roomID'], "name" => $rankItem['roomName'], "managerEmail" => $rankItem['managerEmail'], "times" => $rankItem['times']);

    array_push($res, $item);
}

echo json_encode($res);
