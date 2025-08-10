import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Faqs from "@/sections/Faqs";

export default function Home() {
    return (
        <>
            <html lang="en">
                <head>
                    <script
                        defer
                        src="http://localhost:3000/script.js"
                        data-website-id="af6bbe9f-33e0-4d09-9cbc-0618e2516154"
                    ></script>
                </head>

                <Navbar />
                <Hero />
                {/* <LogoTicker /> */}
                <Features />
                <Introduction />
                <Faqs />
            </html>
        </>
    );
}
