import React from 'react'
import Card from 'React-bootstrap/Card'
// return an iframe of https://robertsloan22.github.io/Network-gameofthrones/

const NetworkAnalysis = () => {
   const [show, setShow] = React.useState(true)
   const handleClick = () => {
       setShow(true)
   }
   const handleClose = () => {
       setShow(false)
   }
   if (show) {
       return (
           <div>
<iframe src="https://robertsloan22.github.io/Network-gameofthrones/" height="500" width="700" title="Iframe Example"></iframe>
           </div>
       )
   }
   return (
       <>
       <h1>Network Analysis 001</h1>
       <Card style={{ width: '18rem' }}>
           <Card.Title>DataScience</Card.Title>
           <Card.Body>
       <div>
           <button onClick={handleClick}>DataScience</button>
       </div>
       </Card.Body>
       </Card>
       
       </>
   )
}
   export default NetworkAnalysis
   