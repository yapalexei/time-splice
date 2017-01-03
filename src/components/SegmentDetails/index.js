/**
 * Created by afront on 12/28/16.
 */

import React, {
    Component,
    PropTypes
} from 'react';
import styles from './SegmentDetails.scss';

export class SegmentDetails extends Component {
    static propTypes = {
        data: PropTypes.shape({
            s: PropTypes.instanceOf(Date),
            e: PropTypes.instanceOf(Date),
            label: PropTypes.string,
            bgColor: PropTypes.string,
            fontColor: PropTypes.string,
        }).isRequired,
        closeHandler: PropTypes.func
    };

    static defaultProps = {
        closeHandler: () => {}
    };

    render () {
        const { closeHandler } = this.props;
        const { s, e, label, desc } = this.props.data;
        return (
            <div className="segment-details">
                <h1 className="header">{ label }</h1>
                <p className="body">
                    Start Time: {s.toLocaleString()} <br/>
                    End Time: {e.toLocaleString()} <br/><br/>
                    {desc}
                </p>
                <div onClick={closeHandler.bind(null)} className="close">x</div>
            </div>
        );
    }
}
