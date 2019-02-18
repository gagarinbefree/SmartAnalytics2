import * as React from 'react';
import Sticky from './components/sticky/sticky';
import './site.css';

export default class BeltStockApp extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <div>
            <Sticky />
        </div>
    }
}