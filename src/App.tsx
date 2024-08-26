import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import { json } from 'stream/consumers';

interface Review {
  review_url: string;
  id: string;
  author_title: string;
  review_text: string;
  review_rating: string;
  author_image?: string;
  source_image?: string;
  review_datetime_utc: string;
}


const mockdata: Review[] = [
  {
    "id": "a4c74300-64f0-4bc1-956c-5ec5dda84894",

    "author_image": "https://yt3.ggpht.com/ytc/AIdro_m6DOnUk4Sj6YyWDL4IFQXuPxqYN43srCZ2yMIBtE2i874=s88-c-k-c0x00ffffff-no-rj",
    "author_title": "@jasonarcher7268",
    "review_text": "I did that for a few years. It was a great gig. I got to travel everywhere the cruise ships go, and finish every work day at an all you can eat buffet. We used water powered machines, that ran off of the ship's firepumps. Much simpler than the big hydraulic carts they're using here. \n\nMy favorite spot to work was cozumel. The water was so clear, you felt like an astronaut or something.",
    "review_rating": "3",
    "review_datetime_utc": "2 years ago",
 
    "review_url": "https://www.youtube.com/watch?v=tDM7yeJQzdo"
  },
  {
    "id": "b0611157-a704-455e-b63a-96c256a1f4f0",

    "author_image": "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-1/448888458_10231749148452865_1783843551483738964_n.jpg?stp=cp6_dst-jpg_s40x40&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=FvHahkJSpugQ7kNvgESQfDP&_nc_ht=scontent-lis1-1.xx&oh=00_AYB2j_PyFCVpc5GesNQqofqI0DGIraYvKQJ9hY2a3ke25w&oe=66CEA2F5",
    "author_title": "Anucha Bee Adsin",
    "review_text": "One of the most reliable tools and good after-sales care I have a case of incorrect settings. he helped me Like I've never encountered.",
    "review_rating": "5",
    "review_datetime_utc": "2024-07-10",
    
    "review_url": "https://www.facebook.com/beeaung.vfx/posts/pfbid0oihRvMcLTwP7fgtq7UwAoUMjfUcAeXtQjBkAghGDvFNNL7rMe5uSkVAvjEjnkRrYl"
  },
  {
    "id": "baa78dc1-700e-4401-a680-d6ea40d2b4f1",


    "author_image": "https://reviewhive-cdn.b-cdn.net/reviewAvatars/f9aa19a2-bac1-497a-99c7-27d115d69338-15--suesse-geschenke-zum-40--geburtstag---3-2---spoton-article-1066907.jpg.avif",
    "author_title": "Mark Zuckerberg | CEO at Facebook",
    "review_text": "I love facebook!",
    "review_rating": "3",
    "review_datetime_utc": "2024-08-11",

    "review_url": "https://www.linkedin.com/in/mark-zuckerberg-618bba58?original_referer=https%3A%2F%2Fsearch.brave.com%2Fs"
  },
  {
    "id": "e0077fc4-f97a-48ec-8815-5a4f0fbfab8a",

    "author_image": "https://reviewhive-cdn.b-cdn.net/placeholders/avatar.jpg",
    "author_title": "Kevin K.",
    "review_text": "Mega Tag, absoluter Gamechanger für unsere Agentur!",
    "review_rating": "5",
    "review_datetime_utc": "2022-07-06",

    "review_url": "https://de.trustpilot.com/review/saleshax.de"
  },
  {
    "id": "ed0b89ae-9116-4026-84b3-60e63eb2bc2c",
  

    "author_image": "https://reviewhive-cdn.b-cdn.net/placeholders/avatar.jpg",
    "author_title": "Bruno Schon",
    "review_text": "Das Sell like Alex Event war mega! Sehr starker Input, top Stimmung und klasse Organisation.",
    "review_rating": "5",
    "review_datetime_utc": "2023-07-02",

    "review_url": "https://de.trustpilot.com/review/saleshax.de"
  },
  {
    "id": "f44071b1-d51a-45e1-8ba6-c30155a8d5e9",

 
    "author_image": "https://scontent.fiev13-1.fna.fbcdn.net/v/t1.18169-1/12004017_1644091122512741_1590767902143493380_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=e4545e&_nc_ohc=bNCWCIHQ1eMQ7kNvgGlVxR9&_nc_ht=scontent.fiev13-1.fna&oh=00_AYCv2-nbVLj1RU50aPLjsgKaK_q4U9hrB1amFCdkVv-xwQ&oe=66F052B4",
    "author_title": "Bill Marshall",
    "review_text": "the product is the best i have found and the support is beyond any other online software.",
    "review_rating": "5",
    "review_datetime_utc": "2024-06-21",
  
    "review_url": "https://www.facebook.com/bill.marshall.52493/posts/pfbid0LaYUB6rrx26kv11spR7yVNnbzGCRmVxqLEPh1WpPEJ4eWguWb3XRHXiR7rPZz3NMl"
  }
]

function App() {
  return (
    <Carousel reviews={mockdata} isDarkMode={false} showSourceIcon={false} showRatingStars={false} showDate={false}/>
  );
}

export default App;
