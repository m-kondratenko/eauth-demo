function authenticate() {
    var login = $('#login').val();
    var password = $('#password').val();
    var data = {"login": login, "password": password};
    $.ajax({
        url: '/app_dev.php/auth',
        type: "POST",
        cache: false,
        data : data,
        success: function(data) {
            data = JSON.parse(data);
            console.log(data);
            $.ajax({
                url: '/app_dev.php/oauth/v2/token',
                type: "POST",
                cache: false,
                data : data,
                success: function(data) {

                    $('#access_token').html(data['access_token']);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('Error: ' +  errorThrown);
                }
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('Error: ' +  errorThrown);
        }
    });
    $('#auth').hide();
}

$(document).ready(function() {
    $("#auth").show()
});
