import services1 from './../assets/services1.png'
import services2 from './../assets/services2.png'
import services3 from './../assets/services3.png'


function Services() {
    return(
        <section className='services'>
            <div className="services__item">
                <img src={services1} alt="" className="services__item--img"/>
                <p className="services__item--p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae numquam maiores aperiam quibusdam pariatur? 
                    Minus ipsum dolorum pariatur labore, laboriosam nobis id 
                    deleniti nisi inventore sunt ullam veniam nam voluptatum.
                </p>
            </div>
            <div className="services__item">
                <img src={services2} alt="" className="services__item--img"/>
                <p className="services__item--p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae numquam maiores aperiam quibusdam pariatur? 
                    Minus ipsum dolorum pariatur labore, laboriosam nobis id 
                    deleniti nisi inventore sunt ullam veniam nam voluptatum.
                </p>
            </div>
            <div className="services__item">
                <img src={services3} alt="" className="services__item--img"/>
                <p className="services__item--p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae numquam maiores aperiam quibusdam pariatur? 
                    Minus ipsum dolorum pariatur labore, laboriosam nobis id 
                    deleniti nisi inventore sunt ullam veniam nam voluptatum.
                </p>
            </div>
        </section>
    )
}

export default Services