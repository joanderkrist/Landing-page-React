import { Button } from 'react-bootstrap';



const Navbar = (props) => {

  const navbarlinks = [
    { name: "Home"},
    { name: "About"},
    { name: "Services"},
    { name: "contact"}
  ]

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="/#">
            {props.titulo}
          </a>
           <Button 
            type="primary"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
            {navbarlinks.map((link, index) => {
              const { name } = link;

              return (
                <a className="nav-link active" href="/#">
                {name} <span className="sr-only">(current)</span>
              </a>
              
              )
              })}
              
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;