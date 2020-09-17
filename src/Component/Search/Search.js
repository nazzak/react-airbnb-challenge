import React, { useState } from 'react'
import './Search.css';

//DATE PICKER STYLE as recomended by the developer
import "react-date-range/dist/styles.css"
// main style file
import "react-date-range/dist/theme/default.css"
// component
import { DateRangePicker } from "react-date-range"

import { Button } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"
import { useHistory } from 'react-router-dom';


//CALENDAR
function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const history = useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0}
                defaultValue={2}
                type="number" />
            <Button onClick={() => { history.push("/search")}}>Search Airbnb</Button>
        </div>
    )
}

export default Search
