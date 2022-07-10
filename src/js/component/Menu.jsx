import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <h2 className='text-center'>Menú</h2>
            <hr />
            <div>
                <div className='menu-cafe row'>
                    <h3 className='text-center'>
                        Cafés <i className="fas fa-coffee"></i>
                    </h3>

                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://picsum.photos/id/431/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Espresso</h5>
                            <p className="card-text">Cafe suave</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://picsum.photos/id/425/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Cafe en Grano</h5>
                            <p className="card-text">500gr</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-sm-6 col-md-4 col-lg-2 lazyload">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de cafe" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <h3 className='text-center'>
                    Postres <i className="fas fa-cookie"></i>
                </h3>

            </div>
        </div>
    );
};

export default Menu;