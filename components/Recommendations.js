import React from "react";
import userData from "@constants/data";
import Link from 'next/link';

export default function Recommendations() {
    return (
        <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
                    <h1 className="text-6xl lg:text-8xl max-w-2xl font-bold text-gray-800 md:text-left dark:text-gray-500 text-center z-10 mt-10">
                        Hear what they say
                    </h1>
                </header> */}
                <div className="px-10 mx-5 lg:mx-20 pt-20">
                    {userData.recommendations.map((data, ind) => (
                        <div key={ind} className="my-20">
                            <blockquote className="relative p-4 text-xl bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                                <div aria-hidden="true" className="mr-2 stylistic-quote-mark font-dank-mono text-neutral-500 absolute top-0 leading-none dark:text-gray-300">
                                    &ldquo;
                                </div>
                                <p className="mb-4 text-lg dark:text-gray-300 tracking-wide font leading-relaxed">{data.text}</p>
                                <cite className="flex items-center text-md text-gray-500 dark:text-gray-400">
                                    - {data.name} [{data.designation}]
                                </cite>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-max pb-20"> 
                <Link href="/about"><button class="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-4 px-8 border rounded-md">
                    Learn More + Connect
                </button></Link>
            </div>
        </div>
    )
}