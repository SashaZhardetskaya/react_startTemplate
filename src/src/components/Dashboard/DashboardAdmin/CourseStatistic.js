import React, {Component} from "react";
import PropTypes from "prop-types";
import {DataTable} from "react-data-components";
import ReactHighcharts from 'react-highcharts';
import 'react-data-components/css/table-twbs.css';

class CourseStatistic extends Component {
    state = {
        columns: [...this.props.usersStatus.columnsTable],
        displayColumns: [...this.props.usersStatus.columnsTable.filter(item => item.defaultChecked)],
        columnsTable: []
    };

    //Renders
    renderLinks = (name) => (
        <li>
            <a href="#">
                {name}
            </a>
        </li>
    );

    renderOptions = () => (
        <div className="dropdown">
            <a
                role="button"
                data-toggle="dropdown"
                className="btn btn-default"
            >
                Options
            </a>
            <ul className="dropdown-menu">
                {this.renderLinks('Go to messenger')}
                {this.renderLinks('Send Notification')}
                {this.renderLinks('Friends')}
                {this.renderLinks('Recommend Friend')}
                {this.renderLinks('Change Status')}
            </ul>
        </div>
    );

    renderCheckbox = () => (
        this.state.columnsTable.map((item, index) => (
            <li key={index}>
                <label>
                    <input
                        type="checkbox"
                        value={index}
                        defaultChecked={item.defaultChecked}
                        onChange={this.handleChangeInput}
                    />
                    {item.title}
                </label>
            </li>
        ))
    );

    renderTableButton = (button, name) => (
        <button
            className={"btn btn-default buttons-html5 buttons-"+button }
            tabIndex="0"
            aria-controls="DataTables_Table_0"
        >
            <span>{name}</span>
        </button>
    );

    renderControlsForTable = () => (
        <div className="border-bottom sp-10">
            <div className="clearfix">
                <div className="pull-left">
                    <div className="btn-group">
                        <div className="dropdown">
                            <a
                                role="button"
                                data-toggle="dropdown"
                                className="btn btn-default"
                            >
                                Show/Hide Columns
                            </a>
                            <ul className="dropdown-menu showHidColumns">
                                {this.renderCheckbox()}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pull-right">
                    <div className="dt-buttons btn-group">
                        {this.renderTableButton('copy', 'Copy')}
                        {this.renderTableButton('excel', 'Excel')}
                        {this.renderTableButton('pdf', 'PDF')}
                    </div>
                </div>
            </div>
        </div>
    );

    renderConfigHighchart = (statisticDiagram) => {
        return (
            {
                chart: {
                    type: 'column'
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Score'
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: statisticDiagram
            }
        )
    };

    //Actions
    handleChangeInput = (event) => {

        if (event.target.checked) {
            let val = this.state.displayColumns.find(item => item.value > +event.target.value);

            if (val){
                this.state.displayColumns.map((item, index) => {
                    if (item.value === val.value) {
                        return val = index;
                    }
                    return val;
                });
            } else {
                val = event.target.value;
            }

            this.state.displayColumns.splice(val, 0,  this.state.columnsTable[event.target.value]);
            this.setState({displayColumns: this.state.displayColumns});

        } else {
            this.state.displayColumns.map((item, index) => {
                if(item.value === +event.target.value) {
                    this.state.displayColumns.splice(index, 1 );
                    this.setState({displayColumns: this.state.displayColumns});
                }
                return item
            });
        }
    };

    //Lifecycle
    componentDidMount() {
        this.setState({
            displayColumns: [...this.props.usersStatus.columnsTable, {
                title: 'Options',
                render: this.renderOptions,
                className: 'sorting_asc',
                prop: 'options',
                defaultChecked: true,
                value: 17
            }].filter(item => item.defaultChecked),
            columnsTable: [...this.props.usersStatus.columnsTable, {
                title: 'Options',
                render: this.renderOptions,
                className: 'sorting_asc',
                prop: 'options',
                defaultChecked: true,
                value: 17
            }]
        });
    };

    render() {
        const {usersStatus} = this.props;

        return (
            <div>
                <div
                    id="AvgScore"
                    className="wrap-statistic-diagram"
                >
                    <ReactHighcharts
                        config={this.renderConfigHighchart(usersStatus.statisticDiagram)}
                        ref="chart"
                    />
                </div>
                <div className="sm-top20">
                    <div className="panel customPanel">
                        <div className="panel-body no-padding">
                            {this.renderControlsForTable()}
                            <div className="sp-10">
                                <div className="table-responsive statistic-students">
                                    <DataTable
                                        keys="name"
                                        columns={this.state.displayColumns}
                                        useShowHideColumns={true}
                                        initialData={usersStatus.dataTable}
                                        initialPageLength={10}
                                        initialSortBy={{ prop: 'status', order: 'descending' }}
                                        pageLengthOptions={[10, 25, 50, 100]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CourseStatistic.propTypes = {
    usersStatus: PropTypes.shape({
        columnsTable: PropTypes.array,
        dataTable: PropTypes.array,
        statisticDiagram: PropTypes.array
    })
};

export default CourseStatistic;