import React from "react";
import { ReactComponent as Kurodoke } from "@/assets/svg/KURODOKE.svg";
import { ReactComponent as SixStar } from "@/assets/svg/sixstar.svg";
import { ReactComponent as DescHero } from "@/assets/svg/— INDONESIAN DESIGNER & FULL-STACK DEVELOPER.svg";
import { ReactComponent as InAdditionText } from "@/assets/svg/IN ADDITION.svg";
import { ReactComponent as ToThatText } from "@/assets/svg/TO THAT.svg";
import { ReactComponent as Boy } from "@/assets/svg/boy2.svg";
import { ReactComponent as HesLookingText } from "@/assets/svg/HE'S LOOKING FORWARD TO IT.svg";

import { Line } from "@/components/line";
import Link from "next/link";

export default function About(): React.ReactElement {
    function Hero(): React.ReactElement {
        return (
            <section className="flex flex-col p-4 sm:p-5 gap-2 sm:gap-4 bg-black">
                <div className="flex items-center">
                    <div className="w-10/12">
                        <Kurodoke />
                    </div>
                    <div className="w-2/12">
                        <SixStar fill="#fff" />
                    </div>
                </div>

                <div className="bg-newsred px-1 py-1 sm:px-2 sm:py-2">
                    <DescHero />
                </div>
                <div>
                    <p className="text-xs leading-none sm:text-2xl lg:text-4xl  text-white">
                        THIS GUY HAS A DEEP LOVE FOR DESIGN, ALWAYS PUSHING
                        BOUNDARIES WITH BOLD TYPOGRAPHY AND EXPLORING BRUTALISM.
                    </p>
                </div>
            </section>
        );
    }

    function Body(): React.ReactElement {
        return (
            <section className="bg-black p-2 sm:p-5">
                <div className="flex flex-wrap w-full ">
                    <div className="flex flex-col gap-2 w-full bg-white p-2 border-b-4 border-black sm:w-7/12 sm:border-e-4 sm:p-5">
                        <div className="flex flex-col gap-2">
                            <InAdditionText />
                            <ToThatText />
                        </div>
                        <Line />
                        <p className="text-xs sm:text-base">
                            When he’s not experimenting with bold design, he’s
                            busy building full-stack applications that combine
                            both beauty and functionality. He’s completed a
                            range of projects, ensuring every detail, from the
                            front-end visuals to the back-end logic, works
                            perfectly together. Plus, with his cloud engineering
                            skills on Google Cloud, he knows how to make these
                            projects scalable and future-proof.
                        </p>
                    </div>
                    <div className="bg-white w-full p-[2px] sm:pb-0 sm:w-5/12">
                        <div className="w-full h-full relative overflow-hidden">
                            <HesLookingText className="absolute w-[150px] translate-x-[calc(16px-2px)] translate-y-[calc(16px-2px)]" />
                            <Boy
                                className="border-4 border-black bg-black object-cover"
                                width={"100%"}
                                height={"100%"}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between text-white p-2 border-2 border-white border-t-0 sm:border-t-2">
                    <Link className="text-base sm:text-2xl" href={"/works"}>
                        See his works →
                    </Link>
                    <p className="text-base sm:text-3xl">✷✷✷✷✷</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <Hero />
            <Body />
        </>
    );
}

// export default function Homes() {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//                 <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//                     Get started by editing&nbsp;
//                     <code className="font-mono font-bold">
//                         src/app/page.tsx
//                     </code>
//                 </p>
//                 <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//                     <a
//                         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//                         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         By{" "}
//                         <Image
//                             src="/vercel.svg"
//                             alt="Vercel Logo"
//                             className="dark:invert"
//                             width={100}
//                             height={24}
//                             priority
//                         />
//                     </a>
//                 </div>
//             </div>

//             <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//                 <Image
//                     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//                     src="/next.svg"
//                     alt="Next.js Logo"
//                     width={180}
//                     height={37}
//                     priority
//                 />
//             </div>

//             <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//                 <a
//                     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <h2 className="mb-3 text-2xl font-semibold">
//                         Docs{" "}
//                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                             -&gt;
//                         </span>
//                     </h2>
//                     <p className="m-0 max-w-[30ch] text-sm opacity-50">
//                         Find in-depth information about Next.js features and
//                         API.
//                     </p>
//                 </a>

//                 <a
//                     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <h2 className="mb-3 text-2xl font-semibold">
//                         Learn{" "}
//                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                             -&gt;
//                         </span>
//                     </h2>
//                     <p className="m-0 max-w-[30ch] text-sm opacity-50">
//                         Learn about Next.js in an interactive course
//                         with&nbsp;quizzes!
//                     </p>
//                 </a>

//                 <a
//                     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <h2 className="mb-3 text-2xl font-semibold">
//                         Templates{" "}
//                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                             -&gt;
//                         </span>
//                     </h2>
//                     <p className="m-0 max-w-[30ch] text-sm opacity-50">
//                         Explore starter templates for Next.js.
//                     </p>
//                 </a>

//                 <a
//                     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//                     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <h2 className="mb-3 text-2xl font-semibold">
//                         Deploy{" "}
//                         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                             -&gt;
//                         </span>
//                     </h2>
//                     <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//                         Instantly deploy your Next.js site to a shareable URL
//                         with Vercel.
//                     </p>
//                 </a>
//             </div>
//         </main>
//     );
// }
