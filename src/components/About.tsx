import type { State } from '../interfaces';

import { Button, Classes, Dialog } from "@blueprintjs/core";

export const About = ({ state, onToggleAbout }: { state: State; onToggleAbout: (open: boolean) => void }) => {
    return (
        <Dialog isOpen={state.aboutOpen} onClose={() => onToggleAbout(false)}>
            <div className={Classes.DIALOG_HEADER}>
                <h2>About this site.</h2>
            </div>
            <div className={Classes.DIALOG_BODY}>
                <p>
                    <strong>
                        This site is written in React using Blueprint as a component library and deployed using Firebase hosting.
                    </strong>
                </p>
                <h4><a href="https://reactjs.org/">React</a> & <a href="https://twemoji.twitter.com/">Twemoji</a></h4>
                <p>Copyright 2020 Twitter, Inc and other contributors</p>
                <p>Code licensed under the MIT License: <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a></p>
                <p>Graphics licensed under CC-BY 4.0: <a href="https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a></p>

                <h4><a href="https://blueprintjs.com/">Blueprint</a></h4>
                <p>Licensed under <a href="https://github.com/palantir/blueprint/blob/develop/LICENSE">Apache-2.0</a></p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button onClick={() => onToggleAbout(false)}>Close</Button>
                </div>
            </div>
        </Dialog>
    )
}
