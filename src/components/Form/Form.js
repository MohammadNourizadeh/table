import { useContext, useState } from 'react';
import styles from './Form.module.css'
import MyContext from '../../contexts/MyContext';

const Form = () => {

    const { setNewUser, fName, setFName, lName, setLName, age, setAge } = useContext(MyContext);

    const userAddHandler = (e) => {
        e.preventDefault();

        setNewUser((prevState) => [...prevState, { id: crypto.randomUUID(), fName, lName, age }])
        setFName('')
        setLName('')
        setAge('')

        const fNameInput = document.getElementById('floatingInput');
        const lNameInput = document.getElementById('floatingLastName');
        const ageInput = document.getElementById('floatingAge')

        fNameInput.value = '';
        lNameInput.value = '';
        ageInput.value = '';
    }

    return (
        <>
            <h2 className={`mb-4 ${styles.fontFamily}`}>enter users information</h2 >
            <form className="w-100 d-flex flex-column align-items-center">
                <div className="form-floating mb-3 w-75">
                    <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setFName(e.target.value) }} />
                    <label htmlFor="floatingInput" className={`text-dark ${styles.fontFamily}`}>first name</label>
                </div>
                <div className="form-floating mb-3 w-75">
                    <input type=" text" className="form-control rounded-4" id="floatingLastName" placeholder=" last-name" onChange={(e) => { setLName(e.target.value) }} />
                    <label htmlFor="floatingLastName" className={`text-dark ${styles.fontFamily}`}>last name</label>
                </div>
                <div className="form-floating mb-3 w-75">
                    <input type=" text" className="form-control rounded-4" id="floatingAge" placeholder=" age" onChange={(e) => { setAge(e.target.value) }} />
                    <label htmlFor="floatingAge" className={`text-dark ${styles.fontFamily}`}>age</label>
                </div>
                <button type="submit" className={`btn btn-success w-50 rounded-5 ${styles.fontFamily}`} onClick={userAddHandler}>add</button>
            </form>
        </>
    )
}

export default Form;