import { useEffect } from "react";

import mail from "./assets/icons/mail.png";
import phone from "./assets/icons/phone.png";

import dieCut from "./assets/stickers/br-stc.png";
import transfer from "./assets/stickers/tr-stc.png";
import kiss from "./assets/stickers/kiss-stc.png";
import bumper from "./assets/stickers/bum-stc.png";
import metal from "./assets/stickers/metal.png";
import holo from "./assets/stickers/holo-stc.png";
import roll from "./assets/stickers/roll-stc.png";
import sheet from "./assets/stickers/sheet-stc.png";
import lanyard from "./assets/stickers/lanyard.png";

// Universal Functions
export const Scroller = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
};

export const bestProducts = [
  {
    title: "Transfer Sticker",
    img: transfer,
    startPrice: 0.22,
  },
  {
    title: "Die cut sticker",
    img: dieCut,
    startPrice: 0.08,
  },
  {
    title: "kiss cut sticker",
    img: kiss,
    startPrice: 0.08,
  },
  {
    title: "bumper sticker",
    img: bumper,
    startPrice: 0.36,
  },
];
export const products = [
  {
    title: "Transfer Sticker",
    img: transfer,
    startPrice: 0.22,
  },
  {
    title: "Metallic Sticker",
    img: metal,
    startPrice: 0.32,
  },
  {
    title: "Die cut sticker",
    img: dieCut,
    startPrice: 0.08,
  },
  {
    title: "roll labels",
    img: roll,
    startPrice: 0.07,
  },
  {
    title: "kiss cut sticker",
    img: kiss,
    startPrice: 0.08,
  },
  {
    title: "hologram sticker",
    img: holo,
    startPrice: 0.08,
  },
  {
    title: "bumper sticker",
    img: bumper,
    startPrice: 0.36,
  },
  {
    title: "sticker sheets",
    img: sheet,
    startPrice: 0.36,
  },
];

export const customs = [
  {
    title: "sticker",
    startPrice: 0.22,
    img: dieCut,
    steps: [
      "select sticker",
      " Select Sticker Type",
      " Select Sticker Size",
      " Select Sticker Material Type",
      "upload artwork",
    ],
  },
  {
    title: "---",
    startPrice: "***",
    img: "",
    // steps: [
    //   "select Printing Method",
    //   "select Lanyard Size",
    //   "select Lanyard Color",
    //   "upload artwork",
    //   "select attachment",
    // ],
  },
];

export const navLinks = [
  {
    title: "shop now",
    href: "/",
  },
  {
    title: "my accout",
    href: "/login",
  },
  {
    title: "about us",
    href: "/about",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "contact us",
    href: "/contact",
  },
];

export const footerData = [
  {
    title: "products",
    links: [
      {
        title: "Circle",
        icon: "",
        href: "",
      },
      {
        title: "square",
        icon: "",
        href: "",
      },
      {
        title: "rectangle",
        icon: "",
        href: "",
      },
      {
        title: "custom shape",
        icon: "",
        href: "",
      },
      {
        title: "bumper stickers",
        icon: "",
        href: "",
      },
      {
        title: "clear stickers",
        icon: "",
        href: "",
      },
      {
        title: "static clings",
        icon: "",
        href: "",
      },
      {
        title: "roll labels",
        icon: "",
        href: "",
      },
    ],
  },
  {
    title: "products",
    links: [
      {
        title: "transfer sticker",
        icon: "",
        href: "",
      },
      {
        title: "die cut stickers",
        icon: "",
        href: "",
      },
      {
        title: "kiss cut stickers",
        icon: "",
        href: "",
      },
      {
        title: "rounded corner stickers",
        icon: "",
        href: "",
      },
      {
        title: "sticker sheets",
        icon: "",
        href: "",
      },
      {
        title: "hologram stickers",
        icon: "",
        href: "",
      },
      {
        title: "front adhesive stickers",
        icon: "",
        href: "",
      },
      {
        title: "metallic stickers",
        icon: "",
        href: "",
      },
    ],
  },
  {
    title: "information",
    links: [
      {
        title: "about us",
        icon: "",
        href: "",
      },
      {
        title: "FAQs",
        icon: "",
        href: "",
      },
      {
        title: "contact us",
        icon: "",
        href: "",
      },
      {
        title: "privacy policy",
        icon: "",
        href: "",
      },
      {
        title: "return policy",
        icon: "",
        href: "",
      },
      {
        title: "terms and conditions",
        icon: "",
        href: "",
      },
      {
        title: "shipping policy",
        icon: "",
        href: "",
      },
    ],
  },
  {
    title: "contact info",
    links: [
      {
        title: "+90909329090",
        icon: phone,
        href: "",
      },
      {
        title: "+09090909090909",
        icon: phone,
        href: "",
      },
      {
        title: "email@emailaddress.com",
        icon: mail,
        href: "",
      },
    ],
  },
];

