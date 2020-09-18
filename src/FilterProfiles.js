import React from 'react';

const FilterProfiles = ( props ) => {
    return(
        <form onSubmit={ props.changeFilterCriteria }>
            <label htmlFor="filterCriteria">
                Filter criteria:
            </label>
            <select id="filterCriteria">
                <option value="All">
                    All
                </option>
                <option value="Student">
                    Student
                </option>
                <option value="Mentor">
                    Mentor
                </option>
            </select>
            <button type="submit">
                Change Filter
            </button>
        </form>
    );
} 

export default FilterProfiles;