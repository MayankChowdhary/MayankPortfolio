import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Yogifi Smart YogaMat App',
        description: "This is an IOT android project works with Smart Yoga Mat. Smart Yoga mat is composed of BLE and Pressure sensors. Mobile app gets connected with Smart Yoga Mat and App shows Mat's Heat map visualizer,  yoga pose detection and correction steps. At the end of the Yoga session app shows users' fitness data in a different types of charts. Other features I worked on  like Google Play Subscription,  Zoho chatbot, Firebase Push notifications, Firebase Crashlytics etc. Simultaneously worked with its other apps like Yogifi Android TV app.  Yogifi Pro yoga teacher app, Excerr Flutter game app.",
        tools: ['BLE IOT', 'Pressure Sensors', 'Kotlin', 'Android TV', 'Google Play Subscription',  'Rx Android BLE', 'MP Android Charts', 'Zoho Chatbot' , 'ExoPlayer with video Caching', 'Jetpack Compose',  'Flutter', 'Flame Game'],
        demo: 'https://play.google.com/store/apps/details?id=com.yogifi.application&pcampaignid=web_share',
        role: 'IOT App Engineer',
    },

    {
        id: 2,
        name: 'Enguru Live English Learning App',
        description: "This is an android project integrated with Zoom sdk and Chat GPT API. Users can able to join zoom video conferences and attend classes, can able to chat with chat GPT on given scenarios and collect points and feedback from AI, can do different activities and lessons with audio input and drag and drop gestures. Here mainly worked on ChatGPT screens, complex and heterogenous list using Groupie adapter. Integrated Payment Gateways, Different Push Notifications, Firebase A/B Testing, Remote Config, Firebase Crashlytics.",
        tools: ['Android', 'Flutter', 'Java', 'Kotlin', 'Dart', 'Bloc', 'Zoom SDK', 'Payment Gateways', 'Firebase Services', 'Work Manager'],
        role: 'Mobile App Developer',
        demo: 'https://play.google.com/store/apps/details?id=com.kings.retailapp&hl=enIN&gl=US',
       
    },
    {
        id: 3,
        name: 'IField Indoor and Outdoor Positioning',
        description: 'In this Project I experienced Advanced Japanese Technology. Ifield Indoor and Outdoor positioning app is used to track the real time location and activity of the workers inside factories and construction site. Users can also create reports, send messages, see timeline, can do check-in, checkout etc. Worked with Google Map integration. Worked with BLE Beacon devices.',
        tools: ['Kotlin', 'MVVM', 'Dagger', 'Data binding', 'Koin DI', 'Retrofit', 'Leak Canary', 'Google Map Library', 'Geofence Service', 'Activity recognition Service'],
        role: 'Smartphone App Engineer',
        demo: 'https://play.google.com/store/apps/details?id=jp.co.multisoup.ifield.standard.release',
    },
    {
        id: 4,
        name: 'TYS HRMS Flutter App',
        description: 'This is Human Resource Management App for office employees. In this app employee can register their attendance by check-in check-out feature, can apply for leave and see their balance leave. Can see their attendance with present, absent, Late. in pie chart and Table view. Can apply for Regularization, Resignation, Reimbursement and ID-Card.',
        tools: ['Flutter' , 'Dart', 'Getx State management', 'PDF generator', 'PieChart', 'Location package', 'TableView', 'Push Notifications'],
        role: 'Mobile App Developer',
        demo: 'https://play.google.com/store/apps/details?id=com.tys.eattendanceapp',
    },
    {
        id: 5,
        name: 'Mobile POS Android App',
        description: "I was worked here as an Android intern. I worked on the project name Mobile POS. I developed a complete app from the scratch. Mobile Point of sale application is used by shops and supermarket to sale their goods. Shopkeeper can Add the new Stock, Sale the product, Seet the selling reports in TableView, Can do Credit Management , Inventory Management, Customer management, Sales Return, Cashier Login logout etc.",
        tools: ['Jetpack Navigation', 'MVVM Architecture', 'Live data', 'Sqlite database', 'TableView', 'View Pager','Java','Kotlin'],
        demo: 'https://github.com/MayankChowdhary/Mobile-POS',
        role: 'Android Intern',
    },
    {
        id: 6,
        name: 'Advanced Android Media Player',
        description: "This my personal project. I have developed this app alone. This is very powerful Android Media Player App. It can play Audio, Video and photo slideshow in a single screen. It can play videos in background. It also supports Audio tagging, Visualizers, Multiple Fonts, Album Art On the Fly, Equalizers, 3D Sound effects , Crossfade, Sleep Mode, Colorized Notifications.",
        tools: ['Media Player', 'Content Provider', 'JAudioTagger', 'Media Controller', 'Media Equalizer', 'View Pager','Java','Async Task','Glide'],
        demo: 'https://play.google.com/store/apps/details?id=com.McDevelopers.sonaplayer',
        role: 'Self Project',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },