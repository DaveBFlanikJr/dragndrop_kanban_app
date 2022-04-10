import Sortable from 'sortablejs';

const initKanbanSortable = (ulElements) => { // creating a function and passing ulElemetns as argument
  const saveKanbanBinded = saveKanban.bind(null, ulElements);
  ulElements.forEach(ul => { //we want to iterate over and select the individual UL elements
    new Sortable(ul, {
      group: 'kanban', // Set both the ul (lists) to the same group
      animation: 300
      onEnd: saveKanbanBinded
    });
  });
};

const kanbandForm = document.querySelector('.kanban-form-input');

const saveKanban = (ulElements) => {
  // build an object containing all the kanban IDs
  const kanbanIds = {"columns": []};
  ulElements.forEach(ul => {
    const itemIds = [];
    ul.querySelectorAll('.kanban-col-item')
      .forEach(item =>
  itemIds.push(Number.parseInt(item.dataset.itemId, 10)));
    kanbanIds.columns.push(
      {
        'id': Number.parseInt(ul.dataset.colId,10),
        'itemIds': itemIds
      }
    );
  });
  kanbandForm.value = JSON.stringify(kanbanIds);
}

export { initKanbanSortable};
