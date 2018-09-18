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
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h2>Start Bootstrap</h2>
                </a>
            </div>
        </nav>
    );
}