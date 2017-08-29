import * as React from 'react';
import '../styles/Hello.css';
interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
interface State {

}
export default class Hello extends React.Component<Props, State> {
    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }
    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        );
    }
}