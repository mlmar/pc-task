import styles from "./Intro.module.less";

export function Intro() {
    return (
        <section className={styles.intro}>
            <figure>
                <img
                    src="/intro.webp"
                    alt="Moustache Man with sunglasses"
                    loading="lazy"
                />
                <img
                    className={styles.sticker}
                    src="/sticker.webp"
                    alt="Sticker"
                    loading="lazy"
                />
            </figure>
            <article>
                <h2>
                    Reflecting on the past has us daydreaming for the next one.
                </h2>
                <p>
                    The 2023 Base sold out the Port Pavilion once again last
                    March, summoning thousands of funk-drunk souls and cementing
                    Stache Bash as a household name in Southern California. Four
                    Stages, half a dozen bars, a roller rink and a ridiculous
                    quantity of disco balls set the scene as we boogied into the
                    night for a party unanimously known as the best Bash of all
                    time. Come Saturday, March 23rd, we'll be leveling up yet
                    again. Set tuned&mdash;don't want to miss this one!
                    Following <a href="https://google.com">@TheMoustacheBash</a>{" "}
                    and subscribe to our email list to be the first to know when
                    tickets go on sale.
                </p>
                <a className={styles.followButton} href="https://google.com">
                    Follow on Instagram
                </a>
            </article>
        </section>
    );
}
