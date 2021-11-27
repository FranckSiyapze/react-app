// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Tooltip extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Write your code here
        return <div>{this.props.text}</div>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onClickButton = (text) => {
        this.setState({
            text: text
        })
    }

    onDocumentClick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            this.setState({text: event.target.textContent})
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocumentClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocumentClick)
    }

    render() {
        return <div>
            {this.props.children}
            <Tooltip text={this.state.text}/>
        </div>
    }
}

document.body.innerHTML = "<div id='root'></div><Tooltip text={this.state.text}/>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App>
    <button id="button1" onClick={this.onClickButton(document.getElementById("button1").value)}>First button</button>
    <button id="button2">Second button</button>
</App>, rootElement);
document.getElementById("button2").click();
setTimeout(() => console.log(document.body.innerHTML));