export const faqs = [
  {
    ques: "can i place my order online?",
    ans: "Of course, you can. Following are the ways you can place your order: 1. Online 2. On the phone 3. On chat 4. Via email",
  },
  {
    ques: "Is someone available to help me with my order?",
    ans: "Of course! You can Live Chat with one of our employees or call Customer Service at (855) 856-4070 or phone us at (281) 533-8932 to obtain help with your order.",
  },
  {
    ques: "I want a custom sticker, is your price the lowest of all?",
    ans: "Our prices are always the lowest in the market for custom. We can assure you that there will be no company in the market that will be able to provide a lower price and faster turnaround than our company.",
  },
  {
    ques: "What does production time mean?",
    ans: "Production time refers to the period it takes to make your table cover order in our production facility. The time is based on business days, Monday through Friday, excluding holidays.",
  },
  {
    ques: "What happens if there is a mistake with my order?",
    ans: "If there is a production error we will redo the cover without any questions asked.",
  },
  {
    ques: "Will I see a proof before my order goes into production?",
    ans: "Yes! Unless it is an exact reorder, you always see an e-proof of your item which must be approved by you before we proceed!",
  },
  {
    ques: "Do you keep my art on file?",
    ans: "Yes! We keep your artwork on file to make reordering and using your art on other products simple and easy!",
  },
  {
    ques: "Where do I send my artwork?",
    ans: "Simply upload it on our website and attach it to your order and we'll take it from there. You can also send it to sales@customstickersnow.com or e-mail directly to your Customer Care Representative.",
  },
  {
    ques: "What image file types can I upload?",
    ans: "We highly recommend you send a vector-based file in EPS, AI or PDF format. If you have a raster-based image such as PSD, PNG or JPG, please send it in the actual size it will be imprinted on your table cover. We suggest you send the highest resolution file you have available. The highest resolution files work best.",
  },
  {
    ques: "Is it OK to use copyrighted or licensed material for my sticker?",
    ans: "We do not knowingly reproduce copyrighted material and will not accept liability for such infringement when reproducing orders. You are solely responsible for ensuring the artwork you submit does not infringe on property rights by obtaining proper permission for the reproduction of logos, trademarks and copyrighted material.",
  },
  {
    ques: "Can I use multiple artwork designs for my sticker order?",
    ans: "Only one design can be provided per transaction. If there is more than one piece of artwork, several orders must be placed.Only one design can be provided per transaction. If there is more than one piece of artwork, several orders must be placed.",
  },
];

export const images = [dieCut, dieCut, dieCut, dieCut, dieCut, dieCut];

export const custom = [
  {
    label: "Sticker Type",
    tooltip: "Please Select a Sticker Type.",
    value: "StickerType",
    opts: [
      {
        name: "Select Sticker Type",
        value: "",
      },
      {
        name: "Random Cut",
        value: "Random Cut",
      },
      {
        name: "Separate",
        value: "Separate",
      },
    ],
  },
  {
    label: "Select Size",
    tooltip: "Please Select a Sticker Size.",
    value: "StickerSize",
    opts: [
      {
        name: "Select Sticker Size",
        value: "",
      },
      {
        name: "2 in x 2 in",
        value: "2inx2in",
      },
      {
        name: "3 in x 3 in",
        value: "3inx3in",
      },
      {
        name: "4 in x 4 in",
        value: "4inx4in",
      },
      {
        name: "5 in x 5 in",
        value: "5inx5in",
      },
    ],
  },
  {
    label: "Number of Imprint Colors",
    tooltip: "Please Select Imrpint Color",
    value: "ImprintColors",
    opts: [
      {
        name: "Select Imprint Colors",
        value: "",
      },
      {
        name: "Full Color Imprint",
        value: "Full Color Imprint",
      },
      {
        name: "1 Color",
        value: "1 Color",
      },
      {
        name: "2 Colors",
        value: "2 Color",
      },
      {
        name: "3 Colors",
        value: "3 Color",
      },
    ],
  },
  {
    label: "Artwork Type",
    tooltip: "Please Select Artwork Type",
    value: "ArtworkType",
    opts: [
      {
        name: "Select Artwork Type",
        value: "",
      },
      {
        name: "Upload Artwork",
        value: "Upload Artwork",
      },
      {
        name: "Help With Artwork",
        value: "Help With Artwork",
      },
    ],
  },
];

