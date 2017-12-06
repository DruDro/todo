
import './msg.scss';
export const Msg = (props) => (
    <mark className={`msg ${props.type}`}>{ props.msg }</mark>
);