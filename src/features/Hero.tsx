import styles from "./Hero.module.less";

/**
 * Hero section
 *  TODO toggle between images with media query?
 */
export function Hero() {
    return (
        <section className={styles.hero}>
            <img
                data-landscape
                src="/hero.jpg"
                alt="The Moustache Bash in San Diego"
            />
            <img
                data-mobile
                src="/hero-mobile.jpg"
                alt="The Moustache Bash in San Diego"
            />
        </section>
    );
}
