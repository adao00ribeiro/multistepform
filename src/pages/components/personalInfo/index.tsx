import { useContext, useState } from "react"
import { MyContext } from "../../../context/mycontext";
import styles from "./styles.module.scss"

export function PersonalInfo() {
    const { step, setStep, setPerson }: any = useContext(MyContext);
    const [inputs, setInputs] = useState(
        {
            inputName: "",
            inputEmail: "",
            inputPhoneNumber: ""
        }
    );
    const [fieldError, setfieldError] = useState(
        {
            name: false,
            email: false,
            phone: false
        }
    );
    const ThifField = () => {
        return (
            <span>This field is required</span>
        )
    }
    const handleInput = event => {
        const { name, value } = event.target;

        setInputs((prev) => {
            return { ...prev, [name]: value }
        });
        console.log(name, value)
    }
    const handleNext = () => {
        const enableInputName = inputs.inputName == "" ? true : false;
        const enableInputEmail = inputs.inputEmail == "" ? true : false;
        const enableInputPhone = inputs.inputPhoneNumber == "" ? true : false;
        setfieldError((prev) => {

            return {
                ...prev,
                name: enableInputName,
                email: enableInputEmail,
                phone: enableInputPhone,
            }
        })
        if (!enableInputEmail && !enableInputEmail && !enableInputPhone) {
            setPerson((prev) => {
                return {
                    ...prev,
                    name: inputs.inputName,
                    email: inputs.inputEmail,
                    phoneNumber: inputs.inputPhoneNumber
                }
            });
            setStep(2);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className={styles.container}>
            <h1>Personal info</h1>
            <span>Please provide your name, email address, and phone number.</span>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <div className={styles.groupText}>
                        <label htmlFor="inputName">Name</label>
                        {fieldError.name && <ThifField></ThifField>}
                    </div>
                    <input value={inputs.inputName} onChange={handleInput} id="inputName" name="inputName" className={styles.input} type="text" placeholder="e.g. Stephen King"></input>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupText}>
                        <label htmlFor="inputEmail">Email Address</label>
                        {fieldError.email && <ThifField></ThifField>}
                    </div>
                    <input value={inputs.inputEmail} onChange={handleInput} id="inputEmail" name="inputEmail" type="email" placeholder="e.g. stephenking@lorem.com"></input>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupText}>
                        <label htmlFor="inputPhoneNumeber">Phone Number</label>
                        {fieldError.phone && <ThifField></ThifField>}
                    </div>
                    <input value={inputs.inputPhoneNumber} onChange={handleInput} id="inputPhoneNumber" name="inputPhoneNumber" placeholder="e.g. +1 234 567 890"></input>
                </div>
            </form >
            <div className={styles.containerButton}>
                <button onClick={handleNext}>Next Step</button>
            </div>
        </div >)
}