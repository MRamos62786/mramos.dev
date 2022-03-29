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
}