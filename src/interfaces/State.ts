export interface State {
    contact: {
        // https://datatracker.ietf.org/doc/html/rfc6068
        email: string;
        // https://datatracker.ietf.org/doc/html/rfc3966
        phone: string;
    }
    themeName: string;
    viewport: {
        height: number;
        width: number;
    };
    menuOpen: boolean;
    aboutOpen: boolean;
    availabilityOpen: boolean;
    // http://worldtimeapi.org/
    time: Time | null;
    noTime: boolean;
}

export interface Time {
    abbreviation: string;
    client_ip: string;
    datetime: string;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: string;
    dst_offset: number;
    dst_until: string;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: string;
    utc_offset: string;
    week_number: number;
}