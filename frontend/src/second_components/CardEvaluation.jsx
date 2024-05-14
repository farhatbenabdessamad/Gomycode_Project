import React from 'react'
import Card from 'react-bootstrap/Card';
function CardEvaluation({e}) {
  return (
    <div>
 <Card style={{  width: '50rem',height:"24rem" }}>

<Card.Body style={{ display:"flex"}}>
    <div style={{display:"flex",flexDirection:"column"}}>

    
{e?.images?.map(e=><Card.Img style={{width:"6rem"}} src={e}/>)}</div>
<Card.Text>{e.description}</Card.Text>
</Card.Body> 
      
</Card>  



    </div>
  )
}

export default CardEvaluation