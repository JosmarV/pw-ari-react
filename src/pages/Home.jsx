import './Home.css'

function Home() {
    return (
        // La sección principal de la página de inicio
        <section className="home-section">
            <div className="home-content">
                <h1 className="main-title">Arianna Veliz</h1>
                <p className="main-subtitle">Diseñadora y Fotógrafa</p>
            </div>
            {/* Contenedor para los elementos de trabajo (los recuadros en el diseño) */}
            {/* <div className="works-elements">
                <div className="work-item item-1">
                    <img src="" alt="" />
                </div>
                <div className="work-item item-2">
                    <img src="" alt="" />
                </div>
                <div className="work-item item-3">
                    <img src="" alt="" />
                </div>
            </div> */}
        </section>
    )
}

export default Home;