// Sticker Customization
export const sSticker = [
  {
    name: "circle",
    selection: "sticker",
    img: "https://static.customstickersnow.com/fit-in/324x324/product_20210716-cdbcb900-e680-11eb-8b08-d7f6203b752f.png.webp",
  },
  {
    name: "square",
    selection: "sticker",
    img: "https://static.customstickersnow.com/fit-in/324x324/product_20210719-53086de0-e8a7-11eb-bf9f-89283f841ab9.png.webp",
  },
  {
    name: "rectangle",
    selection: "sticker",
    img: "https://static.customstickersnow.com/fit-in/324x324/product_20210716-dec72280-e680-11eb-9a6d-871146373871.png.webp",
  },
  {
    name: "custom",
    selection: "sticker",
    img: "https://static.customstickersnow.com/fit-in/324x324/product_20210716-bf9c6c90-e680-11eb-a6b7-6b9838e68602.png.webp",
  },
];

export const circleSize = [
  {
    name: "2in x 2in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210714-5c58f1f0-e529-11eb-89ef-07d7b2a53f6f.png.webp",
  },
  {
    name: "3in x 3in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210714-5c9be930-e529-11eb-9664-ed4f5757285a.png.webp",
  },
  {
    name: "4in x 4in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210714-5ceb6b50-e529-11eb-82a4-f9ddb6f8ab32.png.webp",
  },
  {
    name: "5in x 5in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210714-5d483960-e529-11eb-a798-d192f90c22ab.png.webp",
  },
];

export const squareSize = [
  {
    name: "2in x 2in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-723d6d80-ce01-11eb-bad8-535cbed53925.png.webp",
  },
  {
    name: "3in x 3in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-72b4fae0-ce01-11eb-9c31-33b4edf7861e.png.webp",
  },
  {
    name: "4in x 4in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-72fe11d0-ce01-11eb-9171-39604c6323cf.png.webp",
  },
  {
    name: "5in x 5in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210708-a54ec140-dfa9-11eb-bb09-bfdb2ee406be.png.webp",
  },
];

export const rectangleSize = [
  {
    name: "2in x 1in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-835b6fd0-e529-11eb-83f6-63027b3d78e7.png.webp",
  },
  {
    name: "3in x 2in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-840e9be0-e529-11eb-8171-0daef062807e.png.webp",
  },
  {
    name: "4in x 2in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-844f8ea0-e529-11eb-8444-87c6c03a19fc.png.webp",
  },
  {
    name: "5in x 3in",
    selection: "size",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-84786c40-e529-11eb-ae9b-1d02b369594d.png.webp",
  },
];

export const customSize = [
  {
    selection: "size",
    name: "",
    img: "https://static.customstickersnow.com/fit-in/324x324/product_20210716-bf9c6c90-e680-11eb-a6b7-6b9838e68602.png.webp",
  },
];

export const sType = [
  {
    selection: "type",
    name: "Die cut",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-3aadd710-e52f-11eb-a7c7-17d4a134f28b.png.webp",
  },
  {
    selection: "type",
    name: "Kiss cut",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210716-276b2b80-e5fa-11eb-9bd3-45aa931d2826.png.webp",
  },
  {
    selection: "type",
    name: "roll",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-3b4789f0-e52f-11eb-930d-6d58947c0bb3.png.webp",
  },
  {
    selection: "type",
    name: "Sheet",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210716-27a94800-e5fa-11eb-8b14-a745eb575cc2.png.webp",
  },
];

export const sMaterial = [
  {
    selection: "material",
    name: "Vinyl",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8a99a670-ce02-11eb-85ab-3d1003e7ae49.png.webp",
  },
  {
    selection: "material",
    name: "metallic silver paper",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8bdb3ac0-ce02-11eb-9dd2-0382e2e56ff0.png.webp",
  },
  {
    selection: "material",
    name: "metallic gold paper",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8c4d9a80-ce02-11eb-af9d-1567c057077f.png.webp",
  },
  {
    selection: "material",
    name: "eproxy",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8b6595c0-ce02-11eb-9f11-f11b094743e1.png.webp",
  },
  {
    selection: "material",
    name: "kraft paper",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8cef54a0-ce02-11eb-ba6e-a53dee513814.png.webp",
  },
  {
    selection: "material",
    name: "coated art paper",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8d5f5db0-ce02-11eb-a23e-278caed2350c.png.webp",
  },
  {
    selection: "material",
    name: "crepe paper",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210615-8ddf4a80-ce02-11eb-ae56-2d61a79b4715.png.webp",
  },
  {
    selection: "material",
    name: "PVC",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-85899390-e535-11eb-8bd4-ffc9faa8453b.png.webp",
  },
  {
    selection: "material",
    name: "clear sticker",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-85f9a420-e535-11eb-be1b-532aa5d9f4f0.png.webp",
  },
  {
    selection: "material",
    name: "transfer sticker",
    img: "https://static.customstickersnow.com/fit-in/400x400/option_20210715-6c24d8e0-e535-11eb-be39-156d0a660590.png.webp",
  },
];
