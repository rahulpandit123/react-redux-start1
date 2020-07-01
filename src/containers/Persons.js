import React, { Component } from 'react';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/action';
import { connect } from 'react-redux';

class Persons extends Component {
    

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAadPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        prs: state.persons
    };

};

const mapDispatchToProps = dispatch => {
    return{
           onAadPerson: (name,age) => dispatch({type:actionType.ADD_PERSON,personData:{name:name, age:age}}),
           onRemovePerson: (id) => dispatch({type:actionType.REMOVE_PERSON , personId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);