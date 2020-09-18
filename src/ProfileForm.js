import React from 'react';

const ProfileForm = ( props ) => {
    return(
        <form onSubmit={ props.addProfile }>
            <label htmlFor="firstName"> First Name: </label>
            <input type="text" id="firstName" />
            <label htmlFor="id"> Identifier: </label>
            <input type="number" id="identifier" />
            <label htmlFor="role"> Role: </label>
            <select id="role">
                <option value="Student">
                    Student
                </option>
                <option value="Mentor">
                    Mentor
                </option>
            </select>
            <button type="submit">
                Add Profile
            </button>
        </form>
    );
}

export default ProfileForm;