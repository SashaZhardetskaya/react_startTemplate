import React, {Component} from "react";
import PropTypes from 'prop-types';
import jQuery from 'jquery';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import CountUp from 'react-countup';
const $ = window && window.jQuery ? window.jQuery : jQuery;

class OverviewStudents extends Component {

    //Renders
    renderStudentsStatistics = (studentsStatistic) => (
        studentsStatistic.map((item, index) => (
            <div
                className="col-md-3 col-sm-6"
                key={index}
            >
                <div className="panel customPanel">
                    <div className="panel-heading border-bottom">
                        <h3 className="panel-title text-uppercase">
                            {item.title}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div
                            className="stat-big"
                        >
                            <a
                                href={item.link}
                                data-toggle="modal"
                            >
                                <CountUp
                                    start={0}
                                    end={item.count}
                                    duration={3.75}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

    renderDragEvents = (dragEvents) => (
        <div className="panel customPanel">
            <div className="panel-heading border-bottom">
                <h3 className="panel-title">
                    Drag Events
                </h3>
            </div>
            <div className="panel-body">
                <div id='external-events'>
                    {this.renderDragEventsContent(dragEvents)}
                    <div className="checkbox">
                        <label htmlFor='drop-remove'>
                            <input
                                type='checkbox'
                                id='drop-remove'
                            />
                            remove after drop
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    renderDragEventsContent = (dragEvents) => (
        dragEvents.map((item, index) => (
            <div
                key={index}
                className={"external-event bg-"+item.backgroundColor}
            >
                {item.title}
            </div>
        ))
    );

    renderCreateEvents = (colors) => (
        <div className="panel customPanel">
            <div className="panel-heading border-bottom">
                <h3 className="panel-title">
                    Create Events
                </h3>
            </div>
            <div className="panel-body">
                <div
                    className="btn-group btn-choose-colors"
                >
                    <ul
                        className="fc-color-picker"
                        id="color-chooser"
                    >
                        {this.renderColors(colors)}
                    </ul>
                </div>
                <div className="input-group">
                    <input
                        id="new-event"
                        type="text"
                        className="htmlForm-control"
                        placeholder="Event Title"
                    />
                    <div className="input-group-btn btn-change-color">
                        <button
                            id="add-new-event"
                            type="button"
                            className="btn btn-primary btn-flat"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    renderColors = (colors) => (
        colors.map((color, index) => (
           <li
               key={index}
           >
               <a
                   className={"text-"+color}
                   role="button"
               >
                   <i className="fa fa-square"/>
               </a>
           </li>
        ))
    );

    //Lifecycle
    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                let originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                let copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.backgroundColor = $(this).css("background-color");
                copiedEventObject.borderColor = $(this).css("border-color");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            },
            events: this.props.adminEvents.events
        });

        function ini_events(ele) {
            ele.each(function () {
                // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                // it doesn't need to have a start or end
                let eventObject = {
                    title: $.trim($(this).text()) // use the element's text as the event title
                };
                // store the Event Object in the DOM element so we can get to it later
                $(this).data('eventObject', eventObject);
                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 1070,
                    revert: true, // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });
            });
        }
        ini_events($('#external-events div.external-event'));
        let currColor = "#3c8dbc"; //Red by default
        //Color chooser button
        let colorChooser = $("#color-chooser-btn");
        $("#color-chooser > li > a").click(function (e) {
            e.preventDefault();
            //Save color
            currColor = $(this).css("color");
            //Add color effect to button
            $('#add-new-event').css({"background-color": currColor, "border-color": currColor});
        });
        $("#add-new-event").click(function (e) {
            e.preventDefault();
            //Get value and make sure it is not null
            let val = $("#new-event").val();
            if (val.length === 0) {
                return;
            }

            //Create events
            let event = $("<div />");
            event
                .css({"background-color": currColor, "border-color": currColor, "color": "#fff"})
                .addClass("external-event");

            event.html(val);
            $('#external-events').prepend(event);

            //Add draggable funtionality
            ini_events(event);

            //Remove event from text input
            $("#new-event").val("");
        });
    };

    render() {
        const {adminEvents} = this.props;

        return (
            <div>
                <div className="row">
                    {
                        adminEvents.studentsStatistic &&
                        this.renderStudentsStatistics(adminEvents.studentsStatistic)
                    }
                </div>
                <div className="sm-top30">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                adminEvents.dragEvents &&
                                this.renderDragEvents(adminEvents.dragEvents)
                            }
                            {
                                adminEvents.colorsEvents &&
                                this.renderCreateEvents(adminEvents.colorsEvents)
                            }
                        </div>
                        <div className="col-md-9">
                            <div className="panel customPanel">
                                <div className="panel-body no-padding">
                                    <div id="calendar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

OverviewStudents.propTypes = {
    adminEvents: PropTypes.shape({
        events: PropTypes.array,
        dragEvents: PropTypes.array.isRequired,
        studentsStatistic: PropTypes.array.isRequired,
        colorsEvents: PropTypes.array.isRequired
    })
};

export default OverviewStudents;
