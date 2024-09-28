import React, { useEffect, useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import EndContent from "./EndContent";
import { DesignerMographInterface } from "@/app/api/mographs/mograph";

export default function ContentMoGraph(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    const [data, setData] = useState<Array<DesignerMographInterface>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/mographs")
            .then((response) => response.json())
            .then((data: Array<DesignerMographInterface>) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="p-5 md:p-10 !pt-0">
            <ul className="grid grid-cols-6 md:grid-cols-12 gap-x-5 gap-y-5 md:gap-y-10 md:gap-x-10">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error get data</p>}
                {data &&
                    data.map((item) => {
                        return (
                            <li
                                className="col-span-6 md:col-span-6"
                                key={"mograph-" + item.id}
                            >
                                <YouTubeEmbed
                                    delay={getDelay(
                                        baseDelay,
                                        indexAnimation++
                                    )}
                                    src={item.url}
                                />
                            </li>
                        );
                    })}
            </ul>
            {!isLoading && <EndContent />}
        </section>
    );
}
