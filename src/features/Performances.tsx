import { usePerformances } from "../hooks/usePerformances";
import type { Performance } from "../types/Performance";

export function Performances() {
    const performances = usePerformances();

    return (
        <section>
            <h2> Feature 4 stages with live performances by: </h2>
            <ul>
                {performances.map((performance) => {
                    return <PerformanceCard {...performance} />;
                })}
            </ul>
        </section>
    );
}

function PerformanceCard({
    name,
    description,
    imgUrl,
    spotifyUrl,
    instagramUrl,
    youtubeUrl,
    websiteUrl,
    soundcloudUrl,
}: Performance) {
    return (
        <li>
            <figure>
                <img src={imgUrl} alt={name} />
            </figure>
            <h3>{name}</h3>
            <p>{description}</p>
            <nav>
                {spotifyUrl && <a href={spotifyUrl}> Spotify </a>}
                {instagramUrl && <a href={instagramUrl}> IG </a>}
                {youtubeUrl && <a href={youtubeUrl}> YT </a>}
                {websiteUrl && <a href={websiteUrl}> Web </a>}
                {soundcloudUrl && <a href={soundcloudUrl}> SC </a>}
            </nav>
        </li>
    );
}
