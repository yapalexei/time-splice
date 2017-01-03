/**
 * Created by afront on 12/21/16
 */

import React, {
    Component,
    PropTypes
} from 'react';
import cn from 'classnames';

import { Track } from '../Track';
import { SegmentDetails } from '../SegmentDetails';
import styles from './TimeSplice.scss';

const trackRefs = [];

export class TimeSplice extends Component {
    static propTypes = {
        className: PropTypes.string,
        startRange: PropTypes.instanceOf(Date).isRequired,
        endRange: PropTypes.instanceOf(Date).isRequired,
        tracks: PropTypes.array
    };

    static defaultProps = {
        className: 'time-splice',
        tracks: []
    };

    constructor (props) {
        super(props);
        this.state = {
            expanded: false,
            showDetails: false,
            height: 30
        };
    }

    componentDidMount () {
        setTimeout(() => {
            debugger;
            const refs = trackRefs;
            const height = refs.length ? refs[0].clientHeight : 30;
            this.setState({ height });
        }, 10);
    }

    expandClickHandler () {
        const { expanded } = this.state;
        if (!expanded) this.setState({ expanded: true });
    }

    showDetails (data) {
        this.setState({
            showDetails: true,
            details: data
        });
    }

    collapseClickHandler () {
        this.setState({ expanded: false });
    }

    renderCloseBtn() {
        return (
            <div className="close" onClick={this.collapseClickHandler.bind(this)}>x</div>
        )
    }

    renderDetails (details) {
        return (
            <SegmentDetails data={details} closeHandler={this.closeDetails.bind(this)}></SegmentDetails>
        )
    }

    closeDetails () {
        this.setState({
            showDetails: false,
            details: null
        })
    }

    trackCB (ref) {
        trackRefs.push(ref);
    }

    static posFromTop (index, count) {

    }

    render () {
        const { className, tracks, startRange, endRange } = this.props;
        const { expanded, showDetails, details, height } = this.state;
        const classes = cn(className, expanded ? 'expanded' : null);
        const range = { startRange, endRange };
        const tracksLength = tracks.length;
        const style = {
            height: expanded ? tracksLength * height : height
        };
        trackRefs.length = 0;

        return (
            <div className={classes} style={style} onClick={this.expandClickHandler.bind(this)}>
                {
                    tracks.map((item, i) => {

                        const style = {
                            top: expanded ? i * height : 0
                        };

                        return (
                            <Track
                                style={style}
                                refCB={this.trackCB}
                                key={i}
                                onClick={this.showDetails.bind(this)}
                                range={range}
                                data={item}></Track>
                        )
                    })
                }
                {
                    expanded ? this.renderCloseBtn() : null
                }
                {
                    showDetails ? this.renderDetails(details) : null
                }
            </div>
        );
    }
}
