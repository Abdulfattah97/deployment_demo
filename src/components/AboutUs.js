import { Row, Col, Card, CardGroup } from "react-bootstrap";
import about10 from "../assets/img/about10.jpg"
const About = () => {
    return (

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-item-center">
                        <h1>لماذا نحن هنا؟</h1>
                        <p>يتميز تطبيق أوامر بأنه قريب من الأسر المنتجة من حيث المنتطقة، وأيضاً نحن نتميز بأننا متميزون
                        عن غيرنا في كثير من الأمور التي نتميز بها، ولا يتميز بها غيرنا لأننا موفقون من الله سبحانه وتعالى
                        وكتب لنا التميز فلله الحمد في الأولى والأخرة، ولله الشكر على هذا التميز دائماً وأبداً ونسأل الله تعالى
                        أن يمن على غيرنا بالتميز.</p>
                    </div>
                    <div className="col-12 col-md-6 align-item-center">
                        <img className="aimg" src={about10}></img>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default About