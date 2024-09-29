import React, { useEffect, useState } from "react";
import { DeveloperProjectInterface } from "../../../app/api/projects/project";
import { fontDisplay } from "@/font";
import { AnimatedLink } from "@/components/AnimatedLink";
import { useIntroStore } from "@/providers/IntroProvider";
import AnimatedText from "@/components/AnimatedText";
import { getDelay } from "@/util/getDelay";
import EndContent from "@/components/EndContent";

export default function ListProject(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    const [data, setData] = useState<Array<DeveloperProjectInterface>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/projects")
            .then((response) => response.json())
            .then((data: Array<DeveloperProjectInterface>) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="p-5 md:p-10 md:!pt-0">
            <div className="grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-5 md:gap-y-5 my-5 md:my-10">
                <AnimatedText
                    type="standard"
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="col-span-2 md:col-start-4"
                >
                    List of Projects
                </AnimatedText>
                <AnimatedText
                    type="standard"
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="col-span-4 md:col-start-9 md:text-left text-right"
                >
                    Click the title to see the details.
                </AnimatedText>
                <div className="col-span-6 md:col-span-12">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error get data</p>}
                    {data &&
                        data.map((item, index) => {
                            return (
                                <article key={item.title + "-" + item.id}>
                                    {index === 0 && (
                                        <div className="w-full border-t border-black" />
                                    )}
                                    <div className="grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-5 md:gap-y-5 my-5 md:my-10">
                                        <div className="text-base col-span-6 md:col-span-3">
                                            {("0" + (index + 1)).slice(-2) +
                                                "."}
                                        </div>
                                        <AnimatedLink
                                            href={"/developer/" + item.id}
                                            className={`${fontDisplay.className} col-span-6 md:col-span-4 text-4xl md:text-5xl leading-none animated-underline hover:[is-active]`}
                                        >
                                            {item.title}
                                        </AnimatedLink>
                                        <div className="col-span-6 md:col-start-9 md:col-span-4 md:opacity-100 opacity-80 md:text-base">
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className="w-full border-t border-black" />
                                </article>
                            );
                        })}
                </div>
            </div>
            <EndContent />
        </section>
    );
}
