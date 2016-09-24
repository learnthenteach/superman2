/*
var someVariable = "hello Yuehan";
alert(someVariable);



var user = {
  'name': 'John Cena',
  'health': 123456789.789,
  'invisible': false,
};

alert(JSON.stringify(user));

*/

$(document).ready(function() {
      $('form').submit(function(event) {

        var form = $(this);
        var formData = form.serializeArray();

        formData.forEach(function(data) {
          if (data.name == 'username') {
            if (data.value.length < 3) {
              alert('Username is too short');
            }
          }
        });

        var settings = {
          'method' : form.attr('method'),
          'url' : form.attr('action'),
          'data' : form.serialize(),
      };
              
        $.ajax(settings).done(function(msg) {
        alert(msg);
                              
          });
        });
      });
  