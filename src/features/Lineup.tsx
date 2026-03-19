import styles from "./Lineup.module.less";

export function Lineup() {
    return (
        <section className={styles.lineup}>
            <figure>
                <img src="lineup.jpg" alt="Lineup" loading="lazy" />
            </figure>
        </section>
    );
}
