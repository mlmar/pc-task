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
        <header>
            <figure>
                <img alt="TODO" />
                <figcaption>
                    {" "}
                    Upcoming bash in San Diego March 23, 2024{" "}
                </figcaption>
            </figure>
            <nav>
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
            <a href={placeholderUrl}> Tickets Soon </a>
            <a> FB </a>
            <a> IG </a>
        </header>
    );
}
