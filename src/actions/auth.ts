import { types } from '../types/types'
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch'
import Swal from 'sweetalert2'

export const startLogin = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetchWithoutToken(
      'auth',
      { email, password },
      'POST'
    )
    const body = await response.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime().toString())

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      )
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startRegister = (email: string, name: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetchWithoutToken(
      'auth/new',
      { email, name, password },
      'POST'
    )
    const body = await response.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime().toString())

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      )
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startChecking = () => {
  return async (dispatch: any) => {
    const response = await fetchWithToken('auth/renew')
    const body = await response.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime().toString())

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      )
    } else {
      dispatch(checkingFinish())
    }
  }
}

const login = (user: {uid: string, name: string}) => ({
  type: types.authLogin,
  payload: user,
})

const checkingFinish = () => ({
  type: types.authCheckingFinish,
})

export const startLogout = () => {
  return (dispatch: any) => {
    localStorage.clear()
    dispatch(eventLogout())
    dispatch(logout())
  }
}

const logout = () => ({ type: types.authLogout })

const eventLogout = () => ({
  type: types.eventLogout,
})
