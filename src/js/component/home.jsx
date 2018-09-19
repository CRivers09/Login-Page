import React from 'react';
import PropTypes from 'prop-types';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className = "container">
                    <Greeting />
                    <div className="row text-center">
                        <Card hrefImage={"https://picsum.photos/500/325"} cardTitle={"Card title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} hrefLink={"https://www.youtube.com/watch?v=BQ0mxQXmLsk"} />
                        <Card hrefImage={"https://picsum.photos/500/325"} cardTitle={"Card title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} hrefLink={"https://www.youtube.com/watch?v=BQ0mxQXmLsk"} />
                        <Card hrefImage={"https://picsum.photos/500/325"} cardTitle={"Card title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} hrefLink={"https://www.youtube.com/watch?v=BQ0mxQXmLsk"} />
                        <Card hrefImage={"https://picsum.photos/500/325"} cardTitle={"Card title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} hrefLink={"https://www.youtube.com/watch?v=BQ0mxQXmLsk"} />
                    </div>
                </div>
                <Footer />
                
                
            </div>
        );
    }
}

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="contaginer-fluid">
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=Ph54wQG8ynk">
                    <h3 style = {{paddingLeft: "70px"}}>Start Bootstrap</h3>
                </a>
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=HBxt_v0WF6Y">
                    <p style = {{paddingRight: "50px", marginLeft: "500px"}}>Home</p>
                </a>
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=pa14VNsdSYM">
                    <p style = {{paddingRight: "50px"}}>About</p>
                </a>
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=kHLHSlExFis">
                    <p style = {{paddingRight: "50px"}}>Services</p>
                </a>
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=aJOTlE1K90k">
                    <p style = {{paddingRight: "50px"}}>Contact</p>
                </a>
            </div>
        </nav>
    );
}

function Greeting() {
    return(
        <div className = "row">
            <div style = {{backgroundColor: "#e3e5e8", marginTop: "30px", borderRadius: "10px", padding: "30px"}} className = "col-12">
                <h1 style = {{fontFamily: '"Open Sans Condensed", sans-serif', fontSize: "75px"}}>A Warm Welcome!</h1>
                <p style ={{fontSize: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <a href="https://www.youtube.com/watch?v=3YxaaGgTQYM" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        );
}

function Card(props) {
    return(
        <div className = "col-3" style ={{marginTop: "30px", marginBottom: "30px"}}>
            <div className="card">
                <img className="card-img-top" src={props.hrefImage} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5> 
                    <p className="card-text">{props.text}</p>
                    <a href={props.hrefLink} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        );
}
Card.propTypes = {
  hrefImage: PropTypes.string,
  cardTitle: PropTypes.string,
  text: PropTypes.string,
  hrefLink: PropTypes.string
};


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

