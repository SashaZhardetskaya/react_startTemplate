import React, {Component}  from "react";
import PropTypes from 'prop-types';
import {arrayMove} from "react-sortable-hoc";
import SortableList from './SortableList';

class SortableChapters extends Component {
    state = {
        parts: [...this.props.parts],
        selectedEditChapterPartId: ''
    };

    //Actions
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            parts: arrayMove(this.state.parts, oldIndex, newIndex)
        });
    };

    setSelectedEditChapterPartId = (id) => {
        if (id !== this.state.selectedEditChapterPartId) {
            this.setState({
                selectedEditChapterPartId: id
            });
        } else {
            this.setState({
                selectedEditChapterPartId: ''
            });
        }
    };

    //Lifecycle
    componentWillReceiveProps(nextProps) {

        if (this.props.parts !== nextProps.parts) {
            this.setState({parts: nextProps.parts});
        }

    };

    render() {
        return (
            <SortableList
                parts={this.state.parts}
                number={this.props.number}
                onSortEnd={this.onSortEnd}
                showModalDelete={this.props.showModalDelete}
                setSelectedEditChapterPartId={this.setSelectedEditChapterPartId}
                selectedEditChapterPartId={this.state.selectedEditChapterPartId}
            />
        );
    }
}

SortableChapters.propTypes = {
    parts: PropTypes.array.isRequired,
    number: PropTypes.number,
    showModalDelete: PropTypes.func.isRequired
};

export default SortableChapters;