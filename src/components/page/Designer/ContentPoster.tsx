import useStorage from "@/app/hooks/useStorage";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React, { useEffect, useState } from "react";
import EndContent from "../../EndContent";
import { DesignerPosterInterface } from "@/app/api/posters/poster";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ContentPoster(): React.ReactElement {
    const storage = useStorage('poster');
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
            <div className="">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error get data</p>}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 1: 1, 668: 2, 1024: 3 }}
                >
                    <Masonry gutter="1.25rem">
                        {data &&
                            data.map((item) => {
                                return (
                                    <div key={"poster-" + item.id}>
                                        <h5 className="text-base">
                                            {item.name}
                                        </h5>
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
                                    </div>
                                );
                            })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            {!isLoading && <EndContent />}
        </section>
    );
}
