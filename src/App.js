
import Profiles from "./Profiles";


function App() {
  const userdata=[{
    name:"siva",
    status:true,
    designation:"web developer",
    skills:["html","css","js"],
    image:"/images/blackshirt.jpg"
   
  } ,
  {
    name:"ram",
    status:false,
    designation:"software developer",
    skills:["c","c++","java"],
    image:"/images/whiteshirt (2).jpg"
    
   
  },
  {
    name:"siva",
    status:true,
    designation:"web developer",
    skills:["html","css","js"],
    image:"/images/whiteshirt (3).jpg"
    
   
  } ,
  {
    name:"ram",
    status:false,
    designation:"software developer",
    skills:["c","c++","java"],
    image:"/images/whiteshirt.jpg"
    
  }

]




 return(
<>
 {userdata.map((user,index)=>(
  <Profiles 
  key={index} 
  name={user.name}
  status={user.status}
  designation={user.designation}
  skills={user.skills}
  image={user.image}

 />

 ))}

</>

 )
  
}

export default App;
