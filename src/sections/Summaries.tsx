import {
    Braces,
    LucideDollarSign,
    LucideMountain,
    MessagesSquareIcon,
    UsersIcon,
} from "lucide-react";

export default function Summaries() {
    return (
        <>
            <div className="border-y min-h-[4rem]"></div>
            <section>
                <div className="container-custom-spatial">
                    <div className="border flex flex-col items-center py-32">
                        <h1 className="text-4xl">DAILY SUMMARIES</h1>
                        <h2 className="text-lg text-center py-4 text-black/50">
                            We send you alerts when your AI misbehaves and links
                            straight to the events so you can <br></br>dig into
                            the conversations or traces, understand the root
                            cause, and fix it—fast.
                        </h2>
                    </div>
                </div>
                <div className="max-w-4xl bg-red-400 mx-auto px-6">
                    <div className="flex flex-row justify-between items-center pt-8 ">
                        <h2 className="text-2xl">
                            <b>What Happend Yesterday</b>
                        </h2>
                        <span>13.10.2025</span>
                    </div>
                    <p>
                        check the comprehensive report of what happend yesterday
                    </p>
                    <div className="">
                        <h1 className="text-xl">Wins</h1>
                        <p>
                            Users liked the assistant's tone and appreciated the
                            life advice.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-8 ">
                        <div className="flex items-center gap-x-2 px-4 py-8 border">
                            <div className="border p-4">
                                <MessagesSquareIcon />
                            </div>
                            <b>Messages:</b> 325 (+9%)
                        </div>

                        <div className="flex items-center gap-x-2 px-4 py-8 border md:border-l-0">
                            <div className="border p-4">
                                <UsersIcon />
                            </div>
                            <b>Users:</b> 78 (+5%)
                        </div>

                        <div className="flex items-center gap-x-2 px-4 py-8 border md:border-l-0">
                            <div className="border p-4">
                                <UsersIcon />
                            </div>
                            <b>Issues:</b> 3 (42 events)
                        </div>
                    </div>
                    <div className="grid-cols-1">
                        <div className="flex flex-row justify-between border p-4">
                            <div className="flex gap-2 items-center">
                                <Braces />
                                <p>Tool calls: </p>
                            </div>
                            <p>
                                Most used calls: get_payment_tool,
                                get_userschema
                            </p>
                        </div>
                        <div className="flex flex-row justify-between border p-4">
                            <div className="flex gap-2 items-center">
                                <LucideMountain />
                                <p>Rate Limit: </p>
                            </div>
                            <p>
                                System hit 4 rate limits: this caused dropped
                                requests
                            </p>
                        </div>
                        <div className="flex flex-row justify-between border p-4">
                            <div className="flex gap-2 items-center">
                                <LucideDollarSign />
                                <p>Cost Overrun: </p>
                            </div>
                            <p>No cost overruns detected yesterday</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="border-y min-h-[4rem]"></div>
        </>
    );
}
