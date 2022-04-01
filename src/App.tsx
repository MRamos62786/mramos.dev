
import type { State } from './interfaces';

import './App.css';
import { Component } from 'react'
import { About, Availability, Header, Body, Footer } from './components';
import { getTheme, setTheme, isDarkTheme } from './utilities';

import { IResizeEntry, ResizeSensor } from "@blueprintjs/core";

// 

export default class App extends Component {
  public state: State = {
    contact: {
      phone: '+1-774-319-9111',
      email: 'email@mramos.dev'
    },
    themeName: getTheme(),
    viewport: { height: 0, width: 0 },
    menuOpen: false,
    aboutOpen: false,
    availabilityOpen: false,
    time: null,
    noTime: true
  };

  async componentDidMount() {

    // const getTime = Promise.reject('ERROR') as any;
    const getTime = async () => (await fetch('https://worldtimeapi.org/api/timezone/America/New_York')).json();

    try {

      const params = new URLSearchParams(window.location.search);

      const show = params.get('show');
      switch (show) {
        case 'sch':
          this.handleToggleAvailability(true);
          break;
        default:
          console.warn(`unknown show parameter provided: ${show}`);
          break;
      }

      this.setState({ time: await getTime(), noTime: false });
      setInterval(async () => this.setState({ time: await getTime() }), 1000);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <ResizeSensor onResize={this.handleResize}>
        <div className={`${this.state.themeName} Viewport`}>
          <div className={isDarkTheme(this.state.themeName) ? 'DarkBackground' : 'LightBackground'} />
          <About state={this.state} onToggleAbout={this.handleToggleAbout} />
          <Availability state={this.state} onToggleAvailability={this.handleToggleAvailability} />
          <Header
            useDarkTheme={isDarkTheme(this.state.themeName)}
            onToggleDark={this.handleToggleDark}
            onToggleMenu={this.handleToggleMenu}
            onToggleAbout={this.handleToggleAbout}
            onToggleAvailability={this.handleToggleAvailability}
            state={this.state}
          />
          <Body />
          <Footer state={this.state} />
        </div>
      </ResizeSensor>
    )
  }

  private handleResize = (entries: IResizeEntry[]) => {
    const entry = entries[0];
    const height = entry.contentRect.height;
    const width = entry.contentRect.width;
    this.setState({ viewport: { height, width } });
  }

  private handleToggleDark = (useDark: boolean) => {
    const nextThemeName = setTheme(useDark);
    this.setState({ themeName: nextThemeName });
  };

  private handleToggleMenu = (open: boolean) => {
    this.setState({ menuOpen: open });
  };

  private handleToggleAbout = (open: boolean) => {
    this.setState({ aboutOpen: open });
  };

  private handleToggleAvailability = (open: boolean) => {
    this.setState({ availabilityOpen: open });
  };
}
