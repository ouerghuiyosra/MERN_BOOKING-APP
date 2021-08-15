import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteAlert } from '../Redux/Actions/alert';
const Alert = ({ alerts }) => {
  const dispatch = useDispatch();
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);


  return alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      <button
        type='button'
        class='close'
        data-dismiss='alert'
        aria-hidden='true'
        onClick={() => dispatch(deleteAlert({ id: alert.id }))}
      >
        ×
      </button>
      <span>{alert.msg}</span>
    </div>
  ));
};

export default Alert;