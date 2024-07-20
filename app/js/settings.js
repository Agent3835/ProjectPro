export var settings = {
    apiUrl :'http://localhost/app/api/',
    load : {
        components : [
            {
                parent: 'header',
                url: 'components/header'
            },
            {
                parent: 'sidemenu',
                url: 'components/sidemenu'
            },
            {
                parent: 'content',
                url: 'components/home'
            },
            {
                parent: 'footer',
                url: 'components/footer'
            }
        ]
    }
}