import styles from './Table.module.css';
import { useContext, useState } from "react";
import MyContext from "../../contexts/MyContext";

const Table = () => {

    const { newUser, setNewUser, fName, setFName, lName, setLName, age, setAge } = useContext(MyContext);

    const [isEditing, setIsEditing] = useState(false);

    const counter = (item) => {
        return (
            newUser.indexOf(item) + 1
        )
    }

    const deleteHandler = (item) => {
        const newState = newUser.filter(data => data.id !== item.id);
        setNewUser(newState);
    }

    const editHandler = (item) => {
        setIsEditing(item.id);
        setFName(item.fName);
        setLName(item.lName);
        setAge(item.age);
    }

    const saveHandler = () => {
        const index = newUser.findIndex(item => item.id === isEditing);
        const temp = [...newUser];
        temp[index].fName = fName;
        temp[index].lName = lName;
        temp[index].age = age;
        setNewUser(temp);
        setIsEditing(false);
        setFName('');
        setLName('');
        setAge('');
    }

    return (
        <table className="table table-striped">
            <thead className="sticky-top">
                <tr>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col" className="text-center">first name</th>
                    <th scope="col" className="text-center">last name</th>
                    <th scope="col" className="text-center">age</th>
                    <th colSpan={2} className="text-center">option</th>
                </tr>
            </thead>
            <tbody>
                {newUser.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className="text-center">{counter(item)}</td>
                            {isEditing !== item.id && <td className="text-center w-25">{item.fName}</td>}
                            {isEditing === item.id && <td className="text-center w-25"><input type='text' className='w-75 text-center rounded-4' value={fName} onChange={(e) => { setFName(e.target.value) }} /></td>}

                            {isEditing !== item.id && <td className="text-center w-25">{item.lName}</td>}
                            {isEditing === item.id && <td className="text-center w-25"><input type='text' className='w-75 text-center rounded-4' value={lName} onChange={(e) => { setLName(e.target.value) }} /></td>}

                            {isEditing !== item.id && <td className="text-center w-25">{item.age}</td>}
                            {isEditing === item.id && <td className="text-center w-25"><input type='text' className='w-75 text-center rounded-4' value={age} onChange={(e) => { setAge(e.target.value) }} /></td>}

                            {isEditing !== item.id && <td className="text-center"><a href="#" className="btn btn-outline-success w-100" onClick={() => { editHandler(item) }}>edit</a></td>}
                            {isEditing === item.id && <td className="text-center"><a href="#" className="btn btn-outline-success w-100" onClick={saveHandler}>save</a></td>}

                            {isEditing !== item.id && <td className="text-center"><a href="#" className="btn btn-outline-danger w-100" onClick={() => { deleteHandler(item) }}>delete</a></td>}
                            {isEditing === item.id && <td className="text-center"><a href="#" className="btn btn-outline-danger w-100" onClick={() => { setIsEditing(false) }}>cancel</a></td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;