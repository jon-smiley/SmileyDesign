# Smiley Design
This library provides a simple way to have responsive containers available to quickly build web layouts. 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![npm version](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://npmjs.org/package/REPO "View this project on npm")

## Install

```bash
npm install --save smiley-design
```
### Layout and Panel
-----------------------------------
A Container for the Panel component. This component allows multiple Panel components to stay in one container. A Layout holds Panels inline with each other.
```jsx
import React, { Component } from 'react'
import { Main, Layout, Panel } from 'smiley-design'

export default class App extends Component {

  render () {
    return (
        <Main typeContainer="main"> 
           <Main typeContainer="sub">
                <Layout>
                    <Panel>
                        Any content in here will be contained in the Panel.
                    </Panel>
                    <Panel>
                        You can add multiple panels within a layout and they will be side by sibe by side.
                    </Panel>
                </Layout>
            </Main>
        </Main>
    )
}
```
### NavBar
-----------------------------------
The NavBar element is a container that renders next to the main content on the page. The user either has the option of having the Navbar on the side navSidebarPosition="left". The default option will render the bar at the top of the page.
```jsx
import React, { Component } from 'react'
import { Main, NavBar } from 'smiley-design'

export default class App extends Component {

  render () {
    return (
        <Main typeContainer="main"> 
           <NavBar navSidebarPosition="left">
                Navigation buttons would go in here.
          </NavBar>
        </Main>
    )
}
```

### Footer
-----------------------------------
Footer is the Layout component with a prop passing in footer={true}. The footer will fill the bottom of the window.
```jsx
import React, { Component } from 'react'
import { Main, Layout } from 'smiley-design'

export default class App extends Component {

  render () {
    return (
        <Main typeContainer="main"> 
            <Layout footer={true}>
                Content goes here.
            </Layout>
        </Main>
    )
}
```
### Main
-----------------------------------
There are two types of Main containers, one to house the entire application and one for bigger sections of the webpage. Inorder for the page to be responsive you will need to add a Main container to the outside of the project with the prop of typeContainer="main" and every other Main container having a prop of typeContainer="sub".

### Todos
-----------------------------------
 - Add design features and more web templates.

## License
-----------------------------------
MIT © [jon-smiley](https://github.com/jon-smiley)
