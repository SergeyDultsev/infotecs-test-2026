import style from './TableDefault.module.scss';
import { useResizeColumns } from '@shared/ui/ui-table/utils/useResizeColumns.js';
import { observer } from 'mobx-react-lite';

export const TableDefault = observer((
    {
        columns,
        data,
        onClick,
    }) =>
{
    const { columnWidths, handleMouseDown } = useResizeColumns();

    return (
        <div className={style['table-wrapper']}>
            <table className={style.table}>
                <thead className={style['table__head']}>
                <tr>
                    {columns.map((col, idx) => (
                        <th
                            key={col.key}
                            className={style['table__header']}
                            style={{ width: columnWidths[idx] }}
                        >
                            {col.label}
                            <div
                                className={style['resize-handle']}
                                onMouseDown={handleMouseDown(idx)}
                            />
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className={style['table__body']}>
                {data.map((item) => (
                    <tr
                        key={item.id}
                        className={style['table__row']}
                    >
                        {columns.map((col, index) => (
                            <td
                                key={col.key}
                                className={style['table__cell']}
                                style={{ width: columnWidths[index] }}
                                onClick={() => onClick(item)}
                            >
                                {col.render(item)}
                                <div
                                    className={style['resize-handle']}
                                    onMouseDown={handleMouseDown(index)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
});