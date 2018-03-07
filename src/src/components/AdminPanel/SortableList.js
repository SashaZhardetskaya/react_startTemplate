import React from 'react';
import PropTypes from 'prop-types';
import {SortableContainer} from "react-sortable-hoc";
import SortableItem from './SortableItem';

const SortableList = SortableContainer(({ parts, number, showModalDelete, setSelectedEditChapterPartId, selectedEditChapterPartId }) =>  (
        <div
            key={number}
            className="panel-body no-padding"
            id={"panel_chapter_"+number}
        >
            {parts.map((items, index) => (
                <SortableItem
                    key={`item-${index}`}
                    number={number}
                    index={index}
                    item={items}
                    showModalDelete={showModalDelete}
                    setSelectedEditChapterPartId={setSelectedEditChapterPartId}
                    selectedEditChapterPartId={selectedEditChapterPartId}
                />
            ))}
        </div>
    )
);

SortableList.propTypes = {
    parts: PropTypes.array.isRequired,
    number: PropTypes.number,
    showModalDelete: PropTypes.func.isRequired,
    setSelectedEditChapterPartId: PropTypes.func.isRequired
};

export default SortableList;