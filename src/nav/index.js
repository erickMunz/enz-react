import React, { Component } from 'react';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Menu, 
    MenuDivider, 
    MenuItem, 
    Popover, 
    Position
} from "@blueprintjs/core";
import { BaseExample } from "@blueprintjs/docs-theme";


class navegacion extends BaseExample<{}> {
    render(){
        const compassMenu =(
            <Menu>
                <MenuItem icon="graph" text="Graph" />
                <MenuItem icon="map" text="Map" />
                <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
                <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
                <MenuDivider />
                <MenuItem icon="cog" text="Settings...">
                    <MenuItem icon="add" text="Add new application" disabled={true} />
                    <MenuItem icon="remove" text="Remove application" /></MenuItem>
            </Menu>
        )
        return(
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Intento</NavbarHeading>
                    <Button className="pt-minimal" icon="home" text="Home" />
                    <Button className="pt-minimal" icon="document" text="Files" />  
                    <Popover content={compassMenu} position={Position.RIGHT_BOTTOM}>
                        <Button icon="share" text="Open in..." />
                    </Popover>
                </NavbarGroup>
            </Navbar>
        );
    }
}

export default navegacion