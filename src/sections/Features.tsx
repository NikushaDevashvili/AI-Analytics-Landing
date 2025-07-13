"use client";
import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import feature11img from "@/assets/images/Feature111.png";
import feature2img from "@/assets/images/Feature2.jpg";
import feature3img from "@/assets/images/Feature3.png";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    const imageRef1 = useRef<HTMLDivElement>(null);
    const isInView1 = useInView(imageRef1, { amount: 0.2 });

    const imageRef2 = useRef<HTMLDivElement>(null);
    const isInView2 = useInView(imageRef2, { amount: 0.2 });

    const imageRef3 = useRef<HTMLDivElement>(null);
    const isInView3 = useInView(imageRef3, { amount: 0.2 });

    return (
        <section className="py-24">
            <div className="sm:mx-3 md:mx-48 lg:mx-72 xl:mx-64">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>

                {/* Section 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mt-6"
                >
                    <h2 className="md:text-5xl sm:text-4xl lg:text-5xl font-roman font-iowan">
                        Get Instant{" "}
                        <span className="text-amber-950">Answers</span>
                    </h2>
                    <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-black/50">
                        Ask any question, get answer that combines Google
                        Analytics, MS Clarity, Hotjar and other analytical data
                        into one actionable insight
                    </p>
                </motion.div>

                <div className="mt-12 ">
                    <motion.div
                        ref={imageRef1}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView1
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={feature11img}
                            alt="Feature 1"
                            width={1280}
                            height={1020}
                            className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                        />
                    </motion.div>
                </div>

                {/* Section 3 */}
                <motion.div
                    ref={imageRef3}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mt-56"
                >
                    <h2 className="md:text-5xl sm:text-4xl lg:text-5xl font-roman font-iowan">
                        Identify Critical{" "}
                        <span className="text-amber-950">Drop-Offs</span>
                    </h2>
                    <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-black/50">
                        Discover where users abandon the journey — with data
                        synthesized across all your tracking tools in one visual
                        snapshot.
                    </p>
                </motion.div>
                <div className="mt-12">
                    <motion.div
                        ref={imageRef3}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView3
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={feature3img}
                            alt="Feature 3"
                            width={1280}
                            height={1020}
                            className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                        />
                    </motion.div>
                </div>

                {/* Section 2 */}
                <motion.div
                    ref={imageRef2}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mt-56"
                >
                    <h2 className="md:text-5xl sm:text-4xl lg:text-5xl font-roman font-iowan">
                        Monitor your analytics{" "}
                        <span className="text-amber-950">24/7</span>
                    </h2>
                    <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-black/50">
                        Ask any question, get answer that combines Google
                        Analytics, MS Clarity, Hotjar and other analytical data
                        into one actionable insight
                    </p>
                </motion.div>
                <div className="mt-12 ">
                    <motion.div
                        ref={imageRef2}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView2
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={feature2img}
                            alt="Feature 2"
                            width={1280}
                            height={1020}
                            className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
