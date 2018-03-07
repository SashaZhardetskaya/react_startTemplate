import React, {Component} from 'react';
import PropTypes from "prop-types";
import {DataTable} from "react-data-components";

class PeopleStudents extends Component {
    state={
        columns: [],
        studentsPeople: [...this.props.studentsPeople]
    };

    //Renders
    renderImg = (val, row) => (
        <img
            className="chat-avatar"
            src={val}
            alt={row.name}
        />
    );

    renderActions = (val, row) => (
        <div className="dropdown">
            <a
                href="#"
                className="btn btn-default"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                Actions <i className="zmdi zmdi-caret-down"/>
            </a>
            <ul className="dropdown-menu w-lg pull-right fixed-width-icons">
                <li>
                    <a role="button">
                        <i className="zmdi zmdi-undo"/>
                        Undo
                    </a>
                </li>
                <li>
                    <a role="button">
                        <i className="zmdi zmdi-pause"/>
                        Hold
                    </a>
                </li>
                <li>
                    <a
                        role="button"
                        onClick={()=>{this.props.studentDelete(row.id)}}
                    >
                        <i className="zmdi zmdi-delete"/>
                        Delete
                    </a>
                </li>
            </ul>
        </div>
    );

    renderCourses = (val, row) => (
        <select
            className="form-control"
            defaultValue={val}
            onChange={(e) => {this.props.editCoursesStudent(e.target.value, row.id)}}
        >
            <option value="MCAT">
                MCAT
            </option>
            <option value="LSAT">
                LSAT
            </option>
            <option value="GMAT">
                GMAT
            </option>
        </select>
    );

    renderReferrals = (val, row) => (
        <input
            type="number"
            className="form-control"
            defaultValue={val}
            onChange={(e) => {this.props.editReferralsStudent(+e.target.value, row.id)}}
        />
    );

    renderDate = (val, row) => (
        <input
            type="date"
            className="form-control"
            defaultValue={val}
            onChange={(e) => {this.props.editAccessStudent(e.target.value, row.id)}}
        />
    );

    renderNextPayment = (val, row) => (
        <input
            type="date"
            className="form-control"
            defaultValue={val}
            onChange={(e) => {this.props.editNextPaymentStudent(e.target.value, row.id)}}
        />
    );

    renderStatus = (val, row) =>  (
        <span
            className={`label label-${
                (row.status === 'Blocked')
                    ? 'danger'
                    : (row.status === 'Active')
                    ? 'success'
                    : 'warning'
                }
            `}
        >
            {val}
        </span>
    );

    renderSelect = () => (
        <select
            onChange={(e) => this.handleChangeSelect(e)}
        >
            <option>All Students</option>
            <option>MCAT</option>
            <option>LSAT</option>
        </select>
    );

    //Actions
    handleChangeSelect = (e) => {
        if (e.target.value === 'All Students') {
            this.setState({studentsPeople:  this.props.studentsPeople});
        } else {
            this.setState({studentsPeople:  this.props.studentsPeople.filter(item=> item.courses=== e.target.value)});
        }
    };

    //Lifecycle
    componentWillMount() {
        this.props.getStudentsData();
    };

    componentDidMount() {
        this.setState({
            columns: [
                {title: '', prop: 'img', className: 'sorting_1', render: this.renderImg},
                {title: 'Name', prop: 'name', className: 'v-middle'},
                {title: 'Status', prop: 'status', className: 'v-middle', render: this.renderStatus},
                {title: 'Last Active', prop: 'last_active', className: 'v-middle'},
                {title: 'Access', prop: 'access', className: 'v-middle', render: this.renderDate},
                {title: 'Next Payment', prop: 'next_payment', className: 'v-middle', render: this.renderNextPayment},
                {title: 'Referrals', prop: 'referrals', className: 'v-middle', render: this.renderReferrals},
                {title: 'Courses', prop: 'courses', className: 'v-middle', render: this.renderCourses},
                {title: 'Actions', prop: 'id', className: 'v-middle', render: this.renderActions}
            ]
        })
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.studentsPeople !== nextProps.studentsPeople) {
            this.setState({studentsPeople: nextProps.studentsPeople});
        }
    };

    render() {
        return (
            <div className="panel customPanel no-bg">
                <div className="panel-body">
                    <h3 className="font-300 sm-top0">
                        Students Access Control
                    </h3>
                    <p>
                        This is where you can see all the students for each course and control their access
                    </p>
                    <div className="panel customPanel">
                        <div className="panel-heading border-bottom">
                            <div className="panel-control">
                                {this.renderSelect()}
                            </div>
                            <h3 className="panel-title">
                                Students
                            </h3>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive statistic-students table-admin">
                                <DataTable
                                    keys="name"
                                    columns={this.state.columns}
                                    initialData={this.state.studentsPeople}
                                    initialPageLength={10}
                                    initialSortBy={{ prop: 'name', order: 'descending' }}
                                    pageLengthOptions={[10, 25, 50, 100]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="panel customPanel">
                        <div className="panel-heading">
                            <h3 className="panel-title">Rules</h3>
                        </div>
                        <div className="panel-body no-padding">
                            <table className="">
                                <tbody>
                                <tr>
                                    <td className="v-middle w-sm">Deactivate student if not active for:</td>
                                    <td className="w-xs"><input type="text" className="form-control"/> </td>
                                    <td className="v-middle"><input type="checkbox"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PeopleStudents.propTypes = {
    // studentsPeople: PropTypes.array,
    // getStudentsData: PropTypes.func.isRequired
};

export default PeopleStudents;