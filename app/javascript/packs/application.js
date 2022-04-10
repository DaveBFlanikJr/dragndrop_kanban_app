// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"
import { initKanbanSortable } from "../plugins/initSortable"

// in order to link the initKanbanSortable
document.addEventListener('turbolinks:load', () => { // listen for the load
  const kanbanUls = document.querySelectorAll(".kanban .kanban-col"); // create new function then select the CSS elemetns
    if (kanbanUls) { // if true the initKanbanSortable will be called
      initKanbanSortable(kanbanUls);
    }
});
