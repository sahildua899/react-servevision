import SEO from './assets/services/Seo.png'
import Guest from './assets/services/guestpost.png';
import Outreach from './assets/services/Outreach.png';
import PPC from './assets/services/payperclick.png';
import SMM from './assets/services/SMM.png';
import Music from './assets/services/Musicpromotion.png';
import Website from './assets/services/webdevelopment.png';
import Video from './assets/services/videomarketing.png';
import Content from './assets/services/contentmarketing.png';




const SERVICE_DATA = [
    {
        title:'Service Row 1',
        services:[
            {
                id:'guestpost',
                heading: "Guest Post Service",
                image:Guest,
                paragraph: 'Our premium link building service provides natural, high-quality contextual links & help boost your page’s rankings & your overall domain authority.',
                link:'/service/guestpost'
            },
            {
                id:'outreach',
                heading: "Outreach Service",
                image:Outreach,
                paragraph: 'Our outreach process of strategically communicating & establishing relationships with industry influencers & publishers in order to achieve a particular objective, including: SEO & content marketing',
                link:'/service/outreach'
            },
            {
                id:'seo',
                heading: "SEO Services",
                image:SEO,
                paragraph: 'Improve Your Search Engine Rankings & Online Visibility. Our Goal to craft a customized SEO strategy tailored specifically for your business.',
                link:'/service/seo'
            }
        ]
    },
    {
        title:'Service Row 2',
        services:[
            {
                id:'ppc',
                heading: "PPC Services",
                image:PPC,
                paragraph: 'Serve Vision is a well-known authority in PPC internet marketing. Our PPC advertising company collaborates with a variety of industry players & marketing professionals to help them generate more leads, raise brand awareness, & achieve their objectives.',
                link:'/service/ppc'
            },
            {
                id:'smm',
                heading: "SMM Service",
                image:SMM,
                paragraph: 'In today’s internet-driven society, social media channels have emerged as a significant source of news & information. Social media presence is also an essential component of search engine rankings & digital marketing.',
                link:'/service/smm'
            },
            {
                id:'musicpromotion',
                heading: "Music Promotion",
                image:Music,
                paragraph: 'Expand your audience with our Music Promotion Support.We work across Facebook, YouTube & Instagram to deliver targeted advertising campaigns that engage targeted audiences',
                link:'/service/musicpromotion'
            }
        ]
    },
    {
        title:'Service Row 3',
        services: [
            {
                id:'website',
                heading: "Website Development",
                image:Website,
                paragraph: 'WordPress design agency having years of experience & able to create or redesign your website efficiently & get your site up & running as soon as possible. We will operate at maximum efficiency to get your website project live',
                link:'website'
            },
            {
                id:'videomarketing',
                heading: "Video Marketing",
                image:Video,
                paragraph: 'Engage your audience & attract new customers through the use of intelligent & appealing videos. Provide more information about your product & brand.',
                link:'/service/videomarketing'
            },
            {
                id:'contentmarketing',
                heading: "Content Marketing",
                image:Content,
                paragraph: 'Content marketing can help you generate more leads, close more sales, & expand your business. It can also help you increase the number of pages on your website that target particular keywords',
                link:'contentmarketing'
            }
        ]
    }
]


export default SERVICE_DATA;