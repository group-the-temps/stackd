import React, {Component} from 'react';
import './SelectedQuestion.css';
import { getSelectedQuestion } from '../../redux/questionsReducer';
import { connect } from 'react-redux';


class SelectedQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.getSelectedQuestion(this.props.selectedQuestionID)
    }

    render() {
        console.log(this.props.selectedQuestionID);
        console.log(this.props.selectedQuestion);
        return (
            <div>
                Selected Question
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        selectedQuestionID: reduxState.questionsReducer.selectedQuestionID,
        selectedQuestion: reduxState.questionsReducer.selectedQuestion
    }
}

export default connect(mapStateToProps, { getSelectedQuestion })(SelectedQuestion);