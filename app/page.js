"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section className="flex items-center justify-center w-full min-h-screen font-bold">
      <h1
        data-aos="zoom-in"
        className="flex items-center justify-center text-5xl font-bold "
      >
        Home Page
      </h1>
    </section>
  );
}
