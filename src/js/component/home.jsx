import React from 'react';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <Greeting />
                <Card style = {{display: "inline"}}/> <Card style = {{display: "inline"}} />
                <Footer />
                
                
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
                    <a href="https://www.youtube.com/watch?v=3YxaaGgTQYM" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        );
}


function Card(hrefImage, cardTitle, text, hrefLink) {
    return(
        <div className = "col-3" style ={{marginTop: "30px", marginLeft: "88px", marginBottom: "30px"}}>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/500/325"/*{hrefImage}*/ alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title"/*{cardTitle}*/>Card title</h5> 
                    <p className="card-text"/*{text}*/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.youtube.com/watch?v=BQ0mxQXmLsk"/*{hrefLink}*/ className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        );
}

function Footer() {
    return(
        <div className= "container-fluid">
            <div className = "row">
                <div className = "col-12" style = {{backgroundColor: "#3d4244"}}>
                    <p style = {{color: "white", textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>Copyright © Your Website 2018</p>
                </div>    
            </div>
            
        </div>
        
        );
}

