import './menu.scss'
import icon from '../../static/svg.svg?sprite';

export default () => (
    <div className="container main-menu">
        <svg viewBox={icon.viewBox}>
            <use xlinkHref="#svg--sprite_logo-veiss" />
        </svg>
    </div>
)