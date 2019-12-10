$(document).ready(function () {
    console.log('hello');
    $.ajax({
        method: 'get',
        url: '/api',
    }).then(res => {
        console.log(res);
    })
})