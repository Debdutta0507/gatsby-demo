import React from 'react'
import Navbar from './Navbar'
import '../Styles/global.css'
export default function Layout({children}) {
    return (
        <div classname='layout'>
            <Navbar/>
            <div className='containt'>
                {children}
            </div>
            <footer>
              <p>  Copyright owned my Debdutta 2021</p>
            </footer>

            
        </div>
    )
}
