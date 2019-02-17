import './menu.scss'
import icon from '../../svg/logo-veiss.svg?sprite';

export default () => (
    <div className="container main-menu">
        <svg>
            <use xlinkHref={`#${icon.id}`} />
        </svg>
    </div>
)