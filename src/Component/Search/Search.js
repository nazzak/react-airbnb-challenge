import React, {useState }from 'react'
import './Search.css';

//DATE PICKER STYLE as recomended by the developer
import "react-date-range/dist/styles.css"
// main style file
import "react-date-range/dist/theme/default.css"
// component
import  { DateRangePicker } from "react-date-range"


//CALENDAR
function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


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
        </div>
    )
}

export default Search
