import React from "react"
import GetDate from "../scripts/date"

const getDate = new GetDate()
const currentYear = getDate.getYear()

function Footer() {
    return (
        <div><footer><p>Copyright {currentYear}</p></footer></div>
    )
}

export {Footer as default}