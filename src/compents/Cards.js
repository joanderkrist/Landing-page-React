import React from 'react';

const CardsComponents = ( props ) => {
    return (
            <div className="card m-3" key={props.key}>
                <img src={props.url} className="card-img-top"  alt={props.url}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                            <p className="card-text"> {props.body} </p>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary "> {props.textoButton}</button>
                        </div>
                    </div>
            </div>
    );
};

export default CardsComponents;
