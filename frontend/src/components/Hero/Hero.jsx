import './Hero.scss'
function Hero() {
  return (
    <div className="hero__warpper">
        <img id="Wave__svg" src="/Vector/Wave.svg" alt="Vector"/>
        <div className="hero__content__warpper">
            <div className="hero_content__text">
                    <div className="hero_content__text__span">
                        Hi, I am Liran Uziel,
                    </div>
                    <div className="hero_content__text__span">
                        Full Stack Web Developer.
                    </div>
                    <div>
                        A software Engineer with experience in Full Stack Development and familiar with UX/UI and relevant tools and frameworks.
                    </div>
                <button className="CallToAction" onClick={()=>{window.open('/File/Resume.pdf')}}>Download Resume</button>
                <button className="CallToAction"><a href="#Contact">Contact me</a></button>
            </div>
            <div className="hero_content__img">
                <img src="/Image/Profile_Liran_Circle.png" alt="Profile picture"/>
            </div>
        </div>
    </div>

  )
}

export default Hero
