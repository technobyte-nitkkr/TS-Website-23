import "./style.css"

import React, { useState } from 'react'
import SearchBox from "./SearchBox"

export default function Modal({element, menuItems, onMenuClick}) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <div className="modal-cover"></div>
            <div className="modal-container">
                <div className="modal-top">
                    <div className="tag"><img src="/assets/modal/tag.png" alt="" className="modal-top-img"/></div>
                    <SearchBox title="mona-github-github-g59jpq2w5w7.github.dev"/>
                    <div className="tag"><img src="/assets/modal/add.png" alt="" className="modal-top-img"/></div>
                </div>
                <div className="modal-body">
                    <div className="modal-menu">
                        <img src="/assets/modal/menu.svg" alt="" onClick={()=>menuItems?setMenuOpen(!menuOpen):menuOpen}/>
                        <div className="modal-menu-items" style={menuOpen==false?{width:"0px", padding:"0px"}:{}}>
                            <div>
                                {
                                    menuItems?.map((e)=>{
                                        return <div onClick={onMenuClick} key={e.label}>{e.label}</div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-content">
                        {element}
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <Modal menuItems={[{label:"Hackshetra"}, {label:"BlackBox"}]} onMenuClick={function} element={<Element/>}/> */}