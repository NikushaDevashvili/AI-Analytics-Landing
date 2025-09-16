import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Faqs from "@/sections/Faqs";
import Functional from "@/sections/Functional";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Functional />
            {/* <LogoTicker /> */}
            <Features />
            <Introduction />
            <Faqs />
        </>
    );
}
