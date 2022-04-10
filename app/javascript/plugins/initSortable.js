import Sortable from 'sortablejs';

const initKanbanSortable = (ulElements) => {
  ulElements.forEach(ul => {
    new Sortable(ul, {
      group: 'kanban', // Set both the ul (lists) to the same group
      animation: 300
    });
  });
};

export { initKanbanSortable};
