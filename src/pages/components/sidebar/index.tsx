import { useContext, useState } from "react";
import { MyContext } from "../../../context/mycontext";
import styles from "./styles.module.scss"


export default function SideBar() {
    const { step, setStep }: any = useContext(MyContext);
    const st = {
        'backgroundColor': 'var(--Light-blue)',
        'color': "black",
    }

    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <div className={styles.groupbox}>
                    <div className={styles.containerH3} style={step == 1 ? st : null}>
                        <h3>1</h3>
                    </div>
                    <div className={styles.groupText}>
                        <span>STEP 1</span><p>YOUR INFO</p></div>
                </div>
                <div className={styles.groupbox}>
                    <div className={styles.containerH3} style={step == 2 ? st : null}>
                        <h3>2</h3>
                    </div>
                    <div className={styles.groupText}>
                        <span>STEP 2</span><p>SELECT PLAN</p></div>
                </div>
                <div className={styles.groupbox}>
                    <div className={styles.containerH3} style={step == 3 ? st : null}>
                        <h3>3</h3>
                    </div>
                    <div className={styles.groupText} >
                        <span>STEP 3</span><p>ADD-ONS</p></div>
                </div>
                <div className={styles.groupbox}>
                    <div className={styles.containerH3} style={step == 4 ? st : null}>
                        <h3>4</h3>
                    </div>
                    <div className={styles.groupText}>
                        <span>STEP 4</span><p>SUMMARY</p></div>
                </div>
            </div>

        </div >
    )
}