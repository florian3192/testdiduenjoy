import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') name;
  @attr('boolean') checked;
  @attr('date') created_at;
}