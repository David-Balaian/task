import { useState, useEffect, useRef } from 'react';


export default function useVirtualization(rows, rowsCountAsync) {
    
    const [visibleRows, setVisibleRows] = useState(10);
    const rowHeight = 100;
    const offsetBuffer = rowsCountAsync === visibleRows ? 0 : Math.min(10, rowsCountAsync - visibleRows);

    const [showing, setShowing] = useState({
        startIndex: 0,
        endIndex: visibleRows,
    });


    const containerRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        if(rowsCountAsync < 100) {
            setVisibleRows(rowsCountAsync);
        }
    }, [containerRef, rowsCountAsync]);

    const handleContScroll = () => {
        if(visibleRows === rowsCountAsync) {
            setShowing({
                startIndex: 0,
                endIndex: rowsCountAsync,
            });
            return
        }
        const containerScrollTop = containerRef.current.scrollTop;
        let index = (containerScrollTop * offsetBuffer) / (rowHeight * offsetBuffer);
        if (index < offsetBuffer) index = offsetBuffer;
        setShowing({
            startIndex: Math.round(Math.min(rowsCountAsync - offsetBuffer - visibleRows,  index - offsetBuffer)),
            endIndex: Math.round(Math.min(rowsCountAsync, index + offsetBuffer + visibleRows)),
        });
    };

    const wrapperStyle = {
        height: rows.length * rowHeight,
        paddingTop: rowHeight * showing.startIndex,
    };

    return {
        containerRef,
        handleContScroll,
        wrapperRef,
        wrapperStyle,
        showing, 
        rowHeight,
    }
}