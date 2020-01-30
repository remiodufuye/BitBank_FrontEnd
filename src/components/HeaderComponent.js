
import React from 'react'
import {Header,Image} from 'semantic-ui-react'
import logo from '../images/BitBANK.png'

const HeaderComponent = () => {
    return(<div>
         <Header as='h2'>
        {/* <Image circular src={logo} /> Welcome to BitBANK */}
        <Image circular src="" /> Welcome to BitBANK
        </Header>
        </div>
    )
}

export default HeaderComponent 