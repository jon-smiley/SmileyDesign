# Smiley Design

> This is a custom react library that allows you to create responsive components quickly.

[![NPM](https://img.shields.io/npm/v/smiley-design.svg)](https://www.npmjs.com/package/smiley-design) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save smiley-design
```

## Usage

```jsx
import React, { Component } from 'react'
import { Panel, NavBar, Layout, Main} from 'smiley-design'

export default class App extends Component {

  render () {
  // when the navSidebarPosition={"left"} on the NavBar 
    return (
      <Main typeContainer="main"> 
          <NavBar navSidebarPosition="left">
            <div>
              <button>test1</button>
            </div>
            <div>
              <button>test2</button>
            </div>
            <div>
              <button>test3</button>
            </div>
          </NavBar>
          <Main typeContainer="sub">
            <Layout>
                <Panel>
                  <div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </Panel>   
            </Layout>
          </Main>
      </Main>
    )
  }
}
```

## License

MIT © [jon-smiley](https://github.com/jon-smiley)