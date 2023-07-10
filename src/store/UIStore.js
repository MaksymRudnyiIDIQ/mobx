import {  makeAutoObservable } from 'mobx'


export default  class UIStore {
  locale =  'uk'

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
