import { MutableRefObject, useContext, useRef } from "react";
import { IMyContextProps, MyContext } from "../../../context/mycontext";
import { TypePlan } from "../../../interfaces/IPlan";
import styles from "./styles.module.scss"

export default function SelectPlan() {
    const { step, setStep, person, setPerson }: IMyContextProps = useContext(MyContext);
    const plan = person.plan.typePlan === TypePlan.MONTHLY ? "mo" : "yr";
    const flexSEnd = {
        "justifyContent": "flex-end"
    }
    const backgroundColorBlue = {
        "backgroundColor": "var(--Magnolia)"
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
    const handleSelectPlan = (name: string, price: string) => {
        var newPlan = {
            ...person.plan, name: name,
            price: price
        }

        setPerson((prev) => {
            return { ...prev, plan: newPlan }
        })


        console.log(person)
    }

    return (
        <div className={styles.container}>
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div className={styles.groupPlan}>
                <div className={styles.groupBox} style={person.plan.name === "Arcade" ? backgroundColorBlue : null} onMouseDown={() => { handleSelectPlan("Arcade", "9") }} >
                    <img src="/assets/images/icon-arcade.svg"></img>
                    <div className={styles.groupText} >
                        <h3>Arcade</h3>
                        <p>$9/{plan}</p>
                        {person.plan.typePlan === TypePlan.YEARLY && <span>2 months free</span>}

                    </div>
                </div>
                <div className={styles.groupBox} style={person.plan.name === "Advanced" ? backgroundColorBlue : null} onMouseDown={() => { handleSelectPlan("Advanced", "12") }}>
                    <img src="/assets/images/icon-advanced.svg"></img>
                    <div className={styles.groupText}>
                        <h3>Advanced</h3>
                        <p>$12/{plan}</p>
                        {person.plan.typePlan === TypePlan.YEARLY && <span>2 months free</span>}
                    </div>
                </div>
                <div className={styles.groupBox} style={person.plan.name === "Pro" ? backgroundColorBlue : null} onMouseDown={() => { handleSelectPlan("Pro", "15") }}>
                    <img src="/assets/images/icon-pro.svg"></img>
                    <div className={styles.groupText}>
                        <h3>Pro</h3>
                        <p>$15/{plan}</p>
                        {person.plan.typePlan === TypePlan.YEARLY && <span>2 months free</span>}
                    </div>
                </div>
            </div>
            <div className={styles.groupSelectionMY} >
                <span style={person.plan.typePlan == TypePlan.MONTHLY ? { color: "var(--Marine-blue)" } : null}>
                    Monthly
                </span>
                <button className={styles.btn} style={person.plan.typePlan === TypePlan.MONTHLY ? null : flexSEnd} onClick={handleSelectTypePlan}>
                    <div className={styles.divPendulumRight} ></div>
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

