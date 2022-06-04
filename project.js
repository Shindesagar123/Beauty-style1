


var q = 0;
var w = 0;

function on_click() {
    var a = document.getElementById("txtnm").value;
    var b = document.getElementById("txtemailId").value;
    var c = document.getElementById("txtpass").value;
    var d = document.getElementById("txtconpass").value;
    var e = document.getElementById("txtcontactnm").value;


    if (a == "" || b == "" || c == "" || d == "" || e == "") {

        alert("fill all box")

    } else {
        q++;
    }


    /*......Password or Confarm Password......*/

    if (c == d) {

        q++;



    } else {

        alert("Password Dont Match")

    }




    /*..........Gmail.............*/


    if (document.getElementById("txtemailId").value == "") {

    } else {

        var Gmail = document.getElementById("txtemailId").value;
        var atpos = Gmail.lastIndexOf("@");
        var dotpos = Gmail.lastIndexOf(".");

        if (dotpos - atpos < 2) {

            alert("invalid email");

        } else {
            q++
        }


    }




    /*---------contact number box--------------*/
    if (e == "") {

    } else if (e.toString().length > 10 || e.toString().length < 10) {
        alert("enter valid number")

    } else {
        q++;

    }


    if (q == 4) {
        alert("thanks for registresion")
        q = 0;
    }
}

/*..............Contact Us.................*/
function contact_us() {

    var a1 = document.getElementById("txtmn").value;
    var b1 = document.getElementById("txtemail").value;
    var c1 = document.getElementById("txtmessage").value;

    if (a1 == "" || b1 == "" || c == "") {

        alert("Fill the all box")

    } else {
        w++;
    }


    if (document.getElementById("txtemail").value == "") {

    } else {

        var mail = document.getElementById("txtemail").value;
        var atpos = mail.lastIndexOf("@");
        var dotpos = mail.lastIndexOf(".")

        if (dotpos - atpos < 2) {

            alert("Invalid Mail")

        } else {
            w++;
        }


    }
    if (w == 2) {
        alert("thanks for sending your inormation.....")
        w = 0;
    }

}

/*Subscribe Our Newsletter*/

function Newsletter() {

    if (document.getElementById("email").value == "") {

        alert("fill the email")

    } else {
        var email = document.getElementById("email").value;

        var atpos = email.lastIndexOf("@");

        var dotpos = email.lastIndexOf(".");

        if (dotpos - atpos < 2) {

            alert("Invalid email")

        } else {

            alert("Login successfully")
            document.getElementById("email").reset;

        }

    }

}
