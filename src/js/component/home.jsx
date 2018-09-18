import React from 'react';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <Greeting />
                <Card /><Card />
                
                
                
            </div>
        );
    }
}

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="contaginer-fluid">
                <a className="navbar-brand" href="#">
                    <h3 style = {{paddingLeft: "70px"}}>Start Bootstrap</h3>
                </a>
            </div>
        </nav>
    );
}

function Greeting() {
    return(
        <div className = "container">
            <div className = "row">
                <div style = {{backgroundColor: "#e3e5e8", marginTop: "30px", borderRadius: "10px", padding: "30px"}} className = "col-12">
                    <h1 style = {{fontFamily: '"Open Sans Condensed", sans-serif', fontSize: "75px"}}>A Warm Welcome!</h1>
                    <p style ={{fontSize: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        );
}


function Card() {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-3" style ={{marginTop: "30px"}}>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://picsum.photos/500/325" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        );
}

