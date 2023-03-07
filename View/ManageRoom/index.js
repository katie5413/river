$(document).ready(function () {
    const roomID = document.getElementById("roomID").textContent;
    const members = [
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

    

    let message = [];
    let question = [];
    activeLoading("init");

    // 房間名
    $(".roomName.form__input").click(function () {
        $(this).addClass("edit");
    });

    $("#changeRoomName").blur(function () {
        $(".roomName.form__input.edit").removeClass("edit");
    });

    const initRoomName = $("#changeRoomName").val();

    const changeRoomName = () => {
        $.ajax({
            type: "POST",
            url: `../../Api/updateRoomName.php`,
            data: {
                name: $("#changeRoomName").val(),
                roomID,
            },
            dataType: "json",
            success: function (data) {
                console.log("editRoomName", data);
            },
        });
    };

    // 改房間名
    $(document).click(function (e) {
        if (
            $(".roomName.form__input") !== e.target &&
            !$(".roomName.form__input").has(e.target).length
        ) {
            $(".roomName.form__input").removeClass("edit");
            if (initRoomName !== $("#changeRoomName").val()) {
                changeRoomName();
            }
        }
    });

    // 先塞人物
    for (let i = 0; i < members.length; i++) {
        console.log('members');
        $("#addMsg .selectCharacter .select-items").append(
            generateMsgInputItemOption({
                memberID: members[i].id,
                memberName: members[i].name,
            })
        );
    }

    // 對話
    const fetchRoomMsgStatus = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `../../Api/getRoomMsg.php`,
                dataType: "json",
                data: {
                    roomID,
                },
                success: function (msgData) {
                    const messageData = JSON.parse(msgData);

                    // 創建時沒有內容，會是 null ，因此會報錯
                    if (messageData != null) {
                        messageData.forEach((msg) => {
                            message.push(msg);
                        });
                        message = messageData;
                    }

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

    // 問題
    const fetchRoomQuestionStatus = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `../../Api/getRoomQuestion.php`,
                dataType: "json",
                data: {
                    roomID,
                },
                success: function (data) {
                    const questionData = JSON.parse(data);
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

            if (getMsgDone) {
                console.log("msg", message);
                // message
                if (message != null) {
                    message.map((item, index) => {
                        let msgOwner = members.filter((person) => person.id == item.who)[0];

                        const typeText = {
                            undefined: "文字",
                            null: "文字",
                            text: "文字",
                            image: "圖片",
                            link: "連結",
                        };

                        item.type = item.type == null ? "text" : item.type;

                        $("#message").append(
                            generateMsgInputItem({
                                index: index + 1, // 0 塞不進去，所以要加 1
                                characterID: item.who,
                                characterName:
                                    item.who == -1 || msgOwner == null
                                        ? "沒有成員"
                                        : msgOwner.name,
                                type: item.type,
                                typeText: typeText[item.type],
                                text: item.text,
                                imageSRC: item.imageSRC,
                                memberData: members,
                            })
                        );

                        // 更改內容類型
                        $(
                            `.msgManageItem[data-id="${index + 1
                            }"] .form__input.drop[data-type="contentType"] .option`
                        ).on("click", function () {
                            $(this).closest(".msgManageItem").removeClass("text image link");
                            $(this).closest(".msgManageItem").addClass($(this).attr("value"));
                        });
                    });

                    activeGalleryItem();
                }

                // 註冊對話事件
                activeMsgItem();

                for (let i = 0; i < $(".msgCharacter").length; i++) {
                    if ($(".msgCharacter").eq(i).val() == "沒有成員") {
                        $(".msgCharacter").eq(i).addClass("alert");
                    }
                }
                // message done
            }

            // 問題
            if (getQuestionDone) {
                console.log("question", question);

                // qa
                if (question != null) {
                    question.map((item, index) => {
                        $("#question").append(
                            generateQuestionInputItem({
                                questionData: item.options, // ['選項一','選項二'...]
                                answerID: item.answerID,
                                questionIndex: item.indexName ? item.indexName : index + 1, // 題號
                            })
                        );
                    });

                    // 註冊刪除問題事件
                    activeDeleteQuestionItem();
                }
                //qa done
            }

            if (getMsgDone && getQuestionDone) {
                init();
            }
        } catch (err) {
            console.log(err);
        }
    })();

    // 確定都有拿到資料

    const init = () => {
        closeLoading();
        console.log("載入完成");
    };

    $("#watch").on("click", function () {
        setTimeout(function () {
            window.open("../River/index.php");
        }, 200);
    });

    $("#share").on("click", function () {
        let dummy = document.createElement("input"),
            text = window.location.href;

        document.body.appendChild(dummy);
        const shareLink = text
            .concat(`?roomCode=${roomID}`)
            .replace("ManageRoom", "River");
        dummy.value = shareLink;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("複製成功！");
    });

    // toggleExpand
    $(".toggleExpand").click(function () {
        $(this).toggleClass("collapse");
    });

    $("#contentDisplayArea").click(function () {
        $(".messageArea").toggleClass("collapse");
    });

    $("#questionDisplayArea").click(function () {
        $(".questionArea").toggleClass("collapse");
    });

    // 圖片

    // 處理上傳的圖片

    $("#upload_gallery_img").change(function () {
        let file = this.files[0];
        //用size属性判断文件大小不能超过1M ，前端直接判断的好处，免去服务器的压力。
        if (file.size > 1 * 1024 * 1024) {
            alert("圖片不可大於 1MB");
        } else {
            let reader = new FileReader();
            reader.onload = function () {
                // 通过 reader.result 来访问生成的 base64 DataURL
                let base64 = reader.result;
                $("#galleryModal")
                    .find(".cropImageResult")
                    .append(
                        `<img class="tmpUploadImg" src="${base64}" alt="uploadImage">`
                    );

                // switch status
                $("#galleryModal").attr("image-status", "upload");

                let image = $("#galleryModal").find(".tmpUploadImg")[0];
                let button = $("#galleryModal").find(".crop_button")[0];

                var cropper = new Cropper(image, {
                    ready: function (event) {
                        // Zoom the image to its natural size
                        // cropper.zoomTo(1);
                    },
                    crop: function (event) { },
                    zoom: function (event) {
                        // Keep the image in its natural size
                        if (event.detail.oldRatio === 1) {
                            event.preventDefault();
                        }
                    },
                });

                button.onclick = function () {
                    let croppedCanvas = cropper.getCroppedCanvas();

                    $("#galleryModal").find(".cropImageResult").children().remove();
                    $("#galleryModal")
                        .find(".cropImageResult")
                        .append(
                            `<img class="croppedImg" src="${croppedCanvas.toDataURL()}" alt="croppedImg" />`
                        );
                    // switch status
                    $("#galleryModal").attr("image-status", "crop");
                };
            };
            reader.readAsDataURL(file);
        }
    });

    // 重新上傳
    $("#galleryModal")
        .find(".reUpload_button")
        .click(function () {
            resetGalleryModal();
        });

    // 確認
    $("#galleryModal")
        .find(".modalConfirm")
        .on("click", function () {
            const actionType = $("#galleryModal").attr("action-type");
            let valid = true;
            const imageSRC = $("#galleryModal").find(".croppedImg").attr("src");
            const updateImageID = $("#galleryModal").attr("data-id");

            // 不用檢查是否上傳圖片，因為沒上傳圖片不會有按鈕

            if (valid) {
                switch (actionType) {
                    case "add":
                        $("#addMsg .imageForm").addClass("upload");
                        $("#addMsg .imageForm .upload img").attr("src", imageSRC);

                        break;
                    case "edit":
                        const targetID = $(this).closest(".msgManageItem").attr("data-id");
                        $(`.msgManageItem[data-id="${updateImageID}"]`)
                            .find(".openGalleryModal")
                            .attr("src", imageSRC);

                        break;
                }

                resetGalleryModal();
                closeModal();
                $("#galleryModal").removeAttr("data-id");
            }
        });

    // 取消
    $("#galleryModal")
        .find(".modalCancel")
        .on("click", function (e) {
            e.preventDefault();
            resetGalleryModal();
            closeModal();
            $("#galleryModal").removeAttr("data-id");
        });

    // 刪除
    // $('#galleryModal')
    //     .find('.delete_button')
    //     .on('click', function () {
    //         $.ajax({
    //             type: 'POST',
    //             url: `../../Api/deleteRoomGallery.php`,
    //             data: {
    //                 id: $('#galleryModal').attr('data-id'),
    //             },
    //             dataType: 'json',
    //             success: function (data) {
    //                 console.log('delete', data);
    //                 // 自動儲存後重整
    //                 $('#saveContent').click();
    //             },
    //         });
    //     });

    function resetGalleryModal() {
        // 重置 gallery
        $("#galleryModal").attr("image-status", "init");
        $("#galleryModal").find(".cropImageResult").children().remove();
    }

    function activeGalleryItem(id) {
        if (id) {
            $(`.msgManageItem[data-id="${id}"] .openGalleryModal`).click(function () {
                const targetID = $(this).closest(".msgManageItem").attr("data-id");
                const targetImageSRC = $(this).attr("src");

                $("#galleryModal").attr("data-id", targetID);
                $("#galleryModal").attr("image-status", "crop");

                openModal({
                    targetModal: $("#galleryModal"),
                    modalTitle: "編輯圖片",
                    actionType: "edit",
                });

                if (targetImageSRC) {
                    $("#galleryModal")
                        .find(".cropImageResult")
                        .append(
                            `<img class="croppedImg" src="${targetImageSRC}" alt="croppedImg" />`
                        );
                }
            });
        } else {
            $(".msgManageItem .openGalleryModal").click(function () {
                const targetID = $(this).closest(".msgManageItem").attr("data-id");
                const targetImageSRC = $(this).attr("src");

                $("#galleryModal").attr("data-id", targetID);
                $("#galleryModal").attr("image-status", "crop");

                openModal({
                    targetModal: $("#galleryModal"),
                    modalTitle: "編輯圖片",
                    actionType: "edit",
                });

                if (targetImageSRC) {
                    $("#galleryModal")
                        .find(".cropImageResult")
                        .append(
                            `<img class="croppedImg" src="${targetImageSRC}" alt="croppedImg" />`
                        );
                }
            });
        }

        console.log("activeGalleryItem");
    }
    // 圖片 end

    // 對話

    $(".selectType.form__input.drop .option").on("click", function () {
        const newContentTypeOption = $(this).attr("value");

        // 設定內容類型
        $("#addMsg").attr("content-type", newContentTypeOption);
    });

    $(".openGalleryModal").on("click", function () {
        openModal({
            targetModal: $("#galleryModal"),
            modalTitle: "新增圖片",
            actionType: "add",
        });
    });

    $("#addMsg #addMsgContent").click(function () {
        const target = $("#addMsg");
        const characterID = target.find("#selectMsgCharacter").attr("select-id");
        const characterName =
            target.find("#selectMsgCharacter").val() || "沒有成員";
        const msgType = target.find(".newContentTypeOption").attr("select-id");

        if (msgType) {
            const typeText = {
                text: "文字",
                image: "圖片",
                link: "連結",
            };

            let msgText = null;
            let msgImageSRC = null;

            let valid = true;
            let errorMsg = [];

            if (characterID.trim().length == 0) {
                valid = false;
                target.find(".selectCharacter .drop__container").addClass("error");
                alert("請選擇角色");
            }
            switch (msgType) {
                case "text":
                    msgText = target.find('.newMsg input[name="newMsg"]').val();

                    if (msgText.trim().length == 0) {
                        valid = false;
                        target.find(".newMsg").addClass("error");

                        alert("請輸入對話");
                    }
                    break;
                case "link":
                    msgText = target.find('.newMsg input[name="newLink"]').val();

                    if (msgText.trim().length == 0) {
                        valid = false;
                        target.find(".newMsg").addClass("error");

                        alert.push("請輸入連結");
                    }
                    break;
                case "image":
                    msgImageSRC = target.find(".imageForm .upload img").attr("src");

                    if (msgImageSRC == "../Images/icon/upload.svg") {
                        valid = false;

                        alert("請選擇圖片");
                    }
                    break;
            }

            if (valid) {
                const uuid = generateUniqueId().slice(8);
                $("#message").append(
                    generateMsgInputItem({
                        index: uuid,
                        characterID: characterID,
                        characterName: characterName,
                        type: msgType,
                        typeText: typeText[msgType],
                        text: msgText,
                        imageSRC: msgImageSRC,
                        memberData: members,
                    })
                );

                // 清空角色
                $("#selectMsgCharacter").val("");

                //  清空原本的內容類型
                $(".newContentTypeOption").removeAttr("select-id");
                $(".newContentTypeOption").val("");

                // 清空對話
                $("#addMsg .newMsg .input").val("");

                // 註冊對話事件
                activeMsgItem();
                activeGalleryItem(uuid);

                if (msgType == "image") {
                    $("#addMsg .imageForm").removeClass("upload");
                }

                // 關閉 modal
                closeModal();
            }
        } else {
            alert("請先選擇內容類型");
        }
    });

    function activeMsgItem() {
        $(".deleteMsgItem").on("click", function () {
            $(this).parent().remove();
        });
    }

    // 對話 end

    // 問題
    $("#newQuestionContent").on("blur", function () {
        let selectValue = $("#newQuestionContent").val();
        let selection = selectValue.split(",");
        if (selection[selection.length - 1] == "") {
            selection.pop();
        }
        $(".selectAnswer .select-items .option").remove();

        const optionItemTemplate = `<div class="option" data-id="{{key}}" value="{{key}}">{{text}}</div>`;

        function generateOptionItem(props) {
            let template = optionItemTemplate;

            return generateHtml(template, {
                ...props,
            });
        }

        if (selection.length > 1) {
            // 至少兩個選項
            for (i = 0; i < selection.length; i++) {
                // 不得為空, key 不能為 0 ，所以要加一
                if (selection[i] != "") {
                    $(".selectAnswer .select-items").append(
                        generateOptionItem({ key: i + 1, text: selection[i] })
                    );
                }
            }
        }
    });
    // 新增
    $("#addQuestionContent").click(function () {
        let questionIndexName = $("#newQuestionIndexName").val();
        let answerID = $("#newQuestionContentAnswer").attr("select-id"); // 1, 2, 3 ... 因為 key 不能有 0
        let selectValue = $("#newQuestionContent").val();
        let selection = selectValue.split(",");
        if (selection[selection.length - 1] == "") {
            selection.pop();
        }
        let valid = true;

        if (questionIndexName.length < 0) {
            valid = true;
            $("#newQuestionIndexName").parent().addClass("error");
        }

        if (!answerID) {
            valid = false;
            $("#newQuestionContentAnswer").parent().addClass("error");
        }

        if (selection.length < 2) {
            valid = false;
            $("#newQuestionContent").parent().addClass("error");
        }

        if (valid) {
            $("#question").append(
                generateQuestionInputItem({
                    questionIndex: questionIndexName,
                    questionData: selection, // ['選項一','選項二'...]
                    answerID: answerID,
                })
            );
            //  清空原本的
            initAddQuestionForm();

            // 註冊刪除問題事件
            activeDeleteQuestionItem();
        }
    });

    function initAddQuestionForm() {
        $("#newQuestionIndexName").val(""); // 題號
        $("#newQuestionContent").val(""); // 選項
        $("#newQuestionContentAnswer").removeAttr("select-id"); // 答案號碼
        $("#newQuestionContentAnswer").val(""); // 答案
    }

    // 刪除問題
    $(".deleteQuestionItem").on("click", function () {
        $(this).parent().remove();
    });

    function activeDeleteQuestionItem() {
        $(".deleteQuestionItem").on("click", function () {
            $(this).parent().remove();
        });
    }
    // 問題 end

    // 儲存
    $("#saveContent").on("click", function () {
        activeLoading("saving");

        (async function () {
            try {
                let checkContent = await checkContentSave();
                let checkQuestion = await checkQuestionSave();

                if (checkContent && checkQuestion) {
                    activeLoading("success");

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } catch (err) {
                console.log(err);
                activeLoading("fail");

                setTimeout(() => {
                    alert("儲存失敗，聊天室內容過大，請壓縮圖片後再試一次");
                    closeLoading();
                }, 1000);
            }
        })();
    });

    function checkContentSave() {
        return new Promise((resolve, reject) => {
            // 儲存對話內容
            let msgData = [];

            for (let i = 0; i < $(".msgManageItem").length; i++) {
                const id =
                    $(".msgManageItem").eq(i).find(".msgCharacter").attr("select-id") ||
                    -1;
                const text = $(".msgManageItem").eq(i).find(".content").val();
                const type =
                    $(".msgManageItem")
                        .eq(i)
                        .find(".contentTypeOption")
                        .attr("select-id") || "text";
                const imageSRC =
                    $(".msgManageItem").eq(i).find(".msgImage").attr("src") ||
                    "../Images/icon/upload.svg";

                let tmpData = {
                    who: id,
                    type,
                };

                if (type == "image") {
                    tmpData.imageSRC = imageSRC;
                }

                if (text.length > 0) {
                    if (type == "text" || type == "link") {
                        tmpData.text = text;
                    }

                    msgData.push(tmpData);
                }
            }
            console.log(msgData);

            $.ajax({
                type: "POST",
                url: `../../Api/updateRoomContent.php`,
                dataType: "json",
                data: {
                    content: JSON.stringify(msgData),
                    roomID,
                },
                success: function (data) {
                    console.log(data);
                    resolve(true);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr, ajaxOptions, thrownError);
                    reject(false);
                },
            });
        });
    }

    function checkQuestionSave() {
        return new Promise((resolve, reject) => {
            // 儲存題目
            let questionData = [];

            for (let i = 0; i < $(".questionManageItem").length; i++) {
                let questionIndexName = $(".questionManageItem")
                    .eq(i)
                    .find(".questionIndexName")
                    .val();
                let answerID =
                    $(".questionManageItem")
                        .eq(i)
                        .find(".answerOption")
                        .attr("select-id") || -1;
                let options = $(".questionManageItem").eq(i).find(".content").val();
                let selection = options.split(",");
                if (selection[selection.length - 1] == "") {
                    selection.pop();
                }

                if (selection.length > 0) {
                    let tmpData = {
                        indexName: questionIndexName,
                        options: selection,
                        answerID,
                    };
                    questionData.push(tmpData);
                }
            }

            $.ajax({
                type: "POST",
                url: `../../Api/updateRoomQuestion.php`,
                dataType: "json",
                data: {
                    content: JSON.stringify(questionData),
                    roomID,
                },
                success: function (data) {
                    console.log(data);
                    resolve(true);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr, ajaxOptions, thrownError);
                    reject(false);
                },
            });
        });
    }
});
