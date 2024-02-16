function validatePassword(password) {
  // Update the regular expression to enforce a minimum length of 5 characters
  var pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  return pattern.test(password);
}

$(document).ready(function () {
  $("#impressions .button-section input").click((e) => {
    e.preventDefault();
    const firstName = $("input[name=firstname]").val();
    if (!firstName) {
      alert("please fill first name");
      return;
    }

    const lastName = $("input[name=lastname]").val();
    if (!lastName) {
      alert("please fill last name");
      return;
    }
    const email = $("input[name=email]").val();
    if (!email) {
      alert("please enter your  email");
      return;
    }
    const phoneNumber = $("input[name=phoneNumber]").val();
    if (!phoneNumber) {
      alert("please enter your phone number");
      return;
    }

    //Pass validation DA SE PROVERI
    var password = $("#password").val();
    var isValid = validatePassword(password);

    if (!isValid) {
      $("#passwordError").text(
        "Password must have at least 5 characters and meet other criteria."
      );
    } else {
      // If valid, you can proceed with form submission or other actions
      $("#passwordError").text("");
      alert(
        "Password is valid! Proceed with form submission or other actions."
      );
    }

    alert("Thank you for your feedback");
  });

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 200,
      values: [0, 200],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

        $(".flex-card-wrap .item").each(function () {
          const price = $(".price .value", this);
          const priceValue = price.text();

          if (
            Number(priceValue) < ui.values[0] ||
            Number(priceValue) > ui.values[1]
          ) {
            $(this).parent(".card").hide();
          } else {
            $(this).parent(".card").show();
          }
        });
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  $(".addToCart").click(function (e) {
    e.stopPropagation();

    if ($(this).hasClass("added")) {
      const cart = $(".addtocartvalue")
        .text()
        .replace("(", "")
        .replace(")", "");
      const newCart = +cart - 1;
      $(".addtocartvalue").text(`(${newCart})`);
      $(this).removeClass("added");
      alert("Removed from cart");
    } else {
      const cart = $(".addtocartvalue")
        .text()
        .replace("(", "")
        .replace(")", "");
      const newCart = +cart + 1;
      $(".addtocartvalue").text(`(${newCart})`);
      $(this).addClass("added");
      alert("Added to cart");
    }
  });
});
