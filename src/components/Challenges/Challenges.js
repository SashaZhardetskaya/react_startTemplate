import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Challenges extends Component {

    //LifecycleMethods
    componentWillMount() {
        this.props.onLoadChallenges();
    }

    //Renders
    renderPositionChallenge = (item) => {
        return item.items.map((user)=> (
            <tr
                key={user.pos}
                className={`score-${user.pos}${+user.pos === 8 && ' score_my_score'}`}

                id={`student_${user.pos}`}
                style={{backgroundColor:
                        (+user.pos === 7
                            && "rgb(236, 236, 236)")
                }}
            >
                <td className="text-right">
                    {user.pos}
                </td>
                <td>
                    <img
                        src={user.photo}
                        className="challenger_image"
                        alt='user'
                    />
                    {user.name}
                    <Link
                        to="#"
                        className="btn btn-success text-white pull-right bounce w-sm"
                        style={{
                            visibility: +user.pos === 7
                                ? 'visible'
                                : 'hidden',
                            animation: +user.pos !== 7
                                && 'none'
                        }}
                    >
                        Challenge
                    </Link>
                </td>
                <td>
                    {user.rank}
                </td>
                <td>
                    {user.wins}
                </td>
                <td>
                    {user.losses}
                </td>
                <td>
                    {user.gameMerits}
                </td>
                <td>
                    {user.totalMerits}
                </td>
            </tr>
        ))
    };

    renderChallenges = () => (
        this.props.challenges.map((item, index) => {
            return (
                <table
                    className="table table-striped table-hover challengesTable"
                    key={index}>
                    <thead key={index}>
                        <tr>
                            <th style={{width: 40}}>
                                Pos
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Rank
                            </th>
                            <th style={{width: 100}}
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Tooltip on left">
                                Wins
                            </th>
                            <th style={{width: 100}}
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Tooltip on left">
                                Losses
                            </th>
                            <th style={{width: 150}}>
                                <div
                                    data-toggle="tooltip"
                                    data-content="Winning one game gives you x points; this is what will determine positon"
                                    title="Winning one game gives you x points; this is what will determine positon">
                                    Game Merits
                                </div>
                            </th>
                            <th style={{width: 150}}>
                                Total Merits
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPositionChallenge(item, index)}
                    </tbody>
                </table>
            )
        })
    );

    render() {
        return (
            <div
                className="content-wrapper"
                id="content-container"
            >
                <div className="bg-light lter b-b wrapper-md">
                    <div className="row">
                        <div className="col-sm12 col-xs-12">
                            <h1 className="m-n font-thin h3 text-black">
                                Challenges
                            </h1>
                            <small className="text-muted">
                                View Top Scorers
                            </small>
                        </div>
                    </div>
                </div>
                <section className="content no-padding">
                    <div className="table-responsive bg-white">
                        {this.renderChallenges()}
                    </div>
                </section>
            </div>       
        )
    }
}

Challenges.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired
    }),
    challenges: PropTypes.array.isRequired,
    onLoadChallenges: PropTypes.func.isRequired
};

export default Challenges;