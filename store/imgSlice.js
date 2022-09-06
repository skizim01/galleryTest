import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchImgs = createAsyncThunk(
  'imgSlice/fetchImgs',
  async function (_, {rejectWithValue}) {
    try {
      const res = await fetch(
        'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      );

      const data = await res.json();
    
      if (!res.ok) {
        const error  = data.errors[0]
        throw new Error(error);
      } else return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const imgSlice = createSlice({
  name: 'imgSlice',
  initialState: {
    isLoading: true,
    sucsess: true,
    imgData: [{id: '', small: '', largeImg: '', user: ''}],
    error: '',
  },
  reducers: {
    addData(state, action) {
      console.log(action.payload[0].id);
    },
  },
  extraReducers: {
    [fetchImgs.pending]: state => {
      state.error = '';
      state.isLoading = true;
    },
    [fetchImgs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sucsess = true;
      state.imgData = action.payload.map(e => ({
        id: e.id,
        small: e.urls.small,
        largeImg: e.urls.full,
        user: e.user.username,
      }));
    },
    [fetchImgs.rejected]: (state, action) => {
      state.isLoading = false;
      state.sucsess = false;
      state.error = action.payload;
      console.log(action)
    },
  },
});

export const {addData} = imgSlice.actions;
export default imgSlice.reducer;
