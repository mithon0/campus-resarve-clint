
import { useContext } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Navber = () => {
    // const [name, setname] = useState(null)
    const {user,logOut}=useContext(AuthContext);

    // const searchHandler = (e) => {
    //     e.preventDefault()

    //     const search = e.target.search.value
    //     console.log(search);
    //     setname(search)
    // }

    const logOutHandler =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut'
          }).then((result) => {
            if (result.isConfirmed) {
                logOut()
              Swal.fire(
                'LogOut!',
                'Your Account logOut success',
                'success'
              )
            }
          })
        
        
    }
    
    return (
        <div>
            <div className="navbar glass bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={`/collages`}>Collages</Link></li>
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/mycollage">My College</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">CampusReserve</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/collages`}>Collages</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/mycollage">My College</Link></li>
                        <form className='flex' >
                            <input name='search' type="text" placeholder="Search collages" className="input input-bordered w-full max-w-xs text-black" />
                            <button className='btn  btn-secondary'><FaSistrix className='text-xl' /></button>
                        </form>
                    </ul>
                </div>
                <div className="navbar-end">
                   {
                    user? <Link onClick={logOutHandler} className="btn btn-outline">logOut</Link>: <Link to="/login" className="btn btn-outline">Login</Link>
                   }
                    {
                        user? <div className="avatar">
                        <div className="w-10 mask mask-hexagon">
                         <Link to='/profile'> <img  className='w-full mask mask-hexagon' title={user.displayName} src={user.photoURL} /></Link>
                        </div>
                      </div>:<></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;