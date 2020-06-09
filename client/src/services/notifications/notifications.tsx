import { store, ReactNotificationOptions } from 'react-notifications-component';

export const addNotification = (message: string, type: ReactNotificationOptions['type']) => {
    store.addNotification(
        {
          message,
          type,
          container: 'top-right',
          dismiss: {
            duration: 2000,
            pauseOnHover: true,
            showIcon: true,
          }
        }
      )
}