import { createAction, handleActions } from 'redux-actions';

// action type 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action 생성 함수
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줌
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// module 의 초기 상태 정의
const initialState = {
    number: 0
};

// handleActions 의 첫번째 파라미터는 action 을 처리하는 함수들로 이뤄진 객체
// 두번째 파라미터는 초기 상태
export default handleActions({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },
    // action 객체를 참조하지 않으니까 이렇게 생략 가능
    // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화
    [DECREMENT]: ({ number }) => ({ number: number - 1 }),
}, initialState);