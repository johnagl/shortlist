import React from 'react';
import { connect } from 'react-redux';
import JobCardsContainerFull from './JobCardsContainerFull.jsx';
import JobCardsContainerPartial from './JobCardsContainerPartial.jsx';
import { DragDropContext } from "react-beautiful-dnd";

class DashboardPage extends React.Component {

  onDragEnd = () => {
    // TODO: reordering logic
  }

    render() {
        let CurrentView = () => {
          if (this.props.view === 'Full'){
            return (
              <JobCardsContainerFull />
            )
          }
          if (this.props.view === 'Partial'){
            return (<JobCardsContainerPartial />)
          }
        }
          
        return(
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className='bigContainer'>
              <CurrentView/>
            </div>
          </DragDropContext>
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