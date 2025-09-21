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
                <div className="max-w-4xl bg-red-400 mx-auto">
                    <div className="flex flex-row justify-between items-center pt-8">
                        <h2 className="text-2xl">
                            <b>What Happend Yesterday</b>
                        </h2>
                        <span>13.10.2025</span>
                    </div>
                    <p>
                        check the comprehensive report of what happend yesterday
                    </p>
                    <div className="grid grid-cols-3 py-8 ">
                        <div className="p-8 border border-l-0">
                            <b>Messages:</b> 325 (+9%)
                        </div>
                        <div className="p-8 border border-l-0">
                            <b>Users:</b> 78 (+5%)
                        </div>
                        <div className="p-8 border border-l-0 border-r-0">
                            <b>Issues:</b> 3 (42 events)
                        </div>
                    </div>
                </div>
            </section>
            <div className="border-y min-h-[4rem]"></div>
        </>
    );
}
