import React from 'react';
import { connect } from 'react-redux';
import JobCardsContainerFull from './JobCardsContainerFull.jsx';
import JobCardsContainerPartial from './JobCardsContainerPartial.jsx';

class DashboardPage extends React.Component {

    render() {
        let CurrentView = () => {
          if (this.props.view === 'Full'){
            return (<JobCardsContainerFull />)
          }
          if (this.props.view === 'Partial'){
            return (<JobCardsContainerPartial />)
          }
        }
          
        return(
          <div className='bigContainer'>
            <CurrentView/>
            
    
          </div>
        );
      }
    }
    
    
    const mapStateToProps = (state) => {
      return{
        view: state.jobs.view
      }
    }
    
    export default connect(mapStateToProps)(DashboardPage);


// render() {
//     let CurrentView = () => {
//       if (this.props.view === 'Full'){
//         return (<JobCardsContainerFull />)
//       }
//       if (this.props.view === 'Partial'){
//         return (<JobCardsContainerPartial />)
//       }
//     }
      
//     return(
//       <div className='bigContainer'>
//         <Navbar/>
//         <CurrentView/>
        

//       </div>
//     );
//   }