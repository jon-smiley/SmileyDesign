import React, { Component } from 'react'
import { Button, Panel, NavBar, Layout, Main} from 'smiley-design'

export default class App extends Component {


  render () {
    const i = {
      a :{
          fontSize: "fontSizeLg",
          color: "clear",
          width: "buttonWidthLg"
        },
      b :{
          fontSize: "fontSizeMd",
          color: "blue",
          width: "buttonWidthMd"
        },
      c :{
          fontSize: "fontSizeSm",
          color: "green",
          width: "buttonWidthSm"
        },
      d : {
          background: 'backgroundLightBlue'
        },
      e : {
          background: 'backgroundLightGreen'
      },
      f : {
          background: 'backgroundLightGreen',
          color: "green",
          width: "buttonWidthSm"
      },
      g : {
          margin: 'marginLg'
      },
      h : {
        webContainer: 'webContainer',
        navPosition: 'navPositionTop'
      },
      i : {
        mainContainer : 'mainContainer'
      },
      j : {
        subContainer: 'subContainer'
      }
    };


// when the navSidebarPosition={"left"} on the NavBar 
    return (
      <Main typeContainer="main"> 
          <NavBar design={i.f} navSidebarPosition="left">
            <Button design={i.a}>tests</Button>
            <Button design={i.a}>test</Button>
            <Button design={i.a}>test</Button>
          </NavBar>
          <Main typeContainer="sub">
            <Layout>
              <Panel>
                <Button design={i.a}>Test</Button>
                <Button design={i.b}>Test</Button>
              </Panel>   
              <Panel design={i.d}>
                <Button design={i.a}>Button</Button>
                <Button design={i.b}>Test</Button>
                <Button design={i.c}>Test</Button>
              </Panel>
              <Panel design={i.e}>
                <Button design={i.a}>Button</Button>
                <Button design={i.b}>Test</Button>
                <Button design={i.c}>Test</Button>
              </Panel>
              <Panel design={i.e}>
                <Button design={i.a}>Button</Button>
                <Button design={i.b}>Test</Button>
                <Button design={i.c}>Test</Button>
              </Panel>
              <Panel design={i.e}>
                <Button design={i.a}>Button</Button>
                <Button design={i.b}>Test</Button>
                <Button design={i.c}>Test</Button>
              </Panel>
            </Layout>
            <Layout>
              <Panel design={i.e}>
                  <Button design={i.a}>Button</Button>
                  <Button design={i.b}>Test</Button>
                  <Button design={i.c}>Test</Button>
                </Panel>
            </Layout>
            <Layout>
              <Panel design={i.e}>
                  <Button design={i.a}>Button</Button>
                  <Button design={i.b}>Test</Button>
                  <Button design={i.c}>Test</Button>
                </Panel>
            </Layout>
            <Layout>
              <Panel design={i.e}>
                  <Button design={i.a}>Button</Button>
                  <Button design={i.b}>Test</Button>
                  <Button design={i.c}>Test</Button>
                </Panel>
                <Panel design={i.e}>
                  <Button design={i.a}>Button</Button>
                  <Button design={i.b}>Test</Button>
                  <Button design={i.c}>Test</Button>
                </Panel>
            </Layout>
              <Layout footer={true}>
                <Panel>
                  <h1>Test</h1>
                </Panel>
              </Layout>
          </Main>
      </Main>
    )
  }
}
