(function() {

  'use strict';

  var login = (function() {
    return {
      init: function init() {
        this.initEvents();
      },

      initEvents: function initEvents() {
        var frm = document.getElementById("frmLogin");
        frm.addEventListener('submit', login.handleSubmit, false);
      },

      handleSubmit: function handleSubmit(event) {
        event.preventDefault();

        var user = document.getElementById("username");
        var pwd = document.getElementById("pwd");

        console.log(user.value);
        console.log(pwd.value);

        var formData = new FormData();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8080/login', true);

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
              var dados = JSON.parse(this.responseText);
                console.log(dados);
            }
        }

        xhr.send(formData);

        //window.location.replace('./index.html');
      }
    }
  })();

  login.init();

})();
