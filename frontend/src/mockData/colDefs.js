import ClickableButtonsRenderer from '../components/shared/renderers/ClickableButtonsRenderer';
export const MealsListColumns = [{
    headerName: 'Model',
    colId: 'model_name',
    field: 'model_name',
    resizable: true,

}, {
    headerName: 'Color',
    colId: 'meal_color',
    field: 'meal_color',
    width: 80,
    resizable: true
},

{
    headerName: 'Location',
    colId: 'location',
    field: 'location',
    width: 150,
    resizable: true
},
{
    headerName: 'Rating',
    colId: 'rating',
    field: 'rating',
    width: 130,
    resizable: true,
    cellRendererFramework: ClickableButtonsRenderer
},
{
    headerName: 'Availability',
    colId: 'isAvailable',
    field: 'isAvailable',
    width: 80,
    resizable: true,
    cellRendererFramework: ClickableButtonsRenderer
},
{
    headerName: 'Actions',
    colId: 'actions',
    field: 'actions',
    width: 200,
    resizable: true,
    cellRendererFramework: ClickableButtonsRenderer
},
];