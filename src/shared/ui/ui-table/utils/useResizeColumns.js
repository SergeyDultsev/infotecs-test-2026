import { useState } from 'react';
import { DEFAULT_WIDTHS_COLUMNS, MAX_COLUMN_WIDTH, MIN_COLUMN_WIDTH } from "@shared/ui/ui-table/model/table.config.js";

export const useResizeColumns = () => {
    const [columnWidths, setColumnWidths] = useState(DEFAULT_WIDTHS_COLUMNS);

    const handleMouseDown = (columnIndex) => (event) => {
        event.preventDefault();
        const x = event.clientX;
        const width = columnWidths[columnIndex];

        const handleMouseMove = (event) => {
            const newWidth = Math.min(
                MAX_COLUMN_WIDTH,
                Math.max(MIN_COLUMN_WIDTH, width + (event.clientX - x))
            );

            setColumnWidths((prevWidths) => {
                const newWidths = [...prevWidths];
                newWidths[columnIndex] = newWidth;
                return newWidths;
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return {
        columnWidths,
        handleMouseDown,
    };
};