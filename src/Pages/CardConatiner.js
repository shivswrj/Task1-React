import React from "react";
import Card from "../components/card";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";

function CardContainer() {
  // Define an array of card properties
  const cards = [
    {
      variant: "#8064A2",
      icon: <FaPeopleGroup />,
      title: "People",
      text: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      buttontext: "Connect",
    },
    {
      variant: "#77933C",
      icon: <FaMapMarkerAlt />,
      title: "Place",
      text: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      buttontext: "Meet Up",
    },
    {
      variant: "#C0504D",
      icon: <IoMdBasket />,
      title: "Product",
      text: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      buttontext: "Get it",
    },
    {
      variant: "#0096C8",
      icon: <FaCalendarCheck />,
      title: "Program",
      text: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      buttontext: "Attend",
    },
  ];

  return (
    <div className="container-fluid d-flex flex-wrap align-items-stretch justify-content-center p-5">
      {cards.map((card, index) => (
        <Card
          key={index} 
          variant={card.variant}
          icon={card.icon}
          title={card.title}
          text={card.text}
          buttontext={card.buttontext}
        />
      ))}
    </div>
  );
}

export default CardContainer;
