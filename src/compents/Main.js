import React from 'react';
import CardsComponents from "./Cards";
import data from "./data";

const Main = () => {
    return (
        <div className="container">
            <div className="jumbotron bg-light p-4">
                <h1 className="display-1">A Warm Welcome </h1>
                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                <button className="btn btn-primary" >Call to Action</button>
            </div>

            <div className="card-group">
                {data.map((item, index)=>(
                    <CardsComponents
                        key={index}
                        url={item.url}
                        title={item.title}
                        body={item.body}
                        textoButton={item.textoButton}
                    />
                ))}

            </div>
        </div>
    );
};


export default Main;
