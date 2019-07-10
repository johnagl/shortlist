import React from 'react';
import { connect } from 'react-redux';
import JobCardsContainerFull from './JobCardsContainerFull.jsx';
import JobCardsContainerFullSecond from './JobCardsContainerFullSecond.jsx';
import JobCardsContainerPartial from './JobCardsContainerPartial.jsx';
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from '../actions';
import { Meteor } from 'meteor/meteor';

class DashboardPage extends React.Component {

  onDragEnd = (result) => {
    // TODO: reordering logic
    const { destination, source, draggableId } = result;

    if(!destination) return;

    if(destination.droppableId === source.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  }

    render() {
      // console.log(this.props.jobsList);
      console.log("actually rendered dashboardpage");
      
        let CurrentView = () => {
          if (this.props.view === 'Full'){
            return (
              <JobCardsContainerFull direction="vertical" jobsList={this.props.jobsList} stagesList={this.props.stagesList}/>
            )
          }
          if (this.props.view === 'FullSecond'){
            return (
              <JobCardsContainerFullSecond direction="horizontal"/>
            )
          }
          if (this.props.view === 'Partial'){
            return (<JobCardsContainerPartial direction="horizontal"/>)
          }
        }
          
        return(
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className='dashboardContainer'>
              <CurrentView/>
            </div>
          </DragDropContext>
        );
      }
    }
    
    
    const mapStateToProps = (state) => {
      return{
        view: state.jobs.view,
        // stages: state.jobs.stages /* this causes infinite loops */
      }
    }
    
    export default connect(mapStateToProps, { sort })(DashboardPage);