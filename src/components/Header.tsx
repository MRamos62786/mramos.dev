import type { State } from '../interfaces';

import { Navbar, Alignment, Button, AnchorButton, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

export const Header = ({ useDarkTheme, onToggleDark, onToggleMenu, onToggleAbout, onToggleAvailability, state }: {
    useDarkTheme: boolean,
    onToggleDark: (useDark: boolean) => void,
    onToggleMenu: (open: boolean) => void,
    onToggleAbout: (open: boolean) => void,
    onToggleAvailability: (open: boolean) => void,
    state: State
},) => {

    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Marco Ramos</Navbar.Heading>
                    <Navbar.Divider />
                    {state.viewport.width >= 410 && <Button className="bp4-minimal" icon="home" text="Home" />}
                    {/* {state.viewport.width >= 410 && <Button className="bp4-minimal" icon="calendar" text="Availability" onClick={() => onToggleAvailability(true)} />} */}
                    {state.viewport.width >= 410 && <AnchorButton
                        className="bp4-minimal"
                        icon="document"
                        text="Resume"
                        href="resume.pdf"
                        download />}
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    {state.viewport.width >= 460 && <AnchorButton
                        className="bp4-minimal"
                        icon="phone"
                        text={state.viewport.width > 768 ? state.contact.phone : null}
                        href={`tel:${state.contact.phone}`} />}
                    {state.viewport.width >= 460 && <AnchorButton
                        className="bp4-minimal"
                        icon="envelope"
                        text={state.viewport.width > 768 ? "email@mramos.dev" : null}
                        href="mailto:email@mramos.dev" />}
                    <Popover2
                        content={
                            <Menu>
                                {state.viewport.width < 410 && <MenuItem icon="home" text="Home" />}
                                {/* {state.viewport.width < 410 && <MenuItem icon="calendar" text="Availability" onClick={() => onToggleAvailability(true)}/>} */}
                                {state.viewport.width < 410 && <MenuItem
                                    icon="document"
                                    text="Resume"
                                    href="resume.pdf"
                                    download />}
                                {state.viewport.width < 410 && <MenuDivider />}
                                {state.viewport.width < 460 && <MenuItem
                                    icon="phone"
                                    text={state.contact.phone}
                                    href={`tel:${state.contact.phone}`} />}
                                {state.viewport.width < 460 && <MenuItem
                                    icon="envelope"
                                    text="email@mramos.dev"
                                    href="mailto:email@mramos.dev" />}
                                {state.viewport.width < 460 && <MenuDivider />}
                                <MenuItem
                                    icon={useDarkTheme ? "flash" : "moon"}
                                    text={useDarkTheme ? "Light theme" : "Dark theme"}
                                    onClick={() => onToggleDark(!useDarkTheme)}
                                />
                                <MenuItem
                                    icon="application"
                                    text="About"
                                    onClick={() => onToggleAbout(true)}
                                />
                            </Menu>
                        }
                        interactionKind="click"
                        isOpen={state.menuOpen}
                        onInteraction={(open) => onToggleMenu(open)}
                        placement="left-start"
                    >
                        <Button className="bp4-minimal" icon="menu" />
                    </Popover2>
                </Navbar.Group>
            </Navbar>
        </header>
    )
}
