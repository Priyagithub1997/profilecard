import React from 'react'


const Profiles = ({name,designation,status,skills,image }) => {
   
   

    return (
       
        <div className='cardcontainer'>

            <div className='card'>
                <div className='imagediv'>
                    <img src={image} alt='' height="100px" width="100px"></img>
                   
                    </div>
                    <p className={status ? " pro online" : " pro offline "}>{status ? "online": "offline" }</p>
                   
                       <p>{name}</p>
                       <p>{designation}</p>

                       <div className='btndiv'>
                        <button>Follow</button>
                        <button>Message</button>
                       </div>
                   <div className='skillsdiv'>

<p>Skills</p>
  {skills.map((skill,index)=>(
    <ul>
    <li key={index}>{skill}</li>
    </ul>
  ))}



                   </div>
                    
              

              

            </div>






        </div>


    
  
   
  )
}

export default Profiles