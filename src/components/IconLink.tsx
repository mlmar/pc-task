import styles from "./IconLink.module.less";

export interface IconLinkProps {
    className?: string;
    href: string;
    src: string;
    alt: string;
}

export function IconLink({ className = "", href, src, alt }: IconLinkProps) {
    return (
        <a className={`${styles.iconLink} ${className}`} href={href}>
            <img src={src} alt={alt}></img>
        </a>
    );
}
