import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TaskDetailsComponent extends Component {
    @service store;

    @action check(task) {
        console.log("checked", task)
        task.checked = !task.checked
        task.save()
    }

    @action delete(task) {
        console.log("delete", task)
        task.destroyRecord();
    }
}