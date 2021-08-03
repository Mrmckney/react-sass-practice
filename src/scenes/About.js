import videoUrl from './../assets/video.mp4'

function About() {
    return(
        <div className="bg__video">
            <video src={videoUrl} className="bg__video--content" autoPlay loop muted>
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    )
}

export default About