/**
 * Hero section
 *  TODO toggle between images with media query?
 */
export function Hero() {
    return (
        <section>
            <img src="/hero.jpg" alt="The Moustache Bash in San Diego" />
            <img
                src="/hero-mobile.jpg"
                alt="The Moustache Bash in San Diego"
                style={{ display: "none" }}
            />
        </section>
    );
}
