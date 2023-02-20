import ReactDom from 'react-dom';

import classes from './Model.module.css';

const BackDrop = props => {
    return(
        <div className={classes.backdrop}></div>
    )
}

const ModelOverlay = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')
const Model = props => {
    return(
        <>
        {ReactDom.createPortal(<BackDrop/>, portalElement)}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </>
    )

}

export default Model;