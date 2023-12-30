import React, { useState } from 'react';
import Cardcomp from './Cardcomp';
import Bhavatgeeta from "../assets/bahavatgeeta.jpg"
import multiverse from "../assets/multiverse.jpg"
import bible from "../assets/bible.jpg"
import quran from "../assets/quran.jpg"
import  wickipedia from "../assets/wickipedia.jpg"
import dopomine from "../assets/dopomine.jpg"
import phone1 from "../assets/phone1.jpg"
import phone2 from "../assets/phone2.jpg"
import phone3 from "../assets/phone3.jpg"
import phone4 from "../assets/phone4.jpg"
import air1 from "../assets/air1.jpg"
import air2 from "../assets/air2.jpg"
import air3 from "../assets/air3.jpg"
import air4 from "../assets/air4.jpg"
import watch1 from "../assets/watch1.jpg"
import watch2 from "../assets/watch2.jpg"
import coll1 from "../assets/coll1.jpg"
import Gps from "../assets/Gps.jpeg"
import Shoe1 from "../assets/shoe1.jpg"
import Shoe2 from "../assets/shoe2.jpg"
import Shoe3 from "../assets/shoe3.jpg"
import Shoe4 from "../assets/shoe4.jpg"
import che1  from "../assets/che1.jpg"
import che2  from "../assets/che2.jpg"
import che3  from "../assets/che3.jpg"
import che4  from "../assets/che4.jpg"
import shirt1 from "../assets/shirt1.jpg"
import shirt2 from "../assets/shirt2.jpg"
import shirt3 from "../assets/shirt3.jpg"
import shirt4 from "../assets/shirt4.jpg"
import for1 from "../assets/for1.jpg"
import for2 from "../assets/for2.jpg"
import for3 from "../assets/for3.jpg"
import for4 from "../assets/for4.jpg"

import "./Card.css"
import Design from '../description/Design';




