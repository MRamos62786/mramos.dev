
import type { State } from './interfaces';

import './App.css';
import { Component } from 'react'
import { Header, Body, Footer } from './components';
import { getTheme, setTheme, isDarkTheme } from './utilities';

import { IResizeEntry, ResizeSensor } from "@blueprintjs/core";

export default class App extends Component {
  public state: State = { themeName: getTheme(), viewport: { height: 0, width: 0 }, menuOpen: false };

  render() {
    return (
      <ResizeSensor onResize={this.handleResize}>
        <div className={`${this.state.themeName} Viewport`}>
          <div className={isDarkTheme(this.state.themeName) ? 'DarkBackground' : 'LightBackground'} />
          <Header
            useDarkTheme={isDarkTheme(this.state.themeName)}
            onToggleDark={this.handleToggleDark}
            onToggleMenu={this.handleToggleMenu}
            state={this.state}
          />
          <Body />
          <Footer />
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

  private handleToggleMenu = (openMenu: boolean) => {
    this.setState({ menuOpen: openMenu });
  };
}
