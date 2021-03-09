// import logo from '../../public/images/logo.png'

import Image from 'next/image'
import Layout from '../layout'

const Header = () => {
    

    return (
        <Layout>
        <header className='header center'>
            <Image  
                src='/images/logo.png' alt='' width= {200} height='auto' 
            />
        </header>
        </Layout>
    )
}

export default Header
