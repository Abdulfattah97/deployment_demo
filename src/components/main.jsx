import React, { useEffect, useState } from "react";
import awamersitevideo from "../assets/awamersitevideo.mp4"


const Main = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "حياكم الله في تطبيق أوامر", "أفضل تطبيق توصيل للأسر المنتجة", "والأفضل في التسويق والتصميم!!!" ];
    const period = 250;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className="main">
            <div className="overlay"></div>
            <div className="content">
            <h1>{text}</h1>
            </div>

            <video className="videoTag" autoPlay loop muted playsInline>
                <source src={awamersitevideo} type='video/mp4' />
            </video>

        </div>



    )
}

export default Main