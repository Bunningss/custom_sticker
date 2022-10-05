import mail from './assets/icons/mail.png';
import phone from './assets/icons/phone.png';

import dieCut from './assets/stickers/br-stc.png';
import transfer from './assets/stickers/tr-stc.png';
import kiss from './assets/stickers/kiss-stc.png';
import bumper from './assets/stickers/bum-stc.png';
import metal from './assets/stickers/metal.png';
import holo from './assets/stickers/holo-stc.png';
import roll from './assets/stickers/roll-stc.png';
import sheet from './assets/stickers/sheet-stc.png';
import lanyard from './assets/stickers/lanyard.png';

export const bestProducts = [
    {
        title: 'Transfer Sticker',
        img: transfer,
        startPrice: 0.22
    },
    {
        title: 'Die cut sticker',
        img: dieCut,
        startPrice: 0.08
    },
    {
        title: 'kiss cut sticker',
        img: kiss,
        startPrice: 0.08
    },
    {
        title: 'bumper sticker',
        img: bumper,
        startPrice: 0.36
    },
];
export const products = [
    {
        title: 'Transfer Sticker',
        img: transfer,
        startPrice: 0.22
    },
    {
        title: 'Metallic Sticker',
        img: metal,
        startPrice: 0.32
    },
    {
        title: 'Die cut sticker',
        img: dieCut,
        startPrice: 0.08
    },
    {
        title: 'roll labels',
        img: roll,
        startPrice: 0.07
    },
    {
        title: 'kiss cut sticker',
        img: kiss,
        startPrice: 0.08
    },
    {
        title: 'hologram sticker',
        img: holo,
        startPrice: 0.08
    },
    {
        title: 'bumper sticker',
        img: bumper,
        startPrice: 0.36
    },
    {
        title: 'sticker sheets',
        img: sheet,
        startPrice: 0.36
    },
];

export const customs = [
    {
        title: 'sticker',
        startPrice: 0.22,
        img: dieCut,
        steps: ['select sticker', ' Select Sticker Type', ' Select Sticker Size', ' Select Sticker Material Type', 'upload artwork']
    },
    {
        title: 'lanyard',
        startPrice: 0.22,
        img: lanyard,
        steps: ['select Printing Method', 'select Lanyard Size', 'select Lanyard Color', 'upload artwork', 'select attachment']
    },
];

export const navLinks = [
    {
        title: 'shop now',
        href: '/'
    },
    {
        title: 'my accout',
        href: '/login'
    },
    {
        title: 'about us',
        href: '/about'
    },
    {
        title: 'FAQs',
        href: '/faqs'
    },
    {
        title: 'contact us',
        href: '/contact'
    },
];

export const footerData = [
    {
        title: 'products',
        links: [
            {
                title: 'Circle',
                icon: '',
                href: ''
            },
            {
                title: 'square',
                icon: '',
                href: ''
            },
            {
                title: 'rectangle',
                icon: '',
                href: ''
            },
            {
                title: 'custom shape',
                icon: '',
                href: ''
            },
            {
                title: 'bumper stickers',
                icon: '',
                href: ''
            },
            {
                title: 'clear stickers',
                icon: '',
                href: ''
            },
            {
                title: 'static clings',
                icon: '',
                href: ''
            },
            {
                title: 'roll labels',
                icon: '',
                href: ''
            },
        ]
    },
    {
        title: 'products',
        links: [
            {
                title: 'transfer sticker',
                icon: '',
                href: ''
            },
            {
                title: 'die cut stickers',
                icon: '',
                href: ''
            },
            {
                title: 'kiss cut stickers',
                icon: '',
                href: ''
            },
            {
                title: 'rounded corner stickers',
                icon: '',
                href: ''
            },
            {
                title: 'sticker sheets',
                icon: '',
                href: ''
            },
            {
                title: 'hologram stickers',
                icon: '',
                href: ''
            },
            {
                title: 'front adhesive stickers',
                icon: '',
                href: ''
            },
            {
                title: 'metallic stickers',
                icon: '',
                href: ''
            },
        ]
    },
    {
        title: 'information',
        links: [
            {
                title: 'about us',
                icon: '',
                href: ''
            },
            {
                title: 'FAQs',
                icon: '',
                href: ''
            },
            {
                title: 'contact us',
                icon: '',
                href: ''
            },
            {
                title: 'privacy policy',
                icon: '',
                href: ''
            },
            {
                title: 'return policy',
                icon: '',
                href: ''
            },
            {
                title: 'terms and conditions',
                icon: '',
                href: ''
            },
            {
                title: 'shipping policy',
                icon: '',
                href: ''
            },
        ]
    },
    {
        title: 'contact info',
        links: [
            {
                title: '+90909329090',
                icon: phone,
                href: ''
            },
            {
                title: '+09090909090909',
                icon: phone,
                href: ''
            },
            {
                title: 'email@emailaddress.com',
                icon: mail,
                href: ''
            },
        ]
    },
];

