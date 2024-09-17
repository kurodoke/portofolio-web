import Link from "next/link";
import React from "react";

export default function Intro(): React.ReactElement {
    return (
        <section className="intro p-5 md:p-10 bg-custom-yellow border-y-2 border-black">
            <div className="grid grid-cols-12 text-base md:text-xl">
                <span className="text-3xl md:text-4xl md:col-start-2 lg:col-start-3 mb-2">
                    intro
                </span>
                <div className="col-start-1 md:col-start-2 lg:col-start-4 col-end-13 md:col-end-11 flex flex-col gap-2">
                    <p>
                        Arief is both a full-stack developer and a graphic
                        designer, blending creativity with technical expertise.
                        His passion for design shines through bold typography
                        and a fascination with brutalism, always pushing the
                        limits of what’s possible visually.
                    </p>
                    <p>
                        On the technical side, Arief develops full-stack
                        applications that integrate strong front-end design with
                        reliable back-end infrastructure. With experience in
                        Google Cloud, he ensures his projects are scalable and
                        efficient.
                    </p>
                    <p>
                        Whether it's design or development, Arief excels in
                        crafting solutions that are both beautiful and
                        functional. Feel free to connect with him at{" "}
                        <Link
                            className="underline underline-offset-1"
                            href={"mailto:ariefsatrio098@gmail.com"}
                        >
                            ariefsatrio098@gmail.com.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
