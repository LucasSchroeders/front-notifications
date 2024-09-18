import "./CreateNotification.css"
import { Link } from 'react-router-dom'
import { createNotification } from '../NotificationService'

function CreateNotification(){

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            'dateTime': e.target.dateTime.value + ':00',
            'destination': e.target.destination.value,
            'message': e.target.message.value,
            'channel': e.target.channel.value,
        }

        createNotification(data)
    }


    return (
        <div>
            <Link to="/" className="btn-voltar">Voltar</Link>
            <h3>Agendar Notificação</h3>
            <form className="form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label for="destination">Destino</label>
                    <input type="text" className="form-control" id="destination"/>
                </div>
                <div className="form-group">
                    <label for="message">Mensagem</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="channel">Canal</label>
                    <select className="form-control" id="channel">
                        <option value='SMS'>SMS</option>
                        <option value='EMAIL'>E-mail</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="dateTime">Horário de envio</label>
                    <input type='datetime-local' className="form-control" id='dateTime' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateNotification