import versaceLogo from "../assets/img/versace.png"
import zaraLogo from "../assets/img/zara.png"
import calvinKleinLogo from "../assets/img/calvin-klein.png"
import gucciLogo from "../assets/img/gucci.png"
import pradaLogo from "../assets/img/prada.png"
import Button from "../components/Button"

export default function Home() {
    return (
        <main>
            <section id="hero">
                <div className="app-container">

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <h2>Find clothes that mathches your style</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia ipsa magnam fuga ut cupiditate error dolorum totam dicta, ipsum, aliquid accusamus libero? Debitis corrupti quas alias soluta eum? Odit?</p>

                            <Button type="primary">Shop Now</Button>
                        </div>
                    </div>

                    <div className="achivments mt-5">
                        <div className="achivment">
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className="achivment">
                            <h3>2000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="achivment">
                            <h3>30.000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* /#hero */}

            <section id="brands">
                <div className="app-container">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <img src={versaceLogo} alt="" />
                        <img src={gucciLogo} alt="" />
                        <img src={zaraLogo} alt="" />
                        <img src={pradaLogo} alt="" />
                        <img src={calvinKleinLogo} alt="" />
                    </div>
                </div>
            </section>
            {/* /#brands */}
        </main>
    );
}