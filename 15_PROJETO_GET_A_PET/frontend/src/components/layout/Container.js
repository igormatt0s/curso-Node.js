import styles from './Container.module.css'

// As tags filhas são representadas pelo {children}
function Container({ children }) {
    return (
        <main className={styles.container}>{children}</main>
    )
}

export default Container