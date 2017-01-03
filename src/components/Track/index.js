/**
 * Created by afront on 12/21/16
 */

import React, {
    Component,
    PropTypes
} from 'react';
import cn from 'classnames';

import { Segment } from '../Segment';
import styles from './Track.scss';

export class Track extends Component {
    static propTypes = {
        className: PropTypes.string,
        range: PropTypes.shape({
            startRange: PropTypes.instanceOf(Date).isRequired,
            endRange: PropTypes.instanceOf(Date).isRequired,
        }).isRequired,
        data: PropTypes.shape({
            s: PropTypes.instanceOf(Date),
            e: PropTypes.instanceOf(Date),
            label: PropTypes.string,
            bgColor: PropTypes.string,
            fontColor: PropTypes.string,
        }).isRequired,
        refCB: PropTypes.func,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        onClick: () => {},
        refCB: () => {},
        style: {}
    };

    render () {
        const { className, range, data, onClick, refCB, style: contStyle } = this.props;
        const { bgColor, fontColor } = data;

        const { startRange, endRange } = range;
        const { s, e } = data;
        const rangeDif = endRange - startRange;
        const segmentStartTime = ((s - startRange) / (rangeDif)) * 100;
        const segmentEndTime = ((e - startRange) / (rangeDif)) * 100;

        const classes = cn(className, 'track');
        const label = data ? data.label : undefined;
        const style = {
            marginLeft: segmentStartTime + '%',
            width: (segmentEndTime - segmentStartTime) + '%',
            backgroundColor: bgColor,
            color: fontColor,
        };

        return (
            <div ref={refCB} className="track-container" style={contStyle}>
                <Segment className={classes} onClick={onClick} style={style} data={data} defaultLabel="defaultLabel"/>
            </div>
        );
    }
}