const Card = () => {

    

    const data=[
        {  
            id:1,
            image:phone1,
            Card:"Apple iPhone 15 Pro Max",
            description:"Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
            price:"1,56900",
            About:"POWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max"
        },
        {
            id:2,
            image:phone2,
            Card:"Apple iPhone 14",
            description:"Apple iPhone 14 (128 GB) - (Product) RED",
            price:"64,900",
            About:"Pro 48MP camera system (Ultra Wide, Wide, and Telephoto)A16 Bionic chip,6-core CPU with 2 performance cores and 4 efficiency cores, 5-core GPU, 16-core Neural Engine Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529"
        },
        {
            id:3,
            image:phone3,
            Card:"Samsung Galaxy S23 FE ",
            description:"Samsung Galaxy S23 FE 5G (Mint, 8GB, 128GB Storage)",
            price:"59,999",
            About:"Camera: Experience Galaxy S23 FEs cutting edge camera. All of your photos and videos can be epic when you use the various pro-grade features. You’ll see the difference for yourself with its epic nightography (night photos & videos), incredible details & pro-grade features"
        },
        {
            id:4,
            image:phone4,
            Card:"Xiaomi Redmi 13C",
            description:"Xiaomi Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage)",
            price:"8,999",
            About:"50MP AI Triple camera with Primary sensor of f/1.8 (4-in-1 super pixel) with the following modes: Photo | Portrait | Night | Video | 50MP mode | Time-lapse | Classic film filters | Frame | HDR | Google lens | Voice Shutter"
        },
        // {
        //     id:5,
        //     image:air1,
        //     Card:"Apple wired earpod",
        //     description:"Apple Wired EarPods with Lightning Connector",
        //     price:"1,599",
        //     About:"The speakers inside the EarPods have been engineered to maximize sound output and minimize sound loss, which means you get high-quality audio."
        // },
        // {
        //     id:6,
        //     image:air2,
        //     Card:"Noise Buds VS104",
        //     description:"Noise Buds VS104 Max Truly Wireless in-Ear Earbuds ",
        //     price:"1,799",
        //     About:"Active Noise Cancellation (up to 25 dB): Immerse yourself in pure audio bliss and focus on your music without any distractions.InstachargeTM (10 min charge = 180 min playtime): Never be without your music"
        // },
        // {
        //     id:7,
        //     image:air3,
        //     Card:" boAt Rockerz 378",
        //     description:"boAt Rockerz 378 Bluetooth Neckband  v5.1(Vibrant Red)",
        //     price:"1,299",
        //     About:"Spatial Bionic Sound- It’s time to up the game and switch to Rockerz 378 wireless neckband that comes equipped with our Spatial Bionic Sound tuned by THX, that helps deliver spatial sound for pinpoint positional accuracy."
        // },
        // {
        //     id:8,
        //     image:air4,
        //     Card:" Zebronics",
        //     description:"Zebronics Newly Launched Storm Wired On Ear Headphone ,",
        //     price:"999",
        //     About:"Enjoy long hours of music from the uniquely styled headband- the ZEB-Storm which comes in white color so you can match your outfit just the way you like."
        // },
        // {
        //     id:9,
        //     image:watch1,
        //     Card:" boAt smart watch",
        //     description:"boAt Wave Edge Smart Watch IP68(Active Black)",
        //     price:"1,199",
        //     About:"Bluetooth Calling- Calling made convenient with just a tap on Wave Edge. Save up to 10 contacts, make calls with the dial pad and its superior quality speaker & mic make your experience smooth and clear"

        // },
        // {
        //     id:10,
        //     image:watch2,
        //     Card:" Noise smart watch",
        //     description:" Noise ColorFit Pro 4 Alpha 1.78 ",
        //     price:"2,999",
        //     About:" Make calls with the dial pad and its superior quality speaker & mic make your experience smooth and clear Bluetooth Calling- Calling made convenient with just a tap on Wave Edge."

        // },
        // {
        //     id:11,
        //     image:coll1,
        //     Card:"Lenovo ",
        //     description:"(Refurbished) Lenovo ThinkCentre M73  ",
        //     price:"12,367",
        //     About:" (Intel Pentium - 4th Gen, 8 GB RAM, 500 GB HDD, 19 HD Monitor, Tiny CPU, KB & Mouse, HD Webcam, WiFi, Windows 7, MS Office) USB,VGA,DP,LAN Port audio in/out port. WiFi dongle included."

        // },
        // {
        //     id:12,
        //     image:Gps,
        //     Card:" GPS",
        //     description:"NV Prime Car/Bike/EV Waterproof NXT GEN GPS Tracker with 5 Years Warranty",
        //     price:"1,599",
        //     About:" This all-in-one tracker caters to a multitude of needs, from safeguarding your vehicles to ensuring your loved ones' safety. With sound recording",

        // },
        // {
        //     id:13,
        //     image:Bhavatgeeta,
        //     Card: "Bhagavad Gita",
        //     description: "Bhagavad Gita [Deluxe Hardbound Edition] Sacred Text for Self-Realization and Spiritual Enlightenment|Book Vedic Wisdom",
        //     price: 2036,
        //     About:"The Bhagavad Gita forms a section of the sixth book of the Mahabharata, an important Sanskrit epic in the Hindu tradition that recounts a lengthy struggle and brief war between two sides of the Bharata family—the Pandavas and the Kauravas—over their kingdom of Hastinapura."
        // },
        // {
        //     id:14,
        //     image:multiverse,
        //     Card: "Multiverse",
        //     description: "In Search of the Multiverse: Parallel Worlds, Hidden Dimensions, and the Ultimate Quest for the Frontiers of Reality",
        //     price: 1036,
        //     About:"The multiverse is the hypothetical set of all universes. Together, these universes are presumed to comprise everything that exists: the entirety of space, time, matter, energy, information, and the physical laws and constants that describe them."
        // },
        // {
        //     id:15,
        //     image:bible,
        //     Card: "Bible",
        //     description: "The Holy Bible, English Standard Version (with Cross-References): Old and New Testaments Kindle Edition",
        //     price: 1536,
        //     About:"The Bible is the holy scripture of the Christian religion, purporting to tell the history of the Earth from its earliest creation to the spread of Christianity in the first century A.D. Both the Old Testament and the New Testament have undergone changes over the centuries, including the the publication of the King ."
        // },
        // {
        //     id:16,
        //     image:quran,
        //     Card: "Quran",
        //     description: "ISLAMIC STORE original product - The Holy Quran English with New Edition Urdu Translation & Transliteration in Roman Script.",
        //     price: 1299,
        //     About:"It is made up of words which contain truth and guidance for every human being, and Muslims believe that these are words revealed directly by God, in the Arabic language, to the last of His prophets and messengers, Muhammad ﷺ (peace be upon him)."
        // },
        // {
        //     id:17,
        //     image:wickipedia,
        //     Card: "Wikipedia",
        //     description: "The Wikipedia Legends of the Civil War: The Incredible Stories of the 75 Most Fascinating Figures from the War Between the States  ",
        //     price: 999,
        //     About:"Wikipedia is a free, open content online encyclopedia created through the collaborative effort of a community of users known as Wikipedians. Anyone registered on the site can create an article for publication; registration is not required to edit articles."
        // },
        // {
        //     id:18,
        //     image:dopomine,
        //     Card: "Dopamine Detox",
        //     description: "Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things (Productivity Series Book 1) ",
        //     price: 784,
        //     About:"Dopamine acts on areas of the brain to give you feelings of pleasure, satisfaction and motivation. Dopamine also has a role to play in controlling memory, mood, sleep, learning, concentration, movement and other body functions."
        // }, 
        // {
        //     id:19,
        //     image:quran,
        //     Card: "Quran",
        //     description: "ISLAMIC STORE original product - The Holy Quran English with New Edition Urdu Translation & Transliteration in Roman Script.",
        //     price: 1299,
        //     About:"It is made up of words which contain truth and guidance for every human being, and Muslims believe that these are words revealed directly by God, in the Arabic language, to the last of His prophets and messengers, Muhammad ﷺ (peace be upon him)."
        // },
        // {
        //     id:20,
        //     image:bible,
        //     Card: "Bible",
        //     description: "The Holy Bible, English Standard Version (with Cross-References): Old and New Testaments Kindle Edition",
        //     price: 1536,
        //     About:"The Bible is the holy scripture of the Christian religion, purporting to tell the history of the Earth from its earliest creation to the spread of Christianity in the first century A.D. Both the Old Testament and the New Testament have undergone changes over the centuries, including the the publication of the King ."
        // },
        // {
        //     id:21,
        //     image:shirt1,
        //     Card:"T-shirt",
        //     description:"Amazon Brand - Symbol Men Marvel Regular Fit T-Shirt",
        //     price:399,
        //     About:" Symbol clothing easy T-shirt for casual day wear,made out of quality fabric in vibrant colors makes this tee irresistible"
        // },
        // {
        //     id:22,
        //     image:shirt2,
        //     Card:"Oversized T-shirt",
        //     description:"Amazon Brand - INKAST Men T-Shirt",
        //     price:509,
        //     About:" Offers a mix of classic as well as contemporary denim styles in a variety of washes. Designed for all casual occasions  and fit"
        // },
        // {
        //     id:23,
        //     image:shirt3,
        //     Card:"Fit Tank Top",
        //     description:"Veirdo® Men's Regular Fit Tank Top",
        //     price:279,
        //     About:"Material and quality: Premium bio-washed soft and smooth skin friendly cotton material  for long lasting use."
        // },
        // {
        //     id:24,
        //     image:shirt4,
        //     Card:"Veirdo Men Hoodie",
        //     description:"This attractive stylish pullover for men",
        //     price:674,
        //     About:"Pair this men's hoodie with jeans for classic everyday look. This stylish & attractive sweat shirt for men is suitable for all body types."
        // },
        // {
        //     id:25,
        //     image:for1,
        //     Card:"Half Sleeve Shirt",
        //     description:"LookMark Men's Cotton Blend Printed Stitched Half Sleeve Shirt",
        //     price:299,
        //     About:"100% Premium Cotton Blend, Pre Washed for an extremely soft and easy to wear in every season it is insulating in winter and breathable in summer."
        // },
        // {
        //     id:26,
        //     image:for2,
        //     Card:"Casual shirt",
        //     description:"JAI TEXTILES Men's Cotton Casual Slim Fit Checkered Shirt",
        //     price:378,
        //     About:"Premium quality cotton shirts for men from Jai Textiles gives you amazing look in formal, party and casual wear."
        // },
        // {
        //     id:27,
        //     image:for3,
        //     Card:"Quality Mens shirt",
        //     description:"Jack & Jones Men  Printed Stitched Shirt",
        //     price:749,
        //     About:"Pre Washed for an extremely soft and easy to wear in every season it is insulating  gives you amazing look in formal"
        // },
        // {
        //     id:28,
        //     image:for4,
        //     Card:"Solid Slim Fit Casual Shirt",
        //     description:"Dennis Lingo Men's  Full Sleeve Shirt for Casual Wear & Formal Wear",
        //     price:489,
        //     About:"Smart Casual look about the Brand Dennis lingofinding basic Menswear for daily  extremely soft and easy to wear" 
        // },
        // {
        //     id:29,
        //     image:Shoe1,
        //     Card:"Sparx Mens Sx0675gRunning Shoe",
        //     description:"MADE OF: quality Mesh as upper material and EVA as sole material.",
        //     price:788,
        //     About:"Sparx is all about passion, challenges and zeal of people who like to live on-the-edge, have a dare-devil spirit and do things differently. Checkout our exciting range of shoes, sandals & flip-flops"
            
        // },
        // {
        //     id:30,
        //     image:Shoe2,
        //     Card:"Campus Men's North Plus Running Shoes",
        //     description:"These shoes for men have a supportive design",
        //     price:"1,099",
        //     About:"With an Air Capsule installed in the midsole, these casual cushioning for your feet. They are suitable for various outdoor activities such as running, gyming, walking, jogging, cardio, yoga, and more."
        // },
        // {
        //     id:31,
        //     image:Shoe3,
        //     Card:"Bersache Lightweight Sports Shoes ",
        //     description:"Modern, Breathable Sports Shoes that are made to fit you comfortably are ideal for all season",
        //     price:881,
        //     About:"These Men shoes include traditional colour schemes that are simple to match with apparel. These shoes go well with shorts, jeans, and casual or cropped pants. Suitable for any event"
        // },
        // {
        //     id:32,
        //     image:Shoe4,
        //     Card:"Symbol Mens Carlos Formal Shoes",
        //     description:"Designed with high quality material and durable outsole ",
        //     price:"1299",
        //     About:" Presenting wide range of formal, casual, party wear footwear for men and women,Must have pieces for your footwear collection.Senorita by Liberty ladies fashion sandal"
        // },
        // {
        //     id:33,
        //     image:che1,
        //     Card:" Sandals Red Tape's",
        //     description:"Red Tape Men's Rover Comfortable Clogs || Sandals with Adjustable Back Strap for Men",
        //     price:899,
        //     About:"Made with lightweight and durable material that provides excellent shock absorption and cushioning  The design of these clogs is simple and classic "
           
        // },
        // {
        //     id:34,
        //     image:che2,
        //     Card:"Crogs",
        //     description:"Aqualite Super Comfortable Anti-Skid Clogs For Mens",
        //     price:749,
        //     About:"With an anti-skid, shock-proof, double-deck sole, enjoy comfort all the way, whatever be the season, whatever be the terrain."
        // },
        // {
        //     id:35,
        //     image:che3,
        //     Card:"Orthopaedic Slipper",
        //     description:"DOCTOR EXTRA SOFT Slipper Care Orthopaedic and Diabetic Slipper",
        //     price:399,
        //     About:"DIABETIC AND ORTHOPEDIC: - Extra Soft, Padded. Doctor Extra Soft Slipper  Comfort and also makes you’re Walking Life easy and effortlessly."
        // },
        // {
        //     id:36,
        //     image:che4,
        //     Card:"PARAGON PUK2217G Sandals",
        //     description:"PARAGON PUK2217G Men Stylish Velcro Sandals Casual Athletic Sandals ",
        //     price:567,
        //     About:"These sandals feature the ultimate combination of grip allowing you to walk and explore with ease::these men's sandals are a must-have this season."
        // }
       
    ]

    const [item, setItem] = useState(null);

    const handleItemClick = (index) => {
      setItem(index);
    };
  
    return (
        <div>
           
        <div className="card">
        <div div className="row">
            {data.map((item,index)=>(

                  <div key={item.id} onClick={() => handleItemClick(index)} className="col-3">
                  
                   <Cardcomp cardimg={item.image}
                     cardtitle={item.Card} 
                     carddescription={item.description}
                      cardprice={item.price}/>
                      </div>  
                                
            ))}
            
            
            <div >
            {item !== null ? (
                
                        <Design
                        desimg={data[item].image}
                        descart={data[item].Card}
                        desdescription={data[item].About}
                        desprice={data[item].price}
                        />
                    
           ):
            (<p></p>
            )}
            
                     </div>
                     
</div>
    </div>
    </div>
   
    );

}

export default Card;
