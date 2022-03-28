import type { State } from '../interfaces';

import { Navbar, Alignment, Button, AnchorButton, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

export const Header = ({ useDarkTheme, onToggleDark, onToggleMenu, onToggleAbout, state }: {
    useDarkTheme: boolean,
    onToggleDark: (useDark: boolean) => void,
    onToggleMenu: (open: boolean) => void,
    onToggleAbout: (open: boolean) => void,
    state: State
},) => {
    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Marco Ramos</Navbar.Heading>
                    <Navbar.Divider />
                    {state.viewport.width >= 370 && <Button className="bp4-minimal" icon="home" text="Home" />}
                    {state.viewport.width >= 370 && <AnchorButton
                        className="bp4-minimal"
                        icon="document"
                        text="Resume"
                        href="resume.pdf"
                        download />}
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    {state.viewport.width >= 430 && <AnchorButton
                        className="bp4-minimal"
                        icon="phone"
                        text={state.viewport.width > 768 ? "(774) 319-9111" : null}
                        href="tel:+1 7743199111" />}
                    {state.viewport.width >= 430 && <AnchorButton
                        className="bp4-minimal"
                        icon="envelope"
                        text={state.viewport.width > 768 ? "email@mramos.dev" : null}
                        href="mailto: email@mramos.dev" />}
                    <Popover2
                        content={
                            <Menu>
                                {state.viewport.width < 370 && <MenuItem icon="home" text="Home" />}
                                {state.viewport.width < 370 && <MenuItem icon="document" text="Resume" />}
                                {state.viewport.width < 370 && <MenuDivider />}
                                {state.viewport.width < 430 && <MenuItem
                                    icon="phone"
                                    text="(774) 319-9111"
                                    href="tel:+1 7743199111" />}
                                {state.viewport.width < 430 && <MenuItem
                                    icon="envelope"
                                    text="email@mramos.dev"
                                    href="mailto: email@mramos.dev" />}
                                {state.viewport.width < 430 && <MenuDivider />}
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
