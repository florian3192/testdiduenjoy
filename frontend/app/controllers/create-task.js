import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CreateTaskController extends Controller {
    @service store;

    constructor() {
        super()
        this.taskName = null
        this.actions = {
            save: function () {
                console.log(this.taskName)
                let task = this.store.createRecord('task', {
                    name: this.taskName,
                    checked: false,
                    date: new Date()
                  });

                  task.save()
                  this.redirect()
            }
        }
    }

    redirect() {
        this.transitionToRoute('index');
    }
}
