import styles from "./styles.module.scss"


export function SideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <div className={styles.containerH3}>
                    <h3>1</h3>
                </div>
                <div className={styles.groupText}>
                    <span>STEP 1</span><span>YOUR INFO</span></div>
            </div>
            <div className={styles.group}>
                <div className={styles.containerH3}>
                    <h3>2</h3>
                </div>
                <div className={styles.groupText}>
                    <span>STEP 2</span><span>SELECT PLAN</span></div>
            </div>
            <div className={styles.group}>
                <div className={styles.containerH3}>
                    <h3>3</h3>
                </div>
                <div className={styles.groupText}>
                    <span>STEP 3</span><span>ADD-ONS</span></div>
            </div>
            <div className={styles.group}>
                <div className={styles.containerH3}>
                    <h3>4</h3>
                </div>
                <div className={styles.groupText}>
                    <span>STEP 4</span><span>SUMMARY</span></div>
            </div>
        </div >
    )
}