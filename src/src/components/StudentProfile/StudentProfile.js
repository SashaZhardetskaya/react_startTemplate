import React, {Component} from 'react';
import PieChart from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';
import Maps from './Maps';
import parser from 'ua-parser-js';

const device = new parser();

class StudentProfile extends Component {
    state = {
        latitude: '',
        longitude: '',
        country_name: '',
        ip: ''
    };

    //Renders
    renderNamePage = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Student Profile
                    </h1>
                    <small className="text-muted">
                        Everything Starts Here
                    </small>
                </div>
            </div>
        </div>
    );

    renderHeaderLinks = () => (
        <ul className="nav nav-tabs bg-white">
            <li className="active">
                <a>
                    Overview
                    <span>General Details</span>
                </a>
            </li>
            <li>
                <a href="/student-course">
                    MCAT
                    <span>Course Details</span>
                </a>
            </li>
            <li className="pull-right">
                <a style={{paddingRight: 10}}>
                    <div className="font-24 text-orange">
                        <i className="zmdi zmdi-plus-circle"/>
                    </div>
                </a>
            </li>
        </ul>
    );

    renderCircumstances = (circumstances) => (
        circumstances.map((item, index) => (
            <div className="panel customPanel" key={index}>
                <div className="panel-heading">
                    <h3 className="panel-title text-uppercase">{item.title}</h3>
                </div>
                <div className="panel-body no-padding">
                    <table className="table profile-info-table">
                        <tbody>
                            {this.renderTableCircumstances(item.items)}
                        </tbody>
                    </table>
                </div>
            </div>
        ))
    );

    renderTableCircumstances = (items) => {
        let i,j,temparray;
        let chunk = 5;
        let circumstances = [];

        for (i=0,j=items.length; i<j; i+=chunk) {
            temparray = items.slice(i,i+chunk);
            circumstances.push(temparray)
        }

        return circumstances.map((item,index)=> (
            <tr key={index}>
                {this.renderTableRow(item)}
            </tr>

        ))
    };

    renderTableRow = (items) => (
        items.map((item,index) => (
            <td key={index}>
                <p>{item.name}</p>
                <h3>{item.value}</h3>
            </td>
        ))
    );

    renderFoundations = (foundations) => (
        <div className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    Foundations
                </h3>
            </div>
            <div className="panel-body no-padding">
                <table className="table profile-info-table">
                    <tbody>
                    <tr>
                        {this.renderFoundationsTable(foundations)}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    renderFoundationsTable = (foundations) => (
        foundations.map((item, index) => (
            <td key={index}>
                <p>{item.name}</p>
                <h3>{item.value}</h3>
            </td>
        ))
    );

    renderDiagnostic = (diagnosticScore) => (
        <div className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    Diagnostic Score
                </h3>
            </div>
            <div className="panel-body no-padding">
                <div className="clearfix diagnostic-score-wrapper">
                    {this.renderDiagnosticScore(diagnosticScore)}
                </div>
            </div>
        </div>
    );

    renderDiagnosticScore = (diagnosticScore) => (
        diagnosticScore.map((item, index) => (
            <div
                className="one-fifth text-center sp-20 diagnostic-score diagnostic-pie-chart"
                key={index}
            >
                <p>{item.name}</p>
                <PieChart
                    style={{width: 100, margin: '0 auto'}}
                    data={[
                        {value: 50 - item.value, color: '#e3d9d8'},
                        {value: item.value, color: '#e33339'}
                    ]}
                    totalValue={50}
                    lineWidth={20}
                    rounded={true}
                />
                <p className="diagnostic-pie-chart-counter">{item.value}/50</p>
            </div>
        ))
    );

    renderLogInformation = (logInfo, markers) => (
        <div className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    Log In Information
                </h3>
            </div>
            <div className="panel-body no-padding">
                <div className="row no-margin">
                    <div className="col-sm-7 no-padding">
                        <table className="table">
                            <tbody>
                            {this.renderTableLogInformation(logInfo)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-5 no-padding">
                        <div id="locationMap">
                            <Maps
                                markers={markers}
                                type='edit'
                                getPositionOnMap={this.getPositionOnMap}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderTableLogInformation = (logInfo) => (
        logInfo.map((item, index) => (
            <tr key={index}>
                <td style={{width: 50}}>
                    <img src={item.img} alt={item.img}/>
                </td>
                <td>
                    <h4 className="device-location">{item.device}, {item.country}</h4>
                    <p className="browsing-info"><span>{item.browser}</span> - {item.active}</p>
                </td>
                <td>{item.ip}</td>
                <td>{item.count} times</td>
            </tr>
        ))
    );

    renderStudentInfo = (studentInfo) => (
        <div className="panel customPanel">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-2">
                        <img
                            className="thumbnail"
                            src={studentInfo.photo}
                            alt="user"
                        />
                    </div>
                    <div className="col-sm-10">
                        <div className="student-info-table">
                            <div className="row">
                                {this.renderStudentInfoContent('col-sm-4', 'Name', studentInfo.name)}
                                {this.renderStudentInfoContent('col-sm-4', 'Phone Number', studentInfo.phone_number)}
                                {this.renderStudentInfoContent('col-sm-4', 'Email Address', studentInfo.email)}
                            </div>
                            <div className="row">
                                {this.renderStudentInfoContent('col-sm-4', 'Street', studentInfo.street)}
                                {this.renderStudentInfoContent('col-sm-2', 'City', studentInfo.city)}
                                {this.renderStudentInfoContent('col-sm-2', 'Province', studentInfo.province)}
                                {this.renderStudentInfoContent('col-sm-2', 'Country', studentInfo.country)}
                                {this.renderStudentInfoContent('col-sm-2', 'Postal Code', studentInfo.code)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderStudentInfoContent = (className, title, value) => (
        <div className={className}>
            <p>
                {title}
            </p>
            <h3>
                {value}
            </h3>
        </div>
    );

    renderAccordions = (accordionStatistic) => (
        accordionStatistic.map((item, index) => (
            <div className="panel" key={index}>
                <div className="panel-heading border-bottom">
                    <h3 className="panel-title">
                        <a
                            data-parent="#accordion"
                            className="font-400"
                            data-toggle="collapse"
                            href={"#"+item.link}
                        >
                            <i className={"zmdi zmdi-"+item.font_image}/>
                            {item.title}
                        </a>
                    </h3>
                </div>
                <div
                    className={"panel-collapse collapse "+ (+index === 0
                        ? "in"
                        : ''
                    )}
                    id={item.link}
                >
                    <div className="panel-body">
                        <ul className="list-with-label">
                            {this.renderAccordionStatistic(item.items)}
                        </ul>
                    </div>
                </div>
            </div>
        ))
    );

    renderAccordionStatistic = (statistic) => (
        statistic.map((item, index) => {

             if (item.name.length !==0) {
                 return(
                     <li key={index}>
                         <span className="list-text">
                             {item.name}
                         </span>
                         <span className="label label-info">
                             {item.value}
                         </span>
                     </li>
                 );
             } else {
                 return (
                     <h2
                         key={index}
                         style={{textAlign: "center"}}
                     >
                         {item.value}
                     </h2>
                 );
             }

        })
    );

    //Actions
    getPositionOnMap = ({lat, lng}) => {
        this.setState({
            latitude: lat,
            longitude: lng
        })
    };

    getDevice() {
        this.setState({
            browser: device.getBrowser().name,
            os: device.getOS().name
        })
    };

    getTimeUser() {
        let date = new Date();
        this.setState({
            date: date.toLocaleDateString('en-US', { day: 'numeric' , year: 'numeric', month: 'long' }),
            time: date.getHours()+':'+date.getMinutes()
        })
    };

    //Lifecycle
    componentDidMount() {
        this.props.getStudentProfile();
    };

    componentWillMount() {
        this.getDevice();
        this.getTimeUser();
    };

    render() {
        const {studentProfile} = this.props;

        return(
            <div className="content-wrapper" id="content-container">
                {this.renderNamePage()}
                <section className="content no-padding">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="nav-tabs-custom no-bg">
                                {this.renderHeaderLinks()}
                                <div className="tab-content no-bg no-padding">
                                    <div className="tab-pane active" id="tab_1">
                                        {
                                            studentProfile.studentInfo &&
                                            this.renderStudentInfo(studentProfile.studentInfo)
                                        }
                                        <div style={{paddingLeft: 10}}>
                                            {
                                                studentProfile.circumstances &&
                                                this.renderCircumstances(studentProfile.circumstances)
                                            }
                                            {
                                                studentProfile.foundations &&
                                                this.renderFoundations(studentProfile.foundations)
                                            }
                                            {
                                                studentProfile.diagnosticScore &&
                                                this.renderDiagnostic(studentProfile.diagnosticScore)
                                            }
                                            {
                                                studentProfile.markersMap &&
                                                this.renderLogInformation(studentProfile.logInfo, studentProfile.markersMap)
                                            }
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="tab_2"
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div
                                className="panel-group accordion"
                                id="accordion"
                            >
                                {
                                    studentProfile.accordionStatistic &&
                                    this.renderAccordions(this.props.studentProfile.accordionStatistic)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

StudentProfile.propTypes = {
    studentProfile: PropTypes.shape({
        studentInfo: PropTypes.object,
        circumstances: PropTypes.array,
        foundations: PropTypes.array,
        diagnosticScore: PropTypes.array,
        markersMap: PropTypes.array,
        accordionStatistic: PropTypes.array,
        logInfo: PropTypes.array
    })
};

export default StudentProfile;