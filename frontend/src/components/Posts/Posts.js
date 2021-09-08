import React,{useState,useEffect} from 'react'
import './styles.css'
// import image from '../../images/pic3.jpg'



const Posts = () => {
    const [data,setdata]=useState([])
   
    useEffect(()=>{
        fetch("http://localhost:5000/api/get")
      
        .then((res)=>{if(res.ok){
            return res.json()
        }})
        .then(JsonRes=>{setdata(JsonRes)})
        .catch((err)=>console.log(err))
    },[data])
  
    
    return (
        <>
      {data&&data.map((item)=>   

      <div class="ui-card">
	<img src={item.image} alt="" />
	<div class="description">
		<h3>{item.creator}</h3>
		<h3>{item.title}</h3>
		<p>{item.message}</p>
		<p>{item.tags}</p>
		
	</div>
</div>

)}

        {/* <div className="cards">

            <div className="image">
                <img  src={item.image} alt=""  />
            </div>

            <div className="text">
                
                <p className="para1">{item.creator}</p>
        
                <p className="para">{item.title}</p>
                
                <p className="para">{item.message}</p>
            
                <p className="para">{item.tags}</p>
            </div>
        
       
            
       
    





 </div> */}

             
            
        </>
       
    )
}

export default Posts

