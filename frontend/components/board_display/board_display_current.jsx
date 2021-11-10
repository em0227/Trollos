import React from "react";
import BoardRightSideBar from "./board_right_side_bar";
import ListIndexContainer from "../lists/lists_index_container";

class BoardDisplayCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
    };
  }

  componentDidMount() {
    console.log("in display did mount");
    // this.props.fetchAllLists(this.props.board.id);
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  componentDidUpdate(prevProps) {
    console.log("in display did update");
    if (prevProps.board !== this.props.board) {
      const { id, title } = this.props.board;
      this.setState({
        id,
        title,
      });
    }
  }

  submitUpdate(e) {
    e.preventDefault();
    if (this.props.board && this.props.board.title !== this.state.title) {
      this.props.updateBoard(this.state);
    }
  }

  updateBoardTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    if (!this.props.board) return null;
    const { bg_color, photo } = this.props.board;
    const background = photo
      ? { backgroundImage: `url(${photo})` }
      : { backgroundColor: bg_color };

    return (
      <div id="show-single-board" style={background}>
        <div className="display-menu">
          <p>
            On{" "}
            <input
              type="text"
              id="board-title-input"
              value={this.state.title}
              placeholder={this.state.title}
              onChange={this.updateBoardTitle.bind(this)}
              onBlur={this.submitUpdate.bind(this)}
            />
          </p>

          <BoardRightSideBar
            board={this.props.board}
            updateBoard={this.props.updateBoard}
            deleteBoard={this.props.deleteBoard}
            history={this.props.history}
          />
        </div>

        <ListIndexContainer board={this.props.board} />
      </div>
    );
  }
}

export default BoardDisplayCurrent;
