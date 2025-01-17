 # Get Started
- install dependencies per operating system
- install ESLint depending on code editor
- generate react project
- get coding 

# Dependency 
- XCode
    - package our code and run app on the iOS simulator
- HomeBrew
    - used to install node
- Node/NPM
    - node runs JS outside of the browser; npm used for installing and managing dependencies
- Watchman
    - watches files on the hard drive and waits for them to change
- RN CLI
    - react native command line interface, used to generate new react native projects

# Init Project
 - react-native init appName
 - react-native run-ios

 # Notes
 - React 
    - knows how a component should behave
    - knows how to take a bunch of components and make them work together

- React Native
    - knows how to take a output from a component and place it on screen
    - provides default core components (image, text)

- Only the 'root' component use 'AppRegistry'

- alignItems move left and right, justifyContent move up and down

- functional component
    - used for presenting static data
    - cant fetch data
    ```
    const Header = () => {
        return <Text>Hi</Text>
    }
    ```

- class component
    - used for dynamic sources of data
    - handles data changes, user event
    - knows when it gets rendered
    ```
    class Header extends Component {
        render() {
            return <Text>Hi<Text>
        }
    }
    ```

- Timeline of react-native
    - react native boots up
    - RN decides to render 'app' to the screen
    - App decides to render itself, Header, and Album List
        - Albums List get initial state of { albums: [] }
    - AlbumList realizes its about to be rendered, calls componentWillMount
    - AlbumList makes HTTP request
        - AlbumList render method is called
    - App, AlbumList, Header appear on screen
    - waiting request complete
    - HTTP request returns JSON data
        - Request handler calls 'setState'
        - AlbumList render method is called

- Component State
    - state is how react handles changing the content that is shown on the screen
    - totally contain three steps
        - setting up some default state for components
        - after fetch data and update component data

- Rules of State
    - State stands for a plain javascript object used to record and respond to user-triggered events
    - when we need to update what a component shows, call 'this.setState'
    - only cahnge state with 'setState', do not do 'this.state = blablabla'
    - only use states with class based component

- Whenever we want to communicate from a parent component to a child component we use props; state is for internal recordkeeping, we use state whenever we want to update some amount of data


