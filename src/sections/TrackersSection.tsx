import slackmessageimg from "@/assets/images/SlackMessage.png";
export default function TrackersSection() {
    return (
        <section>
            <div className="border-y min-h-[4rem]"></div>
            <div className="container-custom-spatial border border-0">
                <div className="grid grid-grid-cols-1 lg:grid-cols-2 gap-16 ">
                    <div className="border border-t-0 items-center">
                        <div className="">
                            <img
                                src={slackmessageimg.src}
                                alt="Functional Image"
                                className="w-full h-96 md:h-96 object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">Set Trackers</h1>
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-6 ">
                            <h1 className="text-md py-6 px-8">
                                Turn raw logs into clear insights that help you
                                debug faster, improve reliability, and optimize
                                models
                            </h1>
                        </div>
                    </div>
                    <div className="border border-t-0 items-center">
                        <div className="">
                            <img
                                src={slackmessageimg.src}
                                alt="Functional Image"
                                className="w-full h-96 md:h-96 object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">Set Trackers</h1>
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-6 ">
                            <h1 className="text-md py-6 px-8">
                                rarra raw logs into clear insights that help you
                                debug faster, improve reliability, and optimize
                                models
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
