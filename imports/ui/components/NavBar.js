import React from 'react';
import * as BootStrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default class NavBar extends React.Component {

    render() {
        return (
            <nav>
                <div>
                    <a className="brand-logo" href='/'>Shortlist</a>
                    <NavLink exact to='/'>Dashboard</NavLink>
                    <NavLink to="/map">Map</NavLink>
                    <NavLink to="/calendar">Calendar</NavLink>
                </div>
            </nav>
        );
    }

    logout() {
        // TODO: implement logout
        console.log('implement logout');
    }
}

            // <BootStrap.Navbar className={'sticky-top'} bg="light" expand="lg">
            //     <BootStrap.Navbar.Brand id={'brand'}>Shortlist</BootStrap.Navbar.Brand>
            //     <BootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <BootStrap.Navbar.Collapse id="basic-navbar-nav">
            //         <BootStrap.Nav defaultActiveKey={'#newAcct'} className="mr-auto">
            //             <BootStrap.Nav.Link default={true} href="#newAcct">Dashboard</BootStrap.Nav.Link>
            //         </BootStrap.Nav>
            //         <BootStrap.Nav defaultActiveKey={'#newAcct'} className="mr-auto">
            //             <BootStrap.Nav.Link default={true} href="#newAcct">Dashboard</BootStrap.Nav.Link>
            //         </BootStrap.Nav>
            //         <BootStrap.Nav defaultActiveKey={'#newAcct'} className="mr-auto">
            //             <BootStrap.Nav.Link default={true} href="#newAcct">Dashboard</BootStrap.Nav.Link>
            //         </BootStrap.Nav>
            //         <BootStrap.DropdownButton alignRight title={'shortlist_user'}>
            //             <BootStrap.Dropdown.Item key={1} onClick={this.logout}>Logout</BootStrap.Dropdown.Item>
            //         </BootStrap.DropdownButton>
            //     </BootStrap.Navbar.Collapse>
            // </BootStrap.Navbar>