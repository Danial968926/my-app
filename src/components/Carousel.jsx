"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import "swiper/css";

const slides = [
  {
    img: "/images/img1.jpg",
    title: "Your Growth, Our Commitment",
    description:
      "At OSOZMBS, we provide reliable and efficient medical billing services, ensuring clean claim submissions within 24 hours. We manage collections, address revenue cycle inconsistencies, and maintain a 99% accuracy rate to minimize denials and ensure prompt payments.",
  },
  {
    img: "/images/img2.jpg",
    title: "Your Success, Our Priority",
    description:
      "At OSOZMBS, we provide reliable and efficient medical billing services, ensuring clean claim submissions within 24 hours. We manage collections, address revenue cycle inconsistencies, and maintain a 99% accuracy rate to minimize denials and ensure prompt payments.",
  },
];

export default function Carousel() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1200}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex min-h-[100vh] items-center bg-cover bg-center px-4 py-20 sm:px-6 lg:px-8"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {/* Overlays */}
              <div className="absolute inset-0 bg-slate-950/65" />
              <div className="absolute inset-0 bg-emerald-100/10" />

              {/* Slide Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl flex flex-col justify-center rounded-2xl h-auto p-5 sm:p-8 border border-slate-400/30 bg-slate-900/50 backdrop-blur shadow-2xl"
                >
                  {/* Badge */}
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-emerald-300/40 bg-emerald-800/50 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-300">
                    Professional Medical Billing Services
                  </span>

                  {/* Title */}
                  <h1 className="mb-3 text-xl font-extrabold text-white sm:text-3xl lg:text-4xl leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-emerald-50/90">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      title="Get Started"
                      href="/contact"
                      icon={ArrowRight}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto text-center justify-center"
                    />

                    <Button
                      title="About Us"
                      href="/about"
                      icon={ArrowRight}
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto text-center justify-center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}