/**
 * Created by afront on 12/21/16
 */

import React, {
    Component,
    PropTypes
} from 'react';
import cn from 'classnames';
import { SegmentDetails } from '../SegmentDetails';
import styles from './Segment.scss';

export class Segment extends Component {
    static propTypes = {
        defaultLabel: PropTypes.string,
        style: PropTypes.object,
        data: PropTypes.shape({
            s: PropTypes.instanceOf(Date),
            e: PropTypes.instanceOf(Date),
            label: PropTypes.string,
            bgColor: PropTypes.string,
            fontColor: PropTypes.string,
        }).isRequired
    };

    static defaultProps = {
        defaultLabel: 'no label',
        style: {},
        data: {},
        onClick: () => {}
    };

    constructor(props) {
        super(props);
        this.state = { isDetailShown: false };
    }

    clickHandler (proxy, event) {
        const { isDetailShown } = this.state;
        this.setState({isDetailShown: !isDetailShown});
    }

    closeHandler () {
        this.setState({isDetailShown: false});
    }

    renderDetails (details) {
        return (
            <SegmentDetails data={details} closeHandler={this.closeHandler.bind(this)}></SegmentDetails>
        )
    }

    render () {
        const { defaultLabel: label, data, style, className, onClick } = this.props;
        const { label: nLabel } = data && data.label ? data : { label };
        const { isDetailShown } = this.state;
        const classNames = cn(className, 'segment', isDetailShown ? 'open' : '');
        const arrowClass = cn('container');
        return (
            <div onClick={(event) => {event.stopPropagation()}} className={arrowClass}>
                <div onClick={onClick.bind(null, data)} className={classNames} style={style}>
                    <span>{nLabel}</span>
                </div>
            </div>
        );
    }
}
