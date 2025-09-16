"use client";
import hotjarimg from "@/assets/images/Hotjarimg.png";
export default function Functional() {
    return (
        <>
            <section>
                <div className="border-gray-200 border-x border-y border-solid ">
                    <div className="container border-gray-200 border-x border-l-0 border-r-0  border-solid p-0">
                        <div className="border-x min-h-[5rem]"></div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="flex flex-col px-4 py-4 bg-gray-100 border border-gray-200">
                                <div className="text-2xl ">Install</div>
                                <div className="mt-4 pb-4">
                                    <p className="text-sm">
                                        Import raw data from existing
                                        spreadsheets, CRMs, or APIs. Or start
                                        from scratch by asking chat for the data
                                        you need.
                                    </p>
                                </div>
                                <div className="">
                                    <img
                                        src={hotjarimg.src}
                                        alt="Functional Image"
                                        className="w-full h-48 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col px-4 py-4 bg-gray-100 border border-gray-200">
                                <div className="text-2xl flex-1">Install</div>
                                <div className="mt-4 pb-4">
                                    <p className="text-sm">
                                        Import raw data from existing
                                        spreadsheets, CRMs, or APIs. Or start
                                        from scratch by asking chat for the data
                                        you need.
                                    </p>
                                </div>
                                <div className="">
                                    <img
                                        src={hotjarimg.src}
                                        alt="Functional Image"
                                        className="w-full h-48 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col px-4 py-4 bg-gray-100 border border-gray-200">
                                <div className="text-2xl flex-1">Install</div>
                                <div className="mt-4 pb-4">
                                    <p className="text-sm">
                                        Import raw data from existing
                                        spreadsheets, CRMs, or APIs. Or start
                                        from scratch by asking chat for the data
                                        you need.
                                    </p>
                                </div>
                                <div className="">
                                    <img
                                        src={hotjarimg.src}
                                        alt="Functional Image"
                                        className="w-full h-48 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-x min-h-[5rem]"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
