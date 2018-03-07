import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import userImage from "../../assets/128x128.jpg";

/**
 *
 */
class Sidebar extends Component {

    //LifecycleMethods
    componentWillMount() {
        this.props.onLoad();
    }

    //Renders
    renderUserInfo = () => (
        <div className="user-panel">
            <div className="pull-left image">
                <img
                    src={userImage}
                    className=""
                    alt="User"
                />
            </div>
            <div className="pull-left info">
                <p>
                    {this.props.user.name} {this.props.user.surname}
                </p>
                <p className='text-info'>
                    {this.props.user.position}
                </p>

            </div>
        </div>
    );

    renderCategories = () => (
        this.props.sidebar.map((category, index) => {
            return (
                <ul
                    className="sidebar-menu"
                    key={`category_${index}`}
                >
                    {
                        category.items &&
                        this.renderCategoryItems(index, category.items)
                    }
                </ul>
            )
        })
    );

    renderCategoryItems = (catId, items) => (
        items.map((item, index) => (
            <li
                key={`parentItem_${catId}_${index}`}
                onClick={() => {
                    this.props.handleClickMenuItem(item);
                    if (item.title === "Logout") {
                        this.props.onLogout()
                    }
                }}
            >
                <Link
                    className={
                        item.expanded
                        ? "active-item-sidebar"
                        : null
                    }
                    to={item.path}>
                    <i className={item.icon}/>
                    <span>{item.title}</span>
                    <i className="fa fa-angle-right pull-right"/>
                </Link>

                <ul className={
                    "treeview-menu "
                    + (item.expanded
                        ? 'treeview-menu-expanded'
                        : '')
                }>
                </ul>
            </li>
        ))
    );


    render() {
        return (
            <div
                className="main-sidebar"
                onMouseEnter={this.props.setExpandedOnHover}
                onMouseLeave={this.props.setCollapsedOnHover}
            >
                <section className="sidebar">
                    {this.renderUserInfo()}
                    {this.renderCategories()}
                </section>
            </div>
        );
    }

}

Sidebar.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired
    }),
    sidebar: PropTypes.array.isRequired,
    onLoad: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    setExpandedOnHover: PropTypes.func.isRequired,
    setCollapsedOnHover: PropTypes.func.isRequired,
    handleClickMenuItem: PropTypes.func.isRequired
};

export default Sidebar;