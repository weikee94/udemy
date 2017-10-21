import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    search() {
        console.log('you just clicked search');
    }

    render() {
        return (
            <div>
                <h2>Book Explorer</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for a book" />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default Global;