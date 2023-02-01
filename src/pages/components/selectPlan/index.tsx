import styles from "./styles.module.scss"

export function SelectPlan() {
    return (
        <div className={styles.container}>
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div className={styles.groupPlan}>
                <div className={styles.groupBox}>
                    <img src="/assets/images/icon-arcade.svg"></img>
                    <div className={styles.groupText}>
                        <span>Arcade</span>
                        <p>$9/mo</p>
                    </div>
                </div>
                <div className={styles.groupBox}>
                    <img src="/assets/images/icon-advanced.svg"></img>
                    <div className={styles.groupText}>
                        <span>Arcade</span>
                        <p>$9/mo</p>
                    </div>
                </div>
                <div className={styles.groupBox}>
                    <img src="/assets/images/icon-pro.svg"></img>
                    <div className={styles.groupText}>
                        <span>Arcade</span>
                        <p>$9/mo</p>
                    </div>
                </div>
            </div>
            <div className={styles.groupSelectionMY}>
                <span>
                    Monthly
                </span>
                <button className={styles.btn} > <div></div></button>
                <span>
                    Yearly
                </span>
            </div>
            <div className={styles.containerButton}>
                <input type="button" value="Go Back" />
                <button >Next Step</button>
            </div>
        </div>
    )
}

