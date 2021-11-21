import React from 'react';
import "./board.css"

export default class Board extends React.Component {
    render() {
        let board = [];
        const rows = ["1", "2", "3", "4", "5", "6", "7", "8"];
        const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

        for (let i = 0; i < cols.length; i++) {
            for (let j = rows.length; j > 0; j--) {
                if ((i + j) % 2 === 0) {
                    board.push(<div className="square light">{cols[i] + rows[j - 1] + ""}</div>);
                } else {
                    board.push(<div className="square dark">{cols[i] + rows[j - 1] + ""}</div>);
                }

            }
        }

        return <div id="board">{board}</div>;
    }
}