import React from "react";
import Character from "../../Components/character/character";
import "./home.css";
import Http from "../../lib/request";

class Home extends React.Component {
    state = {
        title: "Rick and Morty API using React",
        characters: [],
    };

    componentDidMount = () => {
        this.get_data(URL);
    };

    get_data = async () => {
        const response = await Http.instance.get_characters()
        this.setState({characters: response.results})
    };

    render() {
        return (
            <React.Fragment>
                <div className="home">
                <div className="header">
                <h1>{this.state.title}</h1>
                <h4>By: Luis Hernandez</h4>
                </div>
                <div className="Characters">
                    {this.state.characters.map((character) => {
                        return <Character character={character} />
                    
                    })}
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;