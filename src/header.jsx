import { observer } from 'mobx-react-lite'
import store from './store';

export const Header = observer(() => {
  return (
    <h1>Completed: {store.business.countOfCompleted}</h1>
  )
})