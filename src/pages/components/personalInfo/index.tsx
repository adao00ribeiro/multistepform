import styles from "./styles.module.scss"

export function PersonalInfo() {
    return (
        <div className={styles.container}>
            <h1>Personal info</h1>
            <span>Please provide your name, email address, and phone number.</span>

            <form className={styles.form} action="">
                <div className={styles.group}>
                    <label htmlFor="inputName">Name</label>
                    <input id="inputName" className={styles.input} type="text" placeholder="e.g. Stephen King"></input>
                </div>
                <div className={styles.group}>
                    <label htmlFor="inputEmail">Email Address</label>
                    <input id="inputEmail" placeholder="e.g. stephenking@lorem.com"></input>
                </div>
                <div className={styles.group}>
                    <label htmlFor="inputPhoneNumeber">Phone Number</label>
                    <input id="inputPhoneNumeber" placeholder="e.g. +1 234 567 890"></input>
                </div>

                <div className={styles.containerButton}>
                    <button>Next Step</button>
                </div>
            </form >
        </div >)
}