require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Track } from './Track';
import { Segment } from './Segment';
import { TimeSplice } from './TimeSplice';

class AppComponent extends React.Component {
    render () {
        const startRange = new Date(2017,0);
        const endRange = new Date(2017,2);
        const range = {startRange, endRange};

        const tracks = [
            {
                s: new Date(2017, 0, 1),
                e: new Date(2017, 0, 20),
                label: 'label 1 and a really looooooooooooonnnnnng Description',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula quam quis facilisis blandit. Fusce elementum risus quis congue pharetra. Donec odio lectus, posuere quis hendrerit ut, posuere at nisi. Nullam luctus felis ut laoreet lacinia. Phasellus urna odio, venenatis facilisis dui at, placerat maximus odio. Etiam ut arcu risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam aliquet metus at dolor volutpat commodo. Proin laoreet dui id iaculis condimentum.'
                //bgColor: '#222',
                //fontColor: 'white',
            },
            {
                s:         new Date(2017, 0, 15),
                e:         new Date(2017, 1, 9),
                label:     'label 2',
                bgColor:   '#c5ddb8',
                fontColor: 'black'
            },
            {
                s:       new Date(2017, 1, 10),
                e:       new Date(2017, 1, 25),
                label:   'label 3',
                desc: 'Fusce id odio in ipsum vestibulum rutrum. Donec ac laoreet arcu. Vestibulum congue tristique sem, in pulvinar lectus vulputate vel. Fusce tincidunt nibh ac orci faucibus dapibus. Vestibulum non faucibus tellus. Vestibulum ac vulputate turpis, ac bibendum ante. Aliquam sem ex, pharetra et odio ac, fermentum eleifend nunc. Curabitur ullamcorper non dolor id ultricies.',
                bgColor: '#ddd897',
                //fontColor: 'white'
            },
            {
                s:       new Date(2017, 1, 1),
                e:       new Date(2017, 1, 15),
                label:   'label 4',
                bgColor: '#dda8a9',
                //fontColor: 'white'
            },
            {
                s:         new Date(2017, 0, 19),
                e:         new Date(2017, 1, 19),
                label:     'label 2',
                bgColor:   '#c5ddb8',
                fontColor: 'black'
            },
            {
                s:       new Date(2017, 1, 12),
                e:       new Date(2017, 1, 20),
                label:   'label 3',
                bgColor: '#ddd897',
                //fontColor: 'white'
            },
            {
                s: new Date(2017, 0, 4),
                e: new Date(2017, 0, 23),
                label: 'label 1 and a really looooooooooooonnnnnng Description',
                //bgColor: '#222',
                //fontColor: 'white',
            },
            {
                s:       new Date(2017, 1, 1),
                e:       new Date(2017, 1, 15),
                label:   'label 4',
                bgColor: '#dda8a9',
                //fontColor: 'white'
            }
        ];

        return (
            <div className="index">
                <h2>TimeSplice</h2>
                <TimeSplice
                    startRange={startRange}
                    endRange={endRange}
                    tracks={tracks}
                    />
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
