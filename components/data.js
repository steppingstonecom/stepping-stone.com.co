const DATA = {
    INFO : {
        app_name:'Stepping Stone',
    },
    CONTACT: {
        email: 'contact@stepping-stone.com.co',
        phone: '+1 (778) 223-7341',
        address: 'Usa',
        city: '',
        country: '',
        schedule: 'Mon - Sat 9.00 - 18.00'
    },
    SOCIAL: {
        instagram: '/',
        facebook: '/',
    }
}


$(document).ready(function () {

    // info
    $('span[data-app-name]').text(DATA.INFO.app_name);



    $('span[data-email]').text(DATA.CONTACT.email);
    $('span[data-phone]').text(DATA.CONTACT.phone);
    $('span[data-address]').text(DATA.CONTACT.address);
    $('span[data-city]').text(DATA.CONTACT.city);
    $('span[data-country]').text(DATA.CONTACT.country);
    $('span[data-schedule]').text(DATA.CONTACT.schedule);
    $('span[data-year]').text(new Date().getFullYear());



    // social
    $('a[data-instagram]').attr('href', DATA.SOCIAL.instagram);
    $('a[data-facebook]').attr('href', DATA.SOCIAL.facebook);

})