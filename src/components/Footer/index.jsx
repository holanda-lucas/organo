import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='media'>
                <img src="images/fb.png" alt="fb" />
                <img src="images/tw.png" alt="tw" />
                <img src="images/ig.png" alt="ig" />
            </div>
            <img src="/images/logo.png" alt="logo" />
            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Footer