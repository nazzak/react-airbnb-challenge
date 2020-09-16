import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core"



function Banner() {
    const [showSearch, setShowSearch] = useState(false)

    const toggleSearchButton = () => {
        setShowSearch(!showSearch)
    }

    return (
        <div className="banner">
            <div class="banner__search">
                <Button onClick={() => toggleSearchButton()} className='banner__searchButton' variant='outlined'>
                {showSearch === true ? "Search Dates" : "Hide"} 
                </Button>
                {showSearch === true ?
                        <h1>
                            true
                        </h1>
                        :
                        undefined
                    }
            </div>
            <div class="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'>
                    Explore Nearby
            </Button>
            </div>
        </div>
    )
}

export default Banner
