var access_token = '';
function authenticate() {
    var login = $('#login').val();
    var password = $('#password').val();
    if (login !== ' ' && login !== '' && password !== ' ' && password !== '') {
        var data = {"login": login, "password": password};
        $.ajax({
            url: '/auth',
            type: "POST",
            cache: false,
            data : data,
            success: function(data) {
                data = JSON.parse(data);
                $.ajax({
                    url: '/oauth/v2/token',
                    type: "POST",
                    cache: false,
                    data : data,
                    success: function(data) {
                        for (var key in data) {
                            $('#' + key).html(data[key]);
                        }
                        window.access_token = data['access_token'];
                        $('#auth').hide();
                        $('#after_auth').show();
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert('Wrong login and password');
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('Something went wrong. Error: ' +  errorThrown);
            }
        });
    } else {
        alert('Insert login and password');
    }
}

function show(mode) {
    var data = {"access_token" : window.access_token};
    $.ajax({
        url: '/show',
        type: "POST",
        cache: false,
        data : data,
        success: function(data) {
            if (mode === 2) {
                console.log(mode);
                console.log(data);
                $('#show_second').html(data);
            } else {
                console.log(mode);
                console.log(data);
                $('#show_first').html(data);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('Your token expired');
        }
    });
}

function logout() {
    window.access_token = '';
    $('#access_token').html('');
    $('#refresh_token').html('');
    $('#auth').show();
    $('#after_auth').hide();
    $('#login').val('');
    $('#password').val('');
}