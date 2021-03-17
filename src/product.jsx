import React, { Component } from 'react';

class Product extends Component {
    state = { 
        name: 'messages',
        count: 0,
        //imgUrl:"logo192.png",
        //names:['Sarah','Yahia','Farouk']
     }
    getClasses(){
        return this.state.count === 0? "badge badge-danger m-2":"badge badge-primary m-2"
    }
    

    IncrementHandler = num => {
        this.setState({ count: this.state.count + num});
    }
    render() { 
        return (
            <div>
                {/* <img src={this.state.imgUrl} alt=""/> */}
                <span>{this.state.name}</span>
                <span className={this.getClasses()} >{this.state.count}</span>
                <button className="btn btn-primary btn-sm" onClick={() => this.IncrementHandler(1)}>+</button>
                
            </div>
        );
    }
}
 
export default Product;

        //  {/* {this.state.names.length === 0 &&  <h2>No names</h2>}
        //         <ul>
        //             {this.state.names.map(name => (<li key={name}>{name}</li>))}
        //         </ul> */}
        //         {/* {this.renderNames()} */}