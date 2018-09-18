import React from 'react';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <Navbar />
        );
    }
}

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <h2>Start Bootstrap</h2>
                    </a>
                </nav>
            </div>
        </div>
    );
}