// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    autorun : true, 
    delay : 0,
    current_lang : 'en',
    auto_language : false,
    autoclear_cookies : true,
    cookie_expiration : 365,
    theme_css: 'https://cdn.jsdelivr.net/gh/haqem/haqemdotcom@latest/cookieconsent/dist/theme.css',
    force_consent: true,

    page_scripts: true,                         // default: false (by default don't manage existing script tags)

    /* Basic gui options */
    gui_options : {
        consent_modal : {
            layout : 'cloud',               // box(default),cloud,bar
            position : 'bottom center',     // bottom(default),top + left,right,center:=> examples: 'bottom' or 'top right'
            transition : 'slide'            // zoom(default),slide
        },
        settings_modal : {
            layout : 'box',                 // box(default),bar
            // position: 'left',            // right(default),left (available only if bar layout selected)
            transition : 'slide'            // zoom(default),slide
        }
    },

    /* End new options added in v2.4 */

    onAccept: function(cookie){
        
        console.log("onAccept fired ...");
        disableBtn('btn2');
        disableBtn('btn3');
        
        if(cc.allowedCategory('analytics_cookies')){
            cc.loadScript('https://www.google-analytics.com/analytics.js', function(){		
                ga('create', 'UA-89255113-3', 'auto');  //replace UA-XXXXXXXX-Y with your tracking code
                ga('send', 'pageview');
            });
        }
    },

    onChange: function(cookie){
        console.log("onChange fired ...");
        // do something ...
        
        // Delete line below
        document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);
    },

    languages : {
        'en' : {	
            consent_modal : {
                title :  "🍪 It's time for some nice cookies",
                description :  'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="https://haqem.com/privacy-policy" target="_blank" class="cc-link">Privacy policy</a>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Manage preferences',
                    role : 'settings'       //'settings' or 'accept_necessary'
                }
            },
            settings_modal : {
                title : '<div>Cookie preferences</div><div aria-hidden="true" style="font-size: .8em; font-weight: 200; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://haqem.com/" style="text-decoration: underline;">'+getBranding()+'</a></div>',
                save_settings_btn : "Save current selection",
                accept_all_btn : "Accept all",
                close_btn_label: "Close",
                cookie_table_headers : [
                    {col1: "Cookie" }, 
                    {col2: "Domain" }, 
                    {col3: "Expiration" },
                    {col4: "Description" }
                ],
                blocks : [
                    {
                        title : "Cookie usage",
                        description: 'Our website use cookies to ensure the basic functionalities of the website and to understand how you interact with it. You can choose for each category to opt-in/out whenever you want. Click on the different category headings to find out more. Learn more about who we are, how you can contact us and how we process personal data in our <a href="#" class="cc-link">Privacy Policy</a>.'
                    },{
                        title : "Strictly necessary cookies",
                        description: 'These cookies are essential for the proper functioning of our website. Without these cookies, the website would not work properly.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [
                            {
                                col1: 'sc_is_visitor_unique',
                                col2: '.haqem.com',
                                col3: '2 years',
                                col4: 'This cookie is used to store a random ID to avoid counting a visitor more than once.'
                            },
                            {
                                col1: '_ga',
                                col2: '.haqem.com',
                                col3: '2 years',
                                col4: 'This cookie is installed by Google Analytics. The cookie is used to calculate visitor, session, campaign data and keep track of site usage for the site&apos;s analytics report. The cookies store information anonymously and assign a randomly generated number to identify unique visitors.'
                            },
                            {
                                col1: '_gid',
                                col2: '.haqem.com',
                                col3: '1 day',
                                col4: 'This cookie is installed by Google Analytics. The cookie is used to store information of how visitors use a website and helps in creating an analytics report of how the website is doing. The data collected including the number visitors, the source where they have come from, and the pages visted in an anonymous form.'
                            },
                            {
                                col1: 'is_unique',
                                col2: '.statcounter.com',
                                col3: '5 years',
                                col4: 'This cookie is set by StatCounter Anaytics. The cookie is used to determine whether a user is a first-time or a returning visitor and to estimate the accumulated unique visits per site.'
                            },
                            {
                                col1: 'is_visitor_unique',
                                col2: '.statcounter.com',
                                col3: '2 years',
                                col4: 'This cookie is set by StatCounter Anaytics. The cookie is used to determine whether a user is a first-time or a returning visitor.',
                                // path: '/demo'       // needed for autoclear cookies 
                            }
                        ]
                    },{
                        title : "Analytics & Performance cookies",
                        description: 'Analytics & performance cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
                        toggle : {
                            value : 'analytics',
                            enabled : true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_hjid',
                                col2: '.haqem.com',
                                col3: '1 year',
                                col4: 'This cookie is set by Hotjar. This cookie is set when the customer first lands on a page with the Hotjar script. It is used to persist the random user ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID.'
                            },
                            {
                                col1: '_hjFirstSeen',
                                col2: '.haqem.com',
                                col3: '30 minutes',
                                col4: 'This is set by Hotjar to identify a new user\'s first session. It stores a true/false value, indicating whether this was the first time Hotjar saw this user. It is used by Recording filters to identify new user sessions.'
                            }
                        ]
                    },{
                        title : "Targeting & Advertising cookies",
                        description: 'Targeting & advertising cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                        toggle : {
                            value : 'targeting',
                            enabled : true,
                            readonly: false,
                            reload: 'on_disable'            // New option in v2.4, check readme.md
                        },
                        cookie_table: [
                            {
                                col1: 'MUID',
                                col2: '.clarity.ms',
                                col3: '1 year',
                                col4: 'Used by Microsoft as a unique identifier. The cookie is set by embedded Microsoft scripts. The purpose of this cookie is to synchronize the ID across many different Microsoft domains to enable user tracking.',
                                is_regex: true
                            },
                            {
                                col1: 'ANONCHK',
                                col2: '.c.clarity.ms',
                                col3: '10 minutes',
                                col4: 'This cookie is used for storing the session ID for a user. This cookie ensures that clicks from advertisement on the Bing search engine are verified and it is used for reporting purposes and for personalization.',
                                is_regex: true
                            }
                        ]
                    },{
                        title : "More information",
                        description: 'For any queries in relation to policy on cookies and your choices, please <a class="cc-link" href="https://haqem.com/contact/">Contact us</a>.',
                    }
                ]
            }
        }
    }
});

function getBranding(){
    return 'Haqem Network.';
}