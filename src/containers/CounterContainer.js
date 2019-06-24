import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';

class CounterContainer extends Component {

    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;

        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = (state) => ({
    number: state.counter.number
});

// props 값으로 넣어줄 action 함수들을 정의
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
})

// 컴포넌트를 리덕스와 연동할 때에는 connect 를 사용
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됨

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);