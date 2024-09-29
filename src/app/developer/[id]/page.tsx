"use client";

import { DeveloperProjectInterface } from "@/app/api/projects/project";
import Close from "@/components/page/Developer/Project/Close";
import Detail from "@/components/page/Developer/Project/Detail";
import Hero from "@/components/page/Developer/Project/Hero";
import ImageShowcase from "@/components/page/Developer/Project/ImageShowcase";
import Footer from "@/components/page/Footer/Footer";
import React, { useEffect, useState } from "react";

export default function DeveloperDetail({
    params: { id },
}: {
    params: { id: string };
}): React.ReactElement {
    const [data, setData] = useState<DeveloperProjectInterface>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/projects/" + id)
            .then((response) => response.json())
            .then((data: DeveloperProjectInterface) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [id]);

    if (!isLoading && data) {
        return (
            <main>
                <Hero data={data} />
                <Detail data={data} />
                <ImageShowcase data={data} />
                <Close />
            </main>
        );
    } else {
        // if data not yet given by db
        return (
            <main>
                <section className="p-5 md:p-10">loading...</section>
            </main>
        );
    }
}
