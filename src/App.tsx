
import type { State } from './interfaces';

import './App.css';
import { Component } from 'react'
import { About, Header, Body, Footer } from './components';
import { getTheme, setTheme, isDarkTheme } from './utilities';

import { IResizeEntry, ResizeSensor } from "@blueprintjs/core";

export default class App extends Component {
  public state: State = { themeName: getTheme(), viewport: { height: 0, width: 0 }, menuOpen: false, aboutOpen: false };

  render() {
    return (
      <ResizeSensor onResize={this.handleResize}>
        <div className={`${this.state.themeName} Viewport`}>
          <div className={isDarkTheme(this.state.themeName) ? 'DarkBackground' : 'LightBackground'} />
          <About state={this.state} onToggleAbout={this.handleToggleAbout} />
          <Header
            useDarkTheme={isDarkTheme(this.state.themeName)}
            onToggleDark={this.handleToggleDark}
            onToggleMenu={this.handleToggleMenu}
            onToggleAbout={this.handleToggleAbout}
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
}
