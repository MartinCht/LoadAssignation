import { ColumnType } from "./column-types.model";
import { TagTypes } from "./tag-types.model";

export interface TableColumn<T> {
    columnDef: string;
    header: string;
    type: ColumnType;
    value?: (element: T) => string;
    multiValue?: (element: T) => string[];
    action?: (element: T) => void;
    tagType?: (element: T) => TagTypes;
}

const tableExample = [
    { columnDef: 'truckNumber', header: 'Equipo', type: 'value', value: () => '' },
    { columnDef: 'origin', header: 'Origen-Localidad', type: 'multiValue', multiValue: () => [] },
    { columnDef: 'tag', header: 'Tag', type: 'tag', tagType: () => 'info', value: (element: any) => element.tagText },
    { columnDef: 'action', header: 'Acciones', type: 'action', value: () => '', action: () => () => { } },
]