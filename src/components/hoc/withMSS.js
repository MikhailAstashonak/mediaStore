// Dependencies
import React from 'react';

// Context Consumer
import { MSSConsumer } from '../../utils/mss-context';

// Actual HOC
const withMSS = () => (Wrapped) => {
    return (...props) => {
        return (
            <MSSConsumer>
                {
                    (mss) => {
                        return <Wrapped {...props} mss={mss} />
                    }
                }
            </MSSConsumer>
        )
    }
}

export default withMSS;