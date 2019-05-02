$('.btn').on("click", function () {
    var input = $('#textInput').val();

    if (!input) {
        alert("Enter an input");
        return;
    }
    if ($.trim(input) === '') {
        alert("Input is not a text");
        return;
    }

    $('#tasks').append(input);
});
