import React, {Component} from 'react';
import {Link} from "react-router-dom";
import line from '../../assets/q.png';

class FinalQuiz extends Component {
    state = {
        currentQuestionIndex: 0
    };

    renderQuizBody = () => (
        <div className="question sp-20 active-question"
             data-question="1"
             id="FinalQuizQuestion1">
            <div className="sm-top-bottom20 text-center">
                <img src={line} alt="line"/>
            </div>
            <p className="font-18">
                111Debating me breeding be answered an he. Spoil event was
                words her off cause any. Tears woman which no is world miles woody. Wi?
            </p>
            <ul className="list-unstyled mcqList">
                <li>
                    <label>
                        <input type="radio"
                               name="radio"
                               value="31"/>
                        A. 86
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio"
                               name="radio"
                               value="41"
                        />
                        A. 79
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio"
                               name="radio"
                               value="42"
                        />
                        A. 70
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio"
                               name="radio"
                               value="29"
                        />
                        A. 79
                    </label>
                </li>
            </ul>
        </div>
    );

    renderQuizFooter = () => (
        <div className="sp-20">
            <div className="row">
                <div className="col-xs-6">
                    <div className=" final-mcqs-controls">
                        <Link
                            to="#"
                            className="btn btn-default"
                        >
                            Skip Question
                        </Link>
                        <Link
                            to="#"
                            className="btn btn-danger"
                        >
                            Submit Answer
                        </Link>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div
                        className="paginationFinalQuiz text-right">1/4
                    </div>
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <div className="final_quiz_list">
                {this.renderQuizBody()}
                <hr className="no-margin"
                    style={{borderColor: "#e6e6e6"}}
                />
                {this.renderQuizFooter()}
            </div>
        )
    }
}

export default FinalQuiz;