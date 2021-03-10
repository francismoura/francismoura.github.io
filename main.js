(function() {

    const btn_to_top = document.getElementById("return-to-top");
    // When the user clicks on the button, scroll to the top of the document
    btn_to_top.addEventListener("click", function(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // When the user scrolls down 20px from the top of the document, show the button
    document.addEventListener("scroll", function() {
        if (document.body.scrollTop > 335 || document.documentElement.scrollTop > 335) {
            btn_to_top.style.display = "block";
        } else {
            btn_to_top.style.display = "none";
        }
    });

})(document);