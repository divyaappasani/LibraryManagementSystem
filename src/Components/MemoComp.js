import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo component')
    return (
        <div>
            <h4>MemoComponent{name}</h4>
        </div>
    )
}

export default React.memo(MemoComp)
