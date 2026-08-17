"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
    return (
        <section className="relative overflow-hidden py-15">
            {/* Background */}

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mb-16 text-center"
                >
                    <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Client Reviews
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-emerald-400 lg:text-4xl">
                        Trusted By{" "}
                        <span className="text-emerald-700 ">Healthcare Providers</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-md text-slate-600">
                        Thousands of providers trust OSOZ MBS for reliable
                        medical billing, coding and revenue cycle management.
                    </p>
                </motion.div>

                {/* Slider */}

                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    speed={900}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <motion.div
                                whileHover={{
                                    y: -8,
                                }}
                                className="h-[190px] rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all"
                            >
                                {/* User */}

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-emerald-500">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-md text-slate-900">
                                            {item.name}
                                        </h3>

                                        <p className="text-xs text-slate-500">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Stars */}

                                <div className="mt-3 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={
                                                i < item.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-slate-300"
                                            }
                                        />
                                    ))}
                                </div>

                                {/* Quote */}

                                <p className="mt-4 text-sm text-slate-600">
                                    "{item.quote}"
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}