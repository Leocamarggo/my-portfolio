/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_IN_MAINTENACE: string
    }
  }
}

export {}
