const sidebar = [
    // Categories
    {
        title: "MAIN NAVIGATION",
        items: [
            {
                title: "Dashboard",
                path: '/dashboard',
                icon: 'ion ion-speedometer'
            },
            {
                title: "Challenges",
                path: '/challenges',
                icon: 'zmdi zmdi-star'
            },
            {
                title: "Instructor Convo",
                path: '/convos',
                icon: 'zmdi zmdi-comments'
            }
        ],
    },
    {
        title: "My courses",
        items: [
            {
                title: "MCAT",
                path: '',
                icon: 'zmdi zmdi-library',
                items: [
                    "Physics",
                    "Chemistry",
                    "Math",
                    "Behavior",
                    "Test"
                ]
            }
        ],
    },
    {
        title: "Other Features",
        items: [
            {
                title: "My Files",
                path: '/files',
                icon: 'zmdi zmdi-folder'
            },
            {
                title: "Inbox",
                path: '/inbox',
                icon: 'zmdi zmdi-email'
            },
            {
                title: "Reminders",
                path: '/reminders',
                icon: 'zmdi zmdi-alarm'
            },
            {
                title: "Settings",
                path: '/settings',
                icon: 'zmdi zmdi-settings'
            },
            {
                title: "Logout",
                path: '/login',
                icon: 'fa fa-power-off'
            }
        ]
    }
];

export default sidebar;