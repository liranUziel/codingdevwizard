import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function Skatch({ sketch }) {
    const wrapperRef = useRef();
    useEffect(() => {
        const p5Instance = new window.p5(sketch, wrapperRef.current);
        return () => {
        p5Instance.remove();
        };
    }, [sketch]);
    return (
       <div ref={wrapperRef}>

       </div>
    );
}
Skatch.propTypes = {
    sketch: PropTypes.func
};

export default Skatch


