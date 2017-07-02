/**
 * Created by SilverNarcissus on 2017/6/13.
 */

function imageIn() {
    $("#welcome").fadeIn(2000);
}
$(document).ready(function () {
    //$("#image").slideUp(0);
    $("#welcome").fadeOut(0).fadeIn(2000);
    // $("#title").click(function () {
    //     //$("#image").slideToggle();
    //     $("#welcome").fadeToggle();
    // })
});


function changeCharacter() {
    $(document).ready(function () {
        $("#Situmi").click(function () {
            alert("here");
            $("#section").html("<image src=\"../picture/Situmi.jpeg\" width=\"480\" height=\"300\"></image>");
        })
        $("#Nagisa").click(function () {
            $("#section").html("<image src=\"../picture/Nagisa.jpeg\" width=\"480\" height=\"270\"></image>");
        })
        $("#Misuzu").click(function () {
            $("#section").html("<image src=\"../picture/Misuzu.jpeg\" width=\"480\" height=\"270\"></image>");
        })
        $("#TestBean").click(function () {
            checkIn();
        })
        $("#RockPaperScissors").click(function () {
            $("#section").html(" <p>正在计算对手的思维：</p> ");

            setTimeout(function () {
                $("#section").append("<p> 前导分析完成...</p>")
            }, 1000)
            setTimeout(function () {
                $("#section").append("<p> 综合分析完成...</p>")
            }, 2000)
            setTimeout(function () {
                $("#section").append("<p> 开始构建思维模型...</p>")
            }, 3000)
            setTimeout(function () {
                $("#section").append("<p> 建立神经连接...</p>")
            }, 4000)
            setTimeout(function () {
                $("#section").append("<p> 模型构建完成，正在跳转...</p>")
            }, 5000)
            setTimeout(function () {
                $("#section").html(" <p>你选择出：</p> " +
                    "<button id=\"RockButton\" type=\"button\" onclick='rockRespond()'>石头</button>" +
                    "<button id=\"ScissorsButton\" type=\"button\" onclick='scissorsRespond()'>剪刀</button>" +
                    "<button id=\"PaperButton\" type=\"button\" onclick='paperRespond()'>布</button>"
                )
            }, 6000);
        })
    })
}

function rockRespond() {
    var i = Math.random();
    if (i > 0.85) {
        $("#section").html("<p>你选择出：</br>石头</p><p id = \"append\">小银出的是：剪刀</br>你赢啦 我不服！ (默默记录了你当前的思维模型，下次赢给你看！！！)</p>")
    }
    else if (i > 0.7) {
        $("#section").html("<p>你选择出：</br>石头</p><p id = \"append\">小银出的是：石头</br>平局啊，没关系，下次一定是我赢哟~ (悄悄记录了你这次的行为，进行心理分析，下次赢给你看！！！)</p>")
    }
    else {
        $("#section").html("<p>你选择出：</br>石头</p><p id = \"append\">小银出的是：布</br>你输啦~ 嘿嘿嘿 (来自Silver的AI的嘲笑)</p>")
    }
}

function paperRespond() {
    var i = Math.random();
    if (i > 0.85) {
        $("#section").html("<p>你选择出：</br>布</p><p id = \"append\">小银出的是：石头</br>你赢啦 我不服！ (默默记录了你当前的思维模型，下次赢给你看！！！)</p>")
    }
    else if (i > 0.7) {
        $("#section").html("<p>你选择出：</br>布</p><p id = \"append\">小银出的是：布</br>平局啊，没关系，下次一定是我赢哟~ (悄悄记录了你这次的行为，进行心理分析，下次赢给你看！！！)</p>")
    }
    else {
        $("#section").html("<p>你选择出：</br>布</p><p id = \"append\">小银出的是：剪刀</br>你输啦~ 嘿嘿嘿 (来自Silver的AI的嘲笑)</p>")
    }
}

function scissorsRespond() {
    var i = Math.random();
    if (i > 0.85) {
        $("#section").html("<p>你选择出：</br>剪刀</p><p id = \"append\">小银出的是：布</br>你赢啦 我不服！ (默默记录了你当前的思维模型，下次赢给你看！！！)</p>")
    }
    else if (i > 0.7) {
        $("#section").html("<p>你选择出：</br>剪刀</p><p id = \"append\">小银出的是：剪刀</br>平局啊，没关系，下次一定是我赢哟~ (悄悄记录了你这次的行为，进行心理分析，下次赢给你看！！！)</p>")
    }
    else {
        $("#section").html("<p>你选择出：</br>剪刀</p><p id = \"append\">小银出的是：石头</br>你输啦~ 嘿嘿嘿 (来自Silver的AI的嘲笑)</p>")
    }
}
function checkIn() {
    $.ajax({
            type: "POST",
            url: "/api/test/user/signup",
            data: JSON.stringify(
                {
                    userName: $("#userName").val(),
                    password: $("#password").val()
                }
            ),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, status) {
                if(data.result == "SUCCESS"){
                    $("#checkIn").remove();
                    $("#secret").fadeIn(2000);
                }
                else {
                    $("#prompt").html(" <p style=\"color: red\">Check your username or password</p>");
                }
            }
        }
    )
}
function getTestBean() {
    $.get("/api/test/python?id=1", function (data, status) {

    })
}
//计时器
function timer(intDiff) {
    window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;//时间默认值
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#day_show').html(day + "天");
        $('#hour_show').html('<s id="h"></s>' + hour + '时');
        $('#minute_show').html('<s></s>' + minute + '分');
        $('#second_show').html('<s></s>' + second + '秒');
        intDiff--;
    }, 1000);
}