import { useEffect, useState } from 'react'
import './App.css'
import { getNotifications } from './NotificationService'
import { Link } from 'react-router-dom'
import CreateNotification from './pages/CreateNotification'

function App() {

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    getNotifications()
    .then(data => setNotifications(data))
    .catch(err => console.error(err))
  })

  return (
    <>
      <div className="div-button-notification">
        <Link to="/create-notification" className="btn btn-primary">Agendar notificação</Link>
      </div>

      <div>
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Destino</th>
                      <th>Mensagem</th>
                      <th>Canal</th>
                      <th>Status</th>
                      <th>Horário de envio</th>
                  </tr>
              </thead>
              <tbody>
                   {notifications.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.destination}</td>
                    <td>{row.message}</td>
                    <td>{row.channel.description}</td>
                    <td>{row.status.description}</td>
                    <td>{row.dateTime}</td>
                  </tr>)} 
              </tbody>
          </table>
      </div>
    </>
  )
}

export default App
