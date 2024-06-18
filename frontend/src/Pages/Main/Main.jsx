import Hero from "../../components/Hero/Hero";
import Blog from "../../components/Blog/Blog";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";

function Main() {
    return (
        <div>
            <section className="About" id="About">
                <Hero />
            </section>
            <section id="Projects">
                <Project />
            </section>
            <section id="Blog">
                <Blog />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
}

export default Main;
