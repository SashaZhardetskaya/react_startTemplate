import React, {Component} from 'react';
import PeopleInstructorsContainer from "../../../containers/AdminPanel/People/PeopleInstructorsContainer";
import PeopleStudentsContainer from "../../../containers/AdminPanel/People/PeopleStudentsContainer";

class PeopleManager extends Component {

    render() {
        return (
            <div className="content-wrapper" id="content-container">
                <div className="bg-light lter b-b wrapper-md">
                    <div className="row">
                        <div className="col-sm12 col-xs-12">
                            <h1 className="m-n font-thin h3 text-black">People Manager</h1>
                            <small className="text-muted">Access management to the portal</small>

                        </div>
                    </div>
                </div>

                <section className="content no-padding">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="nav-tabs-custom no-bg">
                                <ul className="nav nav-tabs bg-white">
                                    <li><a href="course-admin">Courses <span>All Courses</span></a></li>
                                    <li><a href="strategy">Strategy<span>Setup Strategy</span></a></li>
                                    <li className="active"><a href="people">People<span>Access Manager</span></a></li>
                                    <li><a href="settings">Settings<span>Updates</span></a></li>
                                    <li className="pull-right">
                                        <a href="#" style={{paddingRight: 10}}>
                                            <div className="font-24 text-orange">
                                                <i className="zmdi zmdi-plus-circle"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content no-bg no-padding">
                                    <div className="tab-pane active" id="tab_2">
                                        <div className="nav-tabs-custom no-bg inner-tabs">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a href="#add_people_tab" data-toggle="tab">Add</a></li>
                                                <li><a href="#instructors_manager_tab" data-toggle="tab">Instructors</a></li>
                                                <li><a href="#students_manager_tab" data-toggle="tab">Students</a></li>
                                            </ul>
                                            <div className="tab-content no-bg no-padding">
                                                <div className="tab-pane active" id="add_people_tab">
                                                    <div className="panel customPanel no-bg flat">
                                                        <div className="panel-body">
                                                            <h3 className="font-300 sm-top0">99point9 Portal Access</h3>
                                                            <p>Here is where you grant students and teaches access to the portal</p>
                                                            <div className="panel customPanel">
                                                                <div className="panel-heading border-bottom">
                                                                    <h3 className="panel-title text-uppercase font-400">
                                                                        <span className="font-16">
                                                                            <i className="zmdi zmdi-plus-circle"></i>
                                                                            Add People
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                                <div className="panel-body">
                                                                    <div className="row">
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group sm-bottom0">
                                                                                <input type="text" className="form-control" placeholder="Email"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-2">
                                                                            <div className="form-group sm-bottom0">
                                                                                <select className="form-control">
                                                                                    <option>What do they do?</option>
                                                                                    <option value="Student">Student</option>
                                                                                    <option value="Instructor">Instructor</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-2">
                                                                            <div className="form-group sm-bottom0">
                                                                                <select className="form-control">
                                                                                    <option>Course Selection</option>
                                                                                    <option value="MCAT">MCAT</option>
                                                                                    <option value="LSAT">LSAT</option>
                                                                                    <option value="GRE">GRE</option>
                                                                                    <option value="GMAT">GMAT</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-2">
                                                                            <div className="form-group sm-bottom0">
                                                                                <input  type="submit" className="btn btn-primary btn-block" value="Approve"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel customPanel">
                                                                <div className="panel-heading border-bottom">
                                                                    <h3 className="panel-title text-uppercase font-400"><span className="font-16"><i className="zmdi zmdi-check-all"></i> Requests</span></h3>
                                                                </div>
                                                                <div className="panel-body no-padding" style={{maxHeight: 300, overflowY: "auto"}}>
                                                                    <table className="table table-striped table-bordered sm-bottom0">
                                                                        <tbody>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Heidi Cassell
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT
                                                                                </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Zachary Summers
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    MCAT
                                                                                </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Crystal Cosby
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor
                                                                                </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT
                                                                                </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Khatib Mustafa                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    GMAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Habib Bata                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Callum Lucas                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    GMAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Ghusoon Safar                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Crystal Cosby                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Kiera Blackburn                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Oscar Murphy                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    MCAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Franklin Ford                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Nancy Carone                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    GRE                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Patricia Allen                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Angelina Scollen                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Tahlia Hotchin                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    MCAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Faith Ortega                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    William Cadet                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    LSAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    Safiy al Din Masih                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Student                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    GMAT                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="row">
                                                                                <td className="col-sm-6 v-middle">
                                                                                    'Anan Sleiman                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    Instructor                                                                        </td>
                                                                                <td className="col-sm-2 v-middle">
                                                                                    GRE                                                                        </td>
                                                                                <td className="col-sm-2">
                                                                                    <div className="form-group sm-bottom0">
                                                                                        <a href="#" className="btn btn-default">Cancel</a>
                                                                                        <a href="#" className="btn btn-primary">Approve</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>

                                                            <div className="panel customPanel sm-bottom0">
                                                                <div className="panel-heading border-bottom">
                                                                    <h3 className="panel-title text-uppercase font-400"><span className="font-16"><i className="zmdi zmdi-email"></i> Template Email</span></h3>
                                                                </div>
                                                                <div className="panel-body">
                                                                    <div className="form-group">
                                                                        <div className="btn-group" data-toggle="button">
                                                                            <a href="#" className="btn btn-default active w-sm">Instructor</a>
                                                                            <a href="#" className="btn btn-default w-sm">Student</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <textarea className="form-control" rows="10" id="email_template"></textarea>
                                                                    </div>
                                                                    <div className="form-group text-right no-margin">
                                                                        <a href="#" className="btn btn-default w-xs"><i className="zmdi zmdi-close"></i> Cancel</a>
                                                                        <a href="#" className="btn btn-default w-xs"><i className="zmdi zmdi-eye"></i> Preview</a>
                                                                        <a href="#" className="btn btn-base w-xs"><i className="zmdi zmdi-save"></i> Save</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="instructors_manager_tab">
                                                    <PeopleInstructorsContainer/>
                                                </div>
                                                <div className="tab-pane" id="students_manager_tab">
                                                    <PeopleStudentsContainer/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PeopleManager;