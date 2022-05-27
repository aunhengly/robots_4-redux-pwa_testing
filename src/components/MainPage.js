import React, { Component} from 'react';
import './MainPage.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';

class MainPage extends Component {
   componentDidMount() {
      this.props.onRequestRobots();
   }

   filteredRobots = () => {
      return this.props.robots.filter(robots => {
         return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      });
   }
   
   render() {
      const {onSearchChange, isPending} = this.props;
      
      return isPending ?
         <h1>Loading</h1> :
         (
            <div className="tc">
               <Header />
               <SearchBox searchChange={ onSearchChange }/>
                <Scroll>
                   <ErrorBoundry>
                     <CardList robots= {this.filteredRobots()}/>
                   </ErrorBoundry>
                </Scroll>
            </div>
         )
   }
}

export default MainPage;