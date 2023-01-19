$(() => {
  $("#reqBody , #resBody , #plaintext").hide();
  $("#btn").attr("disabled", "true");
  $("#action").on({
    change: function () {
      // $("#response , #request , #statusContainer").hide();
      if ($(this).val() === "get") {
        $("#resBody , #plaintext").show();
        $("#btn").removeAttr("disabled");
      }
      if ($(this).val() === "post") {
        $("#reqBody , #resBody , #plaintext").show();
        $("#btn").removeAttr("disabled");
      }
      if ($(this).val() === "default") {
        $("#btn").attr("disabled", "true");
      }
    },
  });
  $("#btn").on({
    click: function () {
      if ($("#action").val() === "get") {
        $.ajax({
          url: $("#url").val(),
          type: "get",
          success: function (res, status, head) {
            $("#response-body").val(JSON.stringify(res.data));
            $("#plain-text").val(
              `${head
                .getResponseHeader("content-type")
                .substring(
                  0,
                  head.getResponseHeader("content-type").indexOf(";")
                )} Status: ${head.status}`
            );
          },
          error: function (err) {
            console.log(err);
            $("#response-body").val(err.statusText);
            $("#plain-text").val(
              `Response Type: ${err
                .getResponseHeader("content-type")
                .substring(
                  0,
                  err.getResponseHeader("content-type").indexOf(";")
                )}, Status: ${err.status}`
            );
          },
        });
        return;
      }

      if ($("#action").val() === "post") {
        $.ajax({
          url: $("#url").val(),
          type: "post",
          data: $("#request-body").val(),
          contentType: "application/json",
          success: function (res, status, head) {
            $("#response-body").val(JSON.stringify(res));
            $("#plain-text").val(
              `${head
                .getResponseHeader("content-type")
                .substring(
                  0,
                  head.getResponseHeader("content-type").indexOf(";")
                )}, Status: ${head.status}`
            );
          },
          error: function (err) {
            $("#response-body").val(err.statusText);
            $("#plain-text").val(
              `Response Type: ${err
                .getResponseHeader("content-type")
                .substring(
                  0,
                  err.getResponseHeader("content-type").indexOf(";")
                )}, Status: ${err.status}`
            );
          },
        });
      }
    },
  });
});
