import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Faqs from "@/sections/Faqs";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <LogoTicker /> */}
            <Features />
            <Introduction />
            <Faqs />
        </>
    );
}
