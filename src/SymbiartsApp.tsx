import { Provider } from 'react-redux'
import { SymbiartsRouter } from './router/SymbiartsRouter'
import { store } from './store/store'

export const SymbiartsApp = () => {
  return (
    <Provider store={store}>
      <SymbiartsRouter />
    </Provider>
  )
}
