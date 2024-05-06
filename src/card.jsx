import profilePic from './assets/profile_pic.png'
import Content from './content.jsx'

function Card(){
    return (
        <section id="card">
            <img src= {profilePic} alt="Profile pic" className="profile-pic" />
            <div className='content'>
                <Content />
            </div>
        </section>
    )
}

export default Card