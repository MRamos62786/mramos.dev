import type { State } from '../interfaces';

import { Button, Classes, Dialog } from "@blueprintjs/core";

export const Availability = ({ state, onToggleAvailability }: { state: State; onToggleAvailability: (open: boolean) => void }) => {

    // https://moment.github.io/luxon/#/formatting
    // let rows = [];
    // for (let i = 0; i < state.availability.length; i++) {
    //     const a = state.availability[i];
    //     rows.push(<li>{a.from.getHours()}</li>);        
    // }

    return (
        <Dialog className={`${state.themeName} Dialog`} isOpen={state.availabilityOpen} onClose={() => onToggleAvailability(false)}>
            <div className={Classes.DIALOG_HEADER}>
                <h2>My Availability - {state.time?.abbreviation || 'Eastern'} Time Zone</h2>
            </div>
            <div className={Classes.DIALOG_BODY}>
                <p>
                    <strong>
                        Please contact me to schedule a meeting.
                    </strong>
                </p>
                {/* <ul>{rows}</ul> */}
                <ul>
                    {/* <li>April 4th</li>
                    <ul>
                        <li>8am - 9am</li>
                    </ul>
                    <li>April 5th</li>
                    <ul>
                        <li>8am - 9am</li>
                    </ul> */}
                    <li>April 11th</li>
                    <ul>
                        <li>3pm - 6pm</li>
                    </ul>
                    <li>April 12th</li>
                    <ul>
                        <li>3:30pm - 6pm</li>
                    </ul>
                    <li>April 14th</li>
                    <ul>
                        <li>4:30pm - 6pm</li>
                    </ul>
                    <li>April 15th</li>
                    <ul>
                        <li>9am - 11am</li>
                        <li>1pm - 4pm</li>
                    </ul>
                    {/* <li>April 8th</li>
                    <ul>
                        <li>8am - 10am</li>
                        <li>4:30pm - 6pm</li>
                    </ul> */}
                </ul>
                {state.time?.datetime && <p>Current Time: {(new Date(state.time?.datetime)).toTimeString()}</p>}
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button onClick={() => onToggleAvailability(false)}>Close</Button>
                </div>
            </div>
        </Dialog>
    )
}
