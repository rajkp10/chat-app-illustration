import React from "react";

function Hero() {
  return (
    <section className="flex flex-col flex-1 gap-5">
      <span className="text-4xl font-medium text-center md:text-left text-textMainHeading">
        Simple booking
      </span>
      <p className="leading-7 text-center text-textParagraph md:text-left">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </section>
  );
}

export default Hero;
