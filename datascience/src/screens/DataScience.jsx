 import React from 'react'
 // return an iframe of https://robertsloan22.github.io/AppliedDataScience/

 const DataScience = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    if (show) {
        return (
            <div>
<iframe src="https://robertsloan22.github.io/AppliedDataScience/" height="500" width="700" title="Iframe Example"></iframe>
            </div>
        )
    }
    return (
        <div>
            <button onClick={handleClick}>DataScience</button>
        </div>
    )
}
    export default DataScience
    