export const faqs = [
    {
        ques: 'can i place my order online?',
        ans: 'Of course, you can. Following are the ways you can place your order: 1. Online 2. On the phone 3. On chat 4. Via email'
    },
    {
        ques: 'Is someone available to help me with my order?',
        ans: 'Of course! You can Live Chat with one of our employees or call Customer Service at (855) 856-4070 or phone us at (281) 533-8932 to obtain help with your order.'
    },
    {
        ques: 'I want a custom sticker, is your price the lowest of all?',
        ans: 'Our prices are always the lowest in the market for custom. We can assure you that there will be no company in the market that will be able to provide a lower price and faster turnaround than our company.'
    },
    {
        ques: 'What does production time mean?',
        ans: 'Production time refers to the period it takes to make your table cover order in our production facility. The time is based on business days, Monday through Friday, excluding holidays.'
    },
    {
        ques: 'What happens if there is a mistake with my order?',
        ans: 'If there is a production error we will redo the cover without any questions asked.'
    },
    {
        ques: 'Will I see a proof before my order goes into production?',
        ans: 'Yes! Unless it is an exact reorder, you always see an e-proof of your item which must be approved by you before we proceed!'
    },
    {
        ques: 'Do you keep my art on file?',
        ans: 'Yes! We keep your artwork on file to make reordering and using your art on other products simple and easy!'
    },
    {
        ques: 'Where do I send my artwork?',
        ans: "Simply upload it on our website and attach it to your order and we'll take it from there. You can also send it to sales@customstickersnow.com or e-mail directly to your Customer Care Representative."
    },
    {
        ques: 'What image file types can I upload?',
        ans: 'We highly recommend you send a vector-based file in EPS, AI or PDF format. If you have a raster-based image such as PSD, PNG or JPG, please send it in the actual size it will be imprinted on your table cover. We suggest you send the highest resolution file you have available. The highest resolution files work best.'
    },
    {
        ques: 'Is it OK to use copyrighted or licensed material for my sticker?',
        ans: 'We do not knowingly reproduce copyrighted material and will not accept liability for such infringement when reproducing orders. You are solely responsible for ensuring the artwork you submit does not infringe on property rights by obtaining proper permission for the reproduction of logos, trademarks and copyrighted material.'
    },
    {
        ques: 'Can I use multiple artwork designs for my sticker order?',
        ans: 'Only one design can be provided per transaction. If there is more than one piece of artwork, several orders must be placed.Only one design can be provided per transaction. If there is more than one piece of artwork, several orders must be placed.'
    },
];

export const images = [dieCut, dieCut, dieCut, dieCut, dieCut, dieCut];

export const custom = [
    {
        label: "Sticker Type",
        opts: [
            {
                name: 'Select Sticker Type',
                value: ''
            },
            {
                name: 'Random Cut',
                value: 'RC'
            },
            {
                name: 'Separate',
                value: 'S'
            },
        ]
    },
    {
        label: "Select Size",
        opts: [
            {
                name: "Select Sticker Size",
                value: ''
            },
            {
                name: "2 in x 2 in",
                value: '2x2'
            },
            {
                name: "3 in x 3 in",
                value: '3x3'
            },
            {
                name: "4 in x 4 in",
                value: '4x4'
            },
            {
                name: "5 in x 5 in",
                value: '5x5'
            },
        ]
    },
    {
        label: "Number of Imprint Colors",
        opts: [
            {
                name : "Full Color Imprint",
                value: 'FC'
            },
            {
                name : "1 Color",
                value: '1C'
            },
            {
                name : "2 Colors",
                value: '2C'
            },
            {
                name : "3 Colors",
                value: '3C'
            },
        ]
    },
    {
        label: "Artwork Type",
        opts: [
            {
                name: 'Upload Artwork',
                value: ''
            },
            {
                name: 'Help With Artwork',
                value: ''
            },
        ]
    },
];