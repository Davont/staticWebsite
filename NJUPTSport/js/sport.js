$(function () {
    console.log('start1');
    $.ajax({
      url: '/college/list',
      context: $('#academy'),
      success: function (msg) {
        console.log('success1');
        var jsonMsg = JSON.parse(msg);
        $.each(jsonMsg, function (index, element) {
          var list = "<li>" +
            "<span class=\"am-badge\">" + element.score + "</span>" +
            "<span class=\"rank\">" + (index + 1) + "</span>" +
            element.name +
            "</li>";
          $('#academy').append(list);
        })

      }
    })
    console.log('start2');
    $('#submit').click(function () {
      if (!$('#submitText').val()) {
        layer.msg('请填写内容哦！');
      } else if (!$('#submitId').val()) {
        layer.msg('请署名哦！');
      } else {
        $.post('/msg/add', {
          name: $('#submitId').val(),
          msg: $('#submitText').val()
        }, function () {
          layer.msg('提交成功！');
          $('#submitText').val('');
          $('#submitId').val('');
        })
      }
    })

  function updatedList() {
    console.log('start3')
    $.ajax({
      url: '/msg/list',
      type: 'get', //GET
      async: true,
      dataType: 'json', //返回的数据格式：json/xml/html/script/jsonp/text
      beforeSend: function (xhr) {
        console.log('发送前')
      },
      success: function (msg, textStatus, jqXHR) {
        console.log('success3')
        $.each(msg, function (index, element) {
          var list = "<li>" +
            "<article class=\"am-comment\">" +
            "<a href=\"#link-to-user-home\">" +
            "<img src=\"img/a1.jpg\" alt=\"\" class=\"am-comment-avatar\" width=\"48\" height=\"48\" />" +
            "</a>" +
            "<div class=\"am-comment-main\">" +
            "<header class=\"am-comment-hd\">" +
            "<div class=\"am-comment-meta\">" +
            "<a href=\"#link-to-user\" class=\"am-comment-author\">" + element.name + "</a>" +
            "  评论于  " +
            "<time>" + element.time + "</time>" +
            "</div>" +
            "</header>" +

            "<div class=\"am-comment-bd\">" +
            element.msg +
            "</div>"
          "</div>" +
          "</article>" +
          "</li>";
          $('#comments').append(list);

        })
      },
      error: function (xhr, textStatus) {
        console.log('错误')
        console.log(xhr)
        console.log(textStatus)
      }
    })
  }
  updatedList();
    console.log('start4');
    $.ajax({
      url: '/result/list',
      context: $('#academy'),
      success: function (msg) {
        console.log('success4');
        var jsonMsg = JSON.parse(msg);
        $.each(jsonMsg, function (index, element) {
          var project = "女子400米"
          var list = "<div data-am-widget=\"titlebar\" class=\"am-titlebar am-titlebar-default\">" +
            "<h2 class=\"am-titlebar-title \">" +
            element.gameName +
            "</h2>" +
            "</div>" +
            "<table class=\"am-table am-table-bordered am-table-radius am-table-striped\">" +
            "<thead>" +
            "<tr>" +
            "<th>名次</th>" +
            "<th>姓名</th>" +
            "<th>学院</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr>" +
            "<td>1</td>" +
            "<td>" + element.stuName1 + "</td>" +
            "<td>" + element.stuCollege1 + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>2</td>" +
            "<td>" + element.stuName2 + "</td>" +
            "<td>" + element.stuCollege2 + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>3</td>" +
            "<td>" + element.stuName3 + "</td>" +
            "<td>" + element.stuCollege3 + "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";
          $('#result').append(list);
        })
      }
    })
});