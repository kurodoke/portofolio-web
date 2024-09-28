import React from "react";

export default function DeveloperDetail({
    params: { id },
}: {
    params: { id: string };
}): React.ReactElement {
    return <main>{id}</main>;
}
