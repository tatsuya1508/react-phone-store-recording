import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase text-title pt5">
                        <h1 className="display-3">404</h1>
                        <h2>error</h2>
                        <h2>Page not found</h2>
                        <h3>the request URL
                            <span className="text-danger">{this.props.location.pathname}</span> was not found.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
