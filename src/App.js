import React from 'react';
import profiles from './profiles';
import Profile from './Profile';
import ProfileForm from './ProfileForm';
import FilterProfiles from './FilterProfiles';

class App extends React.Component{

  state = {
    profiles : [],
    filterCriteria : 'All'
  }

  addProfile = ( event ) => {
    event.preventDefault();
    
    const newProfile = {
      name : event.target.firstName.value,
      role : event.target.role.value,
      id : Number( event.target.identifier.value )
    };

    this.setState({
      profiles : [ ...this.state.profiles, newProfile ]
    });
  }

  changeFilterCriteria = ( event ) => {
    event.preventDefault();

    const newFilterCriteria = event.target.filterCriteria.value;

    this.setState({
      filterCriteria : newFilterCriteria
    })
  }

  componentDidMount = () => {
    this.setState({
      profiles : profiles
    });
  }

  render = () => {
    let filteredProfiles;

    if( this.state.filterCriteria === 'All' ){
      filteredProfiles = this.state.profiles;
    }
    else{
      filteredProfiles = this.state.profiles.filter( ( profile, index ) => ( profile.role === this.state.filterCriteria ) );
    }
     
    return(
      <div>
        <h1> List of profiles </h1>
        <FilterProfiles changeFilterCriteria={ this.changeFilterCriteria }/>
        <ul>
          {
            filteredProfiles.map( ( profile, index ) => {
              return ( 
              <li key={ index }>
                <Profile name={ profile.name } role={ profile.role }/>
              </li> 
              );
            })
          }
        </ul>
        <ProfileForm addProfile={ this.addProfile } />
      </div>
    );
  }
}

export default App;