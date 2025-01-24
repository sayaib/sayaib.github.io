import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";
import vscode from "../../assets/icon/vscode.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anuj Bhardwaj",
      test: "highly recommend for developers",
    },
    {
      id: 2,
      name: "Bhavna Yadav",
      test: "It is a game-changer for developers, offering an extensive snippet library and a sleek, efficient debugging experience—all in one powerful VS Code extension.",
    },
    {
      id: 3,
      name: "Nikunj Poshiya",
      test: "Really great extension, easy to configure: it does exactly what I needed!",
    },
    {
      id: 4,
      name: "Ankan Saha",
      test: "This is such a simple idea, yet so very useful.",
    },
    {
      id: 5,
      name: "Ronit",
      test: "Great time saver. Keep up the good work!",
    },
    {
      id: 6,
      name: "Ritabrata Das",
      test: "So far so good, I have not encountered any problems, really really useful, Thanks.",
    },
    {
      id: 7,
      name: "Aman",
      test: "Great no need to find different snippets tools for development one tool covers all. Please add Solidity and Java.",
    },
    {
      id: 8,
      name: "Rajeev Singh",
      test: "Some attr is missing please update all the tags and attr.",
    },
    {
      id: 9,
      name: "Akanksha",
      test: "Very useful!",
    },
    {
      id: 10,
      name: "Erica Kennedy",
      test: "Great job! All code snippets are in one extension, which is very helpful!",
    },
    {
      id: 11,
      name: "yipod80072",
      test: "While the extension consolidates various helpful snippets into a convenient interface, there remain opportunities for further improvement in certain aspects.",
    },
    {
      id: 12,
      name: "bipih19585",
      test: "This extension is very useful, gathering all these helpful snippets in one place. Nevertheless, there are areas that could be enhanced.",
    },
    {
      id: 13,
      name: "gawoso5017",
      test: "It is very helpful, with all useful snippets in one extension. There is a need to improve in some fields.",
    },
    {
      id: 14  ,
      name: "Jaydip Padhiyar",
      test: "Great work easy for development.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Reviews from our users</h5>
      <h2>DevSnip Pro Reviews</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href="https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console">
                <img src={vscode} alt="" srcset="" />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
