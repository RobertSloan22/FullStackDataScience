import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://localhost:5001/api'

export const userLogin = createAsyncThunk(
    'auth/login',   
    async({ userName, password }, { rejectWithValue }) => {
        try {
        // configure header;s content-type as json 
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            `${backendURL}/auth/login`,
            { userName, password },
            config
        )

        //store users token in local storage
        localStorage.setItem('userToken', data.userToken)

        return data
        } catch (error) {
        // return custom error message from API if any 
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
    }
)

export const registerUser = createAsyncThunk(
    'user/register',
    async({ userName, password }, { rejectWithValue }) => {
        try {
            // configure header;s content-type as json 
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                `${backendURL}/auth/register`,
                { userName, password },
                config
            )

            //store users token in local storage
            localStorage.setItem('userToken', data.userToken)

            return data
        } catch (error) {
            // return custom error message from API if any 
            if (error.response && error.response.data.error_message) {
                return rejectWithValue(error.response.data.error.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
