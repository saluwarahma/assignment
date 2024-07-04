const log_user_details = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const phone_number = document.getElementById("phone_number").value;
    const date_of_birth = document.getElementById("date_of_birth");
    console.log(date_of_birth)
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const email = document.getElementById("email").value;
    let user_data = {};
    //   Username
    const username_elem = document.getElementById("username");
    const error_message_elem = document.getElementById("error_message");
    if (username) {
      if (username.length >= 3 && username.length <= 15) {
        username_elem.style.borderColor = "#888";
        error_message_elem.innerHTML = "";
  
        alert("Username is valid");
  
        user_data = {
          username,
        };
      } else {
        alert("Username is invalid!");
      }
    } else {
      // alert("Username is required!");
  
      username_elem.style.borderColor = "red";
      error_message_elem.innerHTML = "Username is required!";
      error_message_elem.style.color = "red";
    }
  };
  

  console.log(log_user_details)