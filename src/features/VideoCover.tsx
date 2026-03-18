import styles from "./VideoCover.module.less";

export function VideoCover() {
    return (
        <section className={styles.videoCover}>
            <h2>
                <span>We're still flying high on 2023 leftovers.</span>
                <br />
                <span>
                    Click the tube to relive some action from last year.
                </span>
            </h2>
            <a href="https://google.com">
                <figure>
                    <img
                        src="/video-cover.webp"
                        alt="Video Cover"
                        loading="lazy"
                    />
                    <figcaption> View More on YouTube &#9654;</figcaption>
                </figure>
            </a>
        </section>
    );
}
