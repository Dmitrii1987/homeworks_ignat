import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: ()=> void // need to fix any
    deleteAffairCallback: (id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
