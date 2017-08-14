import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // whenever we want to reference a javascript variable wrap it with curly braces
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {

        console.log(this.state);

        return (
            // whenever you have a scroll view you must add a style property of flex 1 to your root element
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;