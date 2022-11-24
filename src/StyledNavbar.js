import { NavLink , Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";


const  Navbar =()=>
{
    
    const {user, dispatch}= useContext(Context);
    // const user= true
    const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
    }
    return (
        <nav className="navbar">
        <NavLink 
        to ='/'
        className={({isActive}) =>(isActive ? 'link active': 'link')}
        >
        </NavLink> 
        
        <div className="navbar">
            <div className="top-left">
                <i class="top-icon fab fa-instagram-square"></i>
                <i class="top-icon fab fa-tiktok"></i>
                <i class="top-icon fab fa-linkedin"></i>
                <i class="top-icon fab fa-etsy"></i>
            </div>
            <div className="links top-center">
            <NavLink to='/' className="lnk" element={<Home/>}>Home</NavLink>
            <NavLink to='/about' className="lnk" element={<About/>}>Blog Posts</NavLink>
            <NavLink to='/write' className="lnk" element={<Write />}>Write</NavLink>       
         
            </div>
            <div className="top-right">
                {user ? (   
               
                <>
                 <li  className="lnk" onClick={handleLogout} >{user && "Logout" }</li>

                   <Link to='/settings' className="lnk" element={<Settings/>}>    <img className="top-search-icon" 
                // src={simon} 
                src={user.profilePic} 
                alt=""/></Link> 
                
                 
                </>
                ) :(
                    <>
                <Link to='/login' className="lnk" element={<Login/>}>Login</Link> 
                {/* <Link to='/register' className="lnk" element={<Register/>}>Register</Link>    */}
                </>
                )}
             
            <i class="fas fa-search"></i>
              
            </div>
        </div>
        </nav>
        
        )
}
export default Navbar;