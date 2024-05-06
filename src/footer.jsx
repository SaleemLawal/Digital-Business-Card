import twitter from './assets/Twitter Icon.svg'
import facebook from './assets/Facebook Icon.svg'
import instagram from './assets/Instagram icon .svg'
import github from './assets/GitHub Icon.svg'
function Footer(){
    return (
        <>
            <div className="footer">
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={github}/>
            </div>
        </>
    )
}

export default Footer