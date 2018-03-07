import React, {Component}  from "react";
import {SlideDown} from 'react-slidedown'
import uuidv4 from 'uuid/v4';

const notifications = {
    students: {
        items: [
            {
                id: uuidv4(),
                name: 'Remind students of test date every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 'Custom'
            },
            {
                id: uuidv4(),
                name: 'Remind students to finish task every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 1
            },
            {
                id: uuidv4(),
                name: 'Remind students that they need to speed up or they are behind every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students to compete every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students to sign up for in-class course every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students to sign up for a test date every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students that they will finish the course at the pace they are going every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students that their predicted score is _ every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students when deadline is missed every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students of an upcoming event every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students that they need to increase the amount of time they are putting in when chapter finished per day is',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students that their are doing better every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students when a deadline is due',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind students to focus on studying when messages to friends hit messages',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            }
        ]
    },
    instructors: {
        items: [
            {
                id: uuidv4(),
                name: 'Remind instructors of students\' test date',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor to respond to students\' messages',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'During course times, remind instructor to respond to students\' messages every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructors to log-in',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructors to attend to students every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructors to respond to discussions every',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor that a new student has started the course',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor when course results are released',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor when student takes a practice test',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor when students finish a subject',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor when students are scoring below on a lecture concepts',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Alert Admin when an instructor does not respond to a student messages by the red deadline',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            },
            {
                id: uuidv4(),
                name: 'Remind instructor when student won\'t meet their deadline',
                options: ['Select','Everyday','Every Month','Custom'],
                value: '',
                selected: 0
            }
        ]
    }
};
const messengerControls = [
    {id: 'messenger_noti_0', text: 'Show students if the messages were seen'},
    {id: 'messenger_noti_1', text: 'Show instructors if student saw messages'},
    {id: 'messenger_noti_2', text: 'Show students when instructor is typing messages'},
    {id: 'messenger_noti_3', text: 'Show students when instructors are online/offline'},
    {id: 'messenger_noti_4', text: 'Show instructors when students are online/offline'},
    {id: 'messenger_noti_5', text: 'During off-course season, remind student to expect response in --- days'},
    {id: 'messenger_noti_6', text: 'Lock messaging thread to specific courses being taken'},
    {id: 'messenger_noti_7', text: 'Limit student messaging to --- messages per day'},
    {id: 'messenger_noti_8', text: 'Allow file uploads'},
    {id: 'messenger_noti_9', text: 'Allow audio recordings to be sent'},
    {id: 'messenger_noti_10', text: 'Allow instructors to set reminders via messenger threads'},
    {id: 'messenger_noti_11', text: 'Allow students to set personal reminders in the messenger threads'},
    {id: 'messenger_noti_12', text: 'Change thread colour to ---- during in-course times'},
    {id: 'messenger_noti_13', text: 'Allow instructors to change thread names'},
    {id: 'messenger_noti_14', text: 'Allow students to bookmark messages'},
    {id: 'messenger_noti_15', text: 'Allow instructors to tag on messages'},
    {id: 'messenger_noti_16', text: 'Allow instructors to post a schedule'},
    {id: 'messenger_noti_17', text: 'Send same message to many students'},
    {id: 'messenger_noti_18', text: 'Allow instructors to delete messages'},
    {id: 'messenger_noti_19', text: 'Allow instructors to delete shared files'},
    {id: 'messenger_noti_20', text: 'Add emoticons'}
];

/*
* Component is not finished
* */
class SettingsAdmin extends Component {
    state = {
        reminder: false,
        modal: false,
        textInputModal: '',
        customId: ''
    };
    //Renders
    renderHeaderSettings = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Settings
                    </h1>
                    <small className="text-muted">
                        Notifications & Messengars
                    </small>
                </div>
            </div>
        </div>
    );

    renderNavTabs = () => (
        <ul className="nav nav-tabs bg-white">
            {this.renderNavItem('', 'course-admin', 'Courses', 'All Courses')}
            {this.renderNavItem('', 'strategy', 'Strategy', 'Setup Strategy')}
            {this.renderNavItem('', 'people', 'People', 'Access Manager')}
            {this.renderNavItem('active', 'settings-admin', 'Settings', 'Updates')}
            {this.renderNavPlusButton('pull-right', '#', 'plus-circle')}
        </ul>
    );

    renderNavItem = (className, link, title, name) => (
        <li className={className}>
            <a href={link}>
                {title}
                <span>
                    {name}
                </span>
            </a>
        </li>
    );

    renderReminderSelect = (notifications, name) => (
        notifications.items.map((item, index) => (
            <div
                key={name+'_'+index}
                className="control-row"
                id={`notification_${name}0${index}`}
            >
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            {item.name}
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <select
                            className="form-control"
                            defaultValue={item.selected}
                            onChange={(e) => this.checkIfCustomValue(e, item.id)}
                        >
                            {this.renderSelects(item.options)}
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <div
                            className="custom_value"
                        >
                            {this.state.customId === item.id && this.state.textInputModal}
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

    renderSelects = (options) => (
        options.map((option, index) =>  (
            <option
                key={index}
                value={option}
            >
                {option}
            </option>
        ))
    );

    renderNavPlusButton = (className, link, icon) => (
        <li className={className}>
            <a
                href={link}
                style={{paddingRight: "10px"}}
            >
                <div className="font-24 text-orange">
                    <i className={"zmdi zmdi-"+icon}/>
                </div>
            </a>
        </li>
    );

    renderMessengerControls = (controls) => (
        controls.map((item) => (
            <div
                key={item.id}
                className="control-row"
            >
                <div className="row">
                    <div className="col-sm-6">
                        <p>{item.text}</p>
                    </div>
                    <div className="col-sm-6">
                        <input type='checkbox' className='ios8-switch' defaultChecked id={item.id}/>
                        <label htmlFor={item.id}/>
                    </div>
                </div>
            </div>
        ))
    );

    //Actions
    checkIfCustomValue = (e, id) => {
        if(e.target.value === 'Custom') {
            this.setState({modal: true, customId: id});
        }
    };

    handleCloseModal = () => {
        this.setState({modal: false})
    };

    handleSubmitChanges = () => {
        this.handleCloseModal();
    };

    render() {
        return (            
            <div className="content-wrapper" id="content-container">
                {this.renderHeaderSettings()}
                <section className="content no-padding">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="nav-tabs-custom no-bg">
                                {this.renderNavTabs()}
                                <div className="tab-content no-bg no-padding">
                                    <div
                                        className="tab-pane active"
                                        id="tab_2"
                                    >
                                        <div className="nav-tabs-custom no-bg inner-tabs">
                                            <ul className="nav nav-tabs">
                                                <li className="active">
                                                    <a
                                                        href="#NotificationsTab"
                                                        data-toggle="tab"
                                                    >
                                                        Notifications
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#MessengersTab"
                                                        data-toggle="tab"
                                                    >
                                                        Messengers
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content no-bg no-padding">
                                                <div
                                                    className="tab-pane active"
                                                    id="NotificationsTab"
                                                >
                                                    <div className="panel customPanel flat">
                                                        <div className="panel-heading border-bottom bg-info">
                                                            <h3 className="panel-title text-uppercase font-400">
                                                                <span className="font-16">
                                                                    Notifications Control
                                                                </span>
                                                            </h3>
                                                        </div>
                                                        <div className="panel-body no-padding">
                                                            <div className="sm-top-bottom20">
                                                                <div className="row">
                                                                    <div className="col-sm-4 col-sm-offset-4">
                                                                        <div
                                                                            className="btn-group-justified btn-inner-tabs-controls"
                                                                            data-toggle="buttons"
                                                                            onClick={()=>this.setState({reminder: !this.state.reminder})}
                                                                        >
                                                                            <label className="btn btn-default active">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="options"
                                                                                    id="option1"
                                                                                    value="student"
                                                                                    autoComplete="off"
                                                                                    defaultChecked
                                                                                />
                                                                                Students
                                                                            </label>
                                                                            <label className="btn btn-default">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="options"
                                                                                    id="option2"
                                                                                    value="instructor"
                                                                                    autoComplete="off"
                                                                                />
                                                                                Instructors
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="notification_setting notification_student">
                                                                <SlideDown className={'my-dropdown-slidedown'}>
                                                                    {
                                                                        !this.state.reminder &&
                                                                        this.renderReminderSelect(notifications.students, 'student')
                                                                    }
                                                                </SlideDown>
                                                            </div>
                                                            <div
                                                                className="notification_setting notification_instructor"
                                                            >
                                                                <SlideDown className={'my-dropdown-slidedown'}>
                                                                    {
                                                                        this.state.reminder &&
                                                                        this.renderReminderSelect(notifications.instructors, 'instructor')
                                                                    }
                                                                </SlideDown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="MessengersTab">
                                                    <div className="panel customPanel">
                                                        <div className="panel-heading border-bottom bg-info">
                                                            <h3 className="panel-title text-uppercase font-400">
                                                                <span className="font-16">
                                                                    Messenger Controls
                                                                </span>
                                                            </h3>
                                                        </div>
                                                        <div className="panel-body no-padding">
                                                            {this.renderMessengerControls(messengerControls)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className={"modal fade "+ (this.state.modal && "in")}
                    id="SetCustomVal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    style={{display: this.state.modal ? "block": "none"}}
                >
                    <div
                        className="modal-dialog"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => this.handleCloseModal()}
                                >
                                    <span aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                                <h4
                                    className="modal-title"
                                    id="myModalLabel"
                                >
                                    Set Custom Value
                                </h4>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Custom Value"
                                    id="CustomValueInput"
                                    onChange={(e) => {this.setState({textInputModal: e.target.value})}}
                                />
                                <input
                                    type="hidden"
                                    id="SetCustomValToField"
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                    onClick={() => this.handleCloseModal()}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => this.handleSubmitChanges()}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingsAdmin;