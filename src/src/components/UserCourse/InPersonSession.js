import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Checkbox, Radio} from 'react-icheck';
import 'icheck/skins/all.css';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import DatePicker from 'react-date-picker';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {manageCourse} from '../../data/manageCourse'

const studentsAmountMax = 50;

class InPersonSession extends Component {

    state = {
        value: { min: 10, max: 40 },
        startDate: new Date(),
        endDate: new Date(),
        singleDatePickerClicked: false,
        date: new Date(),
    };

    //LifecycleMethods

    componentDidMount() {
        this.props.onStudentsLoad();
    }

    //Actions
     
    generateClassNameForRange = () => {
        let className = 'col-md-8 input-range--in-person-pg';
        const hideMaxFlag = this.state.value.max > studentsAmountMax*0.85;
        const hideMinFlag = this.state.value.min < studentsAmountMax*0.15;
        const makeSingleFlag = (this.state.value.max - this.state.value.min) < studentsAmountMax*0.10;

        if (hideMaxFlag) {
            if (hideMinFlag) {
                return className.concat(' hide-range-max-lable hide-range-min-lable');
            }
            if (makeSingleFlag) {
                return className.concat(' hide-range-max-lable make-single-range');
            }
            return className.concat(' hide-range-max-lable');
        }
        if (hideMinFlag) {
            if (makeSingleFlag) {
                return className.concat(' hide-range-min-lable make-single-range');
            }
            return className.concat(' hide-range-min-lable');
        }
        if (makeSingleFlag) {
            return className.concat(' make-single-range');
        }
        return className;
    };

    onStartDatePickerChange = startDate => this.setState({startDate});

    onEndDatePickerChange = endDate => this.setState({endDate});

    handleSingleDatePickerClick = () => {
        !this.state.singleDatePickerClicked
        && this.setState({singleDatePickerClicked: !this.state.singleDatePickerClicked})
    };

    //Renders

    renderSectionHeader = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        In-Person Course
                    </h1>
                    <small className="text-muted">
                        Manage In-Person Courses
                    </small>
                </div>
            </div>
        </div>
    );

    renderForm = () => (
        <div className="panel customPanel">
            <div className="panel-body no-padding">
                <form
                    method="post"
                    className="form-horizontal form-bordered form-row-stripped">
                    <div className="form-body">
                        <div className="form-group">
                            <label className="control-label col-md-2">
                                Pick a Course
                            </label>
                            <div className="col-md-8">
                                <div
                                    className="btn-group BtnGroupCheckBox group-btn-course"
                                    data-toggle="buttons">
                                    {this.renderCourse()}
                                </div>
                            </div>
                        </div>
                        {this.renderDatePickers()}
                        <div className="form-group">
                            <label className="control-label col-md-2">
                                Subjects
                            </label>
                            <div className="col-md-10">
                                <div
                                    className="btn-group BtnGroupCheckBox"
                                    data-toggle="buttons"
                                >
                                    {this.renderSubjects()}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-2">
                                Class Capacity
                            </label>
                            <div className={this.generateClassNameForRange()}>
                                <InputRange
                                    maxValue={studentsAmountMax}
                                    minValue={0}
                                    value={this.state.value}
                                    formatLabel={value => `${value} Students`}
                                    onChange={value => this.setState({value})} />
                            </div>
                            {this.renderMeasureLine()}
                        </div>
                        <div className="form-group iCheckBoxControl">
                            <label className="control-label col-md-2">
                                Avail Options
                            </label>
                            <div className="col-md-8">
                                <div className="row">
                                    {this.renderOptions()}
                                </div>
                            </div>
                        </div>
                        <div className="form-group iCheckBoxControl">
                            <label className="control-label col-md-2">
                                Sign Up Rules
                            </label>
                            <div className="col-md-8">
                                <div className="row">
                                    {this.renderRules()}
                                </div>
                            </div>
                        </div>
                        <div className="form-group iCheckBoxControl">
                            <label className="control-label col-md-2">
                                Send To
                            </label>
                            <div className="col-md-8">
                                <div className="row">
                                    {this.renderSendTo()}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-2"/>
                            <div className="col-md-8">
                                <input type="submit"
                                       className="btn btn-success w-lg"
                                       value="Submit"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    renderDatePickers = () => (
        <div className="form-group">
            <label className="control-label col-md-2">
                Dates
            </label>
            <div className="col-md-8">
                <DateRangePicker
                    startDate={moment('1/1/2014')}
                    endDate={moment('3/1/2014')}
                >
                    <div
                        className="input-group"
                        id="defaultrange">
                        <input
                            type="text"
                            className="form-control"
                        />
                        <span className="input-group-btn">
                            <button
                                className="btn btn-default date-range-toggle"
                                type="button">
                                <i className="fa fa-calendar"/>
                            </button>
                        </span>
                    </div>
                </DateRangePicker>
                <div className="date-pickers-single--container">
                    <div
                        className='date-picker-single--wrapper'
                        onClick={this.handleSingleDatePickerClick}
                    >
                        <div className={
                            this.state.singleDatePickerClicked
                                ? 'react-date-picker-visible visible'
                                : ''}
                        >
                            <DatePicker
                                minDate={new Date()}
                                onChange={this.onStartDatePickerChange}
                                value={this.state.startDate}
                            />
                        </div>
                    </div>
                    <span className="input-group-addon"> to </span>
                    <div
                        className='date-picker-single--wrapper'
                        onClick={this.handleSingleDatePickerClick}
                    >
                        <div className={
                            this.state.singleDatePickerClicked
                                ? 'react-date-picker-visible visible'
                                : ''
                        }>
                            <DatePicker
                                minDate={this.state.startDate}
                                onChange={this.onEndDatePickerChange}
                                value={this.state.endDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderCourse = () => {
        return manageCourse.map((item) => {
            return item.course.map((child, index) => {
                return (
                    <label
                        key={index}
                        className={
                            index === 0
                                ? "btn btn-warning active"
                                : "btn btn-warning"
                        }
                    >
                        <input
                            type="radio"
                            name="options"
                            id={'option' + index}
                            autoComplete="off"
                        />
                        {child}
                    </label>
                )
            })
        })
    };

    renderSubjects = () => {
        return manageCourse.map((item) => {
            return item.subjects.map((child, index) => {
                return (
                    <label
                        key={index}
                        className="btn btn-default">
                        <input
                            type="checkbox"
                            autoComplete="off"
                        />
                        {child}
                    </label>
                )
            })
        })
    };

    // to avoid superWarning: Received `false` for a non-boolean attribute `cursor`.
    // open the file "node_modules / react-icheck / lib / EnhancedSwitch.js" and comment the following lines:
    //     126: cursor: _propTypes2['default'].bool,
    // 183: cursor: false,

    renderOptions = () => {
        return manageCourse.map((item) => {
            return item.options.map((child, index) => {
                return (
                    <div
                        key={index}
                        className="col-sm-3"
                    >
                        <Checkbox
                            id={'checkbox' + index}
                            checkboxClass="icheckbox_minimal"
                            increaseArea="20%"
                        />
                        <label
                            style={{paddingLeft: 5}}
                            htmlFor={'checkbox' + index}>
                            {child}
                        </label>
                    </div>
                )
            })
        })
    };

    renderRules = () => {
        return manageCourse.map((item) => {
            return item.rules.map((child, index) => {
                return (
                    <div key={index} className="col-sm-3">
                        <Checkbox
                            id={'checkbox' + index}
                            checkboxClass="icheckbox_minimal"
                            increaseArea="20%"
                        />
                        <label
                            style={{paddingLeft: 5}}
                            htmlFor={'checkbox' + index}>
                            {child}
                        </label>
                    </div>
                )
            })
        })
    };

    renderSendTo = () => {
        return manageCourse.map((item) => {
            return item.sendTo.map((child, index) => {
                return (
                    <div
                        key={index}
                        className="col-sm-3">
                        <Radio
                            name={'radio' + index}
                            radioClass="iradio_minimal"
                            increaseArea="20%"
                        />
                        <span style={{paddingLeft: 5, fontWeight: "bolder"}}>
                            {child}
                        </span>
                    </div>
                )
            })
        })
    };

    renderStudentsTable = () => (
        <div className="panel-body no-padding">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.students
                    && this.props.students.length > 0
                    && this.renderResponses(this.props.students)
                }
                </tbody>
            </table>
        </div>
    );

    renderResponses = (students) => {
        return (
            students.map((item, index) => (
                    <tr key={index}>
                        <td>{item.sr}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>
                            <label className={'label ' + item.labelStatus}>
                                {item.status}
                            </label>
                        </td>
                    </tr>
                )
            )
        )
    };

    renderMeasureLine = () => {
        // const measuresPersentage = [0, 25, 50, 75, 100];
        return (
            <div className="col-md-8 col-md-offset-2 input-range__measure-line-container">
                <div className="input-range__measure-line">
                <span className="measure-line--big measure-line--0">
                    <span className="measure-line__number">0</span>
                </span>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--big measure-line--25">
                    <span className="measure-line__number">
                        {Math.ceil(studentsAmountMax * 0.25)}
                    </span>
                </span>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--big measure-line--50">
                    <span className="measure-line__number">
                        {Math.ceil(studentsAmountMax * 0.5)}
                    </span>
                </span>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--big measure-line--75">
                    <span className="measure-line__number">
                        {Math.ceil(studentsAmountMax * 0.75)}
                    </span>
                </span>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--small"/>
                    <span className="measure-line--big measure-line--100">
                    <span className="measure-line__number">
                        {studentsAmountMax}
                    </span>
                </span>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="content-wrapper" id="content-container">
                {this.renderSectionHeader()}
                <section className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.renderForm()}
                            <div className="panel customPanel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        Responses
                                    </h3>
                                </div>
                                {this.renderStudentsTable()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

InPersonSession.propTypes = {
    students: PropTypes.array,
};



export default InPersonSession;