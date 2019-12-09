import React from "react"
import GetDate from "../scripts/date"

const getDate = new GetDate()
const currentYear = getDate.getYear()

function Footer() {
    return (
        <footer><p>Copyright {currentYear}</p></footer>
    )
}

export {Footer as default}