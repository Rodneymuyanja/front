import React, {Component} from 'react'
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';

class TopicDetails extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="topic details"
                />
                
                <Footer />
            </div>
        )
    }
}

export default TopicDetails;