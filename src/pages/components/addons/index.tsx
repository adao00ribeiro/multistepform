import { useContext } from "react";
import { MyContext } from "../../../context/mycontext";
import styles from "./styles.module.scss"

export function Addons() {
    const { step, setStep }: any = useContext(MyContext);
    const handleBack = () => {
        setStep(2);
    }
    const handleNext = () => {
        setStep(4);
    }
    return (

        <div className={styles.container}>
            <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
            <div className={styles.group}>
                <div className={styles.groupBox}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="true"></input>
                    <div className={styles.groupBoxText}>
                        <span>Online Service</span>
                        <p>Access to multiplayer games</p>
                    </div>
                    <h3>+$1/mo</h3>
                </div>
                <div className={styles.groupBox}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="true"></input>
                    <div className={styles.groupBoxText}>
                        <span>Larger storage</span>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <h3>+$2/mo</h3>
                </div>
                <div className={styles.groupBox}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="true"></input>
                    <div className={styles.groupBoxText}>
                        <span>Customizable Profile</span>
                        <p>Custom theme on your profile</p>
                    </div>
                    <h3>+$2/mo</h3>
                </div>
            </div>
            <div className={styles.containerButton}>
                <input type="button" value="Go Back" onClick={handleBack} />
                <button onClick={handleNext}>Next Step</button>
            </div>
        </div>


    )
}