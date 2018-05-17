/** Load the news upon the click on the buttons **/
    function loadJSON(btn) {
      $("input[type='button']").removeClass('selected');
      $("#button_" + btn).addClass('selected');
      var requestURL = "https://jsonplaceholder.typicode.com/posts/" + btn;
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == "200") {
          var text = request.response;
          var title = request.response.title;
          var content = "";
          for (var i = 0; i < 5; i++) {
            content = content + ' ' + request.response.body + '</br></br>';
          } /** Repeat five time the content **/
          $("#news_title").html(title);
          $("#news_content").html(content);
        }
      };
      request.send();
    };

  /** The first button is clicked at page landing **/
    $(document).ready(function () {
      $("#button_1").click();
    });

  /** Ccheck that the entered value is a valid email address**/
    var email = document.getElementById("email_address");

    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("You have entered an invalid email address!"); /** If invalid email address return this message **/
      } else {
        email.setCustomValidity("");
      }
    });

  /** On click submit the form is replaced by a message that confirm the successfully subscription**/
    $("#newsletter_sub").submit(function(e){
      e.preventDefault();
      if (!email.validity.typeMismatch) {
        $("#newsletter_sub").replaceWith("You have successfully subscribed to our newsletter");
      }
    });