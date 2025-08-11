import bgImage from "@/assets/images/bgIm.png";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function Hero() {
    return (
        <section className="relative md:py-44 sm:py-36 overflow-x-clip z-40">
            {/* ✅ Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20 blur-md"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            />
            <div className="border-gray-300 border-x-2 border-y-2 border-double border-spacing-x-3">
                {/*  Content Layer */}
                <div className="container relative z-10">
                    {/* <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 rounded-full font-semibold">
                        ✨7.5M seed round raised
                    </div>
                </div> */}
                    <div className="border-gray-300 border-x-2 border-y-2 border-double border-spacing-x-3">
                        <h1
                            className="text-5xl md:text-6xl lg:text-6xl lg:font-roman text-center mt-2 font-iowan break-normal w-full tracking-tight
"
                        >
                            Your Product is Talking, <br />
                            <PointerHighlight
                                rectangleClassName=" border-neutral-100 leading-loose"
                                pointerClassName="text-black h-3 w-3"
                                containerClassName="inline-block mr-"
                            >
                                <span>We Help You Hear It.</span>
                            </PointerHighlight>
                        </h1>
                        <p className="text-center text-xl text-black/50 mt-8 max-w-2xl mx-auto">
                            Dashboards Out. Answers In. All Your Analytics in
                            One Place.
                        </p>
                        {/* <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form> */}

                        <div className="mt-20 mx-4 flex justify-center z-50 relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-purple-500/10 before:blur-2xl before:z-0">
                            <video
                                src="/videos/Chat-Animation3.mp4"
                                className="w-full sm:max-w-xl md:max-w-2xl h-auto rounded-2xl shadow-xl z-10"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
