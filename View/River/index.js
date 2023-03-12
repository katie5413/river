// debug: 按鈕定位
$("#room_bg").click(function (e) {
    var relativePosition = {
        left: e.pageX + $("#room_bg").scrollLeft() - $("#room_bg").offset().left,
        top: e.pageY - $("#room_bg").offset().top,
    };

    console.log("x: " + relativePosition.left + " y: " + relativePosition.top);
});

$(document).ready(function () {
    let roomID;
    const windowID = generateUniqueId().slice(0, 10);

    activeLoading("init");

    const member = [
        {
            id: 1,
            name: "孫武",
            x: 160,
            y: 261,
        },
        {
            id: 2,
            name: "老子",
            x: 76,
            y: 410,
        },
        {
            id: 3,
            name: "孔子",
            x: 146,
            y: 411,
        },
        {
            id: 4,
            name: "屈原",
            x: 369,
            y: 265,
        },
        {
            id: 5,
            name: "韓非子",
            x: 512,
            y: 261,
        },
        {
            id: 6,
            name: "荀子",
            x: 344,
            y: 425,
        },
        {
            id: 7,
            name: "墨子",
            x: 399,
            y: 405,
        },
        {
            id: 8,
            name: "孟子",
            x: 489,
            y: 433,
        },
        {
            id: 9,
            name: "莊子",
            x: 542,
            y: 413,
        },
        {
            id: 10,
            name: "呂不韋",
            x: 724,
            y: 260,
        },
        {
            id: 11,
            name: "李斯",
            x: 887,
            y: 265,
        },
        {
            id: 12,
            name: "司馬遷",
            x: 713,
            y: 411,
        },
        {
            id: 13,
            name: "賈誼",
            x: 857,
            y: 407,
        },
        {
            id: 14,
            name: "諸葛亮",
            x: 1041,
            y: 329,
        },
        {
            id: 15,
            name: "曹植",
            x: 1009,
            y: 424,
        },
        {
            id: 16,
            name: "曹操",
            x: 1136,
            y: 406,
        },
        {
            id: 17,
            name: "曹丕",
            x: 1217,
            y: 428,
        },
        {
            id: 18,
            name: "王羲之",
            x: 1220,
            y: 264,
        },
        {
            id: 19,
            name: "謝道韞",
            x: 1279,
            y: 242,
        },
        {
            id: 20,
            name: "陶淵明",
            x: 1349,
            y: 238,
        },
        {
            id: 21,
            name: "劉勰",
            x: 1429,
            y: 235,
        },
        {
            id: 22,
            name: "劉義慶",
            x: 1498,
            y: 236,
        },
        {
            id: 23,
            name: "陳子昂",
            x: 1742,
            y: 290,
        },
        {
            id: 24,
            name: "高適",
            x: 1848,
            y: 263,
        },
        {
            id: 25,
            name: "王昌齡",
            x: 1981,
            y: 285,
        },
        {
            id: 26,
            name: "王之渙",
            x: 2054,
            y: 286,
        },
        {
            id: 27,
            name: "李白",
            x: 1807,
            y: 441,
        },
        {
            id: 28,
            name: "杜甫",
            x: 1926,
            y: 429,
        },
        {
            id: 29,
            name: "孟浩然",
            x: 1997,
            y: 424,
        },
        {
            id: 30,
            name: "王維",
            x: 2091,
            y: 426,
        },
        {
            id: 31,
            name: "元稹",
            x: 2213,
            y: 264,
        },
        {
            id: 32,
            name: "白居易",
            x: 2282,
            y: 264,
        },
        {
            id: 33,
            name: "劉禹錫",
            x: 2335,
            y: 250,
        },
        {
            id: 34,
            name: "柳宗元",
            x: 2399,
            y: 268,
        },
        {
            id: 35,
            name: "韓愈",
            x: 2194,
            y: 413,
        },
        {
            id: 36,
            name: "孟郊",
            x: 2268,
            y: 396,
        },
        {
            id: 37,
            name: "張繼",
            x: 2377,
            y: 395,
        },
        {
            id: 38,
            name: "李煜",
            x: 2551,
            y: 259,
        },
        {
            id: 39,
            name: "杜牧",
            x: 2472,
            y: 406,
        },
        {
            id: 40,
            name: "李商隱",
            x: 2647,
            y: 415,
        },
        {
            id: 41,
            name: "范仲淹",
            x: 2727,
            y: 243,
        },
        {
            id: 42,
            name: "蘇軾",
            x: 2817,
            y: 268,
        },
        {
            id: 43,
            name: "李清照",
            x: 2869,
            y: 236,
        },
        {
            id: 44,
            name: "歐陽修",
            x: 2951,
            y: 234,
        },
        {
            id: 45,
            name: "司馬光",
            x: 2997,
            y: 239,
        },
        {
            id: 46,
            name: "蘇洵",
            x: 3043,
            y: 225,
        },
        {
            id: 47,
            name: "蘇轍",
            x: 3090,
            y: 228,
        },
        {
            id: 48,
            name: "曾鞏",
            x: 3156,
            y: 226,
        },
        {
            id: 49,
            name: "王安石",
            x: 3198,
            y: 241,
        },
        {
            id: 50,
            name: "周敦頤",
            x: 2811,
            y: 454,
        },
        {
            id: 51,
            name: "辛棄疾",
            x: 3435,
            y: 229,
        },
        {
            id: 52,
            name: "岳飛",
            x: 3324,
            y: 390,
        },
        {
            id: 53,
            name: "陸游",
            x: 3429,
            y: 394,
        },
        {
            id: 54,
            name: "馬致遠",
            x: 3604,
            y: 230,
        },
        {
            id: 55,
            name: "關漢卿",
            x: 3686,
            y: 229,
        },
        {
            id: 56,
            name: "鄭光祖",
            x: 3790,
            y: 235,
        },
        {
            id: 57,
            name: "白璞",
            x: 3846,
            y: 213,
        },
        {
            id: 58,
            name: "羅貫中",
            x: 3626,
            y: 417,
        },
        {
            id: 59,
            name: "施耐庵",
            x: 3773,
            y: 424,
        },
        {
            id: 60,
            name: "劉基",
            x: 3995,
            y: 254,
        },
        {
            id: 61,
            name: "歸有光",
            x: 4147,
            y: 263,
        },
        {
            id: 62,
            name: "吳承恩",
            x: 3991,
            y: 410,
        },
        {
            id: 63,
            name: "袁宏道",
            x: 4200,
            y: 329,
        },
        {
            id: 64,
            name: "吳敬梓",
            x: 4284,
            y: 253,
        },
        {
            id: 65,
            name: "曹雪芹",
            x: 4347,
            y: 247,
        },
        {
            id: 66,
            name: "蒲松齡",
            x: 4428,
            y: 252,
        },
        {
            id: 67,
            name: "劉鶚",
            x: 4508,
            y: 220,
        },
        {
            id: 68,
            name: "袁枚",
            x: 4300,
            y: 400,
        },
        {
            id: 69,
            name: "彭端淑",
            x: 4425,
            y: 411,
        },
        {
            id: 70,
            name: "沈復",
            x: 4523,
            y: 427,
        },
        {
            id: 71,
            name: "徐志摩",
            x: 4605,
            y: 319,
        },
        {
            id: 72,
            name: "胡適",
            x: 4682,
            y: 228,
        },
        {
            id: 73,
            name: "梁實秋",
            x: 4761,
            y: 197,
        },
        {
            id: 74,
            name: "朱自清",
            x: 4821,
            y: 206,
        },
    ];

    const fetchRoomID = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `../../Api/getRoomID.php`,
                success: function (res) {
                    console.log("roomID", res);
                    roomID = res;
                    resolve(true);
                },
                fail: function (xhr, ajaxOptions, thrownError) {
                    console.log("伺服器錯誤");
                    reject(false);
                },
            });
        });
    };

    (async function () {
        try {
            let getRoomIDDone = await fetchRoomID();

            if (getRoomIDDone) {
                init();
            }
        } catch (err) {
            console.log(err);
        }
    })();

    // 所有的對話
    let message = [];
    // 所有的 QA
    let question = [];
    // 目前的人物
    let currentMsgOwner = -1;
    // 目前這個文案是第幾筆
    let currentMsgIndex = -1;
    // 目前最後一句，在 message 中的 id
    let maxMsgIndex = -1;

    const clientHeight = document.getElementById("room_bg").clientHeight;
    const bgRatio = clientHeight / 600;


    // 初始化房間
    const init = () => {

        console.log("init");

        const fetchRoomMsgStatus = () => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: "POST",
                    url: `../../Api/getRoomMsg.php`,
                    data: {
                        roomID,
                    },
                    dataType: "json",
                    success: function (msgData) {
                        const messageData =
                            msgData != null && msgData.length > 0
                                ? JSON.parse(msgData)
                                : null;

                        // 創建時沒有內容，會是 null ，因此會報錯
                        if (messageData != null) {
                            messageData.forEach((msg, i) => {
                                message.push({ id: i, ...msg });
                            });
                        }

                        console.log("message", message);

                        console.log("載入對話成功");
                        resolve(true);
                    },
                    fail: function (xhr, ajaxOptions, thrownError) {
                        console.log("載入對話失敗");
                        reject(false);
                    },
                });
            });
        };

        const fetchRoomQuestionStatus = () => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: "POST",
                    url: `../../Api/getRoomQuestion.php`,
                    data: {
                        roomID,
                    },
                    dataType: "json",
                    success: function (data) {
                        const questionData = JSON.parse(data);
                        console.log("question", questionData);
                        if (questionData != null) {
                            questionData.forEach((questionItem) => {
                                question.push(questionItem);
                            });
                        }
                        console.log("載入題目成功");
                        resolve(true);
                    },
                    fail: function (xhr, ajaxOptions, thrownError) {
                        console.log("載入題目失敗");
                        reject(false);
                    },
                });
            });
        };
        (async function () {
            try {
                let getMsgDone = await fetchRoomMsgStatus();
                let getQuestionDone = await fetchRoomQuestionStatus();

                if (getMsgDone && getQuestionDone) {
                    start();

                }
            } catch (err) {
                console.log(err);
            }
        })();
    };

    // 開始
    const start = () => {
        startMap();
        closeLoading();

        startQA();
    }

    const startMap = () => {
        let memberIdList = [];
        let lastCheckId = -1;
        // 文案照順序，如果下一句是同一個人就分一群
        let msgGroupByRepeat = [];
        // 目前是 msgGroupByRepeat 的哪一群
        let group = 0;

        for (let i = 0; i < message.length; i++) {
            let currentMemberId = Number(message[i].who);

            // 是否跟前一個一樣
            if (lastCheckId === currentMemberId) {
                msgGroupByRepeat[msgGroupByRepeat.length - 1].repeat++;
            } else {
                // 如果沒出現過，就加入名單
                if (!memberIdList.includes(currentMemberId)) {
                    memberIdList.push(currentMemberId);
                }

                msgGroupByRepeat.push({ who: currentMemberId, repeat: 1, msgId: i });
                lastCheckId = currentMemberId;
            }
        }

        console.log("msgGroupByRepeat", msgGroupByRepeat, memberIdList);

        // show members's pill who have msg
        memberIdList.map((msgId) => {
            $("#room_bg").append(
                generatePillMsg({
                    id: msgId,
                    name: member[msgId - 1].name,
                    x: member[msgId - 1].x * bgRatio,
                    y: member[msgId - 1].y * bgRatio,
                    total: 1, // tmp
                    current: 1,
                })
            );
        });

        // update room member quantity
        $("#roomMemberQuantity").text(memberIdList.length);

        // 點擊人物名稱
        $(".pill").on("click", function () {
            currentMsgOwner = Number($(this).attr("personID"));
            currentMsgIndex = Number($(this).attr("current"));

            updateDialog();
        });

        function updateDialog() {
            $("#dialog").addClass("active");
            const totalMsg = message.filter(
                (item) =>
                    item.who === `${currentMsgOwner}` &&
                    item.id <= maxMsgIndex
            );
            // 根據目前互動的結果，此人物最多能顯示文案 = message 中 id <= maxMsgIndex 且 屬於 目前人物的總文案數
            const currentMsgOwnerTotal = totalMsg.length;

            // 如果沒有內容，可能是目前還沒到該人物
            if (currentMsgOwnerTotal == 0) {
                // 名字
                $("#dialog .name").text(member[currentMsgOwner - 1].name);

                // 目前
                $("#dialog #current").text(1);

                // 總共
                $("#dialog #total").text(1);

                // 處理箭頭
                $("#triggerMsgNext").addClass("hide");
                $("#triggerMsgPrev").addClass("hide");

                // 鈴聲
                playSound("bell");

                // 內文
                $("#dialog .text").text("晚點再來找我吧");
            } else {

                const currentMsg = totalMsg[currentMsgIndex - 1];
                const currentMsgId = currentMsg.id;

                // 如果現在的文案 id = 該次的最後一句，也就是 msgGroupByRepeat 的 msgId + repeat -1
                if (currentMsgId === msgGroupByRepeat[group].msgId + msgGroupByRepeat[group].repeat - 1) {

                    if (group !== msgGroupByRepeat.length - 1) {
                        maxMsgIndex = currentMsgId + msgGroupByRepeat[group + 1].repeat;
                        group++;
                    } else {

                        setTimeout(() => {
                            alert('已看完所有對話，快去作答區挑戰看看吧!');
                        }, 2000);

                    }

                }

                const name = member.filter(
                    (item) => item.id === Number(currentMsg.who)
                )[0].name;

                // 更新 pill current
                $(`button.pill[personID="${currentMsgOwner}"]`).attr(
                    "current",
                    currentMsgIndex
                );

                // 名字
                $("#dialog .name").text(name);

                // 目前
                $("#dialog #current").text(currentMsgIndex);

                // 總共
                $("#dialog #total").text(totalMsg.length);

                // 鈴聲
                playSound("bell");

                // 內文
                $("#dialog .text").text("");
                $("#dialog .text").children().remove();
                if (currentMsg.type === "text") {
                    $("#dialog .text").text(currentMsg.text);
                }

                if (currentMsg.type === "link") {
                    let link = document.createElement("a");
                    link.classList.add("link");
                    link.setAttribute("target", "_blank");
                    link.setAttribute("href", currentMsg.text);
                    link.textContent = currentMsg.text;
                    $("#dialog .text").append(link);
                }

                if (currentMsg.type === "image") {
                    let image = `<div class="image"><img src="${currentMsg.imageSRC}" /></div>`;
                    $("#dialog .text").append(image);

                    $("#dialog .image").on("click", function () {
                        openModal({
                            targetModal: $("#quickView"),
                        });

                        $("#quickView .content .middle img").attr(
                            "src",
                            $(this).find("img").attr("src")
                        );
                    });
                }

                // 處理箭頭顯示與否
                if (Number($("#dialog #current").text()) === Number($("#dialog #total").text())) {
                    $("#triggerMsgNext").addClass("hide");
                } else {
                    $("#triggerMsgNext").removeClass("hide");
                }

                if (Number($("#dialog #current").text()) === 1) {
                    $("#triggerMsgPrev").addClass("hide");
                } else {
                    $("#triggerMsgPrev").removeClass("hide");
                }
            }

        }

        // 往前
        $("#triggerMsgPrev").on("click", function () {
            if (currentMsgIndex > 1) {
                currentMsgIndex--;
            }

            updateDialog();
        });

        // 往前
        $("#triggerMsgNext").on("click", function () {
            if (currentMsgIndex < Number($("#dialog #total").text())) {
                currentMsgIndex++;
            }

            updateDialog();
        });

        $("#quickView").on("click", function (e) {
            let close = true;
            if (e.target == document.getElementById("quickView")) {
                closeModal();
            }
        });

        // 第一個對話
        const firstMsg = message[0];
        maxMsgIndex = msgGroupByRepeat[0].repeat - 1;
        $(`button.pill[personID="${firstMsg.who}"]`).click();
    }

    const startQA = () => {
        // 題目
        let answer = [];

        if (question != null) {
            question.map((item, index) => {
                $("#question").append(
                    generateQuestionItem({
                        questionData: item.options, // ['選項一','選項二'...]
                        questionIndex: item.indexName ? item.indexName : index + 1, // 題號
                    })
                );
                answer.push(item.answerID);
            });
            activeQuestionItemFunction();
        }

        $("#questionBtn").on("click", function () {
            $(".room_question").addClass("active");
        });
        $("#closeQA").on("click", function () {
            $(".room_question").removeClass("active");
        });

        $("#submitAnswer").click(() => {
            let userAnswer = getAnswer();

            if (userAnswer.length == answer.length) {
                let valid = checkAnswer(userAnswer, answer);
                dataLayer.push({
                    event: "submitAnswer",
                    roomID: roomID,
                    windowID: windowID,
                });

                if (valid) {
                    $(".congrats").addClass("active");
                    playSound("correct");
                    dataLayer.push({
                        event: "correct",
                        roomID: roomID,
                        windowID: windowID,
                    });
                } else {
                    $(".congrats").removeClass("active");

                    showErrorMsg({
                        target: $(".room_question"),
                        msg: "再檢查一下吧ＱＱ",
                    });
                    playSound("incorrect");
                    dataLayer.push({
                        event: "incorrect",
                        roomID: roomID,
                        windowID: windowID,
                        answer: userAnswer,
                    });
                }
            } else {
                showErrorMsg({
                    target: $(".room_question"),
                    msg: "有未作答的題目",
                });
                playSound("incorrect");

                dataLayer.push({
                    event: "notAllFill",
                    roomID: roomID,
                    windowID: windowID,
                });
            }
        });

        // 拿到使用者填答
        function getAnswer() {
            let userAnswer = [];
            for (let i = 0; i < $(".answerOption").length; i++) {
                let selected = $(".answerOption").eq(i).attr("select-id");
                if (selected != "") {
                    userAnswer.push(selected);
                }
            }
            return userAnswer;
        }

        // 檢查答案是否相同
        function checkAnswer(userAnswer, answer) {
            let valid = true;
            for (let i = 0; i < answer.length; i++) {
                if (userAnswer[i] != answer[i]) {
                    valid = false;
                    $("#question .questionItem")
                        .eq(i)
                        .find("input")
                        .addClass("alert");
                } else {
                    $("#question .questionItem")
                        .eq(i)
                        .find("input")
                        .removeClass("alert");
                }
            }
            return valid;
        }
    }

    const playSound = (type) => {
        let sound;
        switch (type) {
            case "bell":
                sound = new Audio("../../sound/bell.mp3");
                break;
            case "correct":
                sound = new Audio("../../sound/correct.mp3");
                break;
            case "incorrect":
                sound = new Audio("../../sound/incorrect.mp3");
                break;
        }

        sound.play();
    };
});
