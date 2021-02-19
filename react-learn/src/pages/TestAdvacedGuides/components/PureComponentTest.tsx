import React from 'react'

interface ListOfWordsProps {
    words: string[];
    deepObj: {
        ddObj: {
            a: string;
        }
    }
}
class ListOfWords extends React.PureComponent<ListOfWordsProps> {
    render() {
        return <div>{this.props.words.join(',')}{this.props.deepObj.ddObj.a}</div>;
    }
}

interface WordAdderProps {
    
}

interface WordAdderState {
    words: string[],
    deepObj: {
        ddObj: {
            a: string;
        }
    }
}

export default class WordAdder extends React.Component<WordAdderProps, WordAdderState> {
    constructor(props: WordAdderProps) {
        super(props);
        this.state = {
            words: ['marklar'],
            deepObj: {
                ddObj: {
                    a: "hello",
                }
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 这部分代码很糟，而且还有 bug
        const words = this.state.words;
        this.setState({ words: [...words, 'aaaa'] });
        this.setState({
            deepObj: {
                ...this.state.deepObj,
                ddObj: {
                    a: "000"
                }
            }
            
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>添加单词</button>
                <ListOfWords words={this.state.words} deepObj={this.state.deepObj}/>
            </div>
        );
    }
}