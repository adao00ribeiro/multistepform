import { useContext } from "react";
import { IMyContextProps, MyContext } from "../../../context/mycontext";
import { TypePlan } from "../../../interfaces/IPlan";
import styles from "./styles.module.scss"

export function SelectPlan() {
    const { step, setStep, person, setPerson }: IMyContextProps = useContext(MyContext);

    const flexSEnd = {
        "justifyContent": "flex-end"
    }
    const handleBack = () => {
        setStep(1);
    }
    const handleNext = () => {
        setStep(3);
    }
    const handleSelectTypePlan = () => {
        var newPLan = person.plan;
        if (person.plan.typePlan == TypePlan.MONTHLY) {

            newPLan.typePlan = TypePlan.YEARLY

        } else {
            newPLan.typePlan = TypePlan.MONTHLY

        }
        setPerson((prev) => {
            return { ...prev, plan: newPLan }
        })
    }
    return (
        <div className={styles.container}>
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div className={styles.groupPlan}>
                <div className={styles.groupBox} onMouseDown={() => console.log("click")}>
                    <img src="/assets/images/icon-arcade.svg"></img>
                    <div className={styles.groupText}>
                        <span>Arcade</span>
                        <p>$9/mo</p>
                    </div>
                </div>
                <div className={styles.groupBox} onMouseDown={() => console.log("click")}>
                    <img src="/assets/images/icon-advanced.svg"></img>
                    <div className={styles.groupText}>
                        <span>Advanced</span>
                        <p>$12/mo</p>
                    </div>
                </div>
                <div className={styles.groupBox} onMouseDown={() => console.log("click")}>
                    <img src="/assets/images/icon-pro.svg"></img>
                    <div className={styles.groupText}>
                        <span>Pro</span>
                        <p>$15/mo</p>
                    </div>
                </div>
            </div>
            <div className={styles.groupSelectionMY} >
                <span style={person.plan.typePlan == TypePlan.MONTHLY ? { color: "var(--Marine-blue)" } : null}>
                    Monthly
                </span>
                <button className={styles.btn} onClick={handleSelectTypePlan}>
                    <div className={person.plan.typePlan == TypePlan.MONTHLY ? styles.divPendulumLeft : styles.divPendulumRight}></div>
                </button>
                <span style={person.plan.typePlan == TypePlan.YEARLY ? { color: "var(--Marine-blue)" } : null}>
                    Yearly
                </span>
            </div >
            <div className={styles.containerButton}>
                <input type="button" value="Go Back" onClick={handleBack} />
                <button onClick={handleNext} >Next Step</button>
            </div>
        </div >
    )
}

