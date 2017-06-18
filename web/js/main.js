function authenticate() {
    var login = $('#login').val();
    var password = $('#password').val();
    if (login !== ' ' && login !== '' && password !== ' ' && password !== '') {
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
                        for (var key in data) {
                            $('#' + key).html(data[key]);
                        }
                        $('#auth').hide();
                        $('#after_auth').show();
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert('Неверный логин или пароль');
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('Что-то пошло не так. Текст ошибки: ' +  errorThrown);
            }
        });
    } else {
        alert('Введите логин и пароль');
    }
}

function showfirst() {
    var access_token = $('#access_token').html();
    var data = {"access_token" : access_token};
    console.log(data);
    $.ajax({
        url: '/app_dev.php/show',
        type: "POST",
        cache: false,
        data : data,
        success: function(data) {
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('Ваш токен истек');
        }
    });
}