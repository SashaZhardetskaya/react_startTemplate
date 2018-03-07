import React from 'react';
import {SortableElement} from "react-sortable-hoc";
import CountUp from 'react-countup';
import PropTypes from "prop-types";
import ChapterPartEditForm from "./ChapterPartEditForm";

const SortableItem = SortableElement(({ item, index, number, showModalDelete, setSelectedEditChapterPartId, selectedEditChapterPartId }) =>  (
        <div
            id={"panel_chapter_part_"+number+"_"+index}
            className="chapter-part"
        >
            <div className="row no-margin">
                <div className="col-sm-5 no-padding">
                    <div
                        style={{borderBottom: "1px solid #f1f1f1"}}
                    >
                        <div className="chapter_info">
                            <div className="chapter_thumb">
                                <img src={item.img} />
                            </div>
                            <div className="chapter_desc">
                                <h3 className="font-18 sm-top0">
                                    {item.title}
                                </h3>
                                <div className="chapter_controls">
                                    <div className="font-16">
                                        <button
                                            className="zmdi zmdi-edit text-dark chapter-btns"
                                            // onClick="GetEditAbleChapterInfo(this)"
                                            onClick={()=>{setSelectedEditChapterPartId(item.id)}}
                                        />
                                        <button
                                            className="zmdi zmdi-delete text-danger chapter-btns"
                                            onClick={()=>showModalDelete(item.id)}
                                        >
                                        </button>
                                        <button
                                            className="zmdi zmdi-settings chapter-btns"
                                        >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 no-padding">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="head-subhead">
                                <p>Total Hours</p>
                                <h3>
                                    <CountUp
                                        className="counter"
                                        start={0}
                                        end={item.total_hours}
                                        duration={3.75}
                                    />
                                    Hours
                                </h3>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="head-subhead">
                                <p>Video Questions</p>
                                <h3>
                                    <CountUp
                                        className="counter"
                                        start={0}
                                        end={item.video_questions}
                                        duration={3.75}
                                    />
                                </h3>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="head-subhead">
                                <p>Quiz Questions</p>
                                <h3>
                                    <CountUp
                                        className="counter"
                                        start={0}
                                        end={item.quiz_questions}
                                        duration={3.75}
                                    />
                                </h3>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="head-subhead">
                                <p>Status</p>
                                <h3>
                                    <span>
                                        {item.status}
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                item.id === selectedEditChapterPartId &&
                <ChapterPartEditForm
                    setSelectedEditChapterPartId={setSelectedEditChapterPartId}
                />
            }
        </div>
    )
);

SortableItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    number: PropTypes.number,
    showModalDelete: PropTypes.func.isRequired
};

export default SortableItem;