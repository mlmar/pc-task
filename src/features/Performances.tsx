import styles from "./Performances.module.less";
import { usePerformances } from "../hooks/usePerformances";
import type { Performance } from "../types/Performance";
import { IconLink } from "../components/IconLink";

export function Performances() {
    const performances = usePerformances();

    return (
        <section className={styles.performances}>
            <h2> Feature 4 stages with live performances by: </h2>
            <ul>
                {performances.map((performance) => {
                    return (
                        <PerformanceCard
                            {...performance}
                            key={performance.name}
                        />
                    );
                })}
            </ul>
            <img
                className={styles.blueCorner}
                src="blue-thing.webp"
                alt="Blue"
            />
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
        <li className={styles.performancesCard}>
            <figure>
                <img src={imgUrl} alt={name} loading="lazy" />
            </figure>
            <h3>{name}</h3>
            <p>{description}</p>
            <nav>
                {spotifyUrl && (
                    <IconLink
                        src="icons/spotify-icon.webp"
                        href={spotifyUrl}
                        alt="spotify"
                    />
                )}
                {soundcloudUrl && (
                    <IconLink
                        src="icons/soundcloud-icon.svg"
                        href={soundcloudUrl}
                        alt="soundcloud"
                    />
                )}
                {instagramUrl && (
                    <IconLink
                        src="icons/ig-2-icon.webp"
                        href={instagramUrl}
                        alt="instagram"
                    />
                )}
                {youtubeUrl && (
                    <IconLink
                        src="icons/yt-icon.webp"
                        href={youtubeUrl}
                        alt="youtube"
                    />
                )}
                {websiteUrl && (
                    <IconLink
                        src="icons/web-icon.webp"
                        href={websiteUrl}
                        alt="website"
                    />
                )}
            </nav>
        </li>
    );
}
