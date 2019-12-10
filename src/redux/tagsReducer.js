
const initialState = {
    loading: false,
    tagResults: [],
    clickedTags: false
}

const UPDATE_TAGS_STATE = 'UPDATE_TAGS_STATE';
const CLOSE_TAGS = 'CLOSE_TAGS';
const OPEN_TAGS = 'OPEN_TAGS';

export const updateTagsState = e => {
    return {
        type: UPDATE_TAGS_STATE,
        payload: e
    }
}

export const handleOpenTags = () => {
    return {
        type: OPEN_TAGS
    }
}

export const handleCloseTags = () => {
    return {
        type: CLOSE_TAGS
    }
}

export default function tagsReducer(state=initialState, action) {
    const { payload, type } = action;

    switch(type) {
        case UPDATE_TAGS_STATE:
            return {...state, ...payload};
        case OPEN_TAGS:
            return {...state, clickedTags: true}
        case CLOSE_TAGS:
            return {...state, clickedTags: false}

        default:
            return state;
    }
}