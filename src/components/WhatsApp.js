import whatsimg from "../assets/img/whatsapp.png"
import play from "../assets/img/play.png"
import pause from "../assets/img/pause.png"
import sounds from "../assets/img/sounds.mp3"
import { useState, useEffect } from "react"
const soundIcon = { play, pause };
const audio = new Audio(sounds)

const Whats = () => {

    const [selected, setSelected] = useState(soundIcon.pause);
    // const [audio, setAudio] = useState(new Audio(sounds));
    
    function handleChanges() {

        if (selected === soundIcon.pause) {
            // setAudio(audio.play());
            setSelected(soundIcon.play)
            audio.play();
            audio.loop = true;
        } if (selected === soundIcon.play) {

            audio.pause();
            // setAudio(audio.pause());
            setSelected(soundIcon.pause)
        }
    }
    return <div class="whatsapppos">
        <a class="" href="https://api.whatsapp.com/send/?phone=966506046106&text=السلام%20عليكم%20ورحمة%20الله%20وبركاته%0Aأهلين%20تطبيق%20أوامر">
            <img class="whatsdiv" src={whatsimg} alt="" />
        </a>
        <div className="musicdiv" onClick={handleChanges}>
            <img src={selected}></img>
        </div>
    </div>

}

export default Whats