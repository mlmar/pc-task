import { IconLink } from "../components/IconLink";
import styles from "./Header.module.less";

const placeholderUrl = "https://google.com";
const navItems: { label: string; url: string }[] = [
    {
        label: "San Diego",
        url: placeholderUrl,
    },
    {
        label: "San Francisco",
        url: placeholderUrl,
    },
    {
        label: "Gallery",
        url: placeholderUrl,
    },
    {
        label: "Info",
        url: placeholderUrl,
    },
];

export function Header() {
    return (
        <header className={styles.header}>
            <figure className={styles.figure}>
                <img
                    src="/moustache-bash.svg"
                    alt="Moustache Bash"
                    loading="eager"
                />
                <figcaption>
                    Upcoming bash in San Diego March 23, 2024{" "}
                </figcaption>
            </figure>
            <div className={styles.headerRight}>
                <nav className={styles.nav}>
                    <ul>
                        {navItems.map(({ label, url }) => {
                            return (
                                <li key={label}>
                                    <a href={url}> {label} </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={styles.links}>
                    <a
                        href={placeholderUrl}
                        className={styles.ticketsSoonButton}
                    >
                        Tickets Soon
                    </a>
                    <IconLink
                        className={styles.icon}
                        href={placeholderUrl}
                        src="/icons/fb-icon.webp"
                        alt="Facebook"
                    />
                    <IconLink
                        className={styles.icon}
                        href={placeholderUrl}
                        src="/icons/ig-icon.webp"
                        alt="Instagram"
                    />
                </div>
            </div>
        </header>
    );
}
