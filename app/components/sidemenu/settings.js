export var menu = [
    {
        module: 'home',
        title: ['Inicio', 'Home'],
        component: 'components/home',
        icon: 'home'
    },
    {
        module: 'dashboard',
        title: ['Tablero', 'Dashboard'],
        component: 'components/home',
        icon: 'chart-bar'
    },
    {
        module: 'layout',
        title: ['Plano', 'Layout'],
        component: 'components/layout',
        icon: 'map'
    },
    {
        module: 'settings',
        title: ['Configuracion', 'Settings'],
        icon: 'cog',
        submenu: [
            {
                title: ['Areas', 'Areas'],
                component: 'components/settings/areas',
            },
            {
                title: ['Usuarios', 'Users'],
                component: 'components/settings/users',
            }
        ]
    },
    {
        module: 'logs',
        title: ['Bitacora', 'Log'],
        component: 'components/logs',
        icon: 'th-list'
    }
]