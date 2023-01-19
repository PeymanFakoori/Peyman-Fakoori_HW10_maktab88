let users = [];
$.ajax({
  url: "https://reqres.in/api/users?page=1",
  async: false,
  success: function (page1) {
    $.each(page1.data, function (key, val) {
      users.push(val);
    });
  },
});
$.ajax({
  url: "https://reqres.in/api/users?page=2",
  async: false,
  success: function (page2) {
    $.each(page2.data, function (key, val) {
      users.push(val);
    });
  },
});
