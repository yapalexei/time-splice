/**
 * Created by afront on 12/28/16.
 */

import React, {
    Component,
    PropTypes
} from 'react';
import cn from 'classnames';

import styles from './SegmentDetails.scss';

const refs = [];

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

    constructor (props) {
        super(props);
        const { closeHandler } = props;
        this.state = {
            closeHandler: closeHandler ? closeHandler : () => {},
            collapsed: false
        };
    }

    componentDidMount () {
        setTimeout(() => {
            const height = refs.length ? refs[0].clientHeight : 0;
            this.setState({ height });
        }, 10);
    }

    closeHandler (proxy, event) {
        const { closeHandler, contentRef } = this.state;
        closeHandler(proxy, event);
        this.setState({
            collapsed: true,
            height: 0
        });
    }

    setRef (ref) {
        if (ref) refs.push(ref);
    }

    render () {
        const { data: { s, e, label, desc } } = this.props;
        const { height, collapsed } = this.state;
        refs.length = 0;
        const style = {
            height: height+'px'
        };
        const classNames = cn('segment-details', collapsed ? 'collapsed' : '');
        return (
            <div className={classNames} style={style}>
                <div ref={this.setRef.bind(this)} className="content">
                    <h1 className="header">{label}</h1>
                    <p className="body">
                        Start Time: {s.toLocaleString()} <br/>
                        End Time: {e.toLocaleString()} <br/><br/>
                        {desc}
                    </p>
                </div>
                <div onClick={this.closeHandler.bind(this)} className="close">x</div>
            </div>
        );
    }
}
