import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any// need to fix any
    deleteAffairCallback: ()=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
            // вывести название дела и приоритет

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
