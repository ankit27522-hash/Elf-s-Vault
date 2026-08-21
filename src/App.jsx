import { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Navigation from './components/Header'
import Bottom from './components/Bottom'

import backGround from './assets/sword in stone pixel.png'
import Fairyimg from './assets/fairy_pixel-removebg-preview.png'
import Knightimg from './assets/knight_pixel-removebg-preview.png'
import swordimg from './assets/white_sword-removebg-preview.png'
import me from './assets/me.png'
import closed_eye from './assets/closed_eye.svg'
import open_eye from './assets/open_eye.svg'
import copy from './assets/copy_icon.svg'
import edit from './assets/edit_icon.svg'
import deleteIcon from './assets/delete_icon.svg'
import contact from './assets/blue girl with wand.png'
import knight from './assets/me.png'
import wizard from './assets/wizard.png'

function App() {

  const ref = useRef();
  const passwordRef=useRef();

  const [form, setform] = useState({site: "", username: "", password:"", link:""});
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords=localStorage.getItem("passwords");
    
    if(passwords){
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const handleChange=(e)=>{
    setform({...form, [e.target.name]:e.target.value})
  }
  

  const [showpassword, setshowpassword] = useState(false)

  // 2. Toggle the boolean state
  const togglePassword = () => {
    setshowpassword((prev) => !prev)
    // if(passwordRef.current.type === "text")
    //   passwordRef.current.type = "password"
    // else 
    //   passwordRef.current.type = "text"
  }

  const copyText=(text)=>{
    // alert("copied to clipboard");
    navigator.clipboard.writeText(text);
    toast('🦄 copied to clipboard', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  }

  const SaveData=()=>{
    if (!form.site || !form.username || !form.password) {
    toast.error('❌ Site, Username, and Password cannot be empty!', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    return; // Stop function execution
  }

    setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
    console.log([...passwordArray, form])

    toast.success('💾 Password saved successfully!', {
    position: "bottom-left",
    autoClose: 3000,
    theme: "light",
  });
    setform({site:"", password:"", username:"", link:""})

    
  }

  const deletePassword=(id)=>{
    let c=confirm("do you really want to delte this password?")
    if(c){  
      const updatedArray = passwordArray.filter(item => item.id !== id);
      setpasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      toast.success('🗑️ Password deleted', {
        position: "bottom-left",
        autoClose: 3000,
        theme: "light",
      });
    }
  }

  const editPassword=(id)=>{
    console.log("editing password of id", id);
    setform(passwordArray.filter(item=>item.id===id)[0]);              // to set the input form with values to be edited
    setpasswordArray(passwordArray.filter(item=>item.id!==id));
  }

  return (
    <>
    <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      <div className='w-full min-h-screen bg-cover bg-center bg-fixed  pixel-art [image-rendering:crisp-edges] items-center py-10 pt-0 pb-0 flex flex-col justify-between'
           style={{ backgroundImage: `url(${backGround})` }}>
            <Navigation/>
            
            <div className='welcome mx-auto flex flex-col items-center justify-center [text-shadow:2px_2px_0px_#000] mt-[5%]'>
              <h1 className='text-3xl text-white mx-auto font-bold font-pixel'>Welcome to </h1>
              <div className='flex items-center justify-center'>
                <img src={Fairyimg} alt="" className='w-[20%] md:w-[10%]'/>
                <div className='center text-white flex items-center justify-center'>                 
                    <div className=' text-[#69d84f] font-pixel font-bold '>Elf's</div>
                    <span>&nbsp;</span>
                    <div className='font-pixel font-bold'>vault</div>                  
                </div>
                <img src={Knightimg} alt="" className=' w-[20%] md:w-[10%]'/>
              </div>
              <div className='down text-white font-pixel text-center'>Your very own password manager</div>
            </div>

            <div className='inputs mx-auto w-[95%]  md:w-[80%] flex flex-col gap-2 font-placeholder'>
              <input type="text" value={form.site} onChange={handleChange} id="site" name="site" className='w-full bg-white rounded-2xl px-2 py-1' placeholder='Enter name of the site'/>
              <div className='flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center relative'>
                <input type="text" value={form.username} onChange={handleChange} id="username" name="username" className='w-full bg-white rounded-2xl px-2 py-1 mx-0.5' placeholder='Enter Username'/>
                <input type={showpassword? "text": "password"} ref={passwordRef} value={form.password} onChange={handleChange} id="password" name="password" className='w-full bg-white rounded-2xl px-2 py-1 mx-0.5' placeholder='Enter Password'/>
                
                <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={togglePassword}>
                    <img ref={ref} className='p-1' width={26} src={showpassword ? open_eye : closed_eye} alt="hello" />
                </span>
              </div>
              <input type="text" value={form.link} onChange={handleChange} id="link" name="link" placeholder='Paste the link of the website(optional)' className='w-full bg-white rounded-2xl px-2 py-1' />
              <button onClick={SaveData} className='bg-[#69d84f] rounded-2xl cursor-pointer'>Submit</button>
            </div>

            <div className='UsersData mx-auto w-[95%] md:w-[80%] mt-4'>
              <div className='flex items-end justify-between [text-shadow:2px_2px_0px_#000]'>
                <div className='text-white font-bold text-3xl font-placeholder'>
                  Your data
                </div>            
                <div className='table-images'>
                  <img src={me} alt="me" className='w-20 md:w-30 object-contain' />
                </div>
              </div>

              <div className='table w-full'>
                 <thead className='bg-green-800 text-white'>
                    <tr>
                        <th className='py-2 w-[30%]'>Site</th>
                        <th className='py-2 w-[20%]'>Username</th>
                        <th className='py-2 w-[20%]'>Password</th>
                        <th className='py-2 w-[30%]'>Actions</th>                       
                    </tr>
                  </thead>

                  <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <a href={item.link} target='_blank'>{item.site}</a>                       
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer ' onClick={() => { copyText(item.username) }}>                                                 
                                                    <img src={copy} alt="" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
                                                    trigger="hover"/>                                                
                                             </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>                                                 
                                                    <img src={copy} alt="" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    trigger="hover"/>                                                
                                             </div>
                                        </div>
                                    </td>
                                    <td className='flex justify-center py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                                            <img src={edit} alt="" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    trigger="hover"/>  
                                        </span>
                                        <span className='cursor-pointer mx-1'onClick={()=>{deletePassword(item.id)}}>
                                            <img src={deleteIcon} alt="" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    trigger="hover"/>  
                                        </span>
                                    </td>
                                </tr>

                            })}
                        </tbody>
              </div>
            </div>
            <Bottom/>
      </div>
      
    </>
  )
}

export default App
