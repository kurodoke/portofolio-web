import useStorage from "@/app/hooks/useStorage";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React, { useEffect, useState } from "react";
import EndContent from "../../EndContent";
import { DesignerPosterInterface } from "@/app/api/posters/poster";

export default function ContentPoster(): React.ReactElement {
    const storage = useStorage() + "image/";
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    const [data, setData] = useState<Array<DesignerPosterInterface>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/posters")
            .then((response) => response.json())
            .then((data: Array<DesignerPosterInterface>) => {
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
                                className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-4"
                                key={"poster-" + item.id}
                            >
                                <h5 className="text-base">{item.name}</h5>
                                <AnimatedImage
                                    src={storage + item.file}
                                    alt={item.name}
                                    loading="eager"
                                    width={2480}
                                    height={3508}
                                    delay={getDelay(
                                        baseDelay,
                                        indexAnimation++
                                    )}
                                ></AnimatedImage>
                            </li>
                        );
                    })}
            </ul>
            {!isLoading && <EndContent />}
        </section>
    );
}
