import React from "react";

const SearchStatus = (length) => {
    let table = document.querySelector('table')
    let string = ''
    let classes = "badge bg-primary";
    const n = length % 10
    if (length === 0) {
        string = 'Никто с тобой не тусанет'
        classes = "badge bg-danger"
        table.innerHTML = ''
    } else if (length >= 11 && length <= 20) {
        string = `${length} человек тусанет с тобой сегодня`
    } else if (n >= 2 && n <= 4) {
        string = `${length} человекa тусанут с тобой сегодня`
    } else {
        string = `${length} человек тусанет с тобой сегодня`
    }
    return <span className={classes}>{string}</span>
}   


export default SearchStatus