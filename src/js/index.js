import TinyReact from './tiny-react';

const rootElement = document.getElementById('root');

class App extends TinyReact.Component {
    constructor(props) {
        super(props);

        this.state = {
            coolLinks: [
                { url: 'https://reactjs.org/', title: 'React JS', likes: 0 },
                { url: 'https://redux.js.org/', title: 'Redux', likes: 0 },
                { url: 'https://babeljs.io/', title: 'Babel JS', likes: 0 },
                { url: 'https://reacttraining.com/react-router/', title: 'React Router', likes: 0 },
                { url: 'https://github.com/', title: 'Github', likes: 0 },
            ],
        };
    }

    handleLikeClick(link) {
        const newCoolLinks = this.state.coolLinks.slice();
        const index = newCoolLinks.indexOf(link);

        newCoolLinks[index] = Object.assign({}, link, { likes: link.likes + 1 });

        this.setState({ coolLinks: newCoolLinks });
    }

    handleRemoveLastClick() {
        const { coolLinks } = this.state;

        this.setState({
            coolLinks: coolLinks.slice(0, coolLinks.length - 1),
        });
    }

    render() {
        const { className } = this.props;
        const { coolLinks } = this.state;

        return (
            <main className={className}>
                <h1 className="main-title">Cool Links</h1>
                <ul>
                    {coolLinks.map(link => (
                        <li>
                            <button onClick={() => this.handleLikeClick(link)} title="Likes">
                                {`\u2764 ${link.likes}`}
                            </button>
                            {' '}
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => this.handleRemoveLastClick()}>
                    Remove last
                </button>
            </main>
        )
    }
}

TinyReact.render(<App className="container" />, rootElement);
