import user from '../assets/2.jpg';
import mac from '../assets/mac.jpg';
import windows from '../assets/windows.jpg';
import android from '../assets/android.jpg';
import iphone from '../assets/iphone.jpg';

export const studentProfile = {
    diagnosticScore: [
        {name: 'Logical Reasoning', value: 27},
        {name: 'Logical Reasoning', value: 49},
        {name: 'Logical Reasoning', value: 30},
        {name: 'Logical Reasoning', value: 40},
        {name: 'Logical Reasoning', value: 27},
        {name: 'Logical Reasoning', value: 45},
        {name: 'Logical Reasoning', value: 35},
        {name: 'Logical Reasoning', value: 30},
        {name: 'Logical Reasoning', value: 40},
        {name: 'Logical Reasoning', value: 27},
    ],
    logInfo: [
        {
            img: windows,
            device: 'PC',
            country: 'Toronto, ON - CA',
            browser: 'Chrome',
            active: 'Jan 19 at 16:35',
            ip: '192.167.122.334',
            count: '1'
        },
        {
            img: iphone,
            device: 'Iphone 7s',
            country: 'Toronto, ON - CA',
            browser: 'Safari',
            active: 'Jan 19 at 16:35',
            ip: '192.167.122.334',
            count: '3'
        },
        {
            img: mac,
            device: 'Mac',
            country: 'Toronto, ON - CA',
            browser: 'Safari',
            active: 'Jan 19 at 18:35',
            ip: '192.167.122.334',
            count: '3'
        },
        {
            img: windows,
            device: 'PC',
            country: 'Toronto, ON - CA',
            browser: 'Chrome',
            active: 'Jan 20 at 16:35',
            ip: '192.167.122.334',
            count: '1'
        },
        {
            img: android,
            device: 'Samsung',
            country: 'Toronto, ON - CA',
            browser: 'Firefox',
            active: 'Jan 21 at 16:35',
            ip: '192.167.122.334',
            count: '1'
        },
        {
            img: iphone,
            device: 'Iphone',
            country: 'Toronto, ON - CA',
            browser: 'Facebook App',
            active: 'Jan 21 at 14:35',
            ip: '192.167.122.334',
            count: '3'
        },
        {
            img: iphone,
            device: 'Iphone 7s',
            country: 'Toronto, ON - CA',
            browser: 'Facebook App',
            active: 'Jan 22 at 16:35',
            ip: '192.167.122.334',
            count: '3'
        },
        {
            img: mac,
            device: 'Mac',
            country: 'Toronto, ON - CA',
            browser: 'Safari',
            active: 'Active Now',
            ip: '192.167.122.334',
            count: '3'
        }
    ],
    markers: [
        {
            title: 'Bondi',
            latitude: -33.890542,
            longitude: 151.274856
        },
        {
            title: 'Coogee',
            latitude: -33.923036,
            longitude: 151.259052
        },
        {
            title: 'Cronulla',
            latitude: -34.028249,
            longitude: 151.157507
        }
    ],
    foundations: [
        {name: 'Official Test Taken', value: 'University of Torronto' },
        {name: 'Official Test Score', value: 510},
        {name: 'Official Test Date', value: '12 Feb 2017'},
        {name: 'LR', value: '22'},
        {name: 'LR', value: '29'},
        {name: 'RC', value: '22'},
        {name: 'AR', value: '14'},
        {name: 'Total Score', value: '160'}
    ],
    circumstances: [
        {
            title: 'Circumstances',
            items: [
                {name: 'Institution', value: 'University of Torronto'},
                {name: 'Highest Level Of Education', value: 'University'},
                {name: 'Degree', value: 'B.Sc'},
                {name: 'Year of Study', value: '2018'},
                {name: 'Expected Completion Date', value: 'N/A'},
                {name: 'Age', value: '23'},
                {name: 'Gender', value: 'Male'},
                {name: 'Children', value: '2'},
                {name: 'Martial Status', value: 'Single'},
                {name: 'Disability', value: 'None'},
                {name: 'Employment Status', value: 'Unemployed'},
                {name: 'Hours of work per week', value: '20'},
                {name: 'Years out of school', value: '20'},
                {name: 'GPA', value: '3.5'},
                {name: 'University Majors', value: 'Physics'},
            ]
        }
    ],
    studentInfo: {
        photo: user,
        name: 'Sohaib Ahmed',
        phone_number: '+1-647-899-0337',
        email: 'sohaib@gmail.com',
        street: '300 Torronto Street',
        city: 'Torronto',
        province: 'Ontario',
        country: 'Canada',
        code: 74700
    },
    accordionStatistic: [
        {
            title: 'Deadlines Missed',
            items: [
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
            ],
            font_image: 'time-interval',
            link: 'collapseOne'
        },
        {
            title: 'Merits Earned',
            items: [
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
            ],
            font_image: 'star',
            link: 'collapseTwo'
        },
        {
            title: 'Global Rank',
            items: [
                {name: '', value: 14}
            ],
            font_image: 'badge-check',
            link: 'collapseThree'
        },
        {
            title: 'Warnings Given',
            items: [
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
                {name: 'MCAT', value: 3},
            ],
            font_image: 'alert-triangle',
            link: 'collapseFour'
        }
    ],
    markersMap: [
        {
            title: 'Bondi',
            latitude: -33.890542,
            longitude: 151.274856
        },
        {
            title: 'Coogee',
            latitude: -33.923036,
            longitude: 151.259052
        },
        {
            title: 'Cronulla',
            latitude: -34.028249,
            longitude: 151.157507
        }
    ]
};




