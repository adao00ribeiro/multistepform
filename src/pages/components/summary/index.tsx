import { useContext, useState } from "react"
import { MyContext } from "../../../context/mycontext";
import styles from "./styles.module.scss"

export function Summary() {
    const { step, setStep }: any = useContext(MyContext);
    const handleBack = () => {
        setStep(3);
    }
    const handleNext = () => {
        alert("Finalizado");
    }
    return (
        <div className={styles.container}>
            <h1>Finishing up</h1>
            <span>Double-check everything looks OK before confirming.</span>
            <div>
                <div>
                    <div>
                        <span></span>
                        <p></p>
                    </div>

                    <span></span>
                </div>
                <div>

                </div>
            </div>
            <div>

                <span>Total(per month)</span>
                <p>+$12/mo</p>
            </div>
            <div className={styles.containerButton}>
                <input type="button" value="Go Back" onClick={handleBack} />
                <button onClick={handleNext} >Next Step</button>
            </div>
        </div>
    